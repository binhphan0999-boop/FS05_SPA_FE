import type { CartItem } from '../types/product';

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  totalAmountStr: string;
  onRemoveFromCart: (name: string) => void;
  onUpdateQuantity: (name: string, delta: number) => void;
  onSetQuantity: (name: string, value: number) => void;
  onClearCart: () => void;
  onCheckout: () => void;
}

export default function CartSidebar({
  isOpen,
  onClose,
  cart,
  totalAmountStr,
  onRemoveFromCart,
  onUpdateQuantity,
  onSetQuantity,
  onClearCart,
  onCheckout,
}: CartSidebarProps) {
  if (!isOpen) return null;

  return (
    <div className="cart-overlay" onClick={onClose}>
      <div className="cart-sidebar" onClick={(e) => e.stopPropagation()}>
        <div className="cart-header">
          <h2>GIỎ HÀNG</h2>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>
        
        <div className="cart-items">
          {cart.length === 0 ? (
            <p className="empty-msg">Chưa có sản phẩm nào trong giỏ hàng.</p>
          ) : (
            cart.map((item) => (
              <div key={item.product.name} className="cart-item">
                <img src={item.product.image} alt={item.product.name} />
                <div className="cart-item-info">
                  <h4>{item.product.name}</h4>
                  <p className="item-price">{item.product.price}</p>
                  <div className="quantity-controls">
                    <button onClick={() => onUpdateQuantity(item.product.name, -1)}>-</button>
                    <input 
                      type="number" 
                      className="quantity-input"
                      value={item.quantity} 
                      min="1"
                      onChange={(e) => onSetQuantity(item.product.name, parseInt(e.target.value))}
                    />
                    <button onClick={() => onUpdateQuantity(item.product.name, 1)}>+</button>
                  </div>
                </div>
                <button className="remove-btn" onClick={() => onRemoveFromCart(item.product.name)}>🗑️</button>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="cart-footer">
            <div className="cart-total">
              <span>TỔNG CỘNG:</span>
              <span>{totalAmountStr}</span>
            </div>
            <button className="clear-cart-btn" onClick={onClearCart}>XÓA TẤT CẢ</button>
            <button className="checkout-btn" onClick={onCheckout}>THANH TOÁN</button>
          </div>
        )}
      </div>
    </div>
  );
}
