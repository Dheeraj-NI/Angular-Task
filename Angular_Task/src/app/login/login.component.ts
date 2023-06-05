import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiServiceService } from '../Core/api-service.service';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  private token: string = '';
  private tokenSubject: BehaviorSubject<string | null> = new BehaviorSubject<
    string | null
  >(null);
  public token$: Observable<string | null> = this.tokenSubject.asObservable();

  constructor(private api: ApiServiceService, private route: Router) {}
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

  getToken() {
    this.token = JSON.parse(localStorage.getItem('myregis') || '');

    this.tokenSubject.next(this.token);
  }

  deleteToken() {
    localStorage.removeItem('myuser');
    this.tokenSubject.next(null);
    
  }
}
