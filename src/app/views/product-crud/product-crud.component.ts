import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductReadComponent } from "../../components/product/product-read/product-read.component";
import {MatButtonModule} from '@angular/material/button';
import { ProductRead2Component } from "../../components/product/product-read2/product-read2.component";
import { HeaderService } from "../../components/template/header/header.service";
@Component({
    selector: 'app-product-crud',
    standalone: true,
    templateUrl: './product-crud.component.html',
    styleUrl: './product-crud.component.css',
    imports: [ProductReadComponent, MatButtonModule, ProductRead2Component]
})
export class ProductCrudComponent {

  constructor(private router: Router, private HeaderService: HeaderService) {

    this.HeaderService.headerData = {
      title: 'Cadastro de Produtos',
      icon: 'storefront',
      routeUrl: '/products'
  } 
}

  naviagteToProductCreate(): void {
    this.router.navigate(['/products/create'])
  }
}
