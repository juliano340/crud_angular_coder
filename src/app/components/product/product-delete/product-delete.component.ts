import { Component, OnInit } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { ProductService } from '../product.service';
import { Product } from '../product-model';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-product-delete',
  standalone: true,
  imports: [FormsModule, MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './product-delete.component.html',
  styleUrl: './product-delete.component.css'
})
export class ProductDeleteComponent implements OnInit {

  constructor(private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute) { }

  product: Product = {
    id: undefined,
    name: '',
    price: undefined
  }
  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id')
    const idNumber = Number(id)

    this.productService.readById(idNumber).subscribe(product => {
      this.product = product;
      console.log(this.product)
    })
  }


  // deleteProduct(): void {

  //   this.productService.delete(this.product.id).subscribe(() => {
  //     this.productService.showMessage('Produto excluído com sucesso!')
   
  // }

  deleteProduct(): void {
    if (this.product.id !== undefined) {
        this.productService.delete(this.product.id).subscribe(() => {
            this.productService.showMessage('Produto excluído com sucesso!');
            this.router.navigate(['/products']);
        });
    }
}

  cancel(): void {
    this.router.navigate(['/products'])
  }

}
