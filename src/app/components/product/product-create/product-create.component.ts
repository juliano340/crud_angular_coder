import { Product } from './../product-model';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-product-create',
  standalone: true,
  imports: [FormsModule,MatFormFieldModule, MatInputModule, MatCardModule, MatButtonModule ],
  templateUrl: './product-create.component.html',
  styleUrl: './product-create.component.css'
})
export class ProductCreateComponent implements OnInit {

  product : Product = {
    name: '',
    price: 0
  }

  constructor( private productService: ProductService, private router: Router) { }
 ngOnInit(): void {
   
 } 

 createProduct(): void {
  this.productService.create(this.product ).subscribe(() => {
    this.productService.showMessage('Product created!');
    this.router.navigate(['/products']);
  })
   
 }

 cancel(): void {
  this.router.navigate(['/products'])
}

}
