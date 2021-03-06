import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { SERVER } from 'src/app/common/constants/app.constants';
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
  SERVER = SERVER;
  mode = 'create';
  productId!: string | null;
  productAttributes: Property[] = [];
  categoryId: any;
  multiValues = new Set<string>();
  multiVal = new Map<any, Set<string>>();

  typeOptions = [
    { value: 'single', text: 'Single value' },
    { value: 'multi', text: 'Multi value' },
    { value: 'image', text: 'Image' },
  ];

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
          // initialize Product values
          this.newProduct = res;
          this.productAttributes = this.getProductProps(this.newProduct.properties);
          this.categoryId = this.newProduct.category?.id;
          this.images = this.newProduct?.images.map(img => img.image_name);
          console.log(this.images);
        });
        this.mode = 'edit';
      } else {
        this.mode = 'create';
      }
    });
  }

  addValue(event, attrIndex): void {
    const value = event.target.value;
    console.log(value);
    if (value && value.trim().length > 0) {
      if (!this.multiVal.has(attrIndex)) {
        this.multiVal.set(attrIndex, new Set<string>());
      }
      const map = this.multiVal.get(attrIndex);
      event.target.value = '';
      map.add(value.trim());
      this.productAttributes[attrIndex].value = [...map];
    }
  }
  removeValue(val, attrIndex): void {
    const map = this.multiVal.get(attrIndex);
    map.delete(val);
    this.productAttributes[attrIndex].value = [...map];
  }
  getProductProps(object: any): [] {
    try {
      const props = JSON.parse(object);
      props.forEach((el, index) => {
        if (el.type === 'multi' && Array.isArray(el.value)) {
          this.multiVal.set(index, new Set(el.value));
        }
      });
      return props;
    } catch (e) { }
    return [];
  }

  addProperty(): void {
    console.log(this.productAttributes);
    this.productAttributes.push({
      key: '',
      type: 'single',
      value: ''

    });
  }

  deleteAttr(index: any): void {
    this.productAttributes.splice(index, 1);
  }

  onFileChanged(event: any): void {
    this.selectedFile = event.target.files[0];
    //  console.log(this.selectedFile);
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
    // console.log(this.productForm.controls);
    return this.productForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    // stop here if form is invalid
    if (this.productForm.invalid) {
      return;
    }
    this.newProduct.images = this.images;
    this.newProduct.properties = JSON.stringify(this.productAttributes);
    this.newProduct.price = parseFloat(this.newProduct.price + '');

    //  console.log(this.newProduct);
    this.productService.save(this.newProduct, this.form.category.value).subscribe((res: Product) => {
      console.log(res);
      this.router.navigate(['products/', res.id]);
      this.error = '';
    }, error => {
      console.log(error);
    });

  }

}

export class Property {
  public type = 'single';
  public key = '';
  public value: any = '';
}
