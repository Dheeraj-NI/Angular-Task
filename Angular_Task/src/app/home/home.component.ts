import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { Observable, map } from 'rxjs';
import { ApiServiceService } from '../Core/api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  isLoggedIn$!: Observable<boolean>;
  constructor(private service: ApiServiceService , private route:Router) {}

  ngOnInit(): void {
    this.isLoggedIn$ = this.service.token$.pipe(map((token) => !!token));
  }

  login() {
    if (!this.isLoggedIn$) {
      this.route.navigate(['/login']);
    }
  }
  
}
