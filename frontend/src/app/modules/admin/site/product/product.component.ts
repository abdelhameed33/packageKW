import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
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

  newProduct: Product = new Product();
  submitted = false;
  returnUrl?: string;
  error?: string;
  categories: Category[] = [];
  selectedFile!: File;

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private categoryService: CategoryService
  ) { }

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      productname: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
      quantity: ['', Validators.required],
      category: ['', Validators.required]
    });

    this.categoryService.get().subscribe(res => {
      this.categories = res;
    });
  }



  onFileChanged(event: any): void {
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile);
    const uploadData = new FormData();
    uploadData.append('file', this.selectedFile, this.selectedFile.name);
    this.productService.imageUpload(uploadData).subscribe(res => {
      console.log(res);
    });
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
    console.log(this.newProduct);
    this.productService.save(this.newProduct, this.form.category.value).subscribe(res => {
      console.log(res);
      this.error = '';
    }, error => {
      console.log(error);
    });

  }

}
