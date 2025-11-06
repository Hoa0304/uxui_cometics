import { ReactNode } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import './UserLayout.css'

interface UserLayoutProps {
  children: ReactNode
}

/**
 * UserLayout component - Layout cho user interface
 * Bao gồm Header với navigation shopping và cart
 */
const UserLayout = ({ children }: UserLayoutProps) => {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  // Default user if not logged in (for demo purposes)
  const displayUser = user || {
    id: '1',
    email: 'demo@example.com',
    name: 'Demo User',
    role: 'user' as const,
    avatar: 'https://i.pravatar.cc/150?img=47',
  }

  const handleLogout = () => {
    if (user) {
      logout()
      navigate('/landing')
    }
  }

  return (
    <div className="user-layout">
      <header className="user-header">
        <div className="user-header-container">
          <div className="user-header-left">
            <Link to="/shop" className="user-logo">
              <div className="logo-circle">M</div>
              <span className="logo-text">Cosmetics</span>
            </Link>
            <nav className="user-nav">
              <Link to="/shop" className="nav-link">Shop</Link>
              <Link to="/shop?category=skincare" className="nav-link">Skincare</Link>
              <Link to="/shop?category=makeup" className="nav-link">Makeup</Link>
              <Link to="/shop?category=haircare" className="nav-link">Haircare</Link>
            </nav>
          </div>
          <div className="user-header-right">
            <div className="search-bar">
              <span className="search-icon">🔍</span>
              <input type="text" placeholder="Search products..." className="search-input" />
            </div>
            <Link to="/cart" className="cart-btn">
              <span className="cart-icon">🛒</span>
              <span className="cart-badge">3</span>
            </Link>
            <div className="user-menu">
              <div className="user-avatar">
                <img src={displayUser.avatar || 'https://i.pravatar.cc/150?img=47'} alt="User" />
              </div>
              <div className="user-dropdown">
                <Link to="/profile" className="dropdown-item">Profile</Link>
                <Link to="/orders" className="dropdown-item">My Orders</Link>
                <button onClick={handleLogout} className="dropdown-item">Logout</button>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main className="user-main">{children}</main>
    </div>
  )
}

export default UserLayout

