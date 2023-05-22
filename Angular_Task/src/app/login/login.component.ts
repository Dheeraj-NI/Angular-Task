import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiServiceService } from '../Core/api-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private api: ApiServiceService, private route: Router) {}
  loginPage = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });
  ngOnInit(): void { }
  
  




  login() {
    this.api.checkCredentials().subscribe((res) => {
      console.log(res);
      const register = res.find((a: any) => {
        return (
          a.userName == this.loginPage.value.username &&
          a.password == this.loginPage.value.password
        );
      });

      console.log(register + 'helllooooooo');
      if (register) {
        localStorage.setItem('myregis', JSON.stringify(register));
        this.route.navigate(['/home']);
      } else {
        this.loginPage.reset();
      }
    });
  }
}