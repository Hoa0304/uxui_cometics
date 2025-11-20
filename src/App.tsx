import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import Layout from './components/Layout'
import UserLayout from './components/UserLayout'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import ProductManagement from './pages/ProductManagement'
import CustomerManagement from './pages/CustomerManagement'
import OrderDetails from './pages/OrderDetails'
import InventoryManagement from './pages/InventoryManagement'
import ProductForm from './pages/ProductForm'
import Settings from './pages/Settings'
import Shop from './pages/Shop'
import ProductDetail from './pages/ProductDetail'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import Profile from './pages/Profile'
import MyOrders from './pages/MyOrders'

// Protected Route Component for Admin - Disabled (no login required)
const AdminRoute = ({ children }: { children: React.ReactElement }) => {
  // Allow access without login
  return children
}

// Protected Route Component for User - Disabled (no login required)
// Tất cả các route user đều có thể truy cập mà không cần đăng nhập
const UserRoute = ({ children }: { children: React.ReactElement }) => {
  // Allow access without login - Cho phép truy cập mà không cần đăng nhập
  return children
}

function AppRoutes() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/landing" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Admin Routes */}
      <Route
        path="/admin/*"
        element={
          <AdminRoute>
            <Layout>
              <Routes>
                <Route path="/" element={<Navigate to="/" replace />} />
                <Route path="/products" element={<ProductManagement />} />
                <Route path="/products/new" element={<ProductForm />} />
                <Route path="/products/edit/:id" element={<ProductForm />} />
                <Route path="/customers" element={<CustomerManagement />} />
                <Route path="/orders/:id" element={<OrderDetails />} />
                <Route path="/inventory" element={<InventoryManagement />} />
                <Route path="/settings" element={<Settings />} />
              </Routes>
            </Layout>
          </AdminRoute>
        }
      />

      {/* Admin Dashboard (root) */}
      <Route
        path="/"
        element={
          <AdminRoute>
            <Layout>
              <Dashboard />
            </Layout>
          </AdminRoute>
        }
      />

      {/* User Routes */}
      <Route
        path="/shop"
        element={
          <UserRoute>
            <UserLayout>
              <Shop />
            </UserLayout>
          </UserRoute>
        }
      />
      <Route
        path="/product/:id"
        element={
          <UserRoute>
            <UserLayout>
              <ProductDetail />
            </UserLayout>
          </UserRoute>
        }
      />
      <Route
        path="/cart"
        element={
          <UserRoute>
            <UserLayout>
              <Cart />
            </UserLayout>
          </UserRoute>
        }
      />
      {/* Checkout Routes - Không yêu cầu đăng nhập, có thể truy cập trực tiếp */}
      <Route
        path="/checkout"
        element={
          <UserRoute>
            <UserLayout>
              <Checkout />
            </UserLayout>
          </UserRoute>
        }
      />
      <Route
        path="/checkout/payment"
        element={
          <UserRoute>
            <UserLayout>
              <Checkout />
            </UserLayout>
          </UserRoute>
        }
      />
      <Route
        path="/checkout/review"
        element={
          <UserRoute>
            <UserLayout>
              <Checkout />
            </UserLayout>
          </UserRoute>
        }
      />
      <Route
        path="/profile"
        element={
          <UserRoute>
            <UserLayout>
              <Profile />
            </UserLayout>
          </UserRoute>
        }
      />
      <Route
        path="/orders"
        element={
          <UserRoute>
            <UserLayout>
              <MyOrders />
            </UserLayout>
          </UserRoute>
        }
      />

      {/* Default redirect */}
      <Route path="*" element={<Navigate to="/landing" replace />} />
    </Routes>
  )
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppRoutes />
      </Router>
    </AuthProvider>
  )
}

export default App
