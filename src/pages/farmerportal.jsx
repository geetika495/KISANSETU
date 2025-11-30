import React, { useState } from 'react'
import './farmerportal.css'

const FarmerPortal = ({ onBackToRoles, onLogout }) => {
  const [selectedFeature, setSelectedFeature] = useState(null)

  const farmerData = {
    name: 'Farmer',
    icon: '🌾',
    color: '#4caf50',
    description: 'Manage your farm and connect with markets',
    features: [
      {
        id: 'crop-management',
        title: 'Crop Management',
        icon: '🌱',
        description: 'Track and manage your crops with real-time insights',
        details: {
          overview: 'Comprehensive crop monitoring and management system',
          data: {
            activeCrops: 8,
            totalArea: '12.5 acres',
            nextHarvest: '45 days',
            cropHealth: '92%'
          },
          crops: [
            { name: 'Tomato', area: '3 acres', health: '95%', stage: 'Flowering' },
            { name: 'Wheat', area: '4 acres', health: '90%', stage: 'Vegetative' },
            { name: 'Rice', area: '2.5 acres', health: '88%', stage: 'Tillering' },
            { name: 'Corn', area: '3 acres', health: '94%', stage: 'Silking' }
          ],
          actions: ['Add New Crop', 'Schedule Irrigation', 'Check Soil Health', 'View Growth Report']
        }
      },
      {
        id: 'market-prices',
        title: 'Market Prices',
        icon: '💰',
        description: 'Get latest market prices for your produce',
        details: {
          overview: 'Real-time market prices and trends',
          data: {
            todayAvgPrice: '₹2,450/Quintal',
            weeklyTrend: '+5.2%',
            bestMarket: 'Delhi Mandi',
            demandLevel: 'High'
          },
          commodities: [
            { name: 'Tomato', price: '₹1,800/Quintal', change: '+2.1%', market: 'Mumbai' },
            { name: 'Wheat', price: '₹2,200/Quintal', change: '+1.5%', market: 'Delhi' },
            { name: 'Rice', price: '₹3,100/Quintal', change: '-0.8%', market: 'Punjab' },
            { name: 'Corn', price: '₹1,650/Quintal', change: '+3.2%', market: 'Karnataka' }
          ],
          actions: ['Set Price Alerts', 'Compare Markets', 'View Historical Data', 'Find Buyers']
        }
      },
      {
        id: 'expert-help',
        title: 'Expert Help',
        icon: '🤝',
        description: 'Connect with agricultural experts',
        details: {
          overview: '24/7 access to certified agricultural consultants',
          data: {
            availableExperts: 15,
            avgResponseTime: '2 hours',
            successRate: '94%',
            languages: '5'
          },
          experts: [
            { name: 'Dr. Sharma', specialization: 'Soil Science', rating: '4.9', available: true },
            { name: 'Prof. Gupta', specialization: 'Crop Protection', rating: '4.8', available: true },
            { name: 'Ms. Patel', specialization: 'Organic Farming', rating: '4.7', available: false },
            { name: 'Dr. Kumar', specialization: 'Irrigation', rating: '4.9', available: true }
          ],
          actions: ['Ask Question', 'Schedule Call', 'Join Workshop', 'View Solutions']
        }
      },
      {
        id: 'farm-analytics',
        title: 'Farm Analytics',
        icon: '📊',
        description: 'Monitor your farm\'s performance and growth',
        details: {
          overview: 'Comprehensive analytics for better decision making',
          data: {
            monthlyRevenue: '₹78,500',
            expenseRatio: '42%',
            yieldPerAcre: '18.2 Quintals',
            profitMargin: '58%'
          },
          metrics: [
            { metric: 'Water Usage', value: '1250 KL', trend: '-8%' },
            { metric: 'Fertilizer Cost', value: '₹12,500', trend: '+5%' },
            { metric: 'Labor Efficiency', value: '87%', trend: '+12%' },
            { metric: 'Equipment Usage', value: '76%', trend: '+3%' }
          ],
          actions: ['Generate Report', 'Compare Periods', 'Set Goals', 'View Insights']
        }
      }
    ]
  }

  const openFeature = (feature) => {
    setSelectedFeature(feature)
  }

  const closeFeature = () => {
    setSelectedFeature(null)
  }

  // Feature Detail Component
  const FeatureDetailView = ({ feature }) => (
    <div className="feature-detail-view">
      <button onClick={closeFeature} className="back-to-features-button">
        ← Back to Features
      </button>
      
      <div className="feature-detail-card" style={{ borderColor: farmerData.color }}>
        <div className="feature-detail-header">
          <div className="feature-detail-icon">{feature.icon}</div>
          <div>
            <h1 className="feature-detail-title">{feature.title}</h1>
            <p className="feature-detail-subtitle">{feature.details.overview}</p>
          </div>
        </div>

        <div className="feature-stats-grid">
          {Object.entries(feature.details.data).map(([key, value]) => (
            <div key={key} className="feature-stat-card" style={{ background: farmerData.color }}>
              <div className="feature-stat-value">{value}</div>
              <div className="feature-stat-label">
                {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
              </div>
            </div>
          ))}
        </div>

        <div className="feature-content-section">
          <h3>Detailed Information</h3>
          <div className="feature-data-grid">
            {feature.details.crops && (
              <div className="data-list">
                <h4>Your Crops</h4>
                {feature.details.crops.map((crop, index) => (
                  <div key={index} className="data-item">
                    <span className="data-name">{crop.name}</span>
                    <span className="data-value">{crop.area}</span>
                    <span className="data-value">{crop.health}</span>
                    <span className="data-value">{crop.stage}</span>
                  </div>
                ))}
              </div>
            )}

            {feature.details.commodities && (
              <div className="data-list">
                <h4>Current Prices</h4>
                {feature.details.commodities.map((item, index) => (
                  <div key={index} className="data-item">
                    <span className="data-name">{item.name}</span>
                    <span className="data-value">{item.price}</span>
                    <span className={`data-trend ${item.change.includes('+') ? 'positive' : 'negative'}`}>
                      {item.change}
                    </span>
                    <span className="data-value">{item.market}</span>
                  </div>
                ))}
              </div>
            )}

            {feature.details.experts && (
              <div className="data-list">
                <h4>Available Experts</h4>
                {feature.details.experts.map((expert, index) => (
                  <div key={index} className="data-item">
                    <span className="data-name">{expert.name}</span>
                    <span className="data-value">{expert.specialization}</span>
                    <span className="data-value">⭐ {expert.rating}</span>
                    <span className={`data-status ${expert.available ? 'available' : 'busy'}`}>
                      {expert.available ? 'Available' : 'Busy'}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {feature.details.metrics && (
              <div className="data-list">
                <h4>Performance Metrics</h4>
                {feature.details.metrics.map((metric, index) => (
                  <div key={index} className="data-item">
                    <span className="data-name">{metric.metric}</span>
                    <span className="data-value">{metric.value}</span>
                    <span className={`data-trend ${metric.trend.includes('+') ? 'positive' : 'negative'}`}>
                      {metric.trend}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="feature-actions">
          <h3>Quick Actions</h3>
          <div className="action-buttons-grid">
            {feature.details.actions.map((action, index) => (
              <button 
                key={index} 
                className="feature-action-button"
                style={{ backgroundColor: farmerData.color }}
              >
                {action}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div className="farmer-portal-container">
      {/* Plant-themed background elements */}
      <div className="plant-decoration plant-1">🌿</div>
      <div className="plant-decoration plant-2">🍃</div>
      <div className="plant-decoration plant-3">🌾</div>
      <div className="plant-decoration plant-4">🌱</div>
      
      <div className="portal-header">
        <button onClick={onBackToRoles} className="back-button">
          ← Back to Roles
        </button>
        <button onClick={onLogout} className="logout-button">
          Logout
        </button>
      </div>

      <div className="portal-content">
        {selectedFeature ? (
          <FeatureDetailView feature={selectedFeature} />
        ) : (
          <div className="farmer-main-view">
            <div className="farmer-hero-section">
              <div className="farmer-hero-icon">🌾</div>
              <h1 className="farmer-portal-title">Farmer Portal</h1>
              <p className="farmer-portal-subtitle">Manage your farm and connect with markets</p>
            </div>

            <div className="features-grid-farmer">
              {farmerData.features.map((feature) => (
                <div 
                  key={feature.id}
                  className="feature-card-farmer"
                  onClick={() => openFeature(feature)}
                >
                  <div className="feature-icon-farmer">{feature.icon}</div>
                  <h3 className="feature-title-farmer">{feature.title}</h3>
                  <p className="feature-description-farmer">{feature.description}</p>
                  <div className="feature-hover-indicator">Click to Explore →</div>
                </div>
              ))}
            </div>

            <div className="farmer-actions-section">
              <button className="enter-dashboard-button">
                Enter Farmer Dashboard
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default FarmerPortal