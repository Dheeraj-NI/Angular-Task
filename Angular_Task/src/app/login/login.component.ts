import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiServiceService } from '../Core/api-service.service';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { ModuleService } from '../Core/module.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  
  constructor(
    private api: ApiServiceService,
    private route: Router,
    private module_service: ModuleService
  ) {}
  loginPage = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });
  ngOnInit(): void {}

  login() {
    this.api.checkCredentials().subscribe((res) => {
      console.log(res);
      const register = res.find((a: any) => {
        return (
          a.userName == this.loginPage.value.username &&
          a.password == this.loginPage.value.password
        );
      });

      if (register) {
        localStorage.setItem('myregis', JSON.stringify(register));
        this.api.getToken();
        this.route.navigate(['/home']);
      } else {
        this.loginPage.reset();
      }
    });
  }

  module_login() {
    if (
      this.module_service.login(
        this.loginPage.value.username,
        this.loginPage.value.password
      )
    ) {
      this.route.navigate(
        this.module_service.userRole == 'admin'
          ? ['/home']
          : this.module_service.userRole == 'supervisor'
          ? ['/home']
          : this.module_service.userRole == 'user'
          ? ['/home']
          : ['/login']
      );
    }
  }

  
}
