import { Component } from '@angular/core';
import { Order } from '../../models/order.model';
import { MOCK_ORDERS  } from '../../data/mock-orders';
import { CommonModule, NgIf } from '@angular/common';
@Component({
  selector: 'app-dashboard-component',
  imports: [CommonModule],
  templateUrl: './dashboard-component.html',
  styleUrl: './dashboard-component.css',
})
export class DashboardComponent {
  latestOrder: any; // 1. This is the class variable

  constructor() {
    // 2. Make sure you use 'this.'
    // If you wrote 'const latestOrder = ...', the HTML cannot see it.
    this.latestOrder = MOCK_ORDERS[MOCK_ORDERS.length - 1];
    console.log("Data assigned to this.latestOrder:", this.latestOrder);
  }
}
