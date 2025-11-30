// Admin Portal Component (Enhanced version)
const AdminPortal = ({ onBackToRoles, onLogout }) => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [users, setUsers] = useState([
    { id: 1, name: 'Raj Kumar', email: 'raj@farmer.com', role: 'Farmer', status: 'Active', verified: true, joinDate: '2024-01-15' },
    { id: 2, name: 'Dr. Sharma', email: 'sharma@expert.com', role: 'Expert', status: 'Pending', verified: false, joinDate: '2024-01-20' },
    { id: 3, name: 'Amit Singh', email: 'amit@public.com', role: 'Public', status: 'Active', verified: true, joinDate: '2024-01-10' },
    { id: 4, name: 'Priya Patel', email: 'priya@farmer.com', role: 'Farmer', status: 'Suspended', verified: true, joinDate: '2024-01-05' }
  ]);

  const [analytics, setAnalytics] = useState({
    totalUsers: 1250,
    activeUsers: 892,
    pendingVerification: 23,
    platformGrowth: '+12.5%'
  });

  const handleVerifyUser = (userId) => {
    setUsers(users.map(user => 
      user.id === userId ? { ...user, verified: true, status: 'Active' } : user
    ));
  };

  const handleSuspendUser = (userId) => {
    setUsers(users.map(user => 
      user.id === userId ? { ...user, status: 'Suspended' } : user
    ));
  };

  const handleActivateUser = (userId) => {
    setUsers(users.map(user => 
      user.id === userId ? { ...user, status: 'Active' } : user
    ));
  };

  const handleBackToFeatures = () => {
    setActiveTab('dashboard');
  };

  // Render different sections based on active tab
  const renderDashboardTab = () => {
    return (
      <div className="admin-main-view">
        <div className="admin-hero-section">
          <div className="admin-hero-icon">⚙️</div>
          <h1 className="admin-portal-title">Admin Portal</h1>
          <p className="admin-portal-subtitle">Manage platform operations and user interactions</p>
        </div>

        {/* Quick Stats */}
        <div className="admin-stats-grid">
          <div className="admin-stat-card">
            <div className="stat-icon">👥</div>
            <div className="stat-content">
              <h3>{analytics.totalUsers}</h3>
              <p>Total Users</p>
            </div>
          </div>
          <div className="admin-stat-card">
            <div className="stat-icon">✅</div>
            <div className="stat-content">
              <h3>{analytics.activeUsers}</h3>
              <p>Active Users</p>
            </div>
          </div>
          <div className="admin-stat-card">
            <div className="stat-icon">⏳</div>
            <div className="stat-content">
              <h3>{analytics.pendingVerification}</h3>
              <p>Pending Verification</p>
            </div>
          </div>
          <div className="admin-stat-card">
            <div className="stat-icon">📈</div>
            <div className="stat-content">
              <h3>{analytics.platformGrowth}</h3>
              <p>Platform Growth</p>
            </div>
          </div>
        </div>

        <div className="features-grid-admin">
          <div className="feature-card-admin" onClick={() => setActiveTab('users')}>
            <div className="feature-icon-admin">👥</div>
            <h3>User Management</h3>
            <p>Manage all users and their permissions</p>
            <span className="feature-hover-indicator">Manage Users →</span>
          </div>
          <div className="feature-card-admin" onClick={() => setActiveTab('content')}>
            <div className="feature-icon-admin">🛡️</div>
            <h3>Content Moderation</h3>
            <p>Review and manage platform content</p>
            <span className="feature-hover-indicator">Moderate Content →</span>
          </div>
          <div className="feature-card-admin" onClick={() => setActiveTab('analytics')}>
            <div className="feature-icon-admin">📊</div>
            <h3>Platform Analytics</h3>
            <p>Monitor platform performance and usage</p>
            <span className="feature-hover-indicator">View Analytics →</span>
          </div>
          <div className="feature-card-admin">
            <div className="feature-icon-admin">⚙️</div>
            <h3>System Settings</h3>
            <p>Configure platform settings and features</p>
            <span className="feature-hover-indicator">Configure →</span>
          </div>
        </div>

        <div className="admin-actions-section">
          <button className="enter-dashboard-button">
            System Overview Dashboard
          </button>
        </div>
      </div>
    );
  };

  const renderUserManagementTab = () => {
    return (
      <div className="admin-tab-content">
        <div className="tab-header">
          <button onClick={handleBackToFeatures} className="back-to-features-button">
            ← Back to Dashboard
          </button>
          <h2>👥 User Management</h2>
          <p>Manage user accounts, verify identities, and handle permissions</p>
        </div>
        
        <div className="users-table-container">
          <table className="users-table">
            <thead>
              <tr>
                <th>User</th>
                <th>Role</th>
                <th>Status</th>
                <th>Verification</th>
                <th>Join Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user.id}>
                  <td>
                    <div className="user-info">
                      <div className="user-avatar">
                        {user.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div className="user-details">
                        <div className="user-name">{user.name}</div>
                        <div className="user-email">{user.email}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className={`role-tag role-${user.role.toLowerCase()}`}>
                      {user.role}
                    </span>
                  </td>
                  <td>
                    <span className={`status-tag status-${user.status.toLowerCase()}`}>
                      {user.status}
                    </span>
                  </td>
                  <td>
                    <span className={`verification-status ${user.verified ? 'verified' : 'pending'}`}>
                      {user.verified ? '✅ Verified' : '⏳ Pending'}
                    </span>
                  </td>
                  <td>{user.joinDate}</td>
                  <td>
                    <div className="action-buttons">
                      {!user.verified && (
                        <button 
                          className="action-btn verify-btn"
                          onClick={() => handleVerifyUser(user.id)}
                        >
                          Verify
                        </button>
                      )}
                      {user.status === 'Active' && (
                        <button 
                          className="action-btn suspend-btn"
                          onClick={() => handleSuspendUser(user.id)}
                        >
                          Suspend
                        </button>
                      )}
                      {user.status === 'Suspended' && (
                        <button 
                          className="action-btn activate-btn"
                          onClick={() => handleActivateUser(user.id)}
                        >
                          Activate
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  const renderContentModerationTab = () => {
    return (
      <div className="admin-tab-content">
        <div className="tab-header">
          <button onClick={handleBackToFeatures} className="back-to-features-button">
            ← Back to Dashboard
          </button>
          <h2>🛡️ Content Moderation</h2>
          <p>Review and manage platform content quality</p>
        </div>
        
        <div className="moderation-cards">
          <div className="moderation-card">
            <div className="moderation-header">
              <h3>📝 Posts Pending Review</h3>
              <span className="count-badge">12</span>
            </div>
            <p>User posts waiting for approval</p>
            <button className="moderation-action-btn">Review Posts</button>
          </div>
          
          <div className="moderation-card">
            <div className="moderation-header">
              <h3>⚠️ Reported Content</h3>
              <span className="count-badge">5</span>
            </div>
            <p>Content reported by users</p>
            <button className="moderation-action-btn">Handle Reports</button>
          </div>
          
          <div className="moderation-card">
            <div className="moderation-header">
              <h3>✅ Approved Content</h3>
              <span className="count-badge">1,247</span>
            </div>
            <p>Total approved platform content</p>
            <button className="moderation-action-btn">View All</button>
          </div>
        </div>
      </div>
    );
  };

  const renderAnalyticsTab = () => {
    return (
      <div className="admin-tab-content">
        <div className="tab-header">
          <button onClick={handleBackToFeatures} className="back-to-features-button">
            ← Back to Dashboard
          </button>
          <h2>📈 Platform Analytics</h2>
          <p>Monitor platform performance and user engagement</p>
        </div>
        
        <div className="analytics-grid">
          <div className="analytics-card">
            <h3>User Growth</h3>
            <div className="chart-placeholder">
              <div className="chart-bar" style={{height: '80%'}}></div>
              <div className="chart-bar" style={{height: '60%'}}></div>
              <div className="chart-bar" style={{height: '90%'}}></div>
              <div className="chart-bar" style={{height: '75%'}}></div>
            </div>
          </div>
          
          <div className="analytics-card">
            <h3>Role Distribution</h3>
            <div className="pie-chart-placeholder">
              <div className="pie-segment farmers"></div>
              <div className="pie-segment experts"></div>
              <div className="pie-segment public"></div>
            </div>
            <div className="chart-legend">
              <div className="legend-item">
                <span className="color-dot farmers-dot"></span>
                Farmers: 45%
              </div>
              <div className="legend-item">
                <span className="color-dot experts-dot"></span>
                Experts: 25%
              </div>
              <div className="legend-item">
                <span className="color-dot public-dot"></span>
                Public: 30%
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="admin-portal-container">
      <div className="portal-header">
        <button onClick={onBackToRoles} className="back-button">
          ← Back to Roles
        </button>
        <button onClick={onLogout} className="logout-button">
          Logout
        </button>
      </div>

      <div className="portal-content">
        {/* Admin Navigation Tabs */}
        <div className="admin-tabs">
          <button 
            className={`tab-button ${activeTab === 'dashboard' ? 'active' : ''}`}
            onClick={() => setActiveTab('dashboard')}
          >
            📊 Dashboard
          </button>
          <button 
            className={`tab-button ${activeTab === 'users' ? 'active' : ''}`}
            onClick={() => setActiveTab('users')}
          >
            👥 User Management
          </button>
          <button 
            className={`tab-button ${activeTab === 'content' ? 'active' : ''}`}
            onClick={() => setActiveTab('content')}
          >
            🛡️ Content Moderation
          </button>
          <button 
            className={`tab-button ${activeTab === 'analytics' ? 'active' : ''}`}
            onClick={() => setActiveTab('analytics')}
          >
            📈 Analytics
          </button>
        </div>

        {/* Render Active Tab Content */}
        {activeTab === 'dashboard' && renderDashboardTab()}
        {activeTab === 'users' && renderUserManagementTab()}
        {activeTab === 'content' && renderContentModerationTab()}
        {activeTab === 'analytics' && renderAnalyticsTab()}
      </div>
    </div>
  );
};