import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Register.css'

/**
 * Register page - Trang đăng ký
 * Form đăng ký với design đẹp và hình ảnh mỹ phẩm
 */
const Register = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false,
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle registration logic here
    console.log('Register:', formData)
    // Navigate to dashboard after successful registration
    navigate('/')
  }

  return (
    <div className="register-page">
      <div className="register-container">
        {/* Left Side - Image */}
        <div className="register-image-side">
          <div className="image-overlay">
            <div className="image-content">
              <div className="logo-large">
                <div className="logo-circle-large">M</div>
                <span className="logo-text-large">Cosmetics</span>
              </div>
              <h2 className="image-title">Join Us Today!</h2>
              <p className="image-subtitle">
                Create your account and start exploring our amazing collection of beauty products
              </p>
              <div className="benefits-list">
                <div className="benefit-item">
                  <span className="benefit-icon">✨</span>
                  <span>Exclusive deals and discounts</span>
                </div>
                <div className="benefit-item">
                  <span className="benefit-icon">🎁</span>
                  <span>Welcome bonus for new members</span>
                </div>
                <div className="benefit-item">
                  <span className="benefit-icon">📱</span>
                  <span>Track your orders easily</span>
                </div>
                <div className="benefit-item">
                  <span className="benefit-icon">💝</span>
                  <span>Personalized recommendations</span>
                </div>
              </div>
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
        <div className="register-form-side">
          <div className="form-wrapper">
            <div className="form-header">
              <h1 className="form-title">Create Account</h1>
              <p className="form-subtitle">Fill in your details to get started</p>
            </div>

            <form onSubmit={handleSubmit} className="register-form">
              <div className="form-group">
                <label htmlFor="fullName" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  className="form-input"
                  placeholder="John Doe"
                />
              </div>

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
                <label htmlFor="phone" className="form-label">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="form-input"
                  placeholder="+84 123 456 789"
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
                  placeholder="Create a strong password"
                  minLength={8}
                />
                <span className="form-hint">At least 8 characters</span>
              </div>

              <div className="form-group">
                <label htmlFor="confirmPassword" className="form-label">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  required
                  className="form-input"
                  placeholder="Confirm your password"
                />
              </div>

              <div className="form-group">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    name="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onChange={handleInputChange}
                    required
                    className="checkbox-input"
                  />
                  <span className="checkbox-text">
                    I agree to the{' '}
                    <Link to="/terms" className="link-terms">
                      Terms & Conditions
                    </Link>{' '}
                    and{' '}
                    <Link to="/privacy" className="link-terms">
                      Privacy Policy
                    </Link>
                  </span>
                </label>
              </div>

              <button type="submit" className="btn-submit">
                Create Account
              </button>

              <div className="form-divider">
                <span>Or sign up with</span>
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
                <span>Already have an account?</span>
                <Link to="/login" className="link-signin">
                  Sign In
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register


