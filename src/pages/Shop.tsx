import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Shop.css'

/**
 * Shop page - Trang mua sắm cho user
 * Hiển thị danh sách sản phẩm với filter và search
 */
const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [sortBy, setSortBy] = useState('popular')

  const categories = [
    { id: 'all', name: 'All Products', icon: '🛍️' },
    { id: 'skincare', name: 'Skincare', icon: '✨' },
    { id: 'makeup', name: 'Makeup', icon: '💄' },
    { id: 'haircare', name: 'Haircare', icon: '💇' },
  ]

  const products = [
    {
      id: 1,
      name: 'Vitamin C Serum',
      category: 'skincare',
      price: 45.99,
      originalPrice: 59.99,
      rating: 4.9,
      reviews: 234,
      image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=400&fit=crop',
      badge: 'Best Seller',
    },
    {
      id: 2,
      name: 'Matte Lipstick',
      category: 'makeup',
      price: 24.99,
      rating: 4.8,
      reviews: 189,
      image: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=400&h=400&fit=crop',
      badge: 'New',
    },
    {
      id: 3,
      name: 'Hydrating Toner',
      category: 'skincare',
      price: 32.50,
      rating: 4.7,
      reviews: 156,
      image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=400&fit=crop',
    },
    {
      id: 4,
      name: 'Hair Mask',
      category: 'haircare',
      price: 28.99,
      rating: 4.9,
      reviews: 98,
      image: 'https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?w=400&h=400&fit=crop',
    },
    {
      id: 5,
      name: 'Face Cleanser',
      category: 'skincare',
      price: 22.99,
      rating: 4.6,
      reviews: 312,
      image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&h=400&fit=crop',
    },
    {
      id: 6,
      name: 'Foundation',
      category: 'makeup',
      price: 35.99,
      rating: 4.8,
      reviews: 267,
      image: 'https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=400&h=400&fit=crop',
    },
  ]

  const filteredProducts =
    selectedCategory === 'all'
      ? products
      : products.filter((p) => p.category === selectedCategory)

  return (
    <div className="shop-page">
      <div className="shop-header">
        <h1 className="shop-title">Shop</h1>
        <p className="shop-subtitle">Discover our premium beauty products</p>
      </div>

      <div className="shop-filters">
        <div className="category-filters">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`category-btn ${selectedCategory === cat.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat.id)}
            >
              <span className="category-icon">{cat.icon}</span>
              <span className="category-name">{cat.name}</span>
            </button>
          ))}
        </div>
        <div className="sort-filter">
          <label htmlFor="sort">Sort by:</label>
          <select id="sort" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="popular">Popular</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
          </select>
        </div>
      </div>

      <div className="products-grid">
        {filteredProducts.map((product) => (
          <Link key={product.id} to={`/product/${product.id}`} className="product-card">
            <div className="product-image-wrapper">
              <img src={product.image} alt={product.name} className="product-image" />
              {product.badge && (
                <div className={`product-badge ${product.badge === 'New' ? 'new' : ''}`}>
                  {product.badge}
                </div>
              )}
              <button className="quick-add-btn">Add to Cart</button>
            </div>
            <div className="product-info">
              <h3 className="product-name">{product.name}</h3>
              <div className="product-rating">
                <span className="stars">{'⭐'.repeat(Math.floor(product.rating))}</span>
                <span className="rating-text">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>
              <div className="product-price">
                <span className="price-current">${product.price}</span>
                {product.originalPrice && (
                  <span className="price-original">${product.originalPrice}</span>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Shop

