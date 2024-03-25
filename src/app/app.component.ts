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



@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: 'app.component.html',
    imports: [RouterOutlet, HeaderComponent, MatToolbarModule, FooterComponent,
        MatSidenavModule, MatListModule, NavComponent, HomeComponent, MatCardModule],
})
export class AppComponent {
  
}
