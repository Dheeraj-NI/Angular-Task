import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { HTTPConnectService } from '../Authenticate/httpconnect.service';

export class RegistrationForm {
  id: number = 0;
  firstname: string = '';
  lastname: string = '';
  username: string = '';
  
  password: string = '';
  number: string = '';
  email: string = '';
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  constructor(private _api: HTTPConnectService) {}
  ngOnInit(): void {}
  userForm: RegistrationForm = new RegistrationForm();
  registrationForm = new FormGroup({
    firstname: new FormControl(),
    lastname: new FormControl(),
    username: new FormControl(),
    role: new FormControl(),
    password: new FormControl(),
    number: new FormControl(),
    email: new FormControl(),
  });

  addregister() {
    this.userForm.firstname = this.registrationForm.value.firstname;
    this.userForm.lastname = this.registrationForm.value.lastname;
    this.userForm.username = this.registrationForm.value.username;
   
    this.userForm.password = this.registrationForm.value.password;
    this.userForm.number = this.registrationForm.value.number;
    this.userForm.email = this.registrationForm.value.email;
    this._api.saveData(this.userForm).subscribe(
      (res) => {
        console.log(res);
        alert('Registered Successfully');
      },
      (err) => {
        alert('Something went wrong');
      }
    );
  }
}
