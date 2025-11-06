import { useState } from 'react'
import { Link } from 'react-router-dom'
import Card from '../components/Card'
import './ProductManagement.css'

/**
 * Product Management page - Trang quản lý sản phẩm
 * Hiển thị danh sách sản phẩm, filter, stats, top selling products, và category distribution
 */
const ProductManagement = () => {
  const [categoryFilter, setCategoryFilter] = useState('All')
  const [statusFilter, setStatusFilter] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  // Sample data
  const products = [
    {
      id: 1,
      name: 'Vitamin C Serum',
      image: 'https://via.placeholder.com/60',
      category: 'Skincare',
      price: 45.99,
      stock: 120,
      status: 'Active',
    },
    {
      id: 2,
      name: 'Matte Lipstick',
      image: 'https://via.placeholder.com/60',
      category: 'Makeup',
      price: 24.99,
      stock: 8,
      status: 'Low Stock',
    },
    {
      id: 3,
      name: 'Hydrating Toner',
      image: 'https://via.placeholder.com/60',
      category: 'Skincare',
      price: 32.50,
      stock: 0,
      status: 'Out of Stock',
    },
    {
      id: 4,
      name: 'Mascara Volume',
      image: 'https://via.placeholder.com/60',
      category: 'Makeup',
      price: 18.99,
      stock: 65,
      status: 'Active',
    },
    {
      id: 5,
      name: 'Hair Mask',
      image: 'https://via.placeholder.com/60',
      category: 'Haircare',
      price: 28.99,
      stock: 45,
      status: 'Active',
    },
  ]

  const topSelling = [
    { id: 1, name: 'Vitamin C Serum', image: 'https://via.placeholder.com/40', sales: 245, trend: 'up' },
    { id: 2, name: 'Matte Lipstick', image: 'https://via.placeholder.com/40', sales: 189, trend: 'up' },
    { id: 3, name: 'Hydrating Toner', image: 'https://via.placeholder.com/40', sales: 156, trend: 'down' },
    { id: 4, name: 'Mascara Volume', image: 'https://via.placeholder.com/40', sales: 134, trend: 'up' },
    { id: 5, name: 'Hair Mask', image: 'https://via.placeholder.com/40', sales: 98, trend: 'down' },
  ]

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

  const getStockColor = (stock: number) => {
    if (stock > 50) return '#10b981'
    if (stock >= 10) return '#f97316'
    return '#ef4444'
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Active':
        return { bg: '#d1fae5', text: '#065f46' }
      case 'Low Stock':
        return { bg: '#fed7aa', text: '#9a3412' }
      case 'Out of Stock':
        return { bg: '#fee2e2', text: '#991b1b' }
      default:
        return { bg: '#f3f4f6', text: '#6b7280' }
    }
  }

  return (
    <div className="product-management">
      <div className="product-grid">
        {/* Product List Card - 2/3 width */}
        <Card className="product-list-card">
          <div className="card-header-section">
            <div className="card-title-section">
              <span className="card-icon">📦</span>
              <h3 className="card-title">Product Management</h3>
            </div>
            <Link to="/products/new" className="btn-add-product">
              Add New Product
            </Link>
          </div>

          {/* Filter Bar */}
          <div className="filter-bar">
            <select
              className="filter-dropdown"
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
            >
              <option value="All">All Categories</option>
              <option value="Skincare">Skincare</option>
              <option value="Makeup">Makeup</option>
              <option value="Haircare">Haircare</option>
            </select>
            <select
              className="filter-dropdown"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="All">All Status</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
              <option value="Out of Stock">Out of Stock</option>
            </select>
            <div className="search-input-wrapper">
              <span className="search-icon">🔍</span>
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
            </div>
            <button className="btn-filter">Filter</button>
          </div>

          {/* Table */}
          <div className="table-wrapper">
            <table className="products-table">
              <thead>
                <tr>
                  <th>
                    <input type="checkbox" />
                  </th>
                  <th>Image</th>
                  <th>Product Name</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Stock</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => {
                  const categoryColor = getCategoryColor(product.category)
                  const stockColor = getStockColor(product.stock)
                  const statusBadge = getStatusBadge(product.status)
                  return (
                    <tr key={product.id}>
                      <td>
                        <input type="checkbox" />
                      </td>
                      <td>
                        <img src={product.image} alt={product.name} className="product-image" />
                      </td>
                      <td className="product-name">{product.name}</td>
                      <td>
                        <span
                          className="category-badge"
                          style={{ backgroundColor: categoryColor.bg, color: categoryColor.text }}
                        >
                          {product.category}
                        </span>
                      </td>
                      <td className="product-price">${product.price.toFixed(2)}</td>
                      <td style={{ color: stockColor, fontWeight: 600 }}>{product.stock}</td>
                      <td>
                        <span
                          className="status-badge"
                          style={{ backgroundColor: statusBadge.bg, color: statusBadge.text }}
                        >
                          {product.status}
                        </span>
                      </td>
                      <td>
                        <div className="action-buttons">
                          <button className="action-btn" title="Edit">✏️</button>
                          <button className="action-btn" title="Delete">🗑️</button>
                          <button className="action-btn" title="View">👁️</button>
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

        {/* Quick Stats Card - 1/3 width */}
        <Card className="quick-stats-card">
          <h3 className="card-title">Quick Stats</h3>
          <div className="stats-grid">
            <div className="stat-card stat-green">
              <div className="stat-icon">📦</div>
              <div className="stat-value">156</div>
              <div className="stat-label">Total Products</div>
            </div>
            <div className="stat-card stat-light-green">
              <div className="stat-icon">✅</div>
              <div className="stat-value">142</div>
              <div className="stat-label">Active Products</div>
            </div>
            <div className="stat-card stat-orange">
              <div className="stat-icon">⚠️</div>
              <div className="stat-value">8</div>
              <div className="stat-label">Low Stock</div>
            </div>
            <div className="stat-card stat-red">
              <div className="stat-icon">❌</div>
              <div className="stat-value">6</div>
              <div className="stat-label">Out of Stock</div>
            </div>
          </div>
        </Card>

        {/* Top Selling Products Card - 1/3 width */}
        <Card className="top-selling-card">
          <h3 className="card-title">
            <span className="card-icon">🏆</span>
            Top Selling Products
          </h3>
          <div className="top-selling-list">
            {topSelling.map((item) => (
              <div key={item.id} className="top-selling-item">
                <img src={item.image} alt={item.name} className="top-selling-image" />
                <div className="top-selling-info">
                  <div className="top-selling-name">{item.name}</div>
                  <div className="top-selling-sales">{item.sales} sales</div>
                </div>
                <span className={`trend-arrow ${item.trend === 'up' ? 'trend-up' : 'trend-down'}`}>
                  {item.trend === 'up' ? '↑' : '↓'}
                </span>
              </div>
            ))}
          </div>
        </Card>

        {/* Category Distribution Card - 1/3 width */}
        <Card className="category-distribution-card">
          <h3 className="card-title">
            <span className="card-icon">📊</span>
            Products by Category
          </h3>
          <div className="donut-chart-wrapper">
            <div className="donut-chart">
              <div className="donut-segment donut-pink"></div>
              <div className="donut-segment donut-purple"></div>
              <div className="donut-segment donut-yellow"></div>
            </div>
          </div>
          <div className="chart-legend">
            <div className="legend-item">
              <span className="legend-dot pink"></span>
              <span>Skincare</span>
            </div>
            <div className="legend-item">
              <span className="legend-dot purple"></span>
              <span>Makeup</span>
            </div>
            <div className="legend-item">
              <span className="legend-dot yellow"></span>
              <span>Haircare</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default ProductManagement


