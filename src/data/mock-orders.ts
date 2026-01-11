import { Order } from '../models/order.model';

export const MOCK_ORDERS = [
  { id: 'ORD001', totalAmount: 1250, status: 'Delivered', date: new Date('2026-01-05') },
  { id: 'ORD002', totalAmount: 450, status: 'Shipped', date: new Date('2026-01-08') },
  { id: 'ORD003', totalAmount: 2100, status: 'Pending', date: new Date('2026-01-09') },
  { id: 'ORD004', totalAmount: 890, status: 'Delivered', date: new Date('2026-01-02') },
  { id: 'ORD005', totalAmount: 150, status: 'Pending', date: new Date('2026-01-10') }
];