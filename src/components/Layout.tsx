import { ReactNode } from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import './Layout.css'

interface LayoutProps {
  children: ReactNode
}

/**
 * Layout component - Wrapper cho toàn bộ ứng dụng
 * Bao gồm Sidebar (bên trái) và Header (bên trên)
 * @param children - Nội dung trang được render ở giữa
 */
const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="layout">
      <Sidebar />
      <div className="layout-main">
        <Header />
        <main className="layout-content">{children}</main>
      </div>
    </div>
  )
}

export default Layout


