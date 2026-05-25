import axios from 'axios';
import type { Service, BackendService } from '../../types/service.type';

const API_BASE_URL = 'http://localhost:8000/api/v1';

const transformService = (s: BackendService): Service => ({
  id: s.id,
  name: s.name,
  price: Number(s.price).toLocaleString('vi-VN') + 'đ',
  duration: s.durationMinutes + ' phút',
  category: s.category?.name ?? 'Dịch vụ',
  image: s.imageUrl ?? '/images/image_53.jpg',
  description: s.description ?? '',
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
