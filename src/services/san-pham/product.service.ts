import axios from 'axios';
import type { Product, BackendProduct } from '../../types/product.type';

const API_BASE_URL = 'http://localhost:8000/api/v1';

// Transform backend data to frontend format
const transformProduct = (backendProduct: BackendProduct): Product => ({
  id: backendProduct.id,
  name: backendProduct.name,
  price: backendProduct.price.toLocaleString('vi-VN') + 'đ',
  category: backendProduct.category.name,
  image: backendProduct.imgUrl,
  info: backendProduct.description,
  sale: backendProduct.status === 'SALE',
  stock: backendProduct.stock,
  sku: backendProduct.sku,
  description: backendProduct.content,
});

const productService = {
  /**
   * Lấy tất cả sản phẩm từ API
   * @returns Promise<Product[]>
   */
  getProducts: async (): Promise<Product[]> => {
    try {
      const response = await axios.get<{ data: BackendProduct[] }>(`${API_BASE_URL}/products`);
      return response.data.data.map(transformProduct);
    } catch (error) {
      console.error('Lỗi khi lấy danh sách sản phẩm:', error);
      throw error;
    }
  },

  /**
   * Lấy sản phẩm theo ID
   * @param id - Product ID
   * @returns Promise<Product>
   */
  getProductById: async (id: string): Promise<Product> => {
    try {
      const response = await axios.get<{ data: BackendProduct }>(`${API_BASE_URL}/products/${id}`);
      return transformProduct(response.data.data);
    } catch (error) {
      console.error('Lỗi khi lấy sản phẩm:', error);
      throw error;
    }
  },
};

export default productService;