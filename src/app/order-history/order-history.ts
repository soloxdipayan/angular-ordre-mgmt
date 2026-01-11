import { Component } from '@angular/core';
import { Order } from '../../models/order.model';
import { MOCK_ORDERS } from '../../data/mock-orders';
import { OrderItem } from './order-item/order-item';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-order-history',
  imports: [OrderItem, FormsModule,CommonModule],
  templateUrl: './order-history.html',
  styleUrl: './order-history.css',
})
export class OrderHistory {
// Use the spread operator [...] to create a copy, then reverse it
  // This puts ORD005 at the top and ORD001 at the bottom
  myOrders = [...MOCK_ORDERS].reverse(); 

  updateOrder(event: {id: string, action: string, reason: string}) {
    const order = this.myOrders.find(o => o.id === event.id);
    if (order) {
      order.status = event.action as any;
      // order.reason = event.reason;
    }
  }
}
