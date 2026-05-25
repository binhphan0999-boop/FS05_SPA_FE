export interface BackendService {
  id: string;
  createdAt: string;
  updatedAt: string;
  name: string;
  description: string | null;
  price: number;
  durationMinutes: number;
  categoryId: string | null;
  imageUrl: string | null;
  isActive: boolean;
  category: {
    id: string;
    name: string;
  } | null;
}

export interface Service {
  id: string;
  name: string;
  price: string;
  duration: string;
  category: string;
  image: string;
  description: string;
}
