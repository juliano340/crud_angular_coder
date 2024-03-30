import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductReadComponent } from "../../components/product/product-read/product-read.component";
import {MatButtonModule} from '@angular/material/button';

@Component({
    selector: 'app-product-crud',
    standalone: true,
    templateUrl: './product-crud.component.html',
    styleUrl: './product-crud.component.css',
    imports: [ProductReadComponent, MatButtonModule]
})
export class ProductCrudComponent {

  constructor(private router: Router) {
    
  }

  naviagteToProductCreate(): void {
    this.router.navigate(['/products/create'])
  }
}
