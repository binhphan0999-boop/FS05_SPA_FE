import axios from 'axios';
import type { Service, BackendService } from '../../types/service.type';

const BACKEND_ORIGIN = 'http://localhost:8000';
const API_BASE_URL = `${BACKEND_ORIGIN}/api/v1`;

const resolveImageUrl = (url: string | null | undefined): string => {
  if (!url) return '/images/image_53.jpg';
  if (/^https?:\/\//i.test(url)) return url;
  if (url.startsWith('/uploads/')) return `${BACKEND_ORIGIN}${url}`;
  return url;
};

const transformService = (s: BackendService): Service => ({
  id: s.id,
  name: s.name,
  price: Number(s.price).toLocaleString('vi-VN') + 'đ',
  duration: s.durationMinutes + ' phút',
  category: s.category?.name ?? 'Dịch vụ',
  image: resolveImageUrl(s.imageUrl),
  description: s.description ?? '',
  isFeatured: s.isFeatured ?? false,
});

const serviceApiService = {
  getServices: async (): Promise<Service[]> => {
    try {
      const response = await axios.get<{ data: BackendService[] }>(`${API_BASE_URL}/services`);
      return response.data.data.map(transformService);
    } catch (error) {
      console.error('Lỗi khi lấy danh sách dịch vụ:', error);
      throw error;
    }
  },
};

export default serviceApiService;
