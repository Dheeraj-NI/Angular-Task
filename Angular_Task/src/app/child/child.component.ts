import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Customer } from '../Modal/customer';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() customer: Customer | null = null;
  @Output() customerUpdated = new EventEmitter<Customer>();

  updateCustomer(): void {
    if (this.customer) {
      // Perform the necessary updates or API call to update the customer record
      // Let's assume the update is successful and we emit the updated customer
      this.customerUpdated.emit(this.customer);
    }
  }

}
