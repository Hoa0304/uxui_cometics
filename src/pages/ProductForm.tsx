import { useParams, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Card from '../components/Card'
import './ProductForm.css'

/**
 * Product Form page - Trang thêm/sửa sản phẩm
 * Form với các sections: Basic Info, Images, Pricing, Attributes, SEO, Status
 */
const ProductForm = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const isEdit = !!id

  const [formData, setFormData] = useState({
    name: '',
    sku: '',
    category: '',
    brand: '',
    description: '',
    shortDescription: '',
    regularPrice: '',
    salePrice: '',
    costPrice: '',
    stockQuantity: '',
    minStock: '',
    stockStatus: 'In Stock',
    manageStock: true,
    status: 'Draft',
    featured: false,
    visibility: 'Public',
    publishDate: '',
    metaTitle: '',
    metaDescription: '',
    urlSlug: '',
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    const checked = (e.target as HTMLInputElement).checked

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  return (
    <div className="product-form">
      <div className="product-form-container">
        {/* Form Header */}
        <Card className="form-header-card">
          <div className="form-header-content">
            <div className="form-header-left">
              <h2 className="form-title">{isEdit ? 'Edit Product' : 'Add New Product'}</h2>
              <div className="breadcrumb">
                Dashboard / Products / {isEdit ? 'Edit' : 'Add'}
              </div>
            </div>
            <div className="form-header-actions">
              <button className="btn-cancel" onClick={() => navigate('/products')}>
                Cancel
              </button>
              <button className="btn-save-draft" onClick={handleSubmit}>
                Save Draft
              </button>
              <button className="btn-publish" onClick={handleSubmit}>
                Publish
              </button>
            </div>
          </div>
        </Card>

        <form onSubmit={handleSubmit}>
          {/* Basic Information Card */}
          <Card className="form-section-card">
            <h3 className="card-title">Basic Information</h3>
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="name">
                  Product Name <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label htmlFor="sku">
                  SKU <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="sku"
                  name="sku"
                  value={formData.sku}
                  onChange={handleInputChange}
                  required
                  className="form-input"
                  style={{ fontFamily: 'monospace' }}
                />
              </div>
              <div className="form-group">
                <label htmlFor="category">
                  Category <span className="required">*</span>
                </label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  required
                  className="form-input"
                >
                  <option value="">Select Category</option>
                  <option value="Skincare">Skincare</option>
                  <option value="Makeup">Makeup</option>
                  <option value="Haircare">Haircare</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="brand">
                  Brand <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="brand"
                  name="brand"
                  value={formData.brand}
                  onChange={handleInputChange}
                  required
                  className="form-input"
                />
              </div>
              <div className="form-group full-width">
                <label htmlFor="description">
                  Description <span className="required">*</span>
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="form-input"
                />
              </div>
              <div className="form-group full-width">
                <label htmlFor="shortDescription">Short Description</label>
                <textarea
                  id="shortDescription"
                  name="shortDescription"
                  value={formData.shortDescription}
                  onChange={handleInputChange}
                  rows={2}
                  className="form-input"
                />
              </div>
            </div>
          </Card>

          {/* Product Images Card */}
          <Card className="form-section-card">
            <h3 className="card-title">Product Images</h3>
            <div className="images-section">
              <div className="main-image-section">
                <div className="main-image-placeholder">
                  <span>📷</span>
                  <p>Main Image (300x300px)</p>
                  <button type="button" className="btn-upload">Upload Image</button>
                </div>
              </div>
              <div className="gallery-section">
                <h4 className="gallery-title">Gallery Images</h4>
                <div className="gallery-grid">
                  {Array.from({ length: 8 }, (_, i) => (
                    <div key={i} className="gallery-item">
                      <div className="gallery-placeholder">
                        <span>+</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>

          {/* Pricing & Inventory Card */}
          <Card className="form-section-card">
            <h3 className="card-title">Pricing & Inventory</h3>
            <div className="form-grid two-columns">
              <div className="form-column">
                <div className="form-group">
                  <label htmlFor="regularPrice">
                    Regular Price <span className="required">*</span>
                  </label>
                  <div className="input-with-prefix">
                    <span className="input-prefix">$</span>
                    <input
                      type="number"
                      id="regularPrice"
                      name="regularPrice"
                      value={formData.regularPrice}
                      onChange={handleInputChange}
                      required
                      className="form-input"
                      step="0.01"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="salePrice">Sale Price</label>
                  <div className="input-with-prefix">
                    <span className="input-prefix">$</span>
                    <input
                      type="number"
                      id="salePrice"
                      name="salePrice"
                      value={formData.salePrice}
                      onChange={handleInputChange}
                      className="form-input"
                      step="0.01"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="costPrice">Cost Price</label>
                  <div className="input-with-prefix">
                    <span className="input-prefix">$</span>
                    <input
                      type="number"
                      id="costPrice"
                      name="costPrice"
                      value={formData.costPrice}
                      onChange={handleInputChange}
                      className="form-input"
                      step="0.01"
                    />
                  </div>
                </div>
              </div>
              <div className="form-column">
                <div className="form-group">
                  <label htmlFor="stockQuantity">
                    Stock Quantity <span className="required">*</span>
                  </label>
                  <input
                    type="number"
                    id="stockQuantity"
                    name="stockQuantity"
                    value={formData.stockQuantity}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="minStock">Min Stock Level</label>
                  <input
                    type="number"
                    id="minStock"
                    name="minStock"
                    value={formData.minStock}
                    onChange={handleInputChange}
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="stockStatus">
                    Stock Status <span className="required">*</span>
                  </label>
                  <select
                    id="stockStatus"
                    name="stockStatus"
                    value={formData.stockStatus}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                  >
                    <option value="In Stock">In Stock</option>
                    <option value="Out of Stock">Out of Stock</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="toggle-label">
                    <input
                      type="checkbox"
                      name="manageStock"
                      checked={formData.manageStock}
                      onChange={handleInputChange}
                      className="toggle-input"
                    />
                    <span className="toggle-text">Manage Stock</span>
                  </label>
                </div>
              </div>
            </div>
          </Card>

          {/* Product Attributes Card */}
          <Card className="form-section-card">
            <h3 className="card-title">Product Attributes</h3>
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="weight">Weight</label>
                <div className="input-with-suffix">
                  <input
                    type="number"
                    id="weight"
                    name="weight"
                    className="form-input"
                    step="0.01"
                  />
                  <span className="input-suffix">g</span>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="length">Length</label>
                <input type="number" id="length" name="length" className="form-input" step="0.01" />
              </div>
              <div className="form-group">
                <label htmlFor="width">Width</label>
                <input type="number" id="width" name="width" className="form-input" step="0.01" />
              </div>
              <div className="form-group">
                <label htmlFor="height">Height</label>
                <input type="number" id="height" name="height" className="form-input" step="0.01" />
              </div>
              <div className="form-group full-width">
                <label htmlFor="tags">Tags</label>
                <input
                  type="text"
                  id="tags"
                  name="tags"
                  placeholder="Separate tags with commas"
                  className="form-input"
                />
              </div>
            </div>
          </Card>

          {/* SEO Settings Card */}
          <Card className="form-section-card">
            <h3 className="card-title">SEO Settings</h3>
            <div className="form-grid">
              <div className="form-group full-width">
                <label htmlFor="metaTitle">Meta Title</label>
                <input
                  type="text"
                  id="metaTitle"
                  name="metaTitle"
                  value={formData.metaTitle}
                  onChange={handleInputChange}
                  className="form-input"
                />
              </div>
              <div className="form-group full-width">
                <label htmlFor="metaDescription">Meta Description</label>
                <textarea
                  id="metaDescription"
                  name="metaDescription"
                  value={formData.metaDescription}
                  onChange={handleInputChange}
                  rows={2}
                  className="form-input"
                />
              </div>
              <div className="form-group full-width">
                <label htmlFor="urlSlug">URL Slug</label>
                <input
                  type="text"
                  id="urlSlug"
                  name="urlSlug"
                  value={formData.urlSlug}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="Auto-generate from product name"
                />
              </div>
            </div>
          </Card>

          {/* Product Status Card */}
          <Card className="form-section-card">
            <h3 className="card-title">Product Status</h3>
            <div className="form-grid">
              <div className="form-group">
                <label>
                  Status <span className="required">*</span>
                </label>
                <div className="radio-group">
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="status"
                      value="Draft"
                      checked={formData.status === 'Draft'}
                      onChange={handleInputChange}
                      className="radio-input"
                    />
                    <span>Draft</span>
                  </label>
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="status"
                      value="Published"
                      checked={formData.status === 'Published'}
                      onChange={handleInputChange}
                      className="radio-input"
                    />
                    <span>Published</span>
                  </label>
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="status"
                      value="Archived"
                      checked={formData.status === 'Archived'}
                      onChange={handleInputChange}
                      className="radio-input"
                    />
                    <span>Archived</span>
                  </label>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="visibility">Visibility</label>
                <select
                  id="visibility"
                  name="visibility"
                  value={formData.visibility}
                  onChange={handleInputChange}
                  className="form-input"
                >
                  <option value="Public">Public</option>
                  <option value="Hidden">Hidden</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="publishDate">Publish Date</label>
                <input
                  type="date"
                  id="publishDate"
                  name="publishDate"
                  value={formData.publishDate}
                  onChange={handleInputChange}
                  className="form-input"
                />
              </div>
              <div className="form-group full-width">
                <label className="toggle-label">
                  <input
                    type="checkbox"
                    name="featured"
                    checked={formData.featured}
                    onChange={handleInputChange}
                    className="toggle-input"
                  />
                  <span className="toggle-text">Featured Product</span>
                </label>
              </div>
            </div>
          </Card>
        </form>
      </div>
    </div>
  )
}

export default ProductForm


