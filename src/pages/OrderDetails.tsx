import { useParams } from 'react-router-dom'
import Card from '../components/Card'
import './OrderDetails.css'

/**
 * Order Details page - Trang chi tiết đơn hàng
 * Hiển thị thông tin đơn hàng, items, shipping, payment, và timeline
 */
const OrderDetails = () => {
  const { id } = useParams()

  // Sample data
  const order = {
    id: id || 'ORD-2024-001234',
    date: 'December 15, 2024',
    customer: {
      name: 'Cam Hoa',
      avatar: 'https://i.pravatar.cc/48?img=1',
      email: 'camhoa@example.com',
      phone: '+84 123 456 789',
    },
    status: 'Pending',
    total: 3789.00,
    items: [
      { id: 1, image: 'https://via.placeholder.com/80', name: 'Vitamin C Serum', category: 'Skincare', quantity: 2, price: 45.99, total: 91.98 },
      { id: 2, image: 'https://via.placeholder.com/80', name: 'Hydrating Toner', category: 'Skincare', quantity: 1, price: 32.50, total: 32.50 },
      { id: 3, image: 'https://via.placeholder.com/80', name: 'Matte Lipstick', category: 'Makeup', quantity: 3, price: 24.99, total: 74.97 },
    ],
    shipping: {
      address: '123 Main Street, District 1, Ho Chi Minh City, Vietnam',
      method: 'Standard Shipping',
      tracking: 'TRK-123456789',
      delivery: 'December 20, 2024',
      status: 'In Transit',
    },
    payment: {
      method: 'Credit Card',
      cardNumber: '**** **** **** 1234',
      status: 'Paid',
      date: 'December 15, 2024',
      transactionId: 'TXN-123456789',
    },
    timeline: [
      { step: 'Order Placed', date: 'December 15, 2024 10:30 AM', status: 'completed' },
      { step: 'Payment Confirmed', date: 'December 15, 2024 10:35 AM', status: 'completed' },
      { step: 'Order Processing', date: 'December 15, 2024 11:00 AM', status: 'completed' },
      { step: 'Shipped', date: 'December 16, 2024 09:00 AM', status: 'in-progress' },
      { step: 'Delivered', date: 'Pending', status: 'pending' },
    ],
  }

  const subtotal = order.items.reduce((sum, item) => sum + item.total, 0)
  const shipping = 15.00
  const tax = subtotal * 0.1
  const grandTotal = subtotal + shipping + tax

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Pending':
        return { bg: '#dbeafe', text: '#1e40af' }
      case 'Completed':
        return { bg: '#d1fae5', text: '#065f46' }
      case 'Cancelled':
        return { bg: '#fee2e2', text: '#991b1b' }
      case 'Paid':
        return { bg: '#d1fae5', text: '#065f46' }
      case 'In Transit':
        return { bg: '#dbeafe', text: '#1e40af' }
      default:
        return { bg: '#f3f4f6', text: '#6b7280' }
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Skincare':
        return { bg: '#fce7f3', text: '#be185d' }
      case 'Makeup':
        return { bg: '#f3e8ff', text: '#7c3aed' }
      case 'Haircare':
        return { bg: '#fef3c7', text: '#d97706' }
      default:
        return { bg: '#f3f4f6', text: '#6b7280' }
    }
  }

  return (
    <div className="order-details">
      <div className="order-details-container">
        {/* Order Header Card */}
        <Card className="order-header-card">
          <div className="order-header-content">
            <div className="order-header-left">
              <h2 className="order-id">#{order.id}</h2>
              <p className="order-date">{order.date}</p>
              <div className="customer-info">
                <img src={order.customer.avatar} alt={order.customer.name} className="customer-avatar-large" />
                <div className="customer-details">
                  <div className="customer-name">{order.customer.name}</div>
                  <div className="customer-email">{order.customer.email}</div>
                  <div className="customer-phone">{order.customer.phone}</div>
                </div>
              </div>
            </div>
            <div className="order-header-right">
              <span
                className="status-badge-large"
                style={{ backgroundColor: getStatusBadge(order.status).bg, color: getStatusBadge(order.status).text }}
              >
                {order.status}
              </span>
              <div className="order-total">${order.total.toFixed(2)}</div>
              <div className="order-actions">
                <button className="btn-complete">Mark as Completed</button>
                <button className="btn-print">Print Invoice</button>
                <button className="btn-export">Export PDF</button>
              </div>
            </div>
          </div>
        </Card>

        {/* Order Items Card */}
        <Card className="order-items-card">
          <h3 className="card-title">Order Items</h3>
          <div className="table-wrapper">
            <table className="order-items-table">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Product Name</th>
                  <th>Category</th>
                  <th>Quantity</th>
                  <th>Unit Price</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {order.items.map((item) => {
                  const categoryColor = getCategoryColor(item.category)
                  return (
                    <tr key={item.id}>
                      <td>
                        <img src={item.image} alt={item.name} className="item-image" />
                      </td>
                      <td className="item-name">{item.name}</td>
                      <td>
                        <span
                          className="category-badge"
                          style={{ backgroundColor: categoryColor.bg, color: categoryColor.text }}
                        >
                          {item.category}
                        </span>
                      </td>
                      <td>{item.quantity}</td>
                      <td>${item.price.toFixed(2)}</td>
                      <td className="item-total">${item.total.toFixed(2)}</td>
                    </tr>
                  )
                })}
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan={5} className="summary-label">Subtotal</td>
                  <td className="summary-value">${subtotal.toFixed(2)}</td>
                </tr>
                <tr>
                  <td colSpan={5} className="summary-label">Shipping</td>
                  <td className="summary-value">${shipping.toFixed(2)}</td>
                </tr>
                <tr>
                  <td colSpan={5} className="summary-label">Tax</td>
                  <td className="summary-value">${tax.toFixed(2)}</td>
                </tr>
                <tr className="grand-total-row">
                  <td colSpan={5} className="summary-label">Grand Total</td>
                  <td className="grand-total">${grandTotal.toFixed(2)}</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </Card>

        <div className="order-info-grid">
          {/* Shipping Information Card */}
          <Card className="shipping-card">
            <h3 className="card-title">
              <span className="card-icon">📦</span>
              Shipping Information
            </h3>
            <div className="info-content">
              <div className="info-item">
                <label>Shipping Address</label>
                <p>{order.shipping.address}</p>
              </div>
              <div className="info-item">
                <label>Shipping Method</label>
                <p>{order.shipping.method}</p>
              </div>
              <div className="info-item">
                <label>Tracking Number</label>
                <p className="tracking-number">{order.shipping.tracking}</p>
              </div>
              <div className="info-item">
                <label>Estimated Delivery</label>
                <p>{order.shipping.delivery}</p>
              </div>
              <div className="info-item">
                <label>Status</label>
                <span
                  className="status-badge"
                  style={{ backgroundColor: getStatusBadge(order.shipping.status).bg, color: getStatusBadge(order.shipping.status).text }}
                >
                  {order.shipping.status}
                </span>
              </div>
            </div>
          </Card>

          {/* Payment Information Card */}
          <Card className="payment-card">
            <h3 className="card-title">
              <span className="card-icon">💳</span>
              Payment Information
            </h3>
            <div className="info-content">
              <div className="info-item">
                <label>Payment Method</label>
                <p>{order.payment.method}</p>
              </div>
              <div className="info-item">
                <label>Card Number</label>
                <p>{order.payment.cardNumber}</p>
              </div>
              <div className="info-item">
                <label>Payment Status</label>
                <span
                  className="status-badge"
                  style={{ backgroundColor: getStatusBadge(order.payment.status).bg, color: getStatusBadge(order.payment.status).text }}
                >
                  {order.payment.status}
                </span>
              </div>
              <div className="info-item">
                <label>Payment Date</label>
                <p>{order.payment.date}</p>
              </div>
              <div className="info-item">
                <label>Transaction ID</label>
                <p className="transaction-id">{order.payment.transactionId}</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Order Timeline Card */}
        <Card className="timeline-card">
          <h3 className="card-title">
            <span className="card-icon">⏱️</span>
            Order Timeline
          </h3>
          <div className="timeline">
            {order.timeline.map((item, index) => (
              <div key={index} className={`timeline-item ${item.status}`}>
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <div className="timeline-step">{item.step}</div>
                  <div className="timeline-date">{item.date}</div>
                </div>
                {index < order.timeline.length - 1 && <div className="timeline-line"></div>}
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  )
}

export default OrderDetails


