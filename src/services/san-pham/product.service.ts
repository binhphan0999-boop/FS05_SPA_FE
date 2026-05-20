import axios from 'axios';
import type { Product } from '../../types/product.type'; // Đảm bảo đường dẫn đúng đến file type của bạn

const API_BASE_URL = 'http://localhost:8000/api/v1'; // Thay đổi URL này cho phù hợp với backend của bạn

const productService = {
  /**
   * Lấy tất cả sản phẩm từ API
   * @returns Promise<Product[]>
   */
  getProducts: async (): Promise<Product[]> => {
    try {
      const response = await axios.get<Product[]>(`${API_BASE_URL}/products`);
      return response.data;
    } catch (error) {
      console.error('Lỗi khi lấy danh sách sản phẩm:', error);
      // Tùy chọn: throw error hoặc trả về mảng rỗng tùy theo cách bạn muốn xử lý lỗi
      throw error;
    }
  },

  // Bạn có thể thêm các hàm khác như getProductById, createProduct, updateProduct, deleteProduct ở đây
};

export default productService;