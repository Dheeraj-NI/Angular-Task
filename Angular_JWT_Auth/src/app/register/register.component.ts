import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { HTTPConnectService } from '../Authenticate/httpconnect.service';


export class RegistrationForm {
  id: number = 0;
  firstName: string = '';
  lastName: string = '';
  userName: string = '';
  role: string = '';
  password: string = '';
  number: string = '';
  email: string = '';
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  constructor(private _api: HTTPConnectService
  ) {}
  userForm: RegistrationForm = new RegistrationForm();
  registrationForm = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
    userName: new FormControl(),
    role: new FormControl(),
    password: new FormControl(),
    number: new FormControl(),
    email: new FormControl(),
  });

  

  addregister() {
    this.userForm.firstName = this.registrationForm.value.firstName;
    this.userForm.lastName = this.registrationForm.value.lastName;
    this.userForm.userName = this.registrationForm.value.userName;
    this.userForm.role = this.registrationForm.value.role;
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
