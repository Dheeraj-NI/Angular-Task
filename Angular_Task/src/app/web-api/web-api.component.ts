import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../Core/api-service.service';

@Component({
  selector: 'app-web-api',
  templateUrl: './web-api.component.html',
  styleUrls: ['./web-api.component.css'],
})
export class WebApiComponent implements OnInit {
  
  
  constructor(private api: ApiServiceService) {}

  ngOnInit(): void {
    this.getAllData();
  }
  registerData: any;
  getAllData() {
    this.api.getData().subscribe((res) => {
      this.registerData = res;
    });
  }
}
