import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { RegistrationForm } from './registermodel';
import { ApiServiceService } from '../Core/api-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor(private formBuilder: FormBuilder,private api: ApiServiceService) {}
  userForm: RegistrationForm = new RegistrationForm();
  registrationForm = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
    userName: new FormControl(),
    password: new FormControl(),
    number: new FormControl(),
    email: new FormControl(),
  });

  ngOnInit(): void { }
  
  addregister() {
    this.userForm.firstName = this.registrationForm.value.firstName;
    this.userForm.lastName = this.registrationForm.value.lastName;
    this.userForm.userName = this.registrationForm.value.userName;
    this.userForm.password = this.registrationForm.value.password;
    this.userForm.number = this.registrationForm.value.number;
    this.userForm.email = this.registrationForm.value.email;
    this.api.saveData(this.userForm).subscribe(
      (res) => {
        console.log(res);
        alert('Registered Successfully');
      },
      (err) => {
        alert('Something went wrong');
      })
}

}
