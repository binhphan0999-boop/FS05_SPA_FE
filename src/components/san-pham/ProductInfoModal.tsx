import type { Product } from '../types/product';

interface ProductInfoModalProps {
  isOpen: boolean;
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
}

export default function ProductInfoModal({
  isOpen,
  product,
  onClose,
  onAddToCart,
}: ProductInfoModalProps) {
  if (!isOpen || !product) return null;

  return (
    <div className="cart-overlay" onClick={onClose}>
      <div className="product-info-modal" onClick={(e) => e.stopPropagation()}>
        <div className="product-info-header">
          <h2>THÔNG TIN SẢN PHẨM</h2>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>
        <div className="product-info-content">
          <div className="info-image-column">
            <img src={product.image} alt={product.name} className="product-info-image" />
          </div>
          <div className="info-details-column">
            <p className="product-category" style={{ marginBottom: '0.5rem' }}>
              {product.category}
            </p>
            <h3>{product.name}</h3>
            {product.sale && (
              <span className="sale-badge" style={{ position: 'static', display: 'inline-block', marginBottom: '1rem' }}>
                ON SALE
              </span>
            )}
            
            <div className="info-price-large">{product.price}</div>
            
            <p style={{ color: '#666' }}>
              {product.info || "Thông tin chi tiết về sản phẩm đang được cập nhật."}
            </p>

            <div style={{ marginTop: 'auto', paddingTop: '2rem' }}>
              <button
                className="cta-btn"
                style={{ width: '100%', padding: '1.25rem' }}
                onClick={() => {
                  onAddToCart(product);
                  onClose();
                }}
              >
                THÊM VÀO GIỎ HÀNG
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
