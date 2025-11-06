import { Link } from 'react-router-dom'
import './Landing.css'

/**
 * Landing page - Trang giới thiệu trước khi đăng ký
 * Trang chào mừng với hình ảnh mỹ phẩm và giới thiệu về shop
 */
const Landing = () => {
  return (
    <div className="landing">
      <div className="landing-container">
        {/* Header */}
        <header className="landing-header">
          <div className="header-container">
            <div className="landing-logo">
              <div className="logo-circle">M</div>
              <span className="logo-text">Cosmetics</span>
            </div>
            <nav className="landing-nav">
              <Link to="/landing" className="nav-link">Home</Link>
              <Link to="/products" className="nav-link">Products</Link>
              <Link to="/about" className="nav-link">About</Link>
              <Link to="/contact" className="nav-link">Contact</Link>
              <Link to="/login" className="nav-link">Login</Link>
              <Link to="/register" className="nav-link btn-primary">Sign Up</Link>
            </nav>
          </div>
        </header>

        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                Welcome to <span className="gradient-text">Cosmetics Store</span>
              </h1>
              <p className="hero-subtitle">
                Discover the perfect beauty products for your skin. From skincare essentials to
                makeup must-haves, we have everything you need to look and feel your best.
              </p>
              <div className="hero-buttons">
                <Link to="/register" className="btn-hero btn-primary-hero">
                  Get Started
                </Link>
                <Link to="/login" className="btn-hero btn-secondary-hero">
                  Sign In
                </Link>
              </div>
              <div className="hero-features">
                <div className="feature-item">
                  <span className="feature-icon">✨</span>
                  <span>Premium Quality</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">🚚</span>
                  <span>Free Shipping</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">💝</span>
                  <span>Best Prices</span>
                </div>
              </div>
            </div>
            <div className="hero-image">
              <div className="image-container">
                <div className="floating-image image-1">
                  <img
                    src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=400&fit=crop"
                    alt="Cosmetics"
                    className="product-image"
                  />
                </div>
                <div className="floating-image image-2">
                  <img
                    src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=400&h=400&fit=crop"
                    alt="Makeup"
                    className="product-image"
                  />
                </div>
                <div className="floating-image image-3">
                  <img
                    src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=400&fit=crop"
                    alt="Skincare"
                    className="product-image"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="features-section">
          <h2 className="section-title">Why Choose Us?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-card-icon">🌿</div>
              <h3 className="feature-card-title">Natural Ingredients</h3>
              <p className="feature-card-text">
                All our products are made with natural, skin-friendly ingredients
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-card-icon">💎</div>
              <h3 className="feature-card-title">Premium Brands</h3>
              <p className="feature-card-text">
                We carry only the best and most trusted beauty brands
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-card-icon">🎯</div>
              <h3 className="feature-card-title">Expert Advice</h3>
              <p className="feature-card-text">
                Get personalized recommendations from our beauty experts
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-card-icon">❤️</div>
              <h3 className="feature-card-title">Customer Care</h3>
              <p className="feature-card-text">
                24/7 support to help you find the perfect products
              </p>
            </div>
          </div>
        </section>

        {/* Products Showcase Section */}
        <section className="products-section">
          <div className="section-header">
            <h2 className="section-title">Featured Products</h2>
            <p className="section-subtitle">Discover our best-selling beauty essentials</p>
          </div>
          <div className="products-grid">
            <div className="product-card">
              <div className="product-image-wrapper">
                <img
                  src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=400&fit=crop"
                  alt="Vitamin C Serum"
                  className="product-card-image"
                />
                <div className="product-badge">Best Seller</div>
              </div>
              <div className="product-info">
                <h3 className="product-name">Vitamin C Serum</h3>
                <p className="product-category">Skincare</p>
                <div className="product-rating">
                  <span className="stars">⭐⭐⭐⭐⭐</span>
                  <span className="rating-text">4.9 (234 reviews)</span>
                </div>
                <div className="product-price">
                  <span className="price-current">$45.99</span>
                  <span className="price-original">$59.99</span>
                </div>
              </div>
            </div>
            <div className="product-card">
              <div className="product-image-wrapper">
                <img
                  src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=400&h=400&fit=crop"
                  alt="Matte Lipstick"
                  className="product-card-image"
                />
                <div className="product-badge new">New</div>
              </div>
              <div className="product-info">
                <h3 className="product-name">Matte Lipstick</h3>
                <p className="product-category">Makeup</p>
                <div className="product-rating">
                  <span className="stars">⭐⭐⭐⭐⭐</span>
                  <span className="rating-text">4.8 (189 reviews)</span>
                </div>
                <div className="product-price">
                  <span className="price-current">$24.99</span>
                </div>
              </div>
            </div>
            <div className="product-card">
              <div className="product-image-wrapper">
                <img
                  src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=400&fit=crop"
                  alt="Hydrating Toner"
                  className="product-card-image"
                />
              </div>
              <div className="product-info">
                <h3 className="product-name">Hydrating Toner</h3>
                <p className="product-category">Skincare</p>
                <div className="product-rating">
                  <span className="stars">⭐⭐⭐⭐⭐</span>
                  <span className="rating-text">4.7 (156 reviews)</span>
                </div>
                <div className="product-price">
                  <span className="price-current">$32.50</span>
                </div>
              </div>
            </div>
            <div className="product-card">
              <div className="product-image-wrapper">
                <img
                  src="https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?w=400&h=400&fit=crop"
                  alt="Hair Mask"
                  className="product-card-image"
                />
              </div>
              <div className="product-info">
                <h3 className="product-name">Hair Mask</h3>
                <p className="product-category">Haircare</p>
                <div className="product-rating">
                  <span className="stars">⭐⭐⭐⭐⭐</span>
                  <span className="rating-text">4.9 (98 reviews)</span>
                </div>
                <div className="product-price">
                  <span className="price-current">$28.99</span>
                </div>
              </div>
            </div>
          </div>
          <div className="products-cta">
            <Link to="/register" className="btn-view-all">
              View All Products
            </Link>
          </div>
        </section>

        {/* Stats Section */}
        <section className="stats-section">
          <div className="stats-container">
            <div className="stat-item">
              <div className="stat-number">10K+</div>
              <div className="stat-label">Happy Customers</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">Premium Products</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Brand Partners</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">98%</div>
              <div className="stat-label">Satisfaction Rate</div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="testimonials-section">
          <div className="section-header">
            <h2 className="section-title">What Our Customers Say</h2>
            <p className="section-subtitle">Real reviews from real customers</p>
          </div>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-rating">⭐⭐⭐⭐⭐</div>
              <p className="testimonial-text">
                "The best cosmetics store I've ever shopped at! The products are amazing quality and
                the customer service is outstanding."
              </p>
              <div className="testimonial-author">
                <img
                  src="https://i.pravatar.cc/60?img=47"
                  alt="Sarah Johnson"
                  className="testimonial-avatar"
                />
                <div className="testimonial-info">
                  <div className="testimonial-name">Sarah Johnson</div>
                  <div className="testimonial-role">Beauty Enthusiast</div>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-rating">⭐⭐⭐⭐⭐</div>
              <p className="testimonial-text">
                "I love how they have everything I need in one place. The skincare products have
                transformed my skin completely!"
              </p>
              <div className="testimonial-author">
                <img
                  src="https://i.pravatar.cc/60?img=12"
                  alt="Emily Chen"
                  className="testimonial-avatar"
                />
                <div className="testimonial-info">
                  <div className="testimonial-name">Emily Chen</div>
                  <div className="testimonial-role">Skincare Expert</div>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-rating">⭐⭐⭐⭐⭐</div>
              <p className="testimonial-text">
                "Fast shipping, great prices, and authentic products. This is my go-to store for all
                my beauty needs!"
              </p>
              <div className="testimonial-author">
                <img
                  src="https://i.pravatar.cc/60?img=33"
                  alt="Maria Garcia"
                  className="testimonial-avatar"
                />
                <div className="testimonial-info">
                  <div className="testimonial-name">Maria Garcia</div>
                  <div className="testimonial-role">Makeup Artist</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Start Your Beauty Journey?</h2>
            <p className="cta-text">Join thousands of satisfied customers today</p>
            <Link to="/register" className="btn-cta">
              <span>Create Account</span>
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="landing-footer">
          <div className="footer-content">
            <div className="footer-section">
              <div className="footer-logo">
                <div className="logo-circle">M</div>
                <span className="logo-text">Cosmetics</span>
              </div>
              <p className="footer-description">
                Your trusted destination for premium beauty products. Discover the perfect products
                for your skincare and makeup needs.
              </p>
              <div className="social-links">
                <a href="#" className="social-link" aria-label="Facebook">
                  📘
                </a>
                <a href="#" className="social-link" aria-label="Instagram">
                  📷
                </a>
                <a href="#" className="social-link" aria-label="Twitter">
                  🐦
                </a>
                <a href="#" className="social-link" aria-label="YouTube">
                  📺
                </a>
              </div>
            </div>
            <div className="footer-section">
              <h4 className="footer-title">Quick Links</h4>
              <ul className="footer-links">
                <li>
                  <Link to="/landing">Home</Link>
                </li>
                <li>
                  <Link to="/products">Products</Link>
                </li>
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
            <div className="footer-section">
              <h4 className="footer-title">Customer Service</h4>
              <ul className="footer-links">
                <li>
                  <Link to="/faq">FAQ</Link>
                </li>
                <li>
                  <Link to="/shipping">Shipping Info</Link>
                </li>
                <li>
                  <Link to="/returns">Returns</Link>
                </li>
                <li>
                  <Link to="/support">Support</Link>
                </li>
              </ul>
            </div>
            <div className="footer-section">
              <h4 className="footer-title">Contact Us</h4>
              <ul className="footer-contact">
                <li>
                  <span className="contact-icon">📧</span>
                  <span>info@cosmetics.com</span>
                </li>
                <li>
                  <span className="contact-icon">📞</span>
                  <span>+84 123 456 789</span>
                </li>
                <li>
                  <span className="contact-icon">📍</span>
                  <span>123 Main Street, Ho Chi Minh City</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p className="footer-copyright">
              © 2024 Cosmetics Store. All rights reserved.
            </p>
            <div className="footer-legal">
              <Link to="/privacy">Privacy Policy</Link>
              <Link to="/terms">Terms of Service</Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Landing

