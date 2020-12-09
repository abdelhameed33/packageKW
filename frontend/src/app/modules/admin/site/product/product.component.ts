import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { APP_URL } from 'src/app/common/constants/app.constants';
import { ProductService } from 'src/app/common/service/product.service';
import { Category } from '../model/category.model';
import { Product } from '../model/product.model';
import { CategoryService } from '../service/category.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  productForm = new FormGroup({
    productname: new FormControl(''),
    description: new FormControl(''),
    price: new FormControl(''),
    quantity: new FormControl(''),
    category: new FormControl('')
  });

  images: any[] = [];
  newProduct: Product = new Product();
  submitted = false;
  returnUrl?: string;
  error?: string;
  categories: Category[] = [];
  selectedFile!: File;
  APP_URL = APP_URL;
  mode = 'create';
  productId!: string | null;
 

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private categoryService: CategoryService,
    private router: Router,
    private activateRoure: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      productname: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
      quantity: ['', Validators.required],
      category: ['', Validators.required]
    });


    this.categoryService.get({
      type: 'sub'
    }).subscribe(res => {
      this.categories = res;
    });

    this.activateRoure.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('id')) {
        this.productId = paramMap.get('id');
        this.productService.getOne(this.productId).subscribe(res => {
          this.newProduct = res;
        });
        this.mode = 'edit';
      } else {
        this.mode = 'creaet';
      }
    });
  }



  onFileChanged(event: any): void {
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile);
    const uploadData = new FormData();
    uploadData.append('file', this.selectedFile, this.selectedFile.name);
    this.productService.imageUpload(uploadData).subscribe(res => {
      console.log(res);
      // tslint:disable-next-line: no-string-literal
      const imagePath = res['imagePath'];
      if (imagePath) {
        this.images.push(imagePath);
      }
    }, err => {
      console.log(err);
    });
  }

  removeImage(path: string): void {
    this.images = this.images.filter(str => str !== path);
    this.productService.removeImage(path).subscribe();
  }

  get form(): any {
    console.log(this.productForm.controls);
    return this.productForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    // stop here if form is invalid
    if (this.productForm.invalid) {
      return;
    }
    this.newProduct.images = this.images;
    console.log(this.newProduct);
    this.productService.save(this.newProduct, this.form.category.value).subscribe((res: Product) => {
      console.log(res);
      this.router.navigate(['products/', res.id]);
      this.error = '';
    }, error => {
      console.log(error);
    });

  }

}
