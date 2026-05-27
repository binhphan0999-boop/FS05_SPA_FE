import type { CartItem, CheckoutData } from '../../types/product.type';
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
                  placeholder="Nhập mã ưu đãi (Thử: MONA10)" 
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

            <div className="checkout-form">
              <h3>Thông tin giao hàng</h3>
              <div className="form-group">
                <label>Họ và tên</label>
                <input 
                  type="text" 
                  required 
                  value={checkoutData.name} 
                  onChange={e => setCheckoutData({...checkoutData, name: e.target.value})} 
                  disabled={isFormLoading} // Disable when loading
                  placeholder="Nguyễn Văn A" 
                />
              </div>
              <div className="form-group">
                <label>Số điện thoại</label>
                <input 
                  type="tel" 
                  required 
                  value={checkoutData.phone} 
                  onChange={e => setCheckoutData({...checkoutData, phone: e.target.value})} 
                  disabled={isFormLoading} // Disable when loading
                  placeholder="090xxxxxxx" 
                />
              </div>
              <div className="form-group">
                <label>Địa chỉ nhận hàng</label>
                <textarea 
                  required 
                  value={checkoutData.address} 
                  onChange={e => setCheckoutData({...checkoutData, address: e.target.value})} 
                  placeholder="Số nhà, tên đường, phường/xã..." 
                  rows={3} 
                />
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
            </div>
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
              onClick={onSubmit} 
              className="checkout-btn" 
              disabled={isLoading}
            >
              {isLoading ? 'ĐANG XỬ LÝ...' : 'XÁC NHẬN ĐẶT HÀNG'}
            </button>
          </div>
        </div>
      </div>

      <ConfirmModal
        isOpen={showConfirm}
        title="XÁC NHẬN THÔNG TIN GIAO HÀNG"
        message={`Họ tên: ${checkoutData.name}\nSố điện thoại: ${checkoutData.phone}\nĐịa chỉ: ${checkoutData.address}\nGhi chú: ${checkoutData.note || 'Không có'}`}
        onCancel={() => setShowConfirm(false)}
        onConfirm={onConfirmOrder}
        confirmText="XÁC NHẬN"
        cancelText="HỦY"
      />
    </div>
  );
}
