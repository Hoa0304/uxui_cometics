import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import './Login.css'

/**
 * Login page - Trang đăng nhập
 * Form đăng nhập với design đẹp và hình ảnh mỹ phẩm
 */
const Login = () => {
  const navigate = useNavigate()
  const { login } = useAuth()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
    role: 'user' as 'admin' | 'user',
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    const checked = (e.target as HTMLInputElement).checked
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle login logic here
    login(formData.email, formData.password, formData.role)
    // Navigate based on role
    if (formData.role === 'admin') {
      navigate('/')
    } else {
      navigate('/shop')
    }
  }

  return (
    <div className="login-page">
      <div className="login-container">
        {/* Left Side - Image */}
        <div className="login-image-side">
          <div className="image-overlay">
            <div className="image-content">
              <div className="logo-large">
                <div className="logo-circle-large">M</div>
                <span className="logo-text-large">Cosmetics</span>
              </div>
              <h2 className="image-title">Welcome Back!</h2>
              <p className="image-subtitle">
                Discover amazing beauty products and transform your skincare routine
              </p>
              <div className="image-gallery">
                <div className="gallery-item">
                  <img
                    src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=300&h=300&fit=crop"
                    alt="Cosmetics"
                    className="gallery-image"
                  />
                </div>
                <div className="gallery-item">
                  <img
                    src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=300&h=300&fit=crop"
                    alt="Makeup"
                    className="gallery-image"
                  />
                </div>
                <div className="gallery-item">
                  <img
                    src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=300&h=300&fit=crop"
                    alt="Skincare"
                    className="gallery-image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="login-form-side">
          <div className="form-wrapper">
            <div className="form-header">
              <h1 className="form-title">Sign In</h1>
              <p className="form-subtitle">Enter your credentials to access your account</p>
            </div>

            <form onSubmit={handleSubmit} className="login-form">
              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="form-input"
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                  className="form-input"
                  placeholder="Enter your password"
                />
              </div>

              <div className="form-group">
                <label htmlFor="role" className="form-label">
                  Login as
                </label>
                <select
                  id="role"
                  name="role"
                  value={formData.role}
                  onChange={handleInputChange}
                  className="form-input"
                >
                  <option value="user">User (Shopping)</option>
                  <option value="admin">Admin (Dashboard)</option>
                </select>
              </div>

              <div className="form-options">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleInputChange}
                    className="checkbox-input"
                  />
                  <span className="checkbox-text">Remember me</span>
                </label>
                <Link to="/forgot-password" className="forgot-link">
                  Forgot password?
                </Link>
              </div>

              <button type="submit" className="btn-submit">
                Sign In
              </button>

              <div className="form-divider">
                <span>Or continue with</span>
              </div>

              <div className="social-buttons">
                <button type="button" className="btn-social">
                  <span>🔵</span>
                  <span>Google</span>
                </button>
                <button type="button" className="btn-social">
                  <span>🔵</span>
                  <span>Facebook</span>
                </button>
              </div>

              <div className="form-footer">
                <span>Don't have an account?</span>
                <Link to="/register" className="link-signup">
                  Sign Up
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login


