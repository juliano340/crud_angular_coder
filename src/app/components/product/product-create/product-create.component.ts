import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  standalone: true,
  imports: [],
  templateUrl: './product-create.component.html',
  styleUrl: './product-create.component.css'
})
export class ProductCreateComponent implements OnInit {

  constructor( private productService: ProductService, private router: Router) { }
 ngOnInit(): void {
   
 } 

 createProduct(): void {
  this.productService.create({name: 'Notebook', price: 2500.99}).subscribe(() => {
    this.productService.showMessage('Product created!');
    this.router.navigate(['/products']);
  })
   
 }

 cancel(): void {
  this.router.navigate(['/products'])
}

}
