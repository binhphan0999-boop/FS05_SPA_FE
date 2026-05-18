"use client";

import { useState, useEffect } from 'react';
import type { Product, CartItem, CheckoutData } from '../../types/product.type';
import { productsData } from './data';
import ProductCard from '../../components/san-pham/ProductCard';
import CartSidebar from '../../components/san-pham/CartSidebar';
import ProductInfoModal from '../../components/san-pham/ProductInfoModal';
import ConfirmModal from '../../components/san-pham/ConfirmModal';
import CheckoutView from '../../components/san-pham/CheckoutView';

import '../../styles/san-pham//shop.css';

export default function ShopPage() {
  // State cho tìm kiếm
  const [searchTerm, setSearchTerm] = useState('');

  // State cho sắp xếp
  const [sortBy, setSortBy] = useState('default');

  // State cho phân trang
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  // State cho giỏ hàng
  const [cart, setCart] = useState<CartItem[]>(() => {
    const savedCart = localStorage.getItem('mona-beauty-cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // State cho UI
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isClearCartModalOpen, setIsClearCartModalOpen] = useState(false);
  const [currentView, setCurrentView] = useState<'shop' | 'checkout'>('shop');
  const [isOrderLoading, setIsOrderLoading] = useState(false);

  // State cho modal thông tin sản phẩm
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isProductInfoOpen, setIsProductInfoOpen] = useState(false);

  // State cho checkout
  const [checkoutData, setCheckoutData] = useState<CheckoutData>({
    name: '',
    phone: '',
    address: '',
    note: '',
  });

  // Lưu giỏ hàng vào localStorage
  useEffect(() => {
    localStorage.setItem('mona-beauty-cart', JSON.stringify(cart));
  }, [cart]);

  // Lọc sản phẩm theo tìm kiếm
  const filteredProducts = productsData.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Hàm chuyển đổi giá từ chuỗi sang số (vd: "220,000đ" -> 220000)
  const getNumericPrice = (priceStr: string): number => 
    parseInt(priceStr.replace(/\D/g, ''));

  // Sắp xếp sản phẩm
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-low') {
      return getNumericPrice(a.price) - getNumericPrice(b.price);
    }
    if (sortBy === 'price-high') {
      return getNumericPrice(b.price) - getNumericPrice(a.price);
    }
    return 0;
  });

  // Phân trang
  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = sortedProducts.slice(indexOfFirstItem, indexOfLastItem);

  // Tính toán thông tin giỏ hàng
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalAmountNum = cart.reduce((sum, item) => {
    const price = getNumericPrice(item.product.price);
    return sum + price * item.quantity;
  }, 0);
  const totalAmountStr = totalAmountNum.toLocaleString('vi-VN') + 'đ';

  // Hàm thêm vào giỏ hàng
  const addToCart = (product: Product): void => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.name === product.name);
      if (existing) {
        return prev.map((item) =>
          item.product.name === product.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
  };

  // Hàm xóa sản phẩm khỏi giỏ hàng
  const removeFromCart = (name: string): void => {
    setCart(prev => prev.filter(item => item.product.name !== name));
  };

  // Hàm xóa toàn bộ giỏ hàng
  const clearCart = (): void => {
    setCart([]);
    setIsClearCartModalOpen(false);
  };

  // Hàm cập nhật số lượng sản phẩm
  const updateQuantity = (name: string, delta: number): void => {
    setCart(prev =>
      prev.map(item =>
        item.product.name === name
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  // Hàm đặt số lượng sản phẩm
  const setQuantity = (name: string, value: number): void => {
    setCart(prev =>
      prev.map(item =>
        item.product.name === name
          ? { ...item, quantity: isNaN(value) ? 1 : Math.max(1, value) }
          : item
      )
    );
  };

  // Hàm mở modal thông tin sản phẩm
  const openProductInfo = (product: Product): void => {
    setSelectedProduct(product);
    setIsProductInfoOpen(true);
  };

  // Hàm đóng modal thông tin sản phẩm
  const closeProductInfo = (): void => {
    setIsProductInfoOpen(false);
    setSelectedProduct(null);
  };

  // Hàm xử lý submit checkout
  const handleCheckoutSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    setIsOrderLoading(true);

    const orderPayload = {
      customer: checkoutData,
      items: cart,
      total: totalAmountStr,
      createdAt: new Date().toISOString(),
    };

    try {
      await fetch('https://67280f55270bd0277ef94c99.mockapi.io/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderPayload),
      });

      alert('Đặt hàng thành công! Chúng tôi sẽ liên hệ sớm nhất.');
      setCart([]);
      setCurrentView('shop');
      setIsCartOpen(false);
    } catch (error) {
      alert('Có lỗi xảy ra, vui lòng thử lại sau.');
    } finally {
      setIsOrderLoading(false);
    }
  };

  // Nếu đang ở view thanh toán, render giao diện thanh toán riêng
  if (currentView === 'checkout') {
    return (
      <CheckoutView
        cart={cart}
        totalAmountStr={totalAmountStr}
        totalAmountNum={totalAmountNum}
        checkoutData={checkoutData}
        setCheckoutData={setCheckoutData}
        onBack={() => setCurrentView('shop')}
        onSubmit={handleCheckoutSubmit}
        isLoading={isOrderLoading}
      />
    );
  }

  // Render view cửa hàng
  return (
    <>
      {/* Banner */}
      <div
        className="banner"
        style={{
          backgroundImage:
            "url('/images/image_48.jpg')",
        }}
      >
        <div className="banner-content">
          <h1>SẢN PHẨM</h1>
          <div className="breadcrumb">
            <span>Trang chủ</span>
            <span>›</span>
            <span>Sản phẩm</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="content">
        {/* Top Bar */}
        <div className="filter-bar">
          {filteredProducts.length > 0 ? (
            <p className="result-text">
              Đang hiển thị {indexOfFirstItem + 1}–{Math.min(indexOfLastItem, filteredProducts.length)} trong tổng số {filteredProducts.length} kết quả
            </p>
          ) : (
            <p className="result-text">Không tìm thấy kết quả phù hợp</p>
          )}

          <div className="filter-controls">
            <div className="search-wrapper">
              <span className="search-icon">🔍</span>
              <input
                type="text"
                placeholder="Tìm sản phẩm..."
                className="header-search-input"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
              />
            </div>
            <select
              className="sort-select"
              value={sortBy}
              onChange={(e) => {
                setSortBy(e.target.value);
                setCurrentPage(1);
              }}
            >
              <option value="default">Mặc định</option>
              <option value="price-low">Giá thấp đến cao</option>
              <option value="price-high">Giá cao đến thấp</option>
            </select>
          </div>
        </div>

        {/* Product Grid */}
        <div className="product-grid">
          {currentProducts.length > 0 ? (
            currentProducts.map((product, index) => (
              <ProductCard
                key={index}
                product={product}
                onAddToCart={addToCart}
                onShowInfo={openProductInfo}
              />
            ))
          ) : (
            <div className="no-results-msg">
              <h2>Không tìm thấy sản phẩm nào!</h2>
              <p>
                Chúng tôi không tìm thấy kết quả nào cho từ khóa "{searchTerm}". Vui lòng thử lại bằng tên khác.
              </p>
            </div>
          )}
        </div>

        {/* Pagination */}
        <div className="pagination">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              className={currentPage === page ? 'active' : ''}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </button>
          ))}
          {currentPage < totalPages && (
            <button onClick={() => setCurrentPage(currentPage + 1)}>→</button>
          )}
        </div>
      </div>

      {/* Floating Cart Button */}
      <button className="floating-cart-btn" onClick={() => setIsCartOpen(true)}>
        🛒
        {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
      </button>

      {/* Cart Sidebar */}
      <CartSidebar
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        totalAmountStr={totalAmountStr}
        onRemoveFromCart={removeFromCart}
        onUpdateQuantity={updateQuantity}
        onSetQuantity={setQuantity}
        onClearCart={() => setIsClearCartModalOpen(true)}
        onCheckout={() => {
          setCurrentView('checkout');
          setIsCartOpen(false);
        }}
      />

      {/* Confirm Clear Cart Modal */}
      <ConfirmModal
        isOpen={isClearCartModalOpen}
        title="Xác nhận xóa"
        message="Bạn có chắc chắn muốn xóa toàn bộ sản phẩm khỏi giỏ hàng?"
        onCancel={() => setIsClearCartModalOpen(false)}
        onConfirm={clearCart}
        cancelText="HỦY"
        confirmText="XÓA HẾT"
      />

      {/* Product Info Modal */}
      <ProductInfoModal
        isOpen={isProductInfoOpen}
        product={selectedProduct}
        onClose={closeProductInfo}
        onAddToCart={addToCart}
      />
    </>
  );
}
