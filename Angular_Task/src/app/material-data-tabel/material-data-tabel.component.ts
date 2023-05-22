import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface UserData {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}
const users: UserData[] = [
  {
    id: '1',
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe@example.com',
    phone: '123-456-7890',
  },
  {
    id: '2',
    firstName: 'Mack',
    lastName: 'Moun',
    email: 'mackmoun@example.com',
    phone: '156-856-7390',
  },
  {
    id: '3',
    firstName: 'Mili',
    lastName: 'Pos',
    email: 'posmili23@example.com',
    phone: '523-756-7390',
  },
  {
    id: '4',
    firstName: 'Vaily',
    lastName: 'uty',
    email: 'utyvaily@example.com',
    phone: '093-356-7170',
  },
  {
    id: '5',
    firstName: 'Emily',
    lastName: 'Johnson',
    email: 'emily.johnson@example.com',
    phone: '555-987-6543',
  },
  {
    id: '6',
    firstName: 'Michael',
    lastName: 'Davis',
    email: 'michael.davis@example.com',
    phone: '555-462-8102',
  },
  {
    id: '7',
    firstName: 'Sarah',
    lastName: 'Thompson',
    email: 'sarah.thompson@example.com',
    phone: '555-678-9012',
  },
  {
    id: '8',
    firstName: 'Jessica',
    lastName: 'Wilson',
    email: 'jessica.wilson@example.com',
    phone: '555-432-1098',
  },
  {
    id: '9',
    firstName: 'Christopher',
    lastName: 'Clark',
    email: 'christopher.clark@example.com',
    phone: '555-876-5432',
  },
  {
    id: '10',
    firstName: 'Olivia',
    lastName: 'Anderson',
    email: 'olivia.anderson@example.com',
    phone: '555-210-9876',
  },
  {
    id: '11',
    firstName: 'Matthew',
    lastName: 'White',
    email: 'matthew.white@example.com',
    phone: '555-765-4321',
  },
  {
    id: '12',
    firstName: 'Sophia',
    lastName: 'Martinez',
    email: 'sophia.martinez@example.com',
    phone: '555-321-0987',
  },
  {
    id: '13',
    firstName: 'Micky',
    lastName: 'Misse',
    email: 'micky.misse@example.com',
    phone: '555-456-8709',
  },
];

@Component({
  selector: 'app-material-data-tabel',
  templateUrl: './material-data-tabel.component.html',
  styleUrls: ['./material-data-tabel.component.css'],
})
export class MaterialDataTabelComponent implements AfterViewInit {
  displayedColumn: string[] = ['id', 'firstName', 'lastName', 'email', 'phone'];
  dataSource = new MatTableDataSource<UserData>(users);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  filterChange(event: Event) {
    const filvalue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filvalue;
  }
}
