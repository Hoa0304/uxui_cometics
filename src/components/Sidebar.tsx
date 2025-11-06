import { NavLink } from 'react-router-dom'
import './Sidebar.css'

/**
 * Sidebar component - Thanh điều hướng bên trái
 * Chứa các icon để điều hướng giữa các trang
 */
const Sidebar = () => {
  const menuItems = [
    { path: '/', icon: '📊', label: 'Dashboard' },
    { path: '/products', icon: '📦', label: 'Products' },
    { path: '/customers', icon: '👥', label: 'Customers' },
    { path: '/inventory', icon: '📋', label: 'Inventory' },
    { path: '/settings', icon: '⚙️', label: 'Settings' },
  ]

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <div className="logo-circle">M</div>
      </div>
      <nav className="sidebar-nav">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `sidebar-item ${isActive ? 'active' : ''}`
            }
            title={item.label}
          >
            <span className="sidebar-icon">{item.icon}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}

export default Sidebar


