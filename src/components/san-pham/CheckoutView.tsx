import type { CartItem, CheckoutData } from '../types/product';

interface CheckoutViewProps {
  cart: CartItem[];
  totalAmountStr: string;
  totalAmountNum: number;
  checkoutData: CheckoutData;
  setCheckoutData: (data: CheckoutData) => void;
  onBack: () => void;
  onSubmit: (e: React.FormEvent) => void;
  isLoading: boolean;
}

export default function CheckoutView({
  cart,
  totalAmountStr,
  totalAmountNum,
  checkoutData,
  setCheckoutData,
  onBack,
  onSubmit,
  isLoading,
}: CheckoutViewProps) {
  return (
    <div className="checkout-view-container">
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="checkout-back-btn" onClick={onBack}>← Quay lại cửa hàng</div>
        <h1>CHI TIẾT THANH TOÁN</h1>

        <div className="checkout-grid">
          {/* Cột trái: Danh sách sản phẩm và Form */}
          <div>
            <div style={{ background: '#fff', padding: '1.5rem', borderRadius: '1rem', border: '1px solid #eee', marginBottom: '2rem' }}>
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
                      <td style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <img src={item.product.image} alt={item.product.name} />
                        <span>{item.product.name}</span>
                      </td>
                      <td>{item.quantity}</td>
                      <td>{item.product.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div style={{ textAlign: 'right', fontSize: '1.2rem', fontWeight: 'bold' }}>
                TỔNG CỘNG: <span style={{ color: '#c97d60' }}>{totalAmountStr}</span>
              </div>
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
            <h3>QUÉT MÃ CHUYỂN KHOẢN</h3>
            <p style={{ fontSize: '0.9rem', color: '#666' }}>Vui lòng quét mã bên dưới để thanh toán đơn hàng.</p>
            
            <img 
              src={`https://img.vietqr.io/image/MB-0346852333-compact2.png?amount=${totalAmountNum}&addInfo=THANH%20TOAN%20MONA%20${checkoutData.phone}&accountName=NGUYEN%20HUU%20DAT`} 
              alt="QR Thanh toán" 
              className="qr-image" 
              style={{ width: '250px', height: '250px' }}
            />

            <div style={{ textAlign: 'left', background: '#fff', padding: '1rem', borderRadius: '0.5rem', marginTop: '1rem' }}>
              <p><strong>Ngân hàng:</strong> MB Bank</p>
              <p><strong>Số TK:</strong> 0346852333</p>
              <p><strong>Chủ TK:</strong> NGUYEN HUU DAT</p>
            </div>

            <button 
              onClick={onSubmit} 
              className="checkout-btn" 
              style={{ marginTop: '2rem' }} 
              disabled={isLoading}
            >
              {isLoading ? 'ĐANG XỬ LÝ...' : 'XÁC NHẬN ĐẶT HÀNG'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
