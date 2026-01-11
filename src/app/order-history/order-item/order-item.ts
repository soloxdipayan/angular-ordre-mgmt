import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Order } from '../../../models/order.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-order-item',
  imports: [FormsModule,CommonModule],
  templateUrl: './order-item.html',
  styleUrl: './order-item.css',
})
export class OrderItem {
  @Input() orderData!: any;
  @Output() actionTaken = new EventEmitter<{id: string, action: string, reason: string}>();

  // Variables for ngModel
  showReasonInput: boolean = false;
  userReason: string = '';
  pendingAction: string = '';

  // Step 1: User clicks button, show the input field
  initiateAction(actionType: string) {
    this.pendingAction = actionType;
    this.showReasonInput = true;
  }

  // Step 2: User submits the reason
  confirmAction() {
    if (this.userReason.length > 5) {
      this.actionTaken.emit({ 
        id: this.orderData.id, 
        action: this.pendingAction, 
        reason: this.userReason 
      });
      this.showReasonInput = false;
    }
  }
}
