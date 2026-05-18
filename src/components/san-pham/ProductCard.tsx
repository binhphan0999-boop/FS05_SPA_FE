import type { Product } from '../types/product';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onShowInfo: (product: Product) => void;
}

export default function ProductCard({ product, onAddToCart, onShowInfo }: ProductCardProps) {
  return (
    <div className="product-card">
      <div className="product-image-wrapper">
        {product.sale && <span className="sale-badge">ON SALE</span>}
        <img
          src={product.image}
          alt={product.name}
          className="product-image"
        />
      </div>

      <div className="product-info">
        <h2 className="product-name">{product.name}</h2>
        <p className="product-category">{product.category}</p>
        <div className="product-price">{product.price}</div>
        <div style={{ display: 'flex', gap: '8px', marginTop: '1rem' }}>
          <button 
            className="cta-btn" 
            style={{ flex: 1, fontSize: '0.75rem', padding: '8px 4px' }}
            onClick={() => onAddToCart(product)}
          >
            THÊM VÀO GIỎ
          </button>
          <button 
            className="cta-btn" 
            style={{ flex: 1, fontSize: '0.75rem', padding: '8px 4px', backgroundColor: '#14213d' }}
            onClick={() => onShowInfo(product)}
          >
            THÔNG TIN
          </button>
        </div>
      </div>
    </div>
  );
}
