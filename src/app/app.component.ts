import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/template/header/header.component";
import { MatToolbarModule } from '@angular/material/toolbar';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: 'app.component.html',
    imports: [RouterOutlet, HeaderComponent, MatToolbarModule],
})
export class AppComponent {
  
}
