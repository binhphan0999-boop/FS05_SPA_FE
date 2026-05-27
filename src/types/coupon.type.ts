export interface Coupon {
  id: string;
  code: string;
  description: string;
  discountType: 'PERCENT' | 'FIXED';
  discountValue: number;
  minOrder: number;
  maxDiscount: number | null;
  quantity: number;
  usedCount: number;
  startDate: string;
  endDate: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface CouponResponse {
  data: Coupon[];
  pagination: {
    total: number;
    page: number;
    perPage: number;
    totalPages: number;
  };
}

export interface CouponValidation {
  isValid: boolean;
  discountAmount: number;
  message: string;
  coupon?: Coupon;
}
