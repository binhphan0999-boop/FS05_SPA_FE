import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000/api/v1';

const bookingService = {
  createBooking: async (bookingData: any) => {
    try {
      // Lấy token - hãy đảm bảo key 'authToken' khớp với lúc bạn lưu khi Login
      const token = localStorage.getItem('authToken');
      
      const response = await axios.post(
        `${API_BASE_URL}/bookings`,
        bookingData,
        {
          headers: {
            Authorization: token ? `Bearer ${token}` : '',
          },
        }
      );
      return response.data;
    } catch (error: any) {
      console.error('Lỗi Booking Service:', error.response);
      throw error;
    }
  },
};

export default bookingService;