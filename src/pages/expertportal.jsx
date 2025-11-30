import React, { useState } from 'react'
import './ExpertPortal.css'

const ExpertPortal = ({ onBackToRoles, onLogout }) => {
  const [selectedFeature, setSelectedFeature] = useState(null)
  const [activeTab, setActiveTab] = useState('all')

  const expertData = {
    name: 'Expert',
    icon: '👨‍🌾',
    color: '#2196F3',
    description: 'Share knowledge and guide farmers to success',
    features: [
      {
        id: 'expert-help',
        title: 'Expert Help',
        icon: '🤝',
        description: 'Provide guidance and solutions to farmers',
        details: {
          overview: 'Help farmers with their agricultural challenges',
          data: {
            pendingQueries: 12,
            resolvedToday: 8,
            avgResponseTime: '1.5 hours',
            satisfactionRate: '96%'
          },
          activeQueries: [
            { 
              farmer: 'Rajesh Kumar', 
              question: 'Best organic fertilizer for tomato plants?', 
              crop: 'Tomato', 
              urgency: 'High', 
              time: '2 hours ago',
              location: 'Punjab'
            },
            { 
              farmer: 'Priya Patel', 
              question: 'How to control leaf curl disease in cotton?', 
              crop: 'Cotton', 
              urgency: 'Medium', 
              time: '4 hours ago',
              location: 'Maharashtra'
            },
            { 
              farmer: 'Amit Singh', 
              question: 'Optimal irrigation schedule for wheat in summer', 
              crop: 'Wheat', 
              urgency: 'High', 
              time: '1 hour ago',
              location: 'Uttar Pradesh'
            },
            { 
              farmer: 'Suresh Reddy', 
              question: 'Natural pest control methods for brinjal', 
              crop: 'Brinjal', 
              urgency: 'Low', 
              time: '6 hours ago',
              location: 'Karnataka'
            }
          ],
          actions: ['Answer Query', 'Schedule Video Call', 'Share Solution', 'Follow Up']
        }
      },
      {
        id: 'video-guidance',
        title: 'Video Guidance',
        icon: '🎥',
        description: 'Create and share educational video content',
        details: {
          overview: 'Video tutorials and demonstrations for farmers',
          data: {
            videosCreated: 23,
            totalViews: '45.6K',
            avgRating: '4.8/5',
            subscribers: '2.1K'
          },
          videoCategories: [
            {
              category: 'Farming Techniques',
              videos: [
                { title: 'Modern Irrigation Methods', duration: '15:30', views: '8.2K', likes: '456' },
                { title: 'Organic Farming Basics', duration: '22:15', views: '12.4K', likes: '789' },
                { title: 'Soil Health Management', duration: '18:45', views: '6.7K', likes: '345' }
              ]
            },
            {
              category: 'Crop Protection',
              videos: [
                { title: 'Natural Pest Control', duration: '14:20', views: '5.3K', likes: '234' },
                { title: 'Disease Prevention', duration: '20:10', views: '7.8K', likes: '412' }
              ]
            },
            {
              category: 'Market Guidance',
              videos: [
                { title: 'Understanding Market Prices', duration: '16:45', views: '4.2K', likes: '198' },
                { title: 'Direct Selling Strategies', duration: '19:30', views: '3.9K', likes: '176' }
              ]
            }
          ],
          actions: ['Upload Video', 'Create Tutorial', 'Live Session', 'Edit Content']
        }
      },
      {
        id: 'doubts-asking',
        title: 'Doubts & Questions',
        icon: '💬',
        description: 'Manage and respond to farmer questions',
        details: {
          overview: 'Comprehensive question and answer management system',
          data: {
            totalQuestions: 156,
            answered: 142,
            pendingReview: 8,
            responseRate: '94%'
          },
          questionCategories: [
            {
              category: 'Crop Related',
              count: 67,
              questions: [
                'Best time to plant seasonal crops?',
                'How to increase yield?',
                'Crop rotation techniques?'
              ]
            },
            {
              category: 'Soil & Fertilizer',
              count: 45,
              questions: [
                'Soil testing methods?',
                'Organic fertilizer preparation?',
                'pH balance maintenance?'
              ]
            },
            {
              category: 'Pest & Disease',
              count: 32,
              questions: [
                'Natural pest control?',
                'Identifying plant diseases?',
                'Prevention methods?'
              ]
            },
            {
              category: 'Market & Sales',
              count: 12,
              questions: [
                'Current market prices?',
                'Direct selling platforms?',
                'Quality standards?'
              ]
            }
          ],
          actions: ['Browse Questions', 'Create FAQ', 'Quick Response', 'Categorize']
        }
      },
      {
        id: 'experts-nearby',
        title: 'Experts Nearby',
        icon: '📍',
        description: 'Connect with nearby agricultural experts',
        details: {
          overview: 'Network with fellow experts and specialists',
          data: {
            totalExperts: 45,
            onlineNow: 12,
            specialties: '15+',
            collaborationRate: '78%'
          },
          nearbyExperts: [
            {
              name: 'Dr. Sharma',
              specialization: 'Soil Science',
              distance: '5 km',
              rating: '4.9',
              available: true,
              services: ['Soil Testing', 'Fertilizer Advice', 'Land Assessment']
            },
            {
              name: 'Prof. Gupta',
              specialization: 'Crop Protection',
              distance: '8 km',
              rating: '4.8',
              available: true,
              services: ['Pest Control', 'Disease Management', 'Organic Solutions']
            },
            {
              name: 'Ms. Patel',
              specialization: 'Organic Farming',
              distance: '12 km',
              rating: '4.7',
              available: false,
              services: ['Organic Certification', 'Natural Farming', 'Compost Making']
            },
            {
              name: 'Dr. Kumar',
              specialization: 'Irrigation',
              distance: '15 km',
              rating: '4.9',
              available: true,
              services: ['Water Management', 'Drip Irrigation', 'System Design']
            }
          ],
          actions: ['Connect', 'Schedule Meeting', 'Share Knowledge', 'Collaborate']
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
      
      <div className="feature-detail-card" style={{ borderColor: expertData.color }}>
        <div className="feature-detail-header">
          <div className="feature-detail-icon">{feature.icon}</div>
          <div>
            <h1 className="feature-detail-title">{feature.title}</h1>
            <p className="feature-detail-subtitle">{feature.details.overview}</p>
          </div>
        </div>

        <div className="feature-stats-grid">
          {Object.entries(feature.details.data).map(([key, value]) => (
            <div key={key} className="feature-stat-card" style={{ background: expertData.color }}>
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
            
            {/* Expert Help - Active Queries */}
            {feature.id === 'expert-help' && (
              <div className="queries-list">
                <h4>Active Farmer Queries</h4>
                <div className="tabs">
                  <button 
                    className={`tab-button ${activeTab === 'all' ? 'active' : ''}`}
                    onClick={() => setActiveTab('all')}
                  >
                    All Queries
                  </button>
                  <button 
                    className={`tab-button ${activeTab === 'high' ? 'active' : ''}`}
                    onClick={() => setActiveTab('high')}
                  >
                    High Priority
                  </button>
                  <button 
                    className={`tab-button ${activeTab === 'new' ? 'active' : ''}`}
                    onClick={() => setActiveTab('new')}
                  >
                    New Today
                  </button>
                </div>
                {feature.details.activeQueries.map((query, index) => (
                  <div key={index} className="query-item">
                    <div className="query-header">
                      <span className="farmer-name">{query.farmer}</span>
                      <span className={`urgency-tag ${query.urgency.toLowerCase()}`}>
                        {query.urgency}
                      </span>
                    </div>
                    <p className="question-text">{query.question}</p>
                    <div className="query-meta">
                      <span className="crop-info">🌱 {query.crop}</span>
                      <span className="location">📍 {query.location}</span>
                      <span className="time">{query.time}</span>
                    </div>
                    <div className="query-actions">
                      <button className="action-btn primary">Answer Now</button>
                      <button className="action-btn secondary">Schedule Call</button>
                      <button className="action-btn outline">View Details</button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Video Guidance */}
            {feature.id === 'video-guidance' && (
              <div className="videos-section">
                <h4>Video Content Library</h4>
                {feature.details.videoCategories.map((category, catIndex) => (
                  <div key={catIndex} className="video-category">
                    <h5 className="category-title">{category.category}</h5>
                    <div className="videos-grid">
                      {category.videos.map((video, vidIndex) => (
                        <div key={vidIndex} className="video-card">
                          <div className="video-thumbnail">
                            <div className="play-icon">▶</div>
                          </div>
                          <div className="video-info">
                            <h6 className="video-title">{video.title}</h6>
                            <div className="video-stats">
                              <span>⏱️ {video.duration}</span>
                              <span>👁️ {video.views}</span>
                              <span>👍 {video.likes}</span>
                            </div>
                          </div>
                          <button className="video-action-btn">Edit Video</button>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Doubts & Questions */}
            {feature.id === 'doubts-asking' && (
              <div className="doubts-section">
                <h4>Question Categories</h4>
                <div className="categories-grid">
                  {feature.details.questionCategories.map((category, index) => (
                    <div key={index} className="category-card">
                      <div className="category-header">
                        <h5>{category.category}</h5>
                        <span className="question-count">{category.count} questions</span>
                      </div>
                      <ul className="common-questions">
                        {category.questions.map((question, qIndex) => (
                          <li key={qIndex} className="question-item">
                            {question}
                          </li>
                        ))}
                      </ul>
                      <button className="category-action-btn">View All</button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Experts Nearby */}
            {feature.id === 'experts-nearby' && (
              <div className="experts-section">
                <h4>Nearby Agricultural Experts</h4>
                <div className="experts-grid">
                  {feature.details.nearbyExperts.map((expert, index) => (
                    <div key={index} className="expert-card">
                      <div className="expert-header">
                        <div className="expert-avatar">{expert.name.charAt(0)}</div>
                        <div className="expert-info">
                          <h5 className="expert-name">{expert.name}</h5>
                          <p className="expert-specialization">{expert.specialization}</p>
                        </div>
                        <div className="expert-status">
                          <span className={`availability-dot ${expert.available ? 'online' : 'offline'}`}></span>
                          <span>{expert.available ? 'Online' : 'Offline'}</span>
                        </div>
                      </div>
                      <div className="expert-details">
                        <div className="detail-item">
                          <span>📍 Distance: {expert.distance}</span>
                        </div>
                        <div className="detail-item">
                          <span>⭐ Rating: {expert.rating}/5</span>
                        </div>
                      </div>
                      <div className="expert-services">
                        <h6>Services Offered:</h6>
                        <div className="services-tags">
                          {expert.services.map((service, sIndex) => (
                            <span key={sIndex} className="service-tag">{service}</span>
                          ))}
                        </div>
                      </div>
                      <div className="expert-actions">
                        <button className="connect-btn">Connect</button>
                        <button className="message-btn">Message</button>
                      </div>
                    </div>
                  ))}
                </div>
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
                style={{ backgroundColor: expertData.color }}
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
    <div className="expert-portal-container">
      {/* Header */}
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
          <div className="expert-main-view">
            {/* Hero Section */}
            <div className="expert-hero-section">
              <div className="expert-hero-icon">{expertData.icon}</div>
              <h1 className="expert-portal-title">Expert Portal</h1>
              <p className="expert-portal-subtitle">{expertData.description}</p>
            </div>

            {/* Features Grid */}
            <div className="features-grid-expert">
              {expertData.features.map((feature) => (
                <div 
                  key={feature.id}
                  className="feature-card-expert"
                  onClick={() => openFeature(feature)}
                  style={{ borderColor: expertData.color }}
                >
                  <div className="feature-icon-expert">{feature.icon}</div>
                  <h3 className="feature-title-expert">{feature.title}</h3>
                  <p className="feature-description-expert">{feature.description}</p>
                  <div className="feature-hover-indicator">Click to Explore →</div>
                </div>
              ))}
            </div>

            {/* Quick Stats */}
            <div className="quick-stats-section">
              <h3>Today's Overview</h3>
              <div className="stats-grid">
                <div className="stat-item">
                  <div className="stat-icon">💬</div>
                  <div className="stat-value">12</div>
                  <div className="stat-label">Pending Queries</div>
                </div>
                <div className="stat-item">
                  <div className="stat-icon">✅</div>
                  <div className="stat-value">8</div>
                  <div className="stat-label">Resolved Today</div>
                </div>
                <div className="stat-item">
                  <div className="stat-icon">👥</div>
                  <div className="stat-value">45</div>
                  <div className="stat-label">Active Farmers</div>
                </div>
                <div className="stat-item">
                  <div className="stat-icon">⭐</div>
                  <div className="stat-value">4.8</div>
                  <div className="stat-label">Avg Rating</div>
                </div>
              </div>
            </div>

            <div className="expert-actions-section">
              <button 
                className="enter-dashboard-button"
                style={{ background: expertData.color }}
              >
                Enter Expert Dashboard
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ExpertPortal