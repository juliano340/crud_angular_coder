import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/template/header/header.component";
import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { HomeComponent } from './views/home/home.component';
import {MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: 'app.component.html',
    imports: [RouterOutlet, HeaderComponent, MatToolbarModule, FooterComponent,
        MatSidenavModule, MatListModule, NavComponent, HomeComponent, MatCardModule, MatButtonModule, HttpClientModule, 
        FormsModule, MatFormFieldModule, MatInputModule],
})
export class AppComponent {
  
}
