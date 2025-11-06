import { Link } from 'react-router-dom'
import './MyOrders.css'

/**
 * MyOrders page - Trang đơn hàng của user
 */
const MyOrders = () => {
  const orders = [
    {
      id: 'ORD-001',
      date: '2024-01-15',
      status: 'delivered',
      total: 116.97,
      items: [
        { name: 'Vitamin C Serum', quantity: 2, price: 45.99 },
        { name: 'Matte Lipstick', quantity: 1, price: 24.99 },
      ],
    },
    {
      id: 'ORD-002',
      date: '2024-01-10',
      status: 'shipping',
      total: 32.50,
      items: [{ name: 'Hydrating Toner', quantity: 1, price: 32.50 }],
    },
    {
      id: 'ORD-003',
      date: '2024-01-05',
      status: 'processing',
      total: 28.99,
      items: [{ name: 'Hair Mask', quantity: 1, price: 28.99 }],
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'delivered':
        return '#10b981'
      case 'shipping':
        return '#3b82f6'
      case 'processing':
        return '#f59e0b'
      default:
        return '#6b7280'
    }
  }

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'delivered':
        return 'Delivered'
      case 'shipping':
        return 'Shipping'
      case 'processing':
        return 'Processing'
      default:
        return status
    }
  }

  return (
    <div className="my-orders-page">
      <h1 className="orders-title">My Orders</h1>

      <div className="orders-list">
        {orders.map((order) => (
          <div key={order.id} className="order-card">
            <div className="order-header">
              <div className="order-info">
                <h3 className="order-id">Order #{order.id}</h3>
                <p className="order-date">Placed on {order.date}</p>
              </div>
              <div className="order-status">
                <span
                  className="status-badge"
                  style={{ backgroundColor: `${getStatusColor(order.status)}20`, color: getStatusColor(order.status) }}
                >
                  {getStatusLabel(order.status)}
                </span>
              </div>
            </div>

            <div className="order-items">
              {order.items.map((item, index) => (
                <div key={index} className="order-item">
                  <div className="order-item-info">
                    <span className="order-item-name">{item.name}</span>
                    <span className="order-item-quantity">x{item.quantity}</span>
                  </div>
                  <span className="order-item-price">${item.price.toFixed(2)}</span>
                </div>
              ))}
            </div>

            <div className="order-footer">
              <div className="order-total">
                <span>Total:</span>
                <span className="total-amount">${order.total.toFixed(2)}</span>
              </div>
              <div className="order-actions">
                <Link to={`/orders/${order.id}`} className="btn-view-order">
                  View Details
                </Link>
                {order.status === 'delivered' && (
                  <button className="btn-reorder">Reorder</button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MyOrders

