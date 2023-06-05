import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { ApiServiceService } from '../Core/api-service.service';

@Component({
  selector: 'app-startup',
  templateUrl: './startup.component.html',
  styleUrls: ['./startup.component.css'],
})
export class StartupComponent {
  constructor(private router: Router, private service: ApiServiceService) {}
  isHomeRoute(): boolean {
    return this.router.url === '/home';
  }
  logout() {
    this.service.deleteToken();
    
  }
}
