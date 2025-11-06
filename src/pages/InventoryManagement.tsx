import { useState } from 'react'
import Card from '../components/Card'
import './InventoryManagement.css'

/**
 * Inventory Management page - Trang quản lý kho
 * Hiển thị danh sách inventory, stock overview, alerts, và movement chart
 */
const InventoryManagement = () => {
  const [categoryFilter, setCategoryFilter] = useState('All')
  const [stockStatusFilter, setStockStatusFilter] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  // Sample data
  const inventory = [
    {
      id: 1,
      name: 'Vitamin C Serum',
      image: 'https://via.placeholder.com/60',
      sku: 'SKU-001',
      category: 'Skincare',
      currentStock: 120,
      minStock: 50,
      status: 'In Stock',
    },
    {
      id: 2,
      name: 'Matte Lipstick',
      image: 'https://via.placeholder.com/60',
      sku: 'SKU-002',
      category: 'Makeup',
      currentStock: 8,
      minStock: 20,
      status: 'Low Stock',
    },
    {
      id: 3,
      name: 'Hydrating Toner',
      image: 'https://via.placeholder.com/60',
      sku: 'SKU-003',
      category: 'Skincare',
      currentStock: 0,
      minStock: 30,
      status: 'Out of Stock',
    },
    {
      id: 4,
      name: 'Mascara Volume',
      image: 'https://via.placeholder.com/60',
      sku: 'SKU-004',
      category: 'Makeup',
      currentStock: 65,
      minStock: 40,
      status: 'In Stock',
    },
    {
      id: 5,
      name: 'Hair Mask',
      image: 'https://via.placeholder.com/60',
      sku: 'SKU-005',
      category: 'Haircare',
      currentStock: 45,
      minStock: 30,
      status: 'In Stock',
    },
  ]

  const lowStockItems = [
    { id: 2, name: 'Matte Lipstick', image: 'https://via.placeholder.com/40', currentStock: 8, minStock: 20 },
    { id: 6, name: 'Face Cleanser', image: 'https://via.placeholder.com/40', currentStock: 12, minStock: 25 },
    { id: 7, name: 'Eye Cream', image: 'https://via.placeholder.com/40', currentStock: 15, minStock: 30 },
    { id: 8, name: 'Sunscreen SPF50', image: 'https://via.placeholder.com/40', currentStock: 18, minStock: 35 },
    { id: 9, name: 'Foundation', image: 'https://via.placeholder.com/40', currentStock: 22, minStock: 40 },
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
      case 'In Stock':
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
    <div className="inventory-management">
      <div className="inventory-grid">
        {/* Inventory List Card - 2/3 width */}
        <Card className="inventory-list-card">
          <div className="card-header-section">
            <div className="card-title-section">
              <span className="card-icon">📋</span>
              <h3 className="card-title">Inventory Management</h3>
            </div>
            <button className="btn-add-stock">Add Stock</button>
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
              value={stockStatusFilter}
              onChange={(e) => setStockStatusFilter(e.target.value)}
            >
              <option value="All">All Stock Status</option>
              <option value="In Stock">In Stock</option>
              <option value="Low Stock">Low Stock</option>
              <option value="Out of Stock">Out of Stock</option>
            </select>
            <div className="search-input-wrapper">
              <span className="search-icon">🔍</span>
              <input
                type="text"
                placeholder="Search inventory..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
            </div>
            <button className="btn-export">Export Report</button>
          </div>

          {/* Table */}
          <div className="table-wrapper">
            <table className="inventory-table">
              <thead>
                <tr>
                  <th>
                    <input type="checkbox" />
                  </th>
                  <th>Image</th>
                  <th>Product Name</th>
                  <th>SKU</th>
                  <th>Category</th>
                  <th>Current Stock</th>
                  <th>Min Stock</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {inventory.map((item) => {
                  const categoryColor = getCategoryColor(item.category)
                  const stockColor = getStockColor(item.currentStock)
                  const statusBadge = getStatusBadge(item.status)
                  return (
                    <tr key={item.id}>
                      <td>
                        <input type="checkbox" />
                      </td>
                      <td>
                        <img src={item.image} alt={item.name} className="inventory-image" />
                      </td>
                      <td className="inventory-name">{item.name}</td>
                      <td className="inventory-sku">{item.sku}</td>
                      <td>
                        <span
                          className="category-badge"
                          style={{ backgroundColor: categoryColor.bg, color: categoryColor.text }}
                        >
                          {item.category}
                        </span>
                      </td>
                      <td style={{ color: stockColor, fontWeight: 600 }}>{item.currentStock}</td>
                      <td className="min-stock">{item.minStock}</td>
                      <td>
                        <span
                          className="status-badge"
                          style={{ backgroundColor: statusBadge.bg, color: statusBadge.text }}
                        >
                          {item.status}
                        </span>
                      </td>
                      <td>
                        <div className="action-buttons">
                          <button className="action-btn" title="Restock">➕</button>
                          <button className="action-btn" title="Edit">✏️</button>
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

        {/* Stock Overview Card - 1/3 width */}
        <Card className="stock-overview-card">
          <h3 className="card-title">Stock Overview</h3>
          <div className="stats-grid">
            <div className="stat-card stat-blue">
              <div className="stat-icon">📦</div>
              <div className="stat-value">156</div>
              <div className="stat-label">Total Items</div>
            </div>
            <div className="stat-card stat-green">
              <div className="stat-icon">✅</div>
              <div className="stat-value">142</div>
              <div className="stat-label">In Stock</div>
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

        {/* Low Stock Alert Card - 1/3 width */}
        <Card className="low-stock-alert-card">
          <h3 className="card-title">
            <span className="card-icon">⚠️</span>
            Low Stock Alerts
          </h3>
          <div className="low-stock-list">
            {lowStockItems.map((item) => (
              <div key={item.id} className="low-stock-item">
                <img src={item.image} alt={item.name} className="low-stock-image" />
                <div className="low-stock-info">
                  <div className="low-stock-name">{item.name}</div>
                  <div className="low-stock-details">
                    <span>Current: {item.currentStock}</span>
                    <span>Min: {item.minStock}</span>
                  </div>
                </div>
                <button className="btn-restock">Restock</button>
              </div>
            ))}
          </div>
        </Card>

        {/* Stock Movement Chart Card - 1/3 width */}
        <Card className="stock-movement-card">
          <h3 className="card-title">
            <span className="card-icon">📊</span>
            Stock Movement (Last 30 Days)
          </h3>
          <div className="bar-chart-placeholder">
            <div className="bar-chart-y-axis">
              <span>100</span>
              <span>75</span>
              <span>50</span>
              <span>25</span>
              <span>0</span>
            </div>
            <div className="bar-chart-content">
              <div className="bar-chart-bars">
                {Array.from({ length: 7 }, (_, i) => (
                  <div key={i} className="bar-chart-bar">
                    <div className="bar-segment bar-in" style={{ height: `${30 + i * 10}%` }}></div>
                    <div className="bar-segment bar-out" style={{ height: `${20 + i * 5}%` }}></div>
                  </div>
                ))}
              </div>
              <div className="bar-chart-x-axis">
                <span>W1</span>
                <span>W2</span>
                <span>W3</span>
                <span>W4</span>
                <span>W5</span>
                <span>W6</span>
                <span>W7</span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default InventoryManagement


