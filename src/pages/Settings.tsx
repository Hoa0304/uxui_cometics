import { useState } from 'react'
import Card from '../components/Card'
import './Settings.css'

/**
 * Settings page - Trang cài đặt
 * Tabs: General, Store Information, Payment Methods, Shipping, Notifications, Security, Appearance
 */
const Settings = () => {
  const [activeTab, setActiveTab] = useState('General')

  const tabs = [
    'General',
    'Store Information',
    'Payment Methods',
    'Shipping',
    'Notifications',
    'Security',
    'Appearance',
  ]

  const [settings, setSettings] = useState({
    storeName: 'Cosmetics Store',
    storeEmail: 'store@example.com',
    storePhone: '+84 123 456 789',
    storeAddress: '123 Main Street, District 1, Ho Chi Minh City',
    timezone: 'Asia/Ho_Chi_Minh',
    currency: 'USD',
    language: 'English',
    description: '',
    facebookUrl: '',
    instagramUrl: '',
    twitterUrl: '',
    youtubeUrl: '',
    creditCard: true,
    paypal: true,
    bankTransfer: false,
    cashOnDelivery: true,
    newOrderNotifications: true,
    lowStockAlerts: true,
    customerRegistration: false,
    orderStatusUpdates: true,
    orderConfirmations: true,
    shippingUpdates: true,
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
    twoFactorAuth: false,
    sessionTimeout: '30min',
    primaryColor: '#8b5cf6',
    secondaryColor: '#ec4899',
    backgroundColor: '#f5f5f5',
    fontFamily: 'System',
    fontSize: 14,
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    const checked = (e.target as HTMLInputElement).checked

    setSettings((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Settings saved:', settings)
  }

  return (
    <div className="settings">
      <div className="settings-container">
        {/* Settings Tabs */}
        <div className="settings-tabs">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`settings-tab ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Settings Content */}
        <form onSubmit={handleSubmit}>
          {/* General Settings */}
          {activeTab === 'General' && (
            <Card className="settings-card">
              <h3 className="card-title">General Settings</h3>
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="storeName">
                    Store Name <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="storeName"
                    name="storeName"
                    value={settings.storeName}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="storeEmail">
                    Store Email <span className="required">*</span>
                  </label>
                  <input
                    type="email"
                    id="storeEmail"
                    name="storeEmail"
                    value={settings.storeEmail}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="storePhone">
                    Store Phone <span className="required">*</span>
                  </label>
                  <input
                    type="tel"
                    id="storePhone"
                    name="storePhone"
                    value={settings.storePhone}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                  />
                </div>
                <div className="form-group full-width">
                  <label htmlFor="storeAddress">
                    Store Address <span className="required">*</span>
                  </label>
                  <textarea
                    id="storeAddress"
                    name="storeAddress"
                    value={settings.storeAddress}
                    onChange={handleInputChange}
                    required
                    rows={3}
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="timezone">
                    Timezone <span className="required">*</span>
                  </label>
                  <select
                    id="timezone"
                    name="timezone"
                    value={settings.timezone}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                  >
                    <option value="Asia/Ho_Chi_Minh">Asia/Ho_Chi_Minh</option>
                    <option value="UTC">UTC</option>
                    <option value="America/New_York">America/New_York</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="currency">
                    Currency <span className="required">*</span>
                  </label>
                  <select
                    id="currency"
                    name="currency"
                    value={settings.currency}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                  >
                    <option value="USD">USD</option>
                    <option value="VND">VND</option>
                    <option value="EUR">EUR</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="language">
                    Language <span className="required">*</span>
                  </label>
                  <select
                    id="language"
                    name="language"
                    value={settings.language}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                  >
                    <option value="English">English</option>
                    <option value="Vietnamese">Vietnamese</option>
                    <option value="Spanish">Spanish</option>
                  </select>
                </div>
              </div>
              <button type="submit" className="btn-save">
                Save Changes
              </button>
            </Card>
          )}

          {/* Store Information */}
          {activeTab === 'Store Information' && (
            <Card className="settings-card">
              <h3 className="card-title">Store Information</h3>
              <div className="form-grid">
                <div className="form-group">
                  <label>Store Logo</label>
                  <div className="image-upload">
                    <div className="image-placeholder">
                      <span>📷</span>
                      <p>Upload Logo</p>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label>Store Banner</label>
                  <div className="image-upload">
                    <div className="image-placeholder">
                      <span>📷</span>
                      <p>Upload Banner</p>
                    </div>
                  </div>
                </div>
                <div className="form-group full-width">
                  <label htmlFor="description">Store Description</label>
                  <textarea
                    id="description"
                    name="description"
                    value={settings.description}
                    onChange={handleInputChange}
                    rows={4}
                    className="form-input"
                  />
                </div>
                <div className="form-group full-width">
                  <h4 className="section-subtitle">Social Media Links</h4>
                </div>
                <div className="form-group">
                  <label htmlFor="facebookUrl">Facebook URL</label>
                  <input
                    type="url"
                    id="facebookUrl"
                    name="facebookUrl"
                    value={settings.facebookUrl}
                    onChange={handleInputChange}
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="instagramUrl">Instagram URL</label>
                  <input
                    type="url"
                    id="instagramUrl"
                    name="instagramUrl"
                    value={settings.instagramUrl}
                    onChange={handleInputChange}
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="twitterUrl">Twitter URL</label>
                  <input
                    type="url"
                    id="twitterUrl"
                    name="twitterUrl"
                    value={settings.twitterUrl}
                    onChange={handleInputChange}
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="youtubeUrl">YouTube URL</label>
                  <input
                    type="url"
                    id="youtubeUrl"
                    name="youtubeUrl"
                    value={settings.youtubeUrl}
                    onChange={handleInputChange}
                    className="form-input"
                  />
                </div>
              </div>
              <button type="submit" className="btn-save">
                Save Changes
              </button>
            </Card>
          )}

          {/* Payment Methods */}
          {activeTab === 'Payment Methods' && (
            <Card className="settings-card">
              <h3 className="card-title">Payment Methods</h3>
              <div className="form-grid">
                <div className="form-group full-width">
                  <label className="toggle-label">
                    <input
                      type="checkbox"
                      name="creditCard"
                      checked={settings.creditCard}
                      onChange={handleInputChange}
                      className="toggle-input"
                    />
                    <span className="toggle-text">Credit Card</span>
                  </label>
                </div>
                <div className="form-group full-width">
                  <label className="toggle-label">
                    <input
                      type="checkbox"
                      name="paypal"
                      checked={settings.paypal}
                      onChange={handleInputChange}
                      className="toggle-input"
                    />
                    <span className="toggle-text">PayPal</span>
                  </label>
                </div>
                <div className="form-group full-width">
                  <label className="toggle-label">
                    <input
                      type="checkbox"
                      name="bankTransfer"
                      checked={settings.bankTransfer}
                      onChange={handleInputChange}
                      className="toggle-input"
                    />
                    <span className="toggle-text">Bank Transfer</span>
                  </label>
                </div>
                <div className="form-group full-width">
                  <label className="toggle-label">
                    <input
                      type="checkbox"
                      name="cashOnDelivery"
                      checked={settings.cashOnDelivery}
                      onChange={handleInputChange}
                      className="toggle-input"
                    />
                    <span className="toggle-text">Cash on Delivery</span>
                  </label>
                </div>
              </div>
              <button type="submit" className="btn-save">
                Save Changes
              </button>
            </Card>
          )}

          {/* Notifications */}
          {activeTab === 'Notifications' && (
            <Card className="settings-card">
              <h3 className="card-title">Notification Settings</h3>
              <div className="form-grid">
                <div className="form-group full-width">
                  <h4 className="section-subtitle">Email Notifications</h4>
                </div>
                <div className="form-group full-width">
                  <label className="toggle-label">
                    <input
                      type="checkbox"
                      name="newOrderNotifications"
                      checked={settings.newOrderNotifications}
                      onChange={handleInputChange}
                      className="toggle-input"
                    />
                    <span className="toggle-text">New Order Notifications</span>
                  </label>
                </div>
                <div className="form-group full-width">
                  <label className="toggle-label">
                    <input
                      type="checkbox"
                      name="lowStockAlerts"
                      checked={settings.lowStockAlerts}
                      onChange={handleInputChange}
                      className="toggle-input"
                    />
                    <span className="toggle-text">Low Stock Alerts</span>
                  </label>
                </div>
                <div className="form-group full-width">
                  <label className="toggle-label">
                    <input
                      type="checkbox"
                      name="customerRegistration"
                      checked={settings.customerRegistration}
                      onChange={handleInputChange}
                      className="toggle-input"
                    />
                    <span className="toggle-text">Customer Registration</span>
                  </label>
                </div>
                <div className="form-group full-width">
                  <label className="toggle-label">
                    <input
                      type="checkbox"
                      name="orderStatusUpdates"
                      checked={settings.orderStatusUpdates}
                      onChange={handleInputChange}
                      className="toggle-input"
                    />
                    <span className="toggle-text">Order Status Updates</span>
                  </label>
                </div>
                <div className="form-group full-width">
                  <h4 className="section-subtitle">SMS Notifications</h4>
                </div>
                <div className="form-group full-width">
                  <label className="toggle-label">
                    <input
                      type="checkbox"
                      name="orderConfirmations"
                      checked={settings.orderConfirmations}
                      onChange={handleInputChange}
                      className="toggle-input"
                    />
                    <span className="toggle-text">Order Confirmations</span>
                  </label>
                </div>
                <div className="form-group full-width">
                  <label className="toggle-label">
                    <input
                      type="checkbox"
                      name="shippingUpdates"
                      checked={settings.shippingUpdates}
                      onChange={handleInputChange}
                      className="toggle-input"
                    />
                    <span className="toggle-text">Shipping Updates</span>
                  </label>
                </div>
              </div>
              <button type="submit" className="btn-save">
                Save Changes
              </button>
            </Card>
          )}

          {/* Security */}
          {activeTab === 'Security' && (
            <Card className="settings-card">
              <h3 className="card-title">Security Settings</h3>
              <div className="form-grid">
                <div className="form-group full-width">
                  <label htmlFor="currentPassword">
                    Current Password <span className="required">*</span>
                  </label>
                  <input
                    type="password"
                    id="currentPassword"
                    name="currentPassword"
                    value={settings.currentPassword}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                  />
                </div>
                <div className="form-group full-width">
                  <label htmlFor="newPassword">
                    New Password <span className="required">*</span>
                  </label>
                  <input
                    type="password"
                    id="newPassword"
                    name="newPassword"
                    value={settings.newPassword}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                  />
                </div>
                <div className="form-group full-width">
                  <label htmlFor="confirmPassword">
                    Confirm New Password <span className="required">*</span>
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={settings.confirmPassword}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                  />
                </div>
                <div className="form-group full-width">
                  <label className="toggle-label">
                    <input
                      type="checkbox"
                      name="twoFactorAuth"
                      checked={settings.twoFactorAuth}
                      onChange={handleInputChange}
                      className="toggle-input"
                    />
                    <span className="toggle-text">Two-Factor Authentication</span>
                  </label>
                </div>
                <div className="form-group">
                  <label htmlFor="sessionTimeout">Session Timeout</label>
                  <select
                    id="sessionTimeout"
                    name="sessionTimeout"
                    value={settings.sessionTimeout}
                    onChange={handleInputChange}
                    className="form-input"
                  >
                    <option value="15min">15 minutes</option>
                    <option value="30min">30 minutes</option>
                    <option value="1hr">1 hour</option>
                    <option value="2hr">2 hours</option>
                  </select>
                </div>
              </div>
              <button type="submit" className="btn-save">
                Update Password
              </button>
            </Card>
          )}

          {/* Appearance */}
          {activeTab === 'Appearance' && (
            <Card className="settings-card">
              <h3 className="card-title">Appearance Settings</h3>
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="primaryColor">Primary Color</label>
                  <div className="color-picker-wrapper">
                    <input
                      type="color"
                      id="primaryColor"
                      name="primaryColor"
                      value={settings.primaryColor}
                      onChange={handleInputChange}
                      className="color-picker"
                    />
                    <input
                      type="text"
                      value={settings.primaryColor}
                      onChange={(e) =>
                        setSettings((prev) => ({ ...prev, primaryColor: e.target.value }))
                      }
                      className="color-input"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="secondaryColor">Secondary Color</label>
                  <div className="color-picker-wrapper">
                    <input
                      type="color"
                      id="secondaryColor"
                      name="secondaryColor"
                      value={settings.secondaryColor}
                      onChange={handleInputChange}
                      className="color-picker"
                    />
                    <input
                      type="text"
                      value={settings.secondaryColor}
                      onChange={(e) =>
                        setSettings((prev) => ({ ...prev, secondaryColor: e.target.value }))
                      }
                      className="color-input"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="fontFamily">Font Family</label>
                  <select
                    id="fontFamily"
                    name="fontFamily"
                    value={settings.fontFamily}
                    onChange={handleInputChange}
                    className="form-input"
                  >
                    <option value="System">System</option>
                    <option value="Arial">Arial</option>
                    <option value="Helvetica">Helvetica</option>
                    <option value="Roboto">Roboto</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="fontSize">Font Size</label>
                  <input
                    type="range"
                    id="fontSize"
                    name="fontSize"
                    min="12"
                    max="18"
                    value={settings.fontSize}
                    onChange={handleInputChange}
                    className="form-range"
                  />
                  <span className="range-value">{settings.fontSize}px</span>
                </div>
                <div className="form-group full-width">
                  <label>Preview</label>
                  <div
                    className="preview-box"
                    style={{
                      background: `linear-gradient(135deg, ${settings.primaryColor} 0%, ${settings.secondaryColor} 100%)`,
                    }}
                  >
                    <p style={{ fontSize: `${settings.fontSize}px` }}>Preview Text</p>
                  </div>
                </div>
              </div>
              <button type="submit" className="btn-save">
                Save Changes
              </button>
            </Card>
          )}
        </form>
      </div>
    </div>
  )
}

export default Settings


