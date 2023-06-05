import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  constructor(private router: Router) {}
  isHomeRoute(): boolean {
    return this.router.url === '/home';
  }
  logout() {
    // Clear the token from local storage
    localStorage.removeItem('token');

    // Redirect to the login route
    this.router.navigate(['/login']);
  }
}
