export interface BackendProduct {
  id: string;
  createdAt: string;
  updatedAt: string;
  name: string;
  slug: string;
  description: string;
  content: string;
  price: number;
  stock: number;
  sku: string;
  categoryId: string;
  status: string;
  imgUrl: string;
  category: {
    id: string;
    createdAt: string;
    updatedAt: string;
    name: string;
    slug: string;
  };
}

export interface Product {
  id: string;
  name: string;
  price: string;
  category: string;
  image: string;
  info?: string;
  sale?: boolean;
  stock?: number;
  sku?: string;
  description?: string;
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
