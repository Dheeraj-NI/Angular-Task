import { Injectable } from '@angular/core';
import { ApiServiceService } from './api-service.service';
import { tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ModuleService {
  private isLoggedIn = false;
  public userRole: string = '';
  register: any;
  user: any;
  pass: any;

  constructor(private api: ApiServiceService) {}

  login(username: any, password: any): boolean {
    this.user = username;
    this.pass = password;

    this.api
      .checkCredentials()
      .pipe(tap((resp) => this.getRole(resp)))
      .subscribe((res) => {
        console.log(res);
        this.register = res.find((a: any) => {
          return a.userName == username && a.password == password;
        });
      });
    if (this.register) {
      localStorage.setItem('myregis', JSON.stringify(this.register));
      this.api.getToken();
      this.isLoggedIn = true;
      return true;
    } else {
      return false;
    }
  }
  getRole(data: any) {
    const user = data.find(
      (item: any) => item.userName == this.user && item.password == this.pass
    );
    this.userRole = user ? user.role : null;
    console.log('Role is ' + this.userRole);
  }

  logout(): void {
    this.isLoggedIn = false;
    this.userRole = '';
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }

  getUserRole(): string {
    return this.userRole;
  }
}
