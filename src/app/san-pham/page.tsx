"use client";

import { useState, useEffect } from 'react';
import type { Product, CartItem, CheckoutData } from '../../types/product.type';
import productService from '../../services/san-pham/product.service';
import couponService from '../../services/san-pham/coupon.service';
import userService from '../../services/user/user.service';
import orderService from '../../services/order/order.service';
import ProductCard from '../../components/san-pham/ProductCard';
import CartSidebar from '../../components/san-pham/CartSidebar';
import ProductInfoModal from '../../components/san-pham/ProductInfoModal';
import CheckoutView from '../../components/san-pham/CheckoutView';

import ConfirmModal from '@/components/san-pham/ConfirmModal';

export default function ShopPage() {
  // State chứa danh sách sản phẩm từ backend
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch data từ backend
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        // Sử dụng productService để lấy dữ liệu
        const data = await productService.getProducts();
        setProducts(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // State cho tìm kiếm
  const [searchTerm, setSearchTerm] = useState('');

  // State cho sắp xếp
  const [sortBy, setSortBy] = useState('default');

  // State cho phân trang
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  // State cho giỏ hàng
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isHydrated, setIsHydrated] = useState(false);

  // Load giỏ hàng từ localStorage sau khi component mount (chỉ chạy ở phía client)
  useEffect(() => {
    const savedCart = localStorage.getItem('mona-beauty-cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
    setIsHydrated(true);
  }, []);

  // State cho UI
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isClearCartModalOpen, setIsClearCartModalOpen] = useState(false);
  const [currentView, setCurrentView] = useState<'shop' | 'checkout'>('shop');
  const [isOrderLoading, setIsOrderLoading] = useState(false);
  const [isOrderSuccessModalOpen, setIsOrderSuccessModalOpen] = useState(false);

  // State cho modal thông tin sản phẩm
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isProductInfoOpen, setIsProductInfoOpen] = useState(false);

  // State cho checkout
  const [checkoutData, setCheckoutData] = useState<any>({
    name: '',
    phone: '',
    address: '',
    note: '',
    paymentMethod: 'cod',
  });

  // State cho user ID
  const [currentUserId, setCurrentUserId] = useState<string | null>(null);

  // State cho coupon ID
  const [selectedCouponId, setSelectedCouponId] = useState<string | null>(null);

  // State cho coupon
  const [couponCode, setCouponCode] = useState('');
  const [discountAmount, setDiscountAmount] = useState(0);
  const [showConfirm, setShowConfirm] = useState(false);
  const [isProfileLoading, setIsProfileLoading] = useState(true); // New state
  const [isDeliveryInfoLoading, setIsDeliveryInfoLoading] = useState(false); // Default false if not used
  const [couponMessage, setCouponMessage] = useState<{ text: string; type: 'success' | 'error' } | null>(null);
  const [availableCoupons, setAvailableCoupons] = useState<any[]>([]);

  // Load coupons khi component mount
  useEffect(() => {
    const loadCoupons = async () => {
      try {
        const coupons = await couponService.getCoupons();
        setAvailableCoupons(coupons);
      } catch (error) {
        console.error('Lỗi khi tải coupons:', error);
      }
    };
    loadCoupons();
  }, []);

  // Lấy User ID từ localStorage (không tự động điền form)
  useEffect(() => {
    const userStr = localStorage.getItem('user');
    if (userStr) {
      try {
        const user = JSON.parse(userStr);
        setCurrentUserId(user.id);
      } catch (e) {
        console.error('Dữ liệu user không hợp lệ');
      }
    }
    setIsProfileLoading(false);
  }, []);

  // Tính toán thông tin giỏ hàng trước để dùng trong applyCoupon
  const getNumericPrice = (priceStr: string): number => 
    parseInt(priceStr.replace(/\D/g, ''));

  const totalAmountNum = cart.reduce((sum, item) => {
    const price = getNumericPrice(item.product.price);
    return sum + price * item.quantity;
  }, 0);

  const applyCoupon = async () => {
    if (!couponCode.trim()) {
      setCouponMessage({ text: 'Vui lòng nhập mã giảm giá', type: 'error' });
      return;
    }

    console.log('Applying coupon:', couponCode, 'Total:', totalAmountNum, 'Available:', availableCoupons.length);

    // Tìm coupon từ list
    const foundCoupon = availableCoupons.find(
      c => c.code.toUpperCase() === couponCode.toUpperCase()
    );

    if (!foundCoupon) {
      console.log('Coupon not found');
      setCouponMessage({ text: 'Mã giảm giá không tồn tại', type: 'error' });
      setDiscountAmount(0);
      return;
    }

    console.log('Found coupon:', foundCoupon);

    // Tính discount từ coupon
    const validation = couponService.calculateDiscount(foundCoupon, totalAmountNum);

    console.log('Validation result:', validation);

    if (validation.isValid) {
      setDiscountAmount(validation.discountAmount);
      setSelectedCouponId(foundCoupon.id);
      setCouponMessage({
        text: validation.message,
        type: 'success'
      });
    } else {
      setDiscountAmount(0);
      setSelectedCouponId(null);
      setCouponMessage({
        text: validation.message,
        type: 'error'
      });
    }
  };

  // Lưu giỏ hàng vào localStorage
  useEffect(() => {
    if (isHydrated) {
      localStorage.setItem('mona-beauty-cart', JSON.stringify(cart));
    }
  }, [cart, isHydrated]);

  // Lọc sản phẩm theo tìm kiếm
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

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

  // Bước 1: Mở Modal xác nhận
  const handleCheckoutSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    setShowConfirm(true);
  };

  // Bước 2: Gọi API createOrder sau khi nhấn xác nhận trên Modal
  const confirmOrder = async () => {
    setShowConfirm(false);

    let userId = currentUserId;

    if (!userId) {
      try {
        const userStr = localStorage.getItem('user');
        if (userStr) {
          const user = JSON.parse(userStr);
          userId = user.id;
          setCurrentUserId(user.id);
        }
      } catch (err) {
        console.error("Xác thực người dùng thất bại:", err);
      }
    }

    if (!userId) {
      alert('Vui lòng đăng nhập để thực hiện đặt hàng.');
      return;
    }

    setIsOrderLoading(true);

    try {
      // Map đúng payload theo yêu cầu của BE API
      const payload = {
        userId: userId,
        customerName: checkoutData.name,
        customerPhone: checkoutData.phone,
        customerAddress: checkoutData.address,
        couponId: selectedCouponId || "",
        deliveryPhone: checkoutData.phone,
        deliveryAddress: checkoutData.address,
        deliveryNote: checkoutData.note,
        items: cart.map(item => ({
          productId: item.product.id,
          quantity: item.quantity
        }))
      };
      console.log("PAYLOAD SEND TO BE:", payload);
      await orderService.createOrder(payload);

      // Xử lý thành công: clear cart, reset form, hiện success modal
      setCart([]);
      setSelectedCouponId(null);
      setCouponCode('');
      setDiscountAmount(0);
      setCheckoutData({
        name: '',
        phone: '',
        address: '',
        note: '',
        paymentMethod: 'cod',
      });
      setCurrentView('shop');
      setIsCartOpen(false);
      setIsOrderSuccessModalOpen(true);
    } catch (error: any) {
      alert(error.message || 'Đặt hàng thất bại, vui lòng kiểm tra lại.');
      console.error('Create order error:', error);
    } finally {
      setIsOrderLoading(false);
    }
  };

  // Hiển thị trạng thái loading hoặc lỗi cho toàn bộ trang
  if (loading || isProfileLoading || isDeliveryInfoLoading) {
    return <div className="text-center py-20">Đang tải dữ liệu...</div>;
  }
  if (error) return <div className="text-center py-20 text-red-500">Lỗi: {error}</div>;

  // Nếu đang ở view thanh toán, render giao diện thanh toán riêng
  if (currentView === 'checkout') {
    return (
      <CheckoutView
        cart={cart}
        totalAmountStr={totalAmountStr}
        totalAmountNum={totalAmountNum - discountAmount}
        discountAmount={discountAmount}
        couponCode={couponCode}
        setCouponCode={(code) => {
          setCouponCode(code);
          setDiscountAmount(0);
          setSelectedCouponId(null);
          setCouponMessage(null); // Xóa thông báo khi người dùng nhập mã mới
        }}
        couponMessage={couponMessage}
        onApplyCoupon={applyCoupon}
        checkoutData={checkoutData}
        setCheckoutData={setCheckoutData}
        onBack={() => setCurrentView('shop')}
        onSubmit={handleCheckoutSubmit}
        showConfirm={showConfirm}
        setShowConfirm={setShowConfirm}
        onConfirmOrder={confirmOrder}
        isFormLoading={isProfileLoading || isDeliveryInfoLoading} // Pass overall loading state
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

      {/* Success Modal */}
      {isOrderSuccessModalOpen && (
        <div className="cart-overlay" onClick={() => setIsOrderSuccessModalOpen(false)}>
          <div className="order-success-modal" onClick={(e) => e.stopPropagation()}>
            <i className="fa fa-check-circle success-icon"></i>
            <h2>ĐẶT HÀNG THÀNH CÔNG!</h2>
            <p>Cảm ơn bạn đã tin tưởng Mona Beauty. Chúng tôi sẽ liên hệ với bạn qua số điện thoại để xác nhận đơn hàng trong thời gian sớm nhất.</p>
            <button className="cta-btn" onClick={() => setIsOrderSuccessModalOpen(false)}>
              TIẾP TỤC MUA SẮM
            </button>
          </div>
        </div>
      )}
    </>
  );
}
