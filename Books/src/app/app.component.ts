import { Component } from '@angular/core';
import { AuthorizationService } from './service/authorization/authorization.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public authService: AuthorizationService) {}

  logout() {
    this.authService.doLogout();
  }
}
