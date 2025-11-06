import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider, useAuth } from './contexts/AuthContext'
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
import Profile from './pages/Profile'
import MyOrders from './pages/MyOrders'

// Protected Route Component for Admin
const AdminRoute = ({ children }: { children: React.ReactElement }) => {
  const { isAuthenticated, isAdmin } = useAuth()
  if (!isAuthenticated || !isAdmin) {
    return <Navigate to="/login" replace />
  }
  return children
}

// Protected Route Component for User
const UserRoute = ({ children }: { children: React.ReactElement }) => {
  const { isAuthenticated, isAdmin } = useAuth()
  if (!isAuthenticated || isAdmin) {
    return <Navigate to="/login" replace />
  }
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
