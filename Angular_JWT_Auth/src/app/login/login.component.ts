import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { Router } from '@angular/router';
import { tap } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit(): void {}
  loginPage = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });
  login() {
    const data = {
      username: this.loginPage.value.username,
      password: this.loginPage.value.password,
    };
    console.log(data);
    this.http
      .post<any>('http://localhost:5000/users/authenticate', data)
      .subscribe(
        (response) => {
          console.log(response);
          // Store the token in local storage
          localStorage.setItem('token', response.token);

          // Redirect to the home route
          this.router.navigate(['/home']);
        },
        (error) => {
          console.error('Login failed:', error);
          // Handle login error
        }
      );
  }
}
