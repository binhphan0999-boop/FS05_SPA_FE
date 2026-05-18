export interface Product {
  name: string;
  price: string;
  category: string;
  image: string;
  info?: string;
  sale?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface CheckoutData {
  name: string;
  phone: string;
  address: string;
  note: string;
}

export interface OrderPayload {
  customer: CheckoutData;
  items: CartItem[];
  total: string;
  createdAt: string;
}
