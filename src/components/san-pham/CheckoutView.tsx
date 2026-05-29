import type { CartItem, CheckoutData } from '../../types/product.type';
import { useEffect, useState } from 'react';
import CouponList from './CouponList';
import ConfirmModal from './ConfirmModal';

interface CheckoutViewProps {
  cart: CartItem[];
  totalAmountStr: string;
  totalAmountNum: number;
  discountAmount: number;
  couponCode: string;
  setCouponCode: (data: string) => void;
  couponMessage: { text: string; type: 'success' | 'error' } | null;
  onApplyCoupon: () => void;
  checkoutData: CheckoutData;
  setCheckoutData: (data: CheckoutData) => void;
  onBack: () => void;
  onSubmit: (e: React.FormEvent) => void;
  showConfirm: boolean;
  setShowConfirm: (val: boolean) => void;
  onConfirmOrder: () => void;
  isFormLoading: boolean; // New prop for overall form loading
  isLoading: boolean;
}

export default function CheckoutView({
  cart,
  totalAmountStr,
  totalAmountNum,
  discountAmount,
  couponCode,
  setCouponCode,
  couponMessage,
  onApplyCoupon,
  checkoutData,
  setCheckoutData,
  onBack,
  onSubmit,
  showConfirm,
  setShowConfirm,
  onConfirmOrder,
  isFormLoading, // Destructure new prop
  isLoading,
}: CheckoutViewProps) {
  const [phoneError, setPhoneError] = useState<string | null>(null);
  const [nameError, setNameError] = useState<string | null>(null);
  const [addressError, setAddressError] = useState<string | null>(null);

  useEffect(() => {
    // Lấy thông tin người dùng từ localStorage để tự động điền vào form khi vào trang
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        const user = JSON.parse(storedUser);
        const name = user.fullName || 
          `${user.lastName || ''} ${user.middleName || ''} ${ user.firstName || ''}`
            .replace(/\s+/g, ' ')
            .trim();
        
        setCheckoutData({
          ...checkoutData,
          name: checkoutData.name || name,
          phone: checkoutData.phone || user.phone || '',
          address: checkoutData.address || user.address || '',
        });
        // Validate phone number if it's pre-filled
        if (user.phone && !/^0[35789]\d{8}$/.test(user.phone)) {
          setPhoneError('Số điện thoại không đúng định dạng (ví dụ: 0901234567)');
        } else {
          setPhoneError(null);
        }
      } catch (error) {
        console.error("Lỗi khi lấy thông tin người dùng từ localStorage:", error);
      }
    }
  }, []); // Hook này chỉ chạy 1 lần duy nhất khi component được hiển thị

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPhone = e.target.value;
    setCheckoutData({ ...checkoutData, phone: newPhone });
    // Validate phone number
    if (!newPhone.trim()) {
      setPhoneError('Số điện thoại không được để trống');
    } else if (!/^0[35789]\d{8}$/.test(newPhone)) { // Regex cho SĐT Việt Nam 10 số, bắt đầu bằng 0 và đầu số di động phổ biến
      setPhoneError('Số điện thoại không đúng định dạng (ví dụ: 0901234567)');
    } else {
      setPhoneError(null);
    }
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCheckoutData({ ...checkoutData, name: value });
    if (value.trim()) setNameError(null);
  };

  const handleAddressChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setCheckoutData({ ...checkoutData, address: value });
    if (value.trim()) setAddressError(null);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Ngăn chặn hành vi submit mặc định của form
    let isValid = true;

    // Kiểm tra lại định dạng số điện thoại trước khi submit cuối cùng
    if (!checkoutData.phone.trim()) {
      setPhoneError('Số điện thoại không được để trống');
      isValid = false;
    } else if (!/^0[35789]\d{8}$/.test(checkoutData.phone)) {
      setPhoneError('Số điện thoại không đúng định dạng (ví dụ: 0901234567)');
      isValid = false;
    } else {
      setPhoneError(null);
    }

    // Kiểm tra Họ tên
    if (!checkoutData.name.trim()) {
      setNameError('Vui lòng nhập họ và tên');
      isValid = false;
    } else {
      setNameError(null);
    }

    // Kiểm tra Địa chỉ
    if (!checkoutData.address.trim()) {
      setAddressError('Vui lòng nhập địa chỉ nhận hàng');
      isValid = false;
    } else {
      setAddressError(null);
    }

    // Nếu tất cả các kiểm tra đều hợp lệ, gọi hàm onSubmit của component cha
    if (isValid) {
      onSubmit(e);
    }
  };

  return (
    <div className="checkout-view-container">
      <div className="checkout-container-inner">
        <div className="checkout-back-btn" onClick={onBack}>← Quay lại cửa hàng</div>
        <h1>CHI TIẾT THANH TOÁN</h1>

        <div className="checkout-grid">
          {/* Cột trái: Danh sách sản phẩm và Form */}
          <div>
            <div className="checkout-box">
              <h3>Sản phẩm của bạn</h3>
              <table className="order-table">
                <thead>
                  <tr>
                    <th>Sản phẩm</th>
                    <th>Số lượng</th>
                    <th>Thành tiền</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((item) => (
                    <tr key={item.product.name}>
                      <td className="order-item-cell">
                        <img src={item.product.image} alt={item.product.name} />
                        <span>{item.product.name}</span>
                      </td>
                      <td>{item.quantity}</td>
                      <td>{item.product.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              
              <div className="order-summary-footer">
                <div className="summary-line">
                  Tạm tính: <span>{totalAmountStr}</span>
                </div>
                {discountAmount > 0 && (
                  <div className="summary-line discount">
                    Giảm giá: -{discountAmount.toLocaleString('vi-VN')}đ
                  </div>
                )}
                <div className="summary-total">
                  TỔNG CỘNG: <span>{totalAmountNum.toLocaleString('vi-VN')}đ</span>
                </div>
              </div>
            </div>

            <div className="coupon-section checkout-box">
              <h3>Mã giảm giá</h3>
              <div className="coupon-input-group">
                <input 
                  type="text" 
                  placeholder="Nhập mã ưu đãi " 
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                />
                <button type="button" onClick={onApplyCoupon}>Áp dụng</button>
              </div>
              {couponMessage && (
                <div className={`coupon-message ${couponMessage.type}`}>
                  {couponMessage.text}
                </div>
              )}
              
              <CouponList 
                totalAmount={totalAmountNum}
                onSelectCoupon={setCouponCode}
                selectedCode={couponCode}
              />
            </div>

            <form id="checkout-form" className="checkout-form" onSubmit={handleFormSubmit}>
              <h3>Thông tin giao hàng</h3>
              <div className="form-group">
                <label>Họ và tên</label>
                <input 
                  type="text" 
                  value={checkoutData.name} 
                  onChange={handleNameChange} 
                  disabled={isFormLoading} // Disable when loading
                  placeholder="Nguyễn Văn A" 
                />
                {nameError && <div className="error-message" style={{ color: '#d93025', fontSize: '12px', marginTop: '5px' }}>{nameError}</div>}
              </div>
              <div className="form-group">
                <label>Số điện thoại</label>
                <input 
                  type="tel" 
                  value={checkoutData.phone} 
                  onChange={handlePhoneChange} 
                  disabled={isFormLoading} // Disable when loading
                  placeholder="090xxxxxxx" 
                />
                {phoneError && <div className="error-message" style={{ color: '#d93025', fontSize: '12px', marginTop: '5px' }}>{phoneError}</div>}
              </div>
              <div className="form-group">
                <label>Địa chỉ nhận hàng</label>
                <textarea 
                  value={checkoutData.address} 
                  onChange={handleAddressChange} 
                  placeholder="Số nhà, tên đường, phường/xã..." 
                  rows={3} 
                />
                {addressError && <div className="error-message" style={{ color: '#d93025', fontSize: '12px', marginTop: '5px' }}>{addressError}</div>}
              </div>
              <div className="form-group">
                <label>Ghi chú đơn hàng</label>
                <input 
                  type="text" 
                  value={checkoutData.note} 
                  onChange={e => setCheckoutData({...checkoutData, note: e.target.value})} 
                  placeholder="Ví dụ: Giao giờ hành chính..." 
                />
              </div>
            </form>
          </div>

          {/* Cột phải: QR Code */}
          <div className="qr-section">
            <div className="payment-method-header">
              <h3>Phương thức thanh toán</h3>
              <div className="payment-options">
                <label className="payment-option-label">
                  <input 
                    type="radio" 
                    name="paymentMethod" 
                    checked={checkoutData.paymentMethod === 'cod'} 
                    onChange={() => setCheckoutData({...checkoutData, paymentMethod: 'cod'})} 
                  />
                  <span>Thanh toán khi nhận hàng (COD)</span>
                </label>
                <label className="payment-option-label">
                  <input 
                    type="radio" 
                    name="paymentMethod" 
                    checked={checkoutData.paymentMethod === 'bank'} 
                    onChange={() => setCheckoutData({...checkoutData, paymentMethod: 'bank'})} 
                  />
                  <span>Chuyển khoản ngân hàng (QR Code)</span>
                </label>
              </div>
            </div>

            {checkoutData.paymentMethod === 'bank' ? (
              <>
                <h3>QUÉT MÃ CHUYỂN KHOẢN</h3>
                <p style={{ fontSize: '0.9rem', color: '#666' }}>Vui lòng quét mã bên dưới để thanh toán đơn hàng.</p>
                
                <img 
                  src={`https://img.vietqr.io/image/MB-0346852333-compact2.png?amount=${totalAmountNum}&addInfo=THANH%20TOAN%20MONA%20${checkoutData.phone}&accountName=NGUYEN%20HUU%20DAT`} 
                  alt="QR Thanh toán" 
                  className="qr-image" 
                />

                <div className="bank-info-box">
                  <p><strong>Ngân hàng:</strong> MB Bank</p>
                  <p><strong>Số TK:</strong> 0346852333</p>
                  <p><strong>Chủ TK:</strong> NGUYEN HUU DAT</p>
                </div>
              </>
            ) : (
              <div className="cod-info-box">
                <i className="fa fa-truck cod-icon"></i>
                <h3>THANH TOÁN KHI NHẬN HÀNG</h3>
                <p className="result-text">
                  Bạn sẽ thanh toán bằng tiền mặt khi nhận sản phẩm.
                </p>
              </div>
            )}

            <button 
              form="checkout-form"
              type="submit" 
              className="checkout-btn" 
              disabled={isLoading || isFormLoading}
            >
              {isLoading || isFormLoading ? 'ĐANG XỬ LÝ...' : 'XÁC NHẬN ĐẶT HÀNG'}
            </button>
          </div>
        </div>
      </div>

      <ConfirmModal
        isOpen={showConfirm}
        title="XÁC NHẬN THÔNG TIN GIAO HÀNG"
        message={
          <div className="confirm-info-summary" style={{ background: '#f8f9fa', padding: '20px', borderRadius: '12px', border: '1px solid #e9ecef' }}>
            <p style={{ color: '#666', marginBottom: '15px', fontStyle: 'italic', fontSize: '0.9rem' }}>Vui lòng kiểm tra kỹ thông tin trước khi xác nhận đặt hàng:</p>
            <div className="confirm-info-row" style={{ display: 'flex', marginBottom: '12px', alignItems: 'flex-start' }}>
              <span className="confirm-label" style={{ minWidth: '140px', fontWeight: 600, color: '#444' }}>
                <i className="fa fa-user" style={{ marginRight: '8px', color: '#fca311' }}></i>Người nhận:
              </span>
              <span className="confirm-value" style={{ color: '#14213d', fontWeight: 700 }}>{checkoutData.name}</span>
            </div>
            <div className="confirm-info-row" style={{ display: 'flex', marginBottom: '12px', alignItems: 'flex-start' }}>
              <span className="confirm-label" style={{ minWidth: '140px', fontWeight: 600, color: '#444' }}>
                <i className="fa fa-phone" style={{ marginRight: '8px', color: '#fca311' }}></i>Số điện thoại:
              </span>
              <span className="confirm-value" style={{ color: '#14213d', fontWeight: 700 }}>{checkoutData.phone}</span>
            </div>
            <div className="confirm-info-row" style={{ display: 'flex', marginBottom: '12px', alignItems: 'flex-start' }}>
              <span className="confirm-label" style={{ minWidth: '140px', fontWeight: 600, color: '#444' }}>
                <i className="fa fa-map-marker" style={{ marginRight: '8px', color: '#fca311' }}></i>Địa chỉ:
              </span>
              <span className="confirm-value" style={{ color: '#14213d', lineHeight: '1.4' }}>{checkoutData.address}</span>
            </div>
            <div className="confirm-info-row" style={{ display: 'flex', alignItems: 'flex-start' }}>
              <span className="confirm-label" style={{ minWidth: '140px', fontWeight: 600, color: '#444' }}>
                <i className="fa fa-sticky-note" style={{ marginRight: '8px', color: '#fca311' }}></i>Ghi chú:
              </span>
              <span className="confirm-value" style={{ color: '#666', fontStyle: checkoutData.note ? 'normal' : 'italic' }}>{checkoutData.note || 'Không có ghi chú'}</span>
            </div>
          </div>
        }
        onCancel={() => setShowConfirm(false)}
        onConfirm={onConfirmOrder}
        confirmText="XÁC NHẬN"
        cancelText="HỦY"
      />
    </div>
  );
}
