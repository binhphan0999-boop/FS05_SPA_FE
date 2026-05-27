import { useEffect, useState } from 'react';
import type { Coupon } from '../../types/coupon.type';
import couponService from '../../services/san-pham/coupon.service';

interface CouponListProps {
  totalAmount: number;
  onSelectCoupon: (code: string) => void;
  selectedCode?: string;
}

export default function CouponList({
  totalAmount,
  onSelectCoupon,
  selectedCode,
}: CouponListProps) {
  const [coupons, setCoupons] = useState<Coupon[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCoupons = async () => {
      try {
        setLoading(true);
        const data = await couponService.getCoupons();
        setCoupons(data);
      } catch (error) {
        console.error('Lỗi khi tải coupon:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCoupons();
  }, []);

  if (loading) {
    return <div className="coupon-list-loading">Đang tải mã giảm giá...</div>;
  }

  return (
    <div className="coupon-list">
      <h4>Mã giảm giá khả dụng</h4>
      {coupons.length === 0 ? (
        <p className="no-coupon">Không có mã giảm giá nào</p>
      ) : (
        <div className="coupon-items">
          {coupons.map((coupon) => {
            const validation = couponService.calculateDiscount(coupon, totalAmount);
            const isEligible = validation.isValid;

            return (
              <div
                key={coupon.id}
                className={`coupon-item ${isEligible ? 'eligible' : 'disabled'} ${
                  selectedCode === coupon.code ? 'selected' : ''
                }`}
                onClick={() => isEligible && onSelectCoupon(coupon.code)}
              >
                <div className="coupon-code">{coupon.code}</div>
                <div className="coupon-info">
                  <div className="coupon-description">{coupon.description}</div>
                  <div className="coupon-value">
                    {coupon.discountType === 'PERCENT'
                      ? `Giảm ${coupon.discountValue}%`
                      : `Giảm ${coupon.discountValue.toLocaleString('vi-VN')}đ`}
                    {coupon.discountType === 'PERCENT' && coupon.maxDiscount && (
                      <span> (tối đa {coupon.maxDiscount.toLocaleString('vi-VN')}đ)</span>
                    )}
                  </div>
                  {!isEligible && (
                    <div className="coupon-reason">
                      {validation.message}
                    </div>
                  )}
                </div>
                {isEligible && (
                  <input
                    type="radio"
                    name="coupon"
                    checked={selectedCode === coupon.code}
                    onChange={() => onSelectCoupon(coupon.code)}
                  />
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
