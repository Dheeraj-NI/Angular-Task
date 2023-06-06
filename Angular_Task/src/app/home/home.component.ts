import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { Observable, map } from 'rxjs';
import { ApiServiceService } from '../Core/api-service.service';
import { ModuleService } from '../Core/module.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  isLoggedIn$!: Observable<boolean>;
  constructor(
    private service: ApiServiceService,
    private route: Router,
    private module_service: ModuleService
  ) {}
  Role: string = this.module_service.getUserRole();
  ngOnInit(): void {
    this.isLoggedIn$ = this.service.token$.pipe(map((token) => !!token));
  }
  category(): boolean {
    return this.Role == 'admin' || this.Role == 'supervisor';
  }

  category_comp() {
    this.route.navigate(['/category']);
  }
  login() {
    if (!this.isLoggedIn$) {
      this.route.navigate(['/login']);
    }
  }
}
