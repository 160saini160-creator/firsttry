
export enum UserRole {
  ADMIN = 'ADMIN',
  SALESMAN = 'SALESMAN'
}

export enum OrderStatus {
  PENDING = 'PENDING',
  PROCESSING = 'PROCESSING',
  DISPATCHED = 'DISPATCHED',
  DELIVERED = 'DELIVERED',
  CANCELLED = 'CANCELLED'
}

export interface User {
  id: string;
  username: string;
  name: string;
  role: UserRole;
  password?: string;
  status: 'active' | 'disabled';
  createdAt: string;
}

export interface Sweet {
  id: string;
  name: string;
  category: string;
  unit: string;
  description?: string;
  imageUrl?: string;
}

export interface OrderItem {
  sweetId: string;
  name: string;
  quantity: number;
  unit: string;
}

export interface Order {
  id: string;
  salesmanId: string;
  salesmanName: string;
  items: OrderItem[];
  status: OrderStatus;
  notes?: string;
  createdAt: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
}
