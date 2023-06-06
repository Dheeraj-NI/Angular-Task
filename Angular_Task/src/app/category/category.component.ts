import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from '../Core/api-service.service';
import { ModuleService } from '../Core/module.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  constructor(private route: Router, private moduleservice: ModuleService) { }
  
  Role(): boolean {
    return this.moduleservice.userRole == 'supervisor' ;
  }

  products() {
    this.route.navigate(['/product'])
  }
 
  
}
