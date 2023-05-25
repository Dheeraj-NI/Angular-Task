import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../Core/api-service.service';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css'],
})
export class DatatableComponent implements OnInit {
  constructor(private api: HttpClient) {}
  dtOptions: DataTables.Settings = {};
  dtTrigger : Subject<any> = new Subject<any>()
  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'simple_numbers',
      language: {
        
        searchPlaceholder: 'Ask Me ?',
      },
      columns: [
        {
          title: 'ID',
          
        },
        {
          title: 'First name',
          
        },
        {
          title: 'Last name',
          
        },
        {
          title: 'Email ID',
          
        },
        {
          title: 'Gender',
          
        },
        {
          title: 'Phone Number',
          
        },
      ],
    };
    this.getInfo();
  }
  
  data: any;
  getInfo() {
    return this.api
      .get<any>('http://localhost:3000/Datatable')
      .subscribe((res) => {
        this.data = res;
        this.dtTrigger.next(null);
      });
  }
}
