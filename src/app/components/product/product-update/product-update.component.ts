import { ProductService } from '../product.service';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatCardModule } from '@angular/material/card';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import  { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product-model';


@Component({
  selector: 'app-product-update',
  standalone: true,
  imports: [FormsModule, MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './product-update.component.html',
  styleUrl: './product-update.component.css'
})
export class ProductUpdateComponent implements OnInit {

  product: Product = {
    name: '',
    price: undefined
  }

  constructor(private productService: ProductService, 
    private router: Router,
    private route: ActivatedRoute

    ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    const idNumber = Number(id)
    
    this.productService.readById(idNumber).subscribe(product => {
      this.product = product;
    })
    
  }

  updateProduct(): void {
    console.log(this.product)
    const testPrice = String(this.product.price)
    if (this.product.name === '' || testPrice === '') {
      this.productService.showMessage('Preencha todos os campos!', true);
      return
      
    }

    this.productService.update(this.product).subscribe(() => {
      this.productService.showMessage('Produto atualizado!')
      this.router.navigate(['/products'])
    })
  }

  cancel(): void {
    this.router.navigate(['/products'])
  }
}
