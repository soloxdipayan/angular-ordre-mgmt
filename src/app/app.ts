import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common'; // Required for *ngIf and *ngFor
import { HeaderComponent } from './header-component/header-component';
import { Sidebar } from './sidebar/sidebar';
import { OrderHistory } from './order-history/order-history';
import { MOCK_ORDERS } from '../data/mock-orders';
import { DashboardComponent } from "./dashboard-component/dashboard-component";

@Component({
  selector: 'app-root',
  standalone: true,
  // Import CommonModule to use Directives like *ngIf
  imports: [CommonModule, HeaderComponent, Sidebar, OrderHistory, DashboardComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'Order Management System';
  
  // Local data from your mock file
  orders = MOCK_ORDERS;

  // This variable controls which component is visible
  currentView: string = 'dashboard'; 

  // Function to change the view based on Sidebar clicks
  setView(view: string) {
    this.currentView = view;
  }
}