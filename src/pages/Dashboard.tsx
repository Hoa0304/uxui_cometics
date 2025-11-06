import Card from '../components/Card'
import './Dashboard.css'

/**
 * Dashboard page - Trang tổng quan chính
 * Hiển thị các thống kê và biểu đồ về doanh số, đơn hàng, khách hàng
 */
const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-grid">
        {/* Sales Overview Card */}
        <Card title="Sales Overview" action={<span className="share-icon">📤</span>} className="sales-overview">
          <div className="progress-section">
            <div className="progress-header">
              <span className="progress-icon">👍</span>
              <span>Orders completed for all time</span>
            </div>
            <div className="progress-bar-container">
              <div className="progress-bar" style={{ width: '42%' }}></div>
            </div>
          </div>
          <div className="metrics-row">
            <div className="metric-card green">
              <div className="metric-icon-top">●</div>
              <div className="metric-value">28</div>
              <div className="metric-label">Total Orders</div>
            </div>
            <div className="metric-card green">
              <div className="metric-icon-top">ℹ️</div>
              <div className="metric-value">14</div>
              <div className="metric-label">Pending Orders</div>
            </div>
          </div>
        </Card>

        {/* Weekly Sales Card */}
        <Card title="Weekly Sales" action={<span>📊</span>} className="weekly-sales">
          <div className="chart-legend">
            <div className="legend-item">
              <span className="legend-icon">🏆</span>
              <span>Skincare</span>
            </div>
            <div className="legend-item">
              <span className="legend-icon">🎓</span>
              <span>Makeup</span>
            </div>
          </div>
          <div className="line-chart-placeholder">
            <div className="chart-y-axis">
              <span>75</span>
              <span>50</span>
              <span>25</span>
              <span>0</span>
            </div>
            <div className="chart-content">
              <div className="chart-lines">
                <div className="chart-line pink">
                  <div className="chart-tooltip" style={{ left: '83%', top: '40%' }}>
                    24%
                  </div>
                </div>
                <div className="chart-line purple"></div>
              </div>
              <div className="chart-x-axis">
                <span>M</span>
                <span>T</span>
                <span>W</span>
                <span>T</span>
                <span>F</span>
                <span>S</span>
                <span>S</span>
              </div>
            </div>
          </div>
        </Card>

        {/* Monthly Performance Card */}
        <Card title="Monthly Performance" action={<span>🏆</span>} className="monthly-performance">
          <div className="performance-summary">
            <span className="performance-text">+20% compare to last month*</span>
          </div>
          <div className="chart-legend">
            <div className="legend-item">
              <span className="legend-dot pink"></span>
              <span>Skincare</span>
            </div>
            <div className="legend-item">
              <span className="legend-dot purple"></span>
              <span>Makeup</span>
            </div>
            <div className="legend-item">
              <span className="legend-dot yellow"></span>
              <span>Haircare</span>
            </div>
          </div>
          <div className="donut-chart-placeholder">
            <div className="donut-chart">
              <div className="donut-ring outer-ring"></div>
              <div className="donut-ring middle-ring"></div>
              <div className="donut-ring inner-ring"></div>
            </div>
          </div>
          <div className="performance-actions">
            <button className="action-btn share-btn-circular">📤</button>
            <button className="action-btn export-btn-outline">
              <span>Export Sales Report</span>
              <span>📥</span>
            </button>
          </div>
        </Card>

        {/* Customer Order List Card */}
        <Card className="customer-orders">
          <table className="orders-table">
            <thead>
              <tr>
                <th>
                  <input type="checkbox" />
                </th>
                <th>Customer</th>
                <th>Product</th>
                <th>Status</th>
                <th>Total $</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>
                  <div className="customer-cell">
                    <img
                      src="https://i.pravatar.cc/40?img=1"
                      alt="Customer"
                      className="customer-avatar"
                    />
                    <span>Cam Hoa</span>
                  </div>
                </td>
                <td>Serum</td>
                <td>
                  <span className="status-badge pending">Pending</span>
                </td>
                <td>$3,789</td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>
                  <div className="customer-cell">
                    <img
                      src="https://i.pravatar.cc/40?img=2"
                      alt="Customer"
                      className="customer-avatar"
                    />
                    <span>Minh Quy</span>
                  </div>
                </td>
                <td>Toner</td>
                <td>
                  <span className="status-badge done">Done</span>
                </td>
                <td>$1,075</td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>
                  <div className="customer-cell">
                    <img
                      src="https://i.pravatar.cc/40?img=1"
                      alt="Customer"
                      className="customer-avatar"
                    />
                    <span>Cam Hoa</span>
                  </div>
                </td>
                <td>Cleanser</td>
                <td>
                  <span className="status-badge done">Done</span>
                </td>
                <td>$2,780</td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>
                  <div className="customer-cell">
                    <img
                      src="https://i.pravatar.cc/40?img=2"
                      alt="Customer"
                      className="customer-avatar"
                    />
                    <span>Minh Quy</span>
                  </div>
                </td>
                <td>Lipstick</td>
                <td>
                  <span className="status-badge pending">Pending</span>
                </td>
                <td>$4,545</td>
              </tr>
            </tbody>
          </table>
        </Card>

        {/* Sales by Category Card */}
        <Card title="Sales by Category" action={<span>📊</span>} className="sales-category">
          <div className="bar-chart-placeholder">
            <div className="bar-chart-y-axis">
              <span>75</span>
              <span>50</span>
              <span>25</span>
              <span>0</span>
            </div>
            <div className="bar-chart-content">
              <div className="bar-chart-bars">
                {/* AD: ~30, KS: ~55, RA: ~35, HG: ~35, TD: ~70, AE: ~28 */}
                <div className="bar-chart-bar">
                  <div className="bar-segment yellow" style={{ height: '40%' }}></div>
                  <div className="bar-segment light-blue" style={{ height: '30%' }}></div>
                  <div className="bar-segment purple" style={{ height: '30%' }}></div>
                </div>
                <div className="bar-chart-bar">
                  <div className="bar-segment yellow" style={{ height: '50%' }}></div>
                  <div className="bar-segment light-blue" style={{ height: '30%' }}></div>
                  <div className="bar-segment purple" style={{ height: '20%' }}></div>
                </div>
                <div className="bar-chart-bar">
                  <div className="bar-segment yellow" style={{ height: '45%' }}></div>
                  <div className="bar-segment light-blue" style={{ height: '35%' }}></div>
                  <div className="bar-segment purple" style={{ height: '20%' }}></div>
                </div>
                <div className="bar-chart-bar">
                  <div className="bar-segment yellow" style={{ height: '45%' }}></div>
                  <div className="bar-segment light-blue" style={{ height: '35%' }}></div>
                  <div className="bar-segment purple" style={{ height: '20%' }}></div>
                </div>
                <div className="bar-chart-bar">
                  <div className="bar-segment yellow" style={{ height: '60%' }}></div>
                  <div className="bar-segment light-blue" style={{ height: '25%' }}></div>
                  <div className="bar-segment purple" style={{ height: '15%' }}></div>
                </div>
                <div className="bar-chart-bar">
                  <div className="bar-segment yellow" style={{ height: '38%' }}></div>
                  <div className="bar-segment light-blue" style={{ height: '32%' }}></div>
                  <div className="bar-segment purple" style={{ height: '30%' }}></div>
                </div>
              </div>
              <div className="bar-chart-x-axis">
                <span>AD</span>
                <span>KS</span>
                <span>RA</span>
                <span>HG</span>
                <span>TD</span>
                <span>AE</span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default Dashboard

