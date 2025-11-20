import { useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import './ProductDetail.css'

/**
 * ProductDetail page - Trang chi tiết sản phẩm
 * Hiển thị thông tin chi tiết sản phẩm, cho phép thêm vào giỏ hàng hoặc mua ngay
 */
const ProductDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)
  const [showAddedMessage, setShowAddedMessage] = useState(false)

  // Mock product data - Trong thực tế sẽ lấy từ API dựa trên id
  const product = {
    id: 1,
    name: 'Vitamin C Serum',
    category: 'skincare',
    price: 45.99,
    originalPrice: 59.99,
    rating: 4.9,
    reviews: 234,
    images: [
      'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&h=600&fit=crop',
    ],
    description:
      'Our Vitamin C Serum is a powerful antioxidant that helps brighten skin, reduce dark spots, and protect against environmental damage. Formulated with 20% Vitamin C and natural ingredients.',
    benefits: [
      'Brightens and evens skin tone',
      'Reduces appearance of dark spots',
      'Protects against free radicals',
      'Hydrates and nourishes skin',
    ],
    ingredients: 'Water, Ascorbic Acid, Hyaluronic Acid, Vitamin E, Aloe Vera',
    size: '30ml',
  }

  // Handle add to cart - Xử lý thêm vào giỏ hàng
  const handleAddToCart = () => {
    // Validate quantity - Kiểm tra số lượng hợp lệ
    if (quantity < 1) {
      return
    }

    // In thực tế sẽ gọi API hoặc cập nhật context/state management
    console.log('Add to cart:', { productId: id, quantity, product })

    // Hiển thị thông báo thành công
    setShowAddedMessage(true)
    setTimeout(() => {
      setShowAddedMessage(false)
    }, 3000)
  }

  // Handle buy now - Xử lý mua ngay, chuyển đến trang checkout
  const handleBuyNow = () => {
    // Validate quantity - Kiểm tra số lượng hợp lệ
    if (quantity < 1) {
      return
    }

    // In thực tế sẽ thêm sản phẩm vào giỏ hàng tạm thời hoặc truyền qua state
    console.log('Buy now:', { productId: id, quantity, product })

    // Chuyển đến trang checkout
    navigate('/checkout', {
      state: {
        // Có thể truyền thông tin sản phẩm qua state để checkout xử lý
        directPurchase: true,
        product: { ...product, quantity },
      },
    })
  }

  return (
    <div className="product-detail-page">
      <div className="product-detail-container">
        <div className="product-images">
          <div className="main-image">
            <img src={product.images[selectedImage]} alt={product.name} />
          </div>
          <div className="thumbnail-images">
            {product.images.map((img, index) => (
              <button
                key={index}
                className={`thumbnail ${selectedImage === index ? 'active' : ''}`}
                onClick={() => setSelectedImage(index)}
              >
                <img src={img} alt={`${product.name} ${index + 1}`} />
              </button>
            ))}
          </div>
        </div>

        <div className="product-details">
          <div className="product-breadcrumb">
            <Link to="/shop">Shop</Link>
            <span>/</span>
            <span>{product.category}</span>
            <span>/</span>
            <span>{product.name}</span>
          </div>

          <h1 className="product-title">{product.name}</h1>

          <div className="product-rating">
            <span className="stars">{'⭐'.repeat(Math.floor(product.rating))}</span>
            <span className="rating-value">{product.rating}</span>
            <span className="reviews-count">({product.reviews} reviews)</span>
          </div>

          <div className="product-price">
            <span className="price-current">${product.price}</span>
            {product.originalPrice && (
              <>
                <span className="price-original">${product.originalPrice}</span>
                <span className="discount-badge">
                  {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                </span>
              </>
            )}
          </div>

          <div className="product-description">
            <p>{product.description}</p>
          </div>

          <div className="product-benefits">
            <h3>Key Benefits:</h3>
            <ul>
              {product.benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </div>

          <div className="product-options">
            <div className="quantity-selector">
              <label>Quantity:</label>
              <div className="quantity-controls">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
                <span>{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)}>+</button>
              </div>
            </div>
          </div>

          <div className="product-actions">
            <button className="btn-add-to-cart" onClick={handleAddToCart}>
              {showAddedMessage ? '✓ Added to Cart!' : 'Add to Cart'}
            </button>
            <button className="btn-buy-now" onClick={handleBuyNow}>
              Buy Now
            </button>
          </div>
          {showAddedMessage && (
            <div className="success-message">
              <span>✓</span> Product added to cart! <Link to="/cart">View Cart</Link>
            </div>
          )}

          <div className="product-info-tabs">
            <div className="tab-content">
              <h3>Ingredients</h3>
              <p>{product.ingredients}</p>
            </div>
            <div className="tab-content">
              <h3>Size</h3>
              <p>{product.size}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail

