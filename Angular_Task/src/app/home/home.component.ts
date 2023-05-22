import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private route: Router, private logins: LoginComponent) { 
    
    
  }
  
  

  logout() {
    // let removedata = JSON.parse(localStorage.getItem('myregis') || '')
    localStorage.removeItem('myregis')
    this.route.navigate(['/login']);

}
  ngOnInit(){
    // let userName = JSON.parse(localStorage.getItem('myregis' || ''));
    // console.log( userName.value)
  }

}