import { Component } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { HomeComponent } from "../../../views/home/home.component";
import { ProductCrudComponent } from '../../../views/product-crud/product-crud.component';
import { RouterOutlet, Router, RouterLink } from '@angular/router';





@Component({
    selector: 'app-nav',
    standalone: true,
    templateUrl: './nav.component.html',
    styleUrl: './nav.component.css',
    imports: [MatSidenavModule, MatListModule, HomeComponent, ProductCrudComponent, RouterOutlet,RouterLink ]
})
export class NavComponent {

}
