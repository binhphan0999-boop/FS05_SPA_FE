import api from '../axios';

const orderService = {
  /**
   * Lấy thông tin giao hàng pre-filled từ user profile
   */
  async getDeliveryInfo() {
    try {
      const response = await api.get('/api/v1/orders/delivery-info');
      return response.data.data;
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'Failed to fetch delivery info');
    }
  },

  /**
   * Tạo đơn hàng mới
   */
  async createOrder(data: {
    userId: string;
    deliveryPhone: string;
    deliveryAddress: string;
    deliveryNote?: string;
    couponId?: string;
    items: Array<{
      productId: string;
      quantity: number;
      price?: number;
    }>;
  }) {
    try {
      const response = await api.post('/api/v1/orders', data);
      return response.data.data;
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'Failed to create order');
    }
  },
};

export default orderService;
