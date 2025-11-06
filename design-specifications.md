# Design Specifications - Cosmetics Sales Dashboard
## Các giao diện tiếp theo - Tóm tắt ngắn gọn

**Figma File**: [https://www.figma.com/design/ptQSfMgiVlnNTfWkG6MyQE/ux-ui](https://www.figma.com/design/ptQSfMgiVlnNTfWkG6MyQE/ux-ui)

---

## DESIGN SYSTEM

### Màu sắc:
- **Primary**: Gradient #8b5cf6 → #ec4899
- **Success**: #10b981 | **Warning**: #f97316 | **Error**: #ef4444
- **Background**: #f5f5f5 | **Cards**: #ffffff
- **Text**: #1f2937 (primary), #6b7280 (secondary)

### Typography:
- **H1**: 24px Bold | **H2**: 18px Semi-bold | **Body**: 14px Regular | **Small**: 12px

### Spacing:
- **Card Padding**: 24px | **Gap**: 24px | **Element Gap**: 16px

### Border Radius:
- **Cards**: 16px | **Buttons**: 8px | **Badges**: 12px

---

## 1. TRANG QUẢN LÝ SẢN PHẨM

**Layout**: Grid 3 columns (desktop)

### Components:
1. **Product List Card** (2/3 width):
   - Title + "Add New Product" button (purple gradient)
   - Filter bar: Category dropdown, Status dropdown, Search input
   - Table: Checkbox | Image | Name | Category | Price | Stock | Status | Actions
   - Pagination

2. **Quick Stats Card** (1/3 width):
   - 4 metric cards: Total Products, Active, Low Stock, Out of Stock
   - Gradient backgrounds (green, orange, red)

3. **Top Selling Products** (1/3 width):
   - List 5 sản phẩm: Image | Name | Sales | Trend arrow

4. **Category Distribution** (1/3 width):
   - Donut chart: Skincare (pink), Makeup (purple), Haircare (yellow)

---

## 2. TRANG QUẢN LÝ KHÁCH HÀNG

**Layout**: Giống Product Management

### Components:
1. **Customer List Card** (2/3 width):
   - Title + "Add Customer" button
   - Filter: Status dropdown, Search
   - Table: Checkbox | Avatar | Name | Email | Phone | Orders | Spent | Status | Actions
   - Pagination

2. **Customer Stats Card** (1/3 width):
   - 4 metrics: Total, New This Month, VIP, Active

3. **Recent Orders** (1/3 width):
   - List 5 đơn hàng gần nhất

4. **Customer Growth Chart** (1/3 width):
   - Line chart 6 tháng

---

## 3. TRANG CHI TIẾT ĐƠN HÀNG

**Layout**: Single column

### Components:
1. **Order Header Card**:
   - Left: Order ID, Date, Customer info (avatar, email, phone)
   - Right: Status badge, Total amount, Action buttons

2. **Order Items Card**:
   - Table: Image | Product | Category | Quantity | Price | Total
   - Summary: Subtotal, Shipping, Tax, Grand Total

3. **Shipping Information Card**:
   - Address, Method, Tracking, Delivery date, Status

4. **Payment Information Card**:
   - Method, Card number, Status, Date, Transaction ID

5. **Order Timeline Card**:
   - Vertical timeline: Placed → Payment → Processing → Shipped → Delivered

---

## 4. TRANG QUẢN LÝ KHO

**Layout**: Giống Product Management

### Components:
1. **Inventory List Card** (2/3 width):
   - Title + "Add Stock" button
   - Filter: Category, Stock Status, Search
   - Table: Checkbox | Image | Name | SKU | Category | Current Stock | Min Stock | Status | Actions

2. **Stock Overview Card** (1/3 width):
   - 4 metrics: Total Items, In Stock, Low Stock, Out of Stock

3. **Low Stock Alert Card** (1/3 width):
   - List 5 sản phẩm sắp hết hàng với "Restock" button

4. **Stock Movement Chart** (1/3 width):
   - Bar chart 30 ngày (In/Out)

---

## 5. TRANG THÊM/SỬA SẢN PHẨM

**Layout**: Single column, form layout

### Components:
1. **Form Header**: Title, Breadcrumb, Buttons (Cancel, Save Draft, Publish)

2. **Basic Information Card**:
   - Product Name*, SKU*, Category*, Brand*, Description*

3. **Product Images Card**:
   - Main image (300x300px) + Gallery grid (4x2 thumbnails)

4. **Pricing & Inventory Card**:
   - Left: Regular Price, Sale Price, Cost Price
   - Right: Stock Quantity, Min Stock, Stock Status, Manage Stock toggle

5. **Product Attributes Card**:
   - Size/Variant table, Color, Weight, Dimensions, Tags

6. **SEO Settings Card** (optional):
   - Meta Title, Meta Description, URL Slug

7. **Product Status Card**:
   - Status (Draft/Published/Archived), Featured toggle, Visibility, Publish Date

---

## 6. TRANG CÀI ĐẶT

**Layout**: Single column với tabs

### Tabs:
- General | Store Information | Payment Methods | Shipping | Notifications | Security | Appearance

### Components (mỗi tab):
1. **General Settings**: Store Name, Email, Phone, Address, Timezone, Currency, Language

2. **Store Information**: Logo upload, Banner upload, Description, Social media links

3. **Payment Methods**: Toggle switches cho Credit Card, PayPal, Bank Transfer, COD

4. **Shipping Settings**: Shipping zones list, Default method, Rates table

5. **Notification Settings**: Email/SMS toggles cho các loại notifications

6. **Security Settings**: Password change, 2FA toggle, Session timeout

7. **Appearance Settings**: Color pickers (Primary, Secondary), Font, Preview box

---

## NOTES QUAN TRỌNG

### Consistency:
- Giữ nguyên header, sidebar, color palette từ dashboard hiện tại
- Tất cả cards: 16px border-radius, 24px padding, white background
- Buttons: 8px border-radius, purple gradient cho primary

### Responsive:
- Desktop: 3 columns
- Tablet: 2 columns
- Mobile: 1 column, horizontal scroll cho tables

### States cần design:
- Empty states (icon + message + CTA)
- Loading states (skeleton)
- Error states (error message + retry)
- Hover states (shadow tăng, background change)

### Figma Tips:
- Dùng Auto Layout cho tất cả cards
- Tạo Components cho Button, Badge, Input
- Tạo Text Styles và Color Styles
- Link buttons trong Prototype mode
