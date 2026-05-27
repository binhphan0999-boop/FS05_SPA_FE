import api from '../axios';

const userService = {
  /**
   * Lấy thông tin profile user hiện tại
   */
  async getProfile() {
    try {
      const response = await api.get('/api/v1/users/profile');
      return response.data.data;
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'Failed to fetch user profile');
    }
  },

  /**
   * Cập nhật profile user
   */
  async updateProfile(data: any) {
    try {
      const response = await api.put('/api/v1/users/profile', data);
      return response.data.data;
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'Failed to update user profile');
    }
  },
};

export default userService;
