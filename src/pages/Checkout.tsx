import { useState, useEffect } from 'react'
import { useNavigate, Link, useLocation } from 'react-router-dom'
import './Checkout.css'

/**
 * Checkout page - Trang thanh toán
 * Cho phép người dùng nhập thông tin giao hàng và thanh toán
 * Có thể truy cập trực tiếp các route: /checkout, /checkout/payment, /checkout/review
 */
const Checkout = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [isProcessing, setIsProcessing] = useState(false)

  // Xác định step từ URL - Determine step from URL
  const getStepFromPath = (): 'shipping' | 'payment' | 'review' => {
    const path = location.pathname
    if (path.includes('/review')) return 'review'
    if (path.includes('/payment')) return 'payment'
    return 'shipping'
  }

  const step = getStepFromPath()

  // Load form data from localStorage - Tải dữ liệu form từ localStorage
  const loadFormData = () => {
    const savedShipping = localStorage.getItem('checkout_shipping')
    const savedPayment = localStorage.getItem('checkout_payment')
    return {
      shipping: savedShipping ? JSON.parse(savedShipping) : {
        fullName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        postalCode: '',
        country: 'Vietnam',
      },
      payment: savedPayment ? JSON.parse(savedPayment) : {
        cardNumber: '',
        cardName: '',
        expiryDate: '',
        cvv: '',
        paymentMethod: 'card',
        bankName: '', // Thêm trường bank name
      },
    }
  }

  // Form state - Thông tin giao hàng
  const [shippingInfo, setShippingInfo] = useState(loadFormData().shipping)

  // Form state - Thông tin thanh toán
  const [paymentInfo, setPaymentInfo] = useState(loadFormData().payment)

  // Save form data to localStorage when changed - Lưu dữ liệu form vào localStorage khi thay đổi
  useEffect(() => {
    localStorage.setItem('checkout_shipping', JSON.stringify(shippingInfo))
  }, [shippingInfo])

  useEffect(() => {
    localStorage.setItem('checkout_payment', JSON.stringify(paymentInfo))
  }, [paymentInfo])

  // Mock cart items - Trong thực tế sẽ lấy từ context hoặc state management
  const cartItems = [
    {
      id: 1,
      name: 'Vitamin C Serum',
      price: 45.99,
      quantity: 2,
      image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=300&h=300&fit=crop',
    },
    {
      id: 2,
      name: 'Matte Lipstick',
      price: 24.99,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=300&h=300&fit=crop',
    },
  ]

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = 5.99
  const tax = subtotal * 0.1 // 10% tax
  const total = subtotal + shipping + tax

  // Validation functions - Kiểm tra tính hợp lệ của dữ liệu
  const validateShipping = () => {
    return (
      shippingInfo.fullName.trim() !== '' &&
      shippingInfo.email.trim() !== '' &&
      shippingInfo.phone.trim() !== '' &&
      shippingInfo.address.trim() !== '' &&
      shippingInfo.city.trim() !== '' &&
      shippingInfo.postalCode.trim() !== ''
    )
  }

  const validatePayment = () => {
    if (paymentInfo.paymentMethod === 'cod') {
      return true // COD không cần thông tin thẻ
    }
    return (
      paymentInfo.cardNumber.trim() !== '' &&
      paymentInfo.cardName.trim() !== '' &&
      paymentInfo.expiryDate.trim() !== '' &&
      paymentInfo.cvv.trim() !== ''
    )
  }

  // Handle form submission - Xử lý submit form và navigate đến route tương ứng
  const handleShippingSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateShipping()) {
      navigate('/checkout/payment')
    }
  }

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validatePayment()) {
      navigate('/checkout/review')
    }
  }

  const handlePlaceOrder = async () => {
    setIsProcessing(true)
    // Simulate API call - Giả lập gọi API
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsProcessing(false)
    // Clear form data from localStorage - Xóa dữ liệu form khỏi localStorage
    localStorage.removeItem('checkout_shipping')
    localStorage.removeItem('checkout_payment')
    // Navigate to success page or order confirmation
    navigate('/orders')
  }

  return (
    <div className="checkout-page">
      <div className="checkout-container">
        {/* Progress Steps - Các bước thanh toán với link để truy cập trực tiếp */}
        <div className="checkout-progress">
          <Link to="/checkout" className={`progress-step ${step === 'shipping' ? 'active' : step !== 'shipping' ? 'completed' : ''}`}>
            <div className="step-number">1</div>
            <div className="step-label">Shipping</div>
          </Link>
          <div className={`progress-line ${step !== 'shipping' ? 'completed' : ''}`}></div>
          <Link to="/checkout/payment" className={`progress-step ${step === 'payment' ? 'active' : step === 'review' ? 'completed' : ''}`}>
            <div className="step-number">2</div>
            <div className="step-label">Payment</div>
          </Link>
          <div className={`progress-line ${step === 'review' ? 'completed' : ''}`}></div>
          <Link to="/checkout/review" className={`progress-step ${step === 'review' ? 'active' : ''}`}>
            <div className="step-number">3</div>
            <div className="step-label">Review</div>
          </Link>
        </div>

        <div className="checkout-content">
          <div className="checkout-form-section">
            {/* Shipping Information Form */}
            {step === 'shipping' && (
              <form onSubmit={handleShippingSubmit} className="checkout-form">
                <h2 className="form-title">Shipping Information</h2>
                <div className="form-group">
                  <label htmlFor="fullName">Full Name *</label>
                  <input
                    type="text"
                    id="fullName"
                    value={shippingInfo.fullName}
                    onChange={(e) => setShippingInfo({ ...shippingInfo, fullName: e.target.value })}
                    required
                    placeholder="Enter your full name"
                  />
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input
                      type="email"
                      id="email"
                      value={shippingInfo.email}
                      onChange={(e) => setShippingInfo({ ...shippingInfo, email: e.target.value })}
                      required
                      placeholder="your@email.com"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone *</label>
                    <input
                      type="tel"
                      id="phone"
                      value={shippingInfo.phone}
                      onChange={(e) => setShippingInfo({ ...shippingInfo, phone: e.target.value })}
                      required
                      placeholder="+84 123 456 789"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="address">Address *</label>
                  <input
                    type="text"
                    id="address"
                    value={shippingInfo.address}
                    onChange={(e) => setShippingInfo({ ...shippingInfo, address: e.target.value })}
                    required
                    placeholder="Street address"
                  />
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="city">City *</label>
                    <input
                      type="text"
                      id="city"
                      value={shippingInfo.city}
                      onChange={(e) => setShippingInfo({ ...shippingInfo, city: e.target.value })}
                      required
                      placeholder="City"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="postalCode">Postal Code *</label>
                    <input
                      type="text"
                      id="postalCode"
                      value={shippingInfo.postalCode}
                      onChange={(e) => setShippingInfo({ ...shippingInfo, postalCode: e.target.value })}
                      required
                      placeholder="12345"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="country">Country *</label>
                  <select
                    id="country"
                    value={shippingInfo.country}
                    onChange={(e) => setShippingInfo({ ...shippingInfo, country: e.target.value })}
                    required
                  >
                    <option value="Vietnam">Vietnam</option>
                    <option value="USA">United States</option>
                    <option value="UK">United Kingdom</option>
                    <option value="Canada">Canada</option>
                  </select>
                </div>
                <button type="submit" className="btn-continue">
                  Continue to Payment
                </button>
              </form>
            )}

            {/* Payment Information Form */}
            {step === 'payment' && (
              <form onSubmit={handlePaymentSubmit} className="checkout-form">
                <h2 className="form-title">Payment Information</h2>
                <div className="payment-methods">
                  <label className="payment-method-option">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="card"
                      checked={paymentInfo.paymentMethod === 'card'}
                      onChange={(e) => setPaymentInfo({ ...paymentInfo, paymentMethod: e.target.value as 'card' | 'cod' })}
                    />
                    <span>Credit/Debit Card</span>
                  </label>
                  <label className="payment-method-option">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="cod"
                      checked={paymentInfo.paymentMethod === 'cod'}
                      onChange={(e) => setPaymentInfo({ ...paymentInfo, paymentMethod: e.target.value as 'card' | 'cod' })}
                    />
                    <span>Cash on Delivery (COD)</span>
                  </label>
                </div>

                {paymentInfo.paymentMethod === 'card' && (
                  <>
                    <div className="form-group">
                      <label htmlFor="cardNumber">Card Number *</label>
                      <input
                        type="text"
                        id="cardNumber"
                        value={paymentInfo.cardNumber}
                        onChange={(e) => setPaymentInfo({ ...paymentInfo, cardNumber: e.target.value })}
                        required
                        placeholder="1234 5678 9012 3456"
                        maxLength={19}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="cardName">Cardholder Name *</label>
                      <input
                        type="text"
                        id="cardName"
                        value={paymentInfo.cardName}
                        onChange={(e) => setPaymentInfo({ ...paymentInfo, cardName: e.target.value })}
                        required
                        placeholder="Name on card"
                      />
                    </div>
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="expiryDate">Expiry Date *</label>
                        <input
                          type="text"
                          id="expiryDate"
                          value={paymentInfo.expiryDate}
                          onChange={(e) => setPaymentInfo({ ...paymentInfo, expiryDate: e.target.value })}
                          required
                          placeholder="MM/YY"
                          maxLength={5}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="cvv">CVV *</label>
                        <input
                          type="text"
                          id="cvv"
                          value={paymentInfo.cvv}
                          onChange={(e) => setPaymentInfo({ ...paymentInfo, cvv: e.target.value })}
                          required
                          placeholder="123"
                          maxLength={4}
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="bankName">Bank Name *</label>
                      <input
                        type="text"
                        id="bankName"
                        value={paymentInfo.bankName || ''}
                        onChange={(e) => setPaymentInfo({ ...paymentInfo, bankName: e.target.value })}
                        required
                        placeholder="MB Bank"
                      />
                    </div>
                  </>
                )}

                {paymentInfo.paymentMethod === 'cod' && (
                  <div className="cod-info">
                    <p>💰 You will pay cash when the order is delivered to your address.</p>
                  </div>
                )}

                <div className="form-actions">
                  <Link to="/checkout" className="btn-back">
                    Back
                  </Link>
                  <button type="submit" className="btn-continue">
                    Review Order
                  </button>
                </div>
              </form>
            )}

            {/* Review Order */}
            {step === 'review' && (
              <div className="checkout-review">
                <h2 className="form-title">Review Your Order</h2>
                <div className="review-section">
                  <h3>Shipping Address</h3>
                  <div className="review-info">
                    <p><strong>Name:</strong> {shippingInfo.fullName || 'Tran Hoa'}</p>
                    <p><strong>Street Address:</strong> {shippingInfo.address || '29 Co Man Mai 4'}</p>
                    <p>
                      <strong>City and Postal Code:</strong> {shippingInfo.city || 'Da Nang'}, {shippingInfo.postalCode || '550000'}
                    </p>
                    <p><strong>Country:</strong> {shippingInfo.country || 'Vietnam'}</p>
                    <p><strong>Phone Number:</strong> {shippingInfo.phone || '0789469867'}</p>
                    <p><strong>Email Address:</strong> {shippingInfo.email || 'hoa@gmail.com'}</p>
                  </div>
                </div>
                <div className="review-section">
                  <h3>Payment Method</h3>
                  <div className="review-info">
                    {paymentInfo.paymentMethod === 'card' ? (
                      <>
                        <p><strong>Card Information:</strong> Card ending in {paymentInfo.cardNumber ? paymentInfo.cardNumber.slice(-4) : '6855'}</p>
                        <p><strong>Bank Name:</strong> {paymentInfo.bankName || 'MB Bank'}</p>
                      </>
                    ) : (
                      <p>Cash on Delivery</p>
                    )}
                  </div>
                </div>
                <div className="review-section">
                  <h3>Order Items</h3>
                  <div className="review-items">
                    {cartItems.map((item) => (
                      <div key={item.id} className="review-item">
                        <img src={item.image} alt={item.name} />
                        <div className="review-item-details">
                          <h4>{item.name}</h4>
                          <p>
                            ${item.price} x {item.quantity}
                          </p>
                        </div>
                        <div className="review-item-total">${(item.price * item.quantity).toFixed(2)}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="form-actions">
                  <Link to="/checkout/payment" className="btn-back">
                    Back
                  </Link>
                  <button
                    type="button"
                    className="btn-place-order"
                    onClick={handlePlaceOrder}
                    disabled={isProcessing}
                  >
                    {isProcessing ? 'Processing...' : 'Place Order'}
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Order Summary - Tóm tắt đơn hàng */}
          <div className="checkout-summary">
            <h2 className="summary-title">Order Summary</h2>
            <div className="summary-items">
              {cartItems.map((item) => (
                <div key={item.id} className="summary-item">
                  <img src={item.image} alt={item.name} />
                  <div className="summary-item-info">
                    <h4>{item.name}</h4>
                    <p>
                      ${item.price} x {item.quantity}
                    </p>
                  </div>
                  <div className="summary-item-price">${(item.price * item.quantity).toFixed(2)}</div>
                </div>
              ))}
            </div>
            <div className="summary-totals">
              <div className="summary-row">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="summary-row">
                <span>Shipping</span>
                <span>${shipping.toFixed(2)}</span>
              </div>
              <div className="summary-row">
                <span>Tax</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="summary-divider"></div>
              <div className="summary-row total">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
            <Link to="/cart" className="link-back-to-cart">
              ← Back to Cart
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout

