import { Component } from '@angular/core';
import { Customer } from '../Modal/customer';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent {
  customers: any;

  selectedCustomer: Customer | null = null;

  constructor(private http: HttpClient, private router: Router) {}
  ngOnInit(): void {
    this.getdata();
  }

  getdata() {
    this.http.get('http://localhost:3000/customerDetails').subscribe((res) => {
      this.customers = res;
    });
  }

  onEditCustomer(customer: any): void {
    this.selectedCustomer = customer;
  }

  onCustomerUpdated(updatedCustomer: any): void {
    console.log(updatedCustomer);
    this.http
      .put(
        'http://localhost:3000/customerDetails/' + updatedCustomer.id,
        updatedCustomer
      )
      .subscribe((res) => {
        console.log(res);
      });

    this.selectedCustomer = null;
  }
}
