import { Component } from '@angular/core';
import { Customer } from '../Modal/customer';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent {
  
  customers: Customer[] = [
    {
      id: 1,
      name: 'John Smith',
      age: 35,
      gender: 'Male',
      email_Address: 'john.smith@example.com',
      phone_Number: '+1 (555) 123-4567',
      address: '123 Main Street, Anytown, USA',
      date_of_Birth: 'January 1, 1988',
      preferred_Language: 'English',
      occupation: 'Software Engineer',
    },
    {
      id: 2,
      name: 'Emily Johnson',
      age: 28,
      gender: 'Female',
      email_Address: 'emily.johnson@example.com',
      phone_Number: '+1 (555) 987-6543',
      address: '456 Oak Avenue, Springfield, USA',
      date_of_Birth: 'May 12, 1995',
      preferred_Language: 'English',
      occupation: 'Marketing Specialist',
    },
    {
      id: 3,
      name: 'Michael Davis',
      age: 42,
      gender: 'Male',
      email_Address: 'michael.davis@example.com',
      phone_Number: '+1 (555) 246-8102',
      address: '789 Elm Street, Anytown, USA',
      date_of_Birth: 'November 18, 1979',
      preferred_Language: 'English',
      occupation: 'Accountant',
    },
    {
      id: 4,
      name: 'Sarah Thompson',
      age: 31,
      gender: 'Female',
      email_Address: 'sarah.thompson@example.com',
      phone_Number: '+1 (555) 678-9012',
      address: '321 Maple Drive, Springfield, USA',
      date_of_Birth: 'March 5, 1992',
      preferred_Language: 'English',
      occupation: 'Teacher',
    },

    {
      id: 5,
      name: 'David Miller',
      age: 45,
      gender: 'Male',
      email_Address: 'david.miller@example.com',
      phone_Number: '+1 (555) 345-6789',
      address: '987 Pine Road, Anytown, USA',
      date_of_Birth: 'July 9, 1978',
      preferred_Language: 'English',
      occupation: 'Lawyer',
    },
    {
      id: 6,
      name: 'Jessica Wilson',
      age: 29,
    gender: 'Female',
      email_Address: 'jessica.wilson@example.com',
      phone_Number: '+1 (555) 432-1098',
      address: '654 Cedar Lane, Springfield, USA',
      date_of_Birth: 'February 22, 1994',
      preferred_Language: 'English',
      occupation: 'Graphic Designer',
    },
    {
      id: 7,
      name: 'Christopher Clark',
      age: 37,
      gender: 'Male',
      email_Address: 'christopher.clark@example.com',
      phone_Number: '+1 (555) 876-5432',
      address: '321 Oak Street, Anytown, USA',
      date_of_Birth: 'September 14, 1986',
      preferred_Language: 'English',
      occupation: 'Engineer',
    },
    {
      id: 8,
      name: 'Olivia Anderson',
      age: 26,
      gender: 'Female',
      email_Address: 'olivia.anderson@example.com',
      phone_Number: '+1 (555) 210-9876',
      address: '789 Maple Avenue, Springfield, USA',
      date_of_Birth: 'June 30, 1997',
      preferred_Language: 'English',
      occupation: 'Nurse',
    },
    {
      id: 9,
      name: 'Matthew White',
      age: 33,
      gender: 'Male',
      email_Address: 'matthew.white@example.com',
      phone_Number: '+1 (555) 765-4321',
      address: '123 Main Street, Anytown, USA',
      date_of_Birth: 'April 8, 1990',
      preferred_Language: 'English',
      occupation: 'Sales Manager',
    },
    {
      id: 10,
      name: 'Sophia Martinez',
      age: 24,
      gender: 'Female',
      email_Address: 'sophia.martinez@example.com',
      phone_Number: '+1 (555) 321-0987',
      address: '456 Cedar Lane, Springfield, USA',
      date_of_Birth: 'December 12, 1998',
      preferred_Language: 'English',
      occupation: 'Student',
    },
  ];
  selectedCustomer: Customer |null = null;

  constructor() {}

  ngOnInit(): void {}

  onEditCustomer(customer: Customer): void {
    this.selectedCustomer = { ...customer };
  }



  

  onCustomerUpdated(updatedCustomer: Customer): void {
    const index = this.customers.findIndex((c) => c.id === updatedCustomer.id);
    if (index !== -1) {
      this.customers[index] = updatedCustomer;
    }
    this.selectedCustomer = null;
  }
}
