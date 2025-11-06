import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import './Header.css'

/**
 * Header component - Thanh header ở phía trên
 * Chứa logo, navigation tabs, search bar, và user menu
 */
const Header = () => {
  const location = useLocation()
  const [searchQuery, setSearchQuery] = useState('')

  const tabs = [
    { path: '/', label: 'Featured', icon: '👍' },
    { path: '/products', label: 'Top', icon: '👑' },
    { path: '/products', label: 'Cosmetics', icon: '📱' },
    { path: '/settings', label: 'Settings', icon: '⚙️' },
  ]

  return (
    <header className="header">
      <div className="header-left">
        <div className="header-logo">
          <div className="logo-circle-small">M</div>
          <h1 className="header-title">Dashboard</h1>
        </div>
        <nav className="header-tabs">
          {tabs.map((tab) => (
            <button
              key={tab.label}
              className={`header-tab ${
                location.pathname === tab.path ? 'active' : ''
              }`}
            >
              <span className="tab-icon">{tab.icon}</span>
              <span className="tab-label">{tab.label}</span>
            </button>
          ))}
        </nav>
      </div>
      <div className="header-right">
        <div className="search-bar">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
        </div>
        <button className="notification-btn">🔔</button>
        <div className="user-avatar">
          <img
            src="https://i.pravatar.cc/150?img=47"
            alt="User"
            className="avatar-img"
          />
        </div>
      </div>
    </header>
  )
}

export default Header


