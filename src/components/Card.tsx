import { ReactNode } from 'react'
import './Card.css'

interface CardProps {
  title?: string
  children: ReactNode
  className?: string
  action?: ReactNode
}

/**
 * Card component - Component card dùng chung cho các widget
 * @param title - Tiêu đề của card (optional)
 * @param children - Nội dung bên trong card
 * @param className - Class CSS bổ sung (optional)
 * @param action - Action button/icon ở góc phải trên (optional)
 */
const Card = ({ title, children, className = '', action }: CardProps) => {
  return (
    <div className={`card ${className}`}>
      {(title || action) && (
        <div className="card-header">
          {title && <h3 className="card-title">{title}</h3>}
          {action && <div className="card-action">{action}</div>}
        </div>
      )}
      <div className="card-content">{children}</div>
    </div>
  )
}

export default Card


