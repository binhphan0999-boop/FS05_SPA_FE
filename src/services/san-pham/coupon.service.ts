import axios from 'axios';
import type { Coupon, CouponResponse, CouponValidation } from '../../types/coupon.type';

const API_BASE_URL = 'http://localhost:8000/api/v1';

const couponService = {
  /**
   * Lấy danh sách tất cả coupon
   */
  getCoupons: async (): Promise<Coupon[]> => {
    try {
      const response = await axios.get<CouponResponse>(
        `${API_BASE_URL}/coupons`
      );
      return response.data.data;
    } catch (error) {
      console.error('Lỗi khi lấy danh sách coupon:', error);
      throw error;
    }
  },

  /**
   * Kiểm tra và áp dụng coupon
   */
  validateCoupon: async (
    code: string,
    totalAmount: number
  ): Promise<CouponValidation> => {
    try {
      const response = await axios.post<CouponValidation>(
        `${API_BASE_URL}/coupons/validate`,
        {
          code: code.toUpperCase(),
          totalAmount,
        }
      );
      return response.data;
    } catch (error: any) {
      console.error('Lỗi khi kiểm tra coupon:', error);
      return {
        isValid: false,
        discountAmount: 0,
        message: error.response?.data?.message || 'Mã giảm giá không hợp lệ',
      };
    }
  },

  /**
   * Tính discount amount từ coupon
   */
  calculateDiscount: (
    coupon: Coupon,
    totalAmount: number
  ): { isValid: boolean; discountAmount: number; message: string } => {
    const now = new Date();
    const startDate = new Date(coupon.startDate);
    const endDate = new Date(coupon.endDate);

    // Kiểm tra ngày
    if (now < startDate || now > endDate) {
      return {
        isValid: false,
        discountAmount: 0,
        message: 'Mã giảm giá đã hết hạn',
      };
    }

    // Kiểm tra số lượng
    if (coupon.usedCount >= coupon.quantity) {
      return {
        isValid: false,
        discountAmount: 0,
        message: 'Mã giảm giá đã hết',
      };
    }

    // Kiểm tra trạng thái
    if (!coupon.isActive) {
      return {
        isValid: false,
        discountAmount: 0,
        message: 'Mã giảm giá không khả dụng',
      };
    }

    // Kiểm tra đơn hàng tối thiểu
    if (totalAmount < coupon.minOrder) {
      return {
        isValid: false,
        discountAmount: 0,
        message: `Đơn hàng tối thiểu ${coupon.minOrder.toLocaleString('vi-VN')}đ để áp dụng mã này`,
      };
    }

    // Tính discount
    let discountAmount = 0;
    if (coupon.discountType === 'PERCENT') {
      discountAmount = Math.round((totalAmount * coupon.discountValue) / 100);
      // Giới hạn discount nếu có maxDiscount
      if (coupon.maxDiscount) {
        discountAmount = Math.min(discountAmount, coupon.maxDiscount);
      }
    } else {
      discountAmount = coupon.discountValue;
    }

    return {
      isValid: true,
      discountAmount,
      message: `Áp dụng thành công! ${coupon.description}`,
    };
  },
};

export default couponService;
