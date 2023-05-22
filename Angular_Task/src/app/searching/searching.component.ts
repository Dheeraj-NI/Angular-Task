import { Component } from '@angular/core';
import { Subject, debounceTime, distinctUntilChanged, map } from 'rxjs';

export interface Customer {
  id: string;
  username: string;
  email_Address: string;
  gender: string;
  phone_Number: string;

  preferred_Language: string;
  occupation: string;
}

const  users: Customer[] = [
  {
    id: "1",
    username: 'John',
    gender: 'Male',
    email_Address: 'john.smith@example.com',
    phone_Number: '+1 (555) 123-4567',
    preferred_Language: 'English',
    occupation: 'Software Engineer',
  },
  {
    id: "2",
    username: 'Emily',
    gender: 'Female',
    email_Address: 'emily.johnson@example.com',
    phone_Number: '+1 (555) 987-6543',
    preferred_Language: 'English',
    occupation: 'Marketing Specialist',
  },
  {
    id: "3",
    username: 'Michael',
    gender: 'Male',
    email_Address: 'michael.davis@example.com',
    phone_Number: '+1 (555) 246-8102',
    preferred_Language: 'English',
    occupation: 'Accountant',
  },
  {
    id: "4",
    username: 'Sarah Thompson',
    gender: 'Female',
    email_Address: 'sarah.thompson@example.com',
    phone_Number: '+1 (555) 678-9012',
    preferred_Language: 'English',
    occupation: 'Teacher',
  },
  {
    id: "5",
    username: 'David Miller',
    gender: 'Male',
    email_Address: 'david.miller@example.com',
    phone_Number: '+1 (555) 345-6789',
    preferred_Language: 'English',
    occupation: 'Lawyer',
  },
  {
    id: "6",
    username: 'Jessica Wilson',
    gender: 'Female',
    email_Address: 'jessica.wilson@example.com',
    phone_Number: '+1 (555) 432-1098',
    preferred_Language: 'English',
    occupation: 'Graphic Designer',
  },
  {
    id: "7",
    username: 'Christopher Clark',

    gender: 'Male',
    email_Address: 'christopher.clark@example.com',
    phone_Number: '+1 (555) 876-5432',

    preferred_Language: 'English',
    occupation: 'Engineer',
  },
  {
    id: "8",
    username: 'Olivia Anderson',

    gender: 'Female',
    email_Address: 'olivia.anderson@example.com',
    phone_Number: '+1 (555) 210-9876',

    preferred_Language: 'English',
    occupation: 'Nurse',
  },
  {
    id: "9",
    username: 'Matthew White',

    gender: 'Male',
    email_Address: 'matthew.white@example.com',
    phone_Number: '+1 (555) 765-4321',

    preferred_Language: 'English',
    occupation: 'Sales Manager',
  },
  {
    id: "10",
    username: 'Sophia Martinez',

    gender: 'Female',
    email_Address: 'sophia.martinez@example.com',
    phone_Number: '+1 (555) 321-0987',

    preferred_Language: 'English',
    occupation: 'Student',
  },
];



@Component({
  selector: 'app-searching',
  templateUrl: './searching.component.html',
  styleUrls: ['./searching.component.css']
})
export class SearchingComponent {
 
  users: Customer[] = users;

  filteredUsers: Customer[] = users;
  searchSubject = new Subject<any>();

  constructor() {
    this.searchSubject
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        map((searchTerm) => searchTerm.trim().toLowerCase())
      )
      .subscribe((searchTerm) => {
        this.filteredUsers = this.users.filter(
          (user) =>
            user.username.toLowerCase().includes(searchTerm) ||
            user.email_Address.toLowerCase().includes(searchTerm) ||
            user.gender.toLowerCase().includes(searchTerm) ||
            user.phone_Number.toLowerCase().includes(searchTerm)
            
        );
      });
  }




  search(event: any) {
    const searchTerm = event.target.value;
    this.searchSubject.next(searchTerm);
  }
}
