import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { ApiServiceService } from '../Core/api-service.service';
import { ModuleService } from '../Core/module.service';

@Component({
  selector: 'app-startup',
  templateUrl: './startup.component.html',
  styleUrls: ['./startup.component.css'],
})
export class StartupComponent {
  constructor(private router: Router, private service: ApiServiceService, private module_service : ModuleService) {}
  Role: string = this.module_service.getUserRole();
  isHomeRoute(): boolean {
    return this.router.url === '/home' || this.router.url === '/category' || this.router.url === '/product';
  }

  logout() {
    localStorage.removeItem('myregis');
    this.module_service.logout();
    this.service.deleteToken();
    
  }
}
