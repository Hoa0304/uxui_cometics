import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import './Contact.css'

/**
 * Contact page - Trang liên hệ
 * Cho phép người dùng gửi tin nhắn liên hệ
 */
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  // Handle form input change - Xử lý thay đổi input
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  // Handle form submission - Xử lý submit form
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call - Giả lập gọi API
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setSubmitSuccess(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      })
      setSubmitSuccess(false)
    }, 3000)
  }

  return (
    <div className="contact-page">
      <div className="contact-container">
        {/* Header */}
        <header className="contact-header">
          <div className="header-container">
            <Link to="/landing" className="contact-logo">
              <div className="logo-circle">M</div>
              <span className="logo-text">Cosmetics</span>
            </Link>
            <nav className="contact-nav">
              <Link to="/landing" className="nav-link">Home</Link>
              <Link to="/products" className="nav-link">Products</Link>
              <Link to="/about" className="nav-link">About</Link>
              <Link to="/contact" className="nav-link active">Contact</Link>
              <Link to="/login" className="nav-link">Login</Link>
              <Link to="/register" className="nav-link btn-primary">Sign Up</Link>
            </nav>
          </div>
        </header>

        {/* Contact Section */}
        <div className="contact-content">
          <div className="contact-intro">
            <h1 className="contact-title">Get in Touch</h1>
            <p className="contact-subtitle">
              Have a question or need help? We'd love to hear from you. Send us a message and we'll
              respond as soon as possible.
            </p>
          </div>

          <div className="contact-grid">
            {/* Contact Form */}
            <div className="contact-form-section">
              <h2 className="form-section-title">Send us a Message</h2>
              {submitSuccess ? (
                <div className="success-message">
                  <div className="success-icon">✓</div>
                  <h3>Message Sent Successfully!</h3>
                  <p>Thank you for contacting us. We'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+84 123 456 789"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="subject">Subject *</label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="product">Product Question</option>
                        <option value="order">Order Support</option>
                        <option value="shipping">Shipping & Delivery</option>
                        <option value="return">Returns & Refunds</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      placeholder="Tell us how we can help you..."
                    ></textarea>
                  </div>
                  <button type="submit" className="btn-submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
              
              {/* FAQ Section */}
              <div className="faq-section">
                <h3 className="faq-title">Frequently Asked Questions</h3>
                <div className="faq-list">
                  <div className="faq-item">
                    <div className="faq-question">
                      <span className="faq-icon">❓</span>
                      <span>How quickly will I receive a response?</span>
                    </div>
                    <div className="faq-answer">
                      We typically respond within 24-48 hours during business days. For urgent matters, please call us directly.
                    </div>
                  </div>
                  <div className="faq-item">
                    <div className="faq-question">
                      <span className="faq-icon">📦</span>
                      <span>What is your shipping policy?</span>
                    </div>
                    <div className="faq-answer">
                      We offer free shipping on orders over $50. Standard shipping takes 3-5 business days, express shipping available.
                    </div>
                  </div>
                  <div className="faq-item">
                    <div className="faq-question">
                      <span className="faq-icon">↩️</span>
                      <span>Can I return or exchange products?</span>
                    </div>
                    <div className="faq-answer">
                      Yes! We offer a 30-day return policy on unopened products. Contact us for return authorization.
                    </div>
                  </div>
                  <div className="faq-item">
                    <div className="faq-question">
                      <span className="faq-icon">💳</span>
                      <span>What payment methods do you accept?</span>
                    </div>
                    <div className="faq-answer">
                      We accept all major credit cards, PayPal, and cash on delivery (COD) for local orders.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="contact-info-section">
              <div className="contact-info-card">
                <div className="info-item">
                  <div className="info-icon">📧</div>
                  <div className="info-content">
                    <h3 className="info-label">Email</h3>
                    <p className="info-value">
                      <a href="mailto:info@cosmetics.com">info@cosmetics.com</a>
                    </p>
                    <p className="info-value">
                      <a href="mailto:support@cosmetics.com">support@cosmetics.com</a>
                    </p>
                  </div>
                </div>
                <div className="info-item">
                  <div className="info-icon">📞</div>
                  <div className="info-content">
                    <h3 className="info-label">Phone</h3>
                    <p className="info-value">
                      <a href="tel:+84123456789">+84 123 456 789</a>
                    </p>
                    <p className="info-value">Mon - Fri: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
                <div className="info-item">
                  <div className="info-icon">📍</div>
                  <div className="info-content">
                    <h3 className="info-label">Address</h3>
                    <p className="info-value">123 Main Street</p>
                    <p className="info-value">District 1, Ho Chi Minh City</p>
                    <p className="info-value">Vietnam</p>
                  </div>
                </div>
                <div className="info-item">
                  <div className="info-icon">⏰</div>
                  <div className="info-content">
                    <h3 className="info-label">Business Hours</h3>
                    <p className="info-value">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="info-value">Saturday: 10:00 AM - 4:00 PM</p>
                    <p className="info-value">Sunday: Closed</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="social-section">
                <div className="social-header">
                  <h3 className="social-title">Follow Us</h3>
                  <p className="social-subtitle">Stay connected with us on social media</p>
                </div>
                <div className="social-links-grid">
                  <a
                    href="#"
                    className="social-link-card facebook"
                    aria-label="Facebook"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="social-icon-container">
                      <FaFacebookF className="social-icon" />
                    </div>
                    <div className="social-content">
                      <span className="social-name">Facebook</span>
                      <span className="social-handle">@cosmetics</span>
                    </div>
                    <div className="social-arrow">→</div>
                  </a>
                  <a
                    href="#"
                    className="social-link-card instagram"
                    aria-label="Instagram"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="social-icon-container">
                      <FaInstagram className="social-icon" />
                    </div>
                    <div className="social-content">
                      <span className="social-name">Instagram</span>
                      <span className="social-handle">@cosmetics</span>
                    </div>
                    <div className="social-arrow">→</div>
                  </a>
                  <a
                    href="#"
                    className="social-link-card twitter"
                    aria-label="Twitter"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="social-icon-container">
                      <FaTwitter className="social-icon" />
                    </div>
                    <div className="social-content">
                      <span className="social-name">Twitter</span>
                      <span className="social-handle">@cosmetics</span>
                    </div>
                    <div className="social-arrow">→</div>
                  </a>
                  <a
                    href="#"
                    className="social-link-card youtube"
                    aria-label="YouTube"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="social-icon-container">
                      <FaYoutube className="social-icon" />
                    </div>
                    <div className="social-content">
                      <span className="social-name">YouTube</span>
                      <span className="social-handle">Cosmetics Channel</span>
                    </div>
                    <div className="social-arrow">→</div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Founders Section */}
          <div className="founders-section">
            <div className="founders-header">
              <h2 className="founders-title">Our Founders</h2>
              <p className="founders-subtitle">Meet the passionate team behind Cosmetics Store</p>
            </div>
            <div className="founders-grid">
              <div className="founder-card founder-card-featured">
                <div className="founder-avatar">
                  <img
                    src="https://i.pravatar.cc/150?img=47"
                    alt="Tran Thi Cam Hoa"
                    className="founder-image"
                  />
                  <div className="founder-badge">Co-Founder & CEO</div>
                </div>
                <div className="founder-info">
                  <h3 className="founder-name">Tran Thi Cam Hoa</h3>
                  <p className="founder-role">Co-Founder & Chief Executive Officer</p>
                  <p className="founder-description">
                    With a passion for beauty and skincare, Cam Hoa has spent many years researching and learning about high-quality cosmetic products. She is the one who laid the foundation for Cosmetics Store with the vision of bringing the best products to customers.
                  </p>
                  <div className="founder-contact">
                    <a href="mailto:camhoa@cosmetics.com" className="founder-email">
                      📧 camhoa@cosmetics.com
                    </a>
                  </div>
                </div>
              </div>
              <div className="founder-card">
                <div className="founder-avatar">
                  <img
                    src="https://i.pravatar.cc/150?img=12"
                    alt="Nguyen Thao Minh Quy"
                    className="founder-image"
                  />
                  <div className="founder-badge">Co-Founder & COO</div>
                </div>
                <div className="founder-info">
                  <h3 className="founder-name">Nguyen Thao Minh Quy</h3>
                  <p className="founder-role">Co-Founder & Chief Operating Officer</p>
                  <p className="founder-description">
                    With extensive experience in management and operations, Minh Quy oversees the operation and development of Cosmetics Store's business activities. She ensures all operations run smoothly and customers always receive the best service.
                  </p>
                  <div className="founder-contact">
                    <a href="mailto:minhquy@cosmetics.com" className="founder-email">
                      📧 minhquy@cosmetics.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="contact-footer">
          <div className="footer-content">
            <p className="footer-copyright">© 2024 Cosmetics Store. All rights reserved.</p>
            <div className="footer-links">
              <Link to="/privacy">Privacy Policy</Link>
              <Link to="/terms">Terms of Service</Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Contact

