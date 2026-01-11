export interface Order {
  id: string;
  totalAmount: number;
  status: 'Pending' | 'Shipped' | 'Delivered' | 'Returned' | 'Cancelled';
  date: Date;
  reason?: string; 
}