import { useState } from 'react'
import Card from '../components/Card'
import './CustomerManagement.css'

/**
 * Customer Management page - Trang quản lý khách hàng
 * Hiển thị danh sách khách hàng, stats, recent orders, và growth chart
 */
const CustomerManagement = () => {
  const [statusFilter, setStatusFilter] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  // Sample data
  const customers = [
    {
      id: 1,
      name: 'Cam Hoa',
      avatar: 'https://i.pravatar.cc/40?img=1',
      email: 'camhoa@example.com',
      phone: '+84 123 456 789',
      orders: 12,
      spent: 3456.78,
      status: 'Active',
    },
    {
      id: 2,
      name: 'Minh Quy',
      avatar: 'https://i.pravatar.cc/40?img=2',
      email: 'minhquy@example.com',
      phone: '+84 987 654 321',
      orders: 8,
      spent: 2123.45,
      status: 'VIP',
    },
    {
      id: 3,
      name: 'Lan Anh',
      avatar: 'https://i.pravatar.cc/40?img=3',
      email: 'lananh@example.com',
      phone: '+84 555 123 456',
      orders: 5,
      spent: 987.65,
      status: 'Active',
    },
    {
      id: 4,
      name: 'Van Nam',
      avatar: 'https://i.pravatar.cc/40?img=4',
      email: 'vannam@example.com',
      phone: '+84 444 789 012',
      orders: 3,
      spent: 456.78,
      status: 'Inactive',
    },
  ]

  const recentOrders = [
    { id: 1, customer: 'Cam Hoa', avatar: 'https://i.pravatar.cc/32?img=1', product: 'Serum', amount: 3789, status: 'Pending' },
    { id: 2, customer: 'Minh Quy', avatar: 'https://i.pravatar.cc/32?img=2', product: 'Toner', amount: 1075, status: 'Done' },
    { id: 3, customer: 'Lan Anh', avatar: 'https://i.pravatar.cc/32?img=3', product: 'Lipstick', amount: 2450, status: 'Done' },
    { id: 4, customer: 'Van Nam', avatar: 'https://i.pravatar.cc/32?img=4', product: 'Cleanser', amount: 890, status: 'Pending' },
    { id: 5, customer: 'Cam Hoa', avatar: 'https://i.pravatar.cc/32?img=1', product: 'Mascara', amount: 1234, status: 'Done' },
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Active':
        return { bg: '#d1fae5', text: '#065f46' }
      case 'VIP':
        return { bg: '#f3e8ff', text: '#7c3aed' }
      case 'Inactive':
        return { bg: '#f3f4f6', text: '#6b7280' }
      default:
        return { bg: '#f3f4f6', text: '#6b7280' }
    }
  }

  const getOrderStatusBadge = (status: string) => {
    switch (status) {
      case 'Done':
        return { bg: '#d1fae5', text: '#065f46' }
      case 'Pending':
        return { bg: '#dbeafe', text: '#1e40af' }
      default:
        return { bg: '#f3f4f6', text: '#6b7280' }
    }
  }

  return (
    <div className="customer-management">
      <div className="customer-grid">
        {/* Customer List Card - 2/3 width */}
        <Card className="customer-list-card">
          <div className="card-header-section">
            <div className="card-title-section">
              <span className="card-icon">👥</span>
              <h3 className="card-title">Customer Management</h3>
            </div>
            <button className="btn-add-customer">Add Customer</button>
          </div>

          {/* Filter Bar */}
          <div className="filter-bar">
            <select
              className="filter-dropdown"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="All">All Status</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
              <option value="VIP">VIP</option>
            </select>
            <div className="search-input-wrapper">
              <span className="search-icon">🔍</span>
              <input
                type="text"
                placeholder="Search customers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
            </div>
            <button className="btn-export">Export</button>
          </div>

          {/* Table */}
          <div className="table-wrapper">
            <table className="customers-table">
              <thead>
                <tr>
                  <th>
                    <input type="checkbox" />
                  </th>
                  <th>Avatar</th>
                  <th>Customer Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Total Orders</th>
                  <th>Total Spent</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {customers.map((customer) => {
                  const statusBadge = getStatusBadge(customer.status)
                  return (
                    <tr key={customer.id}>
                      <td>
                        <input type="checkbox" />
                      </td>
                      <td>
                        <img src={customer.avatar} alt={customer.name} className="customer-avatar" />
                      </td>
                      <td className="customer-name">{customer.name}</td>
                      <td className="customer-email">{customer.email}</td>
                      <td className="customer-phone">{customer.phone}</td>
                      <td>{customer.orders}</td>
                      <td className="customer-spent">${customer.spent.toFixed(2)}</td>
                      <td>
                        <span
                          className="status-badge"
                          style={{ backgroundColor: statusBadge.bg, color: statusBadge.text }}
                        >
                          {customer.status}
                        </span>
                      </td>
                      <td>
                        <div className="action-buttons">
                          <button className="action-btn" title="View">👁️</button>
                          <button className="action-btn" title="Edit">✏️</button>
                          <button className="action-btn" title="Message">💬</button>
                        </div>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="pagination">
            <button className="pagination-btn">Previous</button>
            <button className="pagination-btn active">1</button>
            <button className="pagination-btn">2</button>
            <button className="pagination-btn">3</button>
            <button className="pagination-btn">Next</button>
          </div>
        </Card>

        {/* Customer Stats Card - 1/3 width */}
        <Card className="customer-stats-card">
          <h3 className="card-title">Customer Statistics</h3>
          <div className="stats-grid">
            <div className="stat-card stat-purple">
              <div className="stat-icon">👥</div>
              <div className="stat-value">1,234</div>
              <div className="stat-label">Total Customers</div>
            </div>
            <div className="stat-card stat-light-purple">
              <div className="stat-icon">➕</div>
              <div className="stat-value">89</div>
              <div className="stat-label">New This Month</div>
            </div>
            <div className="stat-card stat-yellow">
              <div className="stat-icon">👑</div>
              <div className="stat-value">156</div>
              <div className="stat-label">VIP Customers</div>
            </div>
            <div className="stat-card stat-green">
              <div className="stat-icon">✅</div>
              <div className="stat-value">1,078</div>
              <div className="stat-label">Active Customers</div>
            </div>
          </div>
        </Card>

        {/* Recent Orders Card - 1/3 width */}
        <Card className="recent-orders-card">
          <h3 className="card-title">
            <span className="card-icon">📋</span>
            Recent Orders
          </h3>
          <div className="recent-orders-list">
            {recentOrders.map((order) => {
              const orderStatusBadge = getOrderStatusBadge(order.status)
              return (
                <div key={order.id} className="recent-order-item">
                  <img src={order.avatar} alt={order.customer} className="order-avatar" />
                  <div className="order-info">
                    <div className="order-customer">{order.customer}</div>
                    <div className="order-product">{order.product}</div>
                  </div>
                  <div className="order-details">
                    <div className="order-amount">${order.amount.toFixed(2)}</div>
                    <span
                      className="order-status-badge"
                      style={{ backgroundColor: orderStatusBadge.bg, color: orderStatusBadge.text }}
                    >
                      {order.status}
                    </span>
                  </div>
                </div>
              )
            })}
          </div>
        </Card>

        {/* Customer Growth Chart Card - 1/3 width */}
        <Card className="growth-chart-card">
          <h3 className="card-title">
            <span className="card-icon">📈</span>
            Customer Growth
          </h3>
          <div className="line-chart-placeholder">
            <div className="chart-y-axis">
              <span>200</span>
              <span>150</span>
              <span>100</span>
              <span>50</span>
              <span>0</span>
            </div>
            <div className="chart-content">
              <div className="chart-lines">
                <div className="chart-line purple-line"></div>
              </div>
              <div className="chart-x-axis">
                <span>M1</span>
                <span>M2</span>
                <span>M3</span>
                <span>M4</span>
                <span>M5</span>
                <span>M6</span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default CustomerManagement


