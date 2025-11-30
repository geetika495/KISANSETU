import React, { useState } from 'react'
import './PublicPortal.css'

const PublicPortal = ({ onBackToRoles, onLogout }) => {
  const [selectedFeature, setSelectedFeature] = useState(null)
  const [activeCategory, setActiveCategory] = useState('all')

  const publicData = {
    name: 'Public',
    icon: '👥',
    color: '#FF9800',
    description: 'Learn about farming and support local agriculture',
    features: [
      {
        id: 'learn-farming',
        title: 'Learn Farming',
        icon: '📚',
        description: 'Access educational resources about agriculture',
        details: {
          overview: 'Comprehensive learning platform with courses, tutorials, and practical guides for everyone - from complete beginners to gardening enthusiasts',
          benefits: [
            'Learn at your own pace with structured courses',
            'Get certified upon course completion',
            'Access expert-created content',
            'Join live Q&A sessions with farmers'
          ],
          data: {
            coursesAvailable: '45+',
            learningHours: '200+',
            completionRate: '82%',
            expertInstructors: '25+',
            studentSatisfaction: '4.9/5',
            freeCourses: '15+'
          },
          learningCategories: [
            {
              category: 'Beginner Farming',
              description: 'Perfect for those starting their farming journey',
              courses: [
                { 
                  title: 'Basics of Organic Farming', 
                  duration: '4 weeks', 
                  level: 'Beginner', 
                  enrolled: '2.4K',
                  instructor: 'Dr. Priya Sharma',
                  rating: '4.8',
                  skills: ['Soil Preparation', 'Composting', 'Natural Pest Control']
                },
                { 
                  title: 'Home Gardening 101', 
                  duration: '3 weeks', 
                  level: 'Beginner', 
                  enrolled: '3.8K',
                  instructor: 'Rajesh Kumar',
                  rating: '4.9',
                  skills: ['Container Gardening', 'Plant Selection', 'Water Management']
                },
                { 
                  title: 'Compost Making Guide', 
                  duration: '2 weeks', 
                  level: 'Beginner', 
                  enrolled: '2.1K',
                  instructor: 'Green Earth Team',
                  rating: '4.7',
                  skills: ['Waste Management', 'Compost Types', 'Application Methods']
                }
              ]
            },
            {
              category: 'Advanced Techniques',
              description: 'For those looking to enhance their farming skills',
              courses: [
                { 
                  title: 'Modern Agriculture', 
                  duration: '6 weeks', 
                  level: 'Intermediate', 
                  enrolled: '1.2K',
                  instructor: 'Agricultural University',
                  rating: '4.8',
                  skills: ['Precision Farming', 'Technology Integration', 'Market Analysis']
                },
                { 
                  title: 'Farm Business Management', 
                  duration: '8 weeks', 
                  level: 'Advanced', 
                  enrolled: '856',
                  instructor: 'Business Experts',
                  rating: '4.9',
                  skills: ['Financial Planning', 'Supply Chain', 'Brand Building']
                }
              ]
            }
          ],
          upcomingEvents: [
            { event: 'Live Q&A: Urban Farming', date: 'Dec 20, 2024', time: '6:00 PM', speaker: 'Expert Panel' },
            { event: 'Workshop: Terrace Gardening', date: 'Dec 25, 2024', time: '10:00 AM', speaker: 'Green Thumb Team' }
          ],
          actions: ['Browse Courses', 'Start Learning', 'Save Progress', 'Get Certificate', 'Join Community']
        }
      },
      {
        id: 'discussions',
        title: 'Community Discussions',
        icon: '💬',
        description: 'Join discussions with farming enthusiasts',
        details: {
          overview: 'Vibrant community platform where farming enthusiasts share experiences, ask questions, and learn from each other in a supportive environment',
          benefits: [
            'Get instant help from experienced gardeners',
            'Share your success stories and challenges',
            'Connect with local farming communities',
            'Learn from real-world experiences'
          ],
          data: {
            activeMembers: '5,200+',
            dailyPosts: '120+',
            discussionTopics: '250+',
            expertParticipants: '50+',
            problemSolved: '1.8K+',
            responseTime: '< 2 hours'
          },
          popularTags: ['#OrganicFarming', '#UrbanGardening', '#PestControl', '#Composting', '#SeasonalPlants', '#WaterConservation'],
          discussionCategories: [
            {
              category: 'Home Gardening',
              description: 'Everything about growing plants at home',
              memberCount: '2.8K members',
              topics: [
                { 
                  title: 'Best plants for balcony gardening in apartments?', 
                  replies: 67, 
                  views: 456, 
                  lastActive: '1 hour ago',
                  author: 'UrbanGardener',
                  tags: ['Balcony', 'Apartment', 'Beginner']
                },
                { 
                  title: 'Organic pest control methods that actually work', 
                  replies: 89, 
                  views: 678, 
                  lastActive: '3 hours ago',
                  author: 'EcoFarmer',
                  tags: ['PestControl', 'Organic', 'Natural']
                }
              ]
            },
            {
              category: 'Urban Farming',
              description: 'Farming in urban spaces and cities',
              memberCount: '1.5K members',
              topics: [
                { 
                  title: 'Vertical farming techniques for small spaces', 
                  replies: 45, 
                  views: 345, 
                  lastActive: '2 hours ago',
                  author: 'SpaceSaver',
                  tags: ['Vertical', 'SmallSpace', 'Innovation']
                }
              ]
            }
          ],
          featuredExperts: [
            { name: 'Dr. Sharma', expertise: 'Soil Science', answers: 234, rating: '4.9' },
            { name: 'Ms. Patel', expertise: 'Organic Farming', answers: 189, rating: '4.8' }
          ],
          actions: ['Join Discussion', 'Start Topic', 'Share Experience', 'Follow Experts', 'Ask Question']
        }
      },
      {
        id: 'support-farmers',
        title: 'Support Farmers',
        icon: '🌟',
        description: 'Support local farmer initiatives and projects',
        details: {
          overview: 'Direct support system connecting urban supporters with rural farmers through various programs that create sustainable impact',
          benefits: [
            'Direct impact on farmer livelihoods',
            'Transparent contribution tracking',
            'Regular progress updates',
            'Community recognition'
          ],
          data: {
            farmersSupported: '280+',
            totalContributions: '₹5.2L+',
            successfulProjects: '78+',
            communityRating: '4.9/5',
            ongoingCampaigns: '15+',
            volunteerHours: '2.4K+'
          },
          impactMetrics: [
            { metric: 'Income Increase', value: '45%', description: 'Average income growth for supported farmers' },
            { metric: 'Training Provided', value: '120+', description: 'Farmers trained in modern techniques' },
            { metric: 'Equipment Funded', value: '₹1.8L', description: 'Value of equipment provided' }
          ],
          supportPrograms: [
            {
              program: 'Adopt a Farm',
              description: 'Monthly sponsorship program providing consistent support to individual farms',
              farmers: '38 farmers enrolled',
              impact: 'Stable income and resource access',
              status: 'Active',
              minContribution: '₹500/month',
              benefits: ['Monthly updates', 'Farm visit invites', 'Produce samples']
            },
            {
              program: 'Crop Sponsorship',
              description: 'Sponsor specific crop cycles and receive shares of the harvest',
              farmers: '25 farmers participating',
              impact: 'Risk reduction and market access',
              status: 'Active',
              minContribution: '₹2,000/season',
              benefits: ['Seasonal produce', 'Growth updates', 'Farmer meetings']
            }
          ],
          successStories: [
            { farmer: 'Rajesh from Punjab', story: 'Increased yield by 60% with new equipment', impact: 'Now trains other farmers' },
            { farmer: 'Priya from Maharashtra', story: 'Started organic certification process', impact: 'Exports to 3 countries' }
          ],
          actions: ['Donate', 'Volunteer', 'Share Campaign', 'Become Member', 'Start Fundraiser']
        }
      },
      {
        id: 'rural-urban-connect',
        title: 'Rural-Urban Connect',
        icon: '🏙️',
        description: 'Bridge the gap between rural and urban communities',
        details: {
          overview: 'Innovative programs that create meaningful connections between urban residents and rural farming communities through experiences, education, and exchange',
          benefits: [
            'Hands-on farming experience',
            'Cultural exchange opportunities',
            'Direct farmer connections',
            'Sustainable tourism'
          ],
          data: {
            connectedCommunities: '58+',
            exchangePrograms: '25+',
            urbanParticipants: '1.2K+',
            successStories: '156+',
            partnerFarms: '45+',
            repeatParticipants: '68%'
          },
          programBenefits: {
            urban: ['Fresh food knowledge', 'Stress relief', 'Family bonding', 'Skill development'],
            rural: ['Additional income', 'Market access', 'Cultural exchange', 'Community pride']
          },
          connectionPrograms: [
            {
              program: 'Farm Stay Experience',
              description: 'Immerse yourself in rural life with guided farming activities',
              duration: '2-7 days',
              locations: '28 farms across 12 states',
              cost: '₹1,500 - ₹3,000/day',
              activities: ['Morning milking', 'Crop harvesting', 'Traditional cooking', 'Village tours'],
              bestFor: ['Families', 'Couples', 'Solo travelers']
            },
            {
              program: 'Weekend Farming',
              description: 'Regular weekend engagement with local farms',
              duration: 'Saturdays & Sundays',
              locations: '15 locations near metro cities',
              cost: '₹500-₹800 per session',
              activities: ['Seasonal planting', 'Compost making', 'Farm maintenance', 'Harvesting'],
              bestFor: ['Regular enthusiasts', 'Skill building', 'Community building']
            }
          ],
          testimonials: [
            { name: 'Anita, Mumbai', quote: 'Life-changing experience understanding where our food comes from', rating: '5/5' },
            { name: 'Rohan, Delhi', quote: 'My kids now appreciate farmers and eat healthier', rating: '5/5' }
          ],
          actions: ['Book Experience', 'Join Program', 'Host Event', 'Connect Now', 'Share Story']
        }
      },
      {
        id: 'home-cultivation',
        title: 'Home Cultivation',
        icon: '🏡',
        description: 'Resources for home gardening and cultivation',
        details: {
          overview: 'Complete ecosystem for urban dwellers to grow their own food, from small herbs to substantial vegetable gardens, regardless of space constraints',
          benefits: [
            'Fresh, organic produce at home',
            'Therapeutic gardening experience',
            'Reduced food bills',
            'Environmental contribution'
          ],
          data: {
            plantGuides: '85+',
            successStories: '3.2K+',
            expertTips: '350+',
            communityGardens: '45+',
            monthlyHarvests: '2.5K+',
            seedExchange: '1.8K members'
          },
          spaceSolutions: [
            { space: 'Windowsill', plants: 'Herbs, Microgreens', yield: 'Daily', investment: '₹200-500' },
            { space: 'Balcony', plants: 'Vegetables, Flowers', yield: 'Weekly', investment: '₹1,000-3,000' },
            { space: 'Terrace', plants: 'Fruits, Large veggies', yield: 'Seasonal', investment: '₹5,000-15,000' }
          ],
          homeGardening: [
            {
              type: 'Balcony Gardening',
              plants: ['Mint', 'Coriander', 'Lettuce', 'Tomatoes', 'Chillies', 'Spinach'],
              space: '2-50 sq ft',
              difficulty: 'Easy',
              yield: 'Daily to weekly fresh produce',
              timeCommitment: '15-30 mins daily',
              bestSeason: 'All year',
              tips: ['Use vertical space', 'Rotate plants', 'Companion planting']
            },
            {
              type: 'Kitchen Gardening',
              plants: ['Microgreens', 'Sprouts', 'Mushrooms', 'Herbs in water'],
              space: 'Countertop/shelf',
              difficulty: 'Very Easy',
              yield: 'Weekly harvest',
              timeCommitment: '10 mins daily',
              bestSeason: 'All year indoor',
              tips: ['Use kitchen waste', 'Regrow from scraps', 'Maintain humidity']
            }
          ],
          starterKits: [
            { name: 'Herb Garden Kit', price: '₹499', contents: ['5 seed varieties', 'Pots', 'Soil', 'Guide'] },
            { name: 'Salad Garden Kit', price: '₹799', contents: ['8 seed varieties', 'Large pots', 'Soil', 'Support'] }
          ],
          actions: ['Get Started Guide', 'Buy Seeds', 'Join Community', 'Share Progress', 'Get Advice']
        }
      },
      {
        id: 'buy-local',
        title: 'Buy Local',
        icon: '🛒',
        description: 'Purchase fresh produce directly from farmers',
        details: {
          overview: 'Farm-to-table marketplace ensuring fresh, traceable produce while supporting local farmers with fair prices and direct consumer connections',
          benefits: [
            'Freshness guaranteed (harvest to delivery <24hrs)',
            'Fair prices for farmers',
            'Transparent sourcing',
            'Seasonal variety'
          ],
          data: {
            localFarmers: '320+',
            productsAvailable: '85+',
            deliveryAreas: '35 Cities',
            customerRating: '4.9/5',
            repeatCustomers: '78%',
            farmerEarnings: '₹25L+'
          },
          qualityStandards: [
            'No chemical pesticides',
            'Harvested within 24 hours',
            'Direct farmer verification',
            'Quality checks at multiple stages'
          ],
          featuredProducts: [
            {
              product: 'Organic Tomatoes',
              farmer: 'Rajesh Farms, Punjab',
              price: '₹75-90/kg',
              rating: '4.8',
              delivery: 'Next day',
              certification: 'Organic Certified',
              story: 'Third generation farmers using traditional methods'
            },
            {
              product: 'Fresh Wheat Flour',
              farmer: 'Green Fields, Haryana',
              price: '₹40-50/kg',
              rating: '4.9',
              delivery: 'Same day milling',
              certification: 'Stone Ground',
              story: 'Women-led cooperative supporting local employment'
            }
          ],
          subscriptionPlans: [
            { name: 'Weekly Veg Basket', price: '₹600/week', items: '8-10 seasonal vegetables', savings: '20%' },
            { name: 'Family Nutrition Box', price: '₹1,200/week', items: '15+ items including fruits, dairy', savings: '25%' }
          ],
          deliveryInfo: {
            areas: 'All major cities covered',
            time: '6 AM - 10 PM daily',
            packaging: 'Eco-friendly, reusable',
            contactless: 'Available option'
          },
          actions: ['Browse Products', 'Place Order', 'Track Delivery', 'Rate Farmer', 'Subscribe', 'Gift Boxes']
        }
      }
    ]
  }

  const openFeature = (feature) => {
    setSelectedFeature(feature)
    setActiveCategory('all')
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
      
      <div className="feature-detail-card" style={{ borderColor: publicData.color }}>
        <div className="feature-detail-header">
          <div className="feature-detail-icon">{feature.icon}</div>
          <div>
            <h1 className="feature-detail-title">{feature.title}</h1>
            <p className="feature-detail-subtitle">{feature.details.overview}</p>
          </div>
        </div>

        {/* Benefits Section */}
        {feature.details.benefits && (
          <div className="benefits-section">
            <h3>Key Benefits</h3>
            <div className="benefits-grid">
              {feature.details.benefits.map((benefit, index) => (
                <div key={index} className="benefit-item">
                  <span className="benefit-icon">✓</span>
                  {benefit}
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="feature-stats-grid">
          {Object.entries(feature.details.data).map(([key, value]) => (
            <div key={key} className="feature-stat-card" style={{ background: publicData.color }}>
              <div className="feature-stat-value">{value}</div>
              <div className="feature-stat-label">
                {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Content Sections */}
        <div className="feature-content-section">
          <h3>Explore Content</h3>
          <div className="feature-data-grid">
            
            {/* Learn Farming */}
            {feature.id === 'learn-farming' && (
              <div className="learning-section">
                <div className="section-description">
                  <p>Choose from our carefully curated courses designed by agricultural experts and experienced farmers</p>
                </div>
                <div className="category-tabs">
                  {feature.details.learningCategories.map((category, index) => (
                    <button
                      key={index}
                      className={`category-tab ${activeCategory === category.category ? 'active' : ''}`}
                      onClick={() => setActiveCategory(category.category)}
                    >
                      {category.category}
                    </button>
                  ))}
                </div>
                
                {feature.details.learningCategories.map((category, index) => (
                  (activeCategory === 'all' || activeCategory === category.category) && (
                    <div key={index} className="category-section">
                      <h4 className="category-title">{category.category}</h4>
                      <p className="category-description">{category.description}</p>
                      <div className="courses-grid">
                        {category.courses.map((course, cIndex) => (
                          <div key={cIndex} className="course-card">
                            <div className="course-header">
                              <h5>{course.title}</h5>
                              <span className="course-level">{course.level}</span>
                            </div>
                            <div className="course-instructor">By {course.instructor}</div>
                            <div className="course-details">
                              <span>⏱️ {course.duration}</span>
                              <span>👥 {course.enrolled}</span>
                              <span>⭐ {course.rating}</span>
                            </div>
                            <div className="course-skills">
                              {course.skills.map((skill, sIndex) => (
                                <span key={sIndex} className="skill-tag">{skill}</span>
                              ))}
                            </div>
                            <button className="enroll-btn">Start Learning</button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )
                ))}

                {/* Upcoming Events */}
                {feature.details.upcomingEvents && (
                  <div className="events-section">
                    <h4>Upcoming Live Events</h4>
                    <div className="events-list">
                      {feature.details.upcomingEvents.map((event, index) => (
                        <div key={index} className="event-item">
                          <div className="event-info">
                            <strong>{event.event}</strong>
                            <span>{event.date} at {event.time}</span>
                            <span>Speaker: {event.speaker}</span>
                          </div>
                          <button className="register-btn">Register</button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Add similar enhanced sections for other features... */}

          </div>
        </div>

        <div className="feature-actions">
          <h3>Quick Actions</h3>
          <div className="action-buttons-grid">
            {feature.details.actions.map((action, index) => (
              <button 
                key={index} 
                className="feature-action-button"
                style={{ backgroundColor: publicData.color }}
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
    <div className="public-portal-container">
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
          <div className="public-main-view">
            <div className="public-hero-section">
              <div className="public-hero-icon">{publicData.icon}</div>
              <h1 className="public-portal-title">Public Portal</h1>
              <p className="public-portal-subtitle">{publicData.description}</p>
            </div>

            <div className="features-grid-public">
              {publicData.features.map((feature) => (
                <div 
                  key={feature.id}
                  className="feature-card-public"
                  onClick={() => openFeature(feature)}
                  style={{ borderColor: publicData.color }}
                >
                  <div className="feature-icon-public">{feature.icon}</div>
                  <h3 className="feature-title-public">{feature.title}</h3>
                  <p className="feature-description-public">{feature.description}</p>
                  <div className="feature-hover-indicator">Click to Explore →</div>
                </div>
              ))}
            </div>

            <div className="quick-stats-section">
              <h3>Community Impact</h3>
              <div className="stats-grid">
                <div className="stat-item">
                  <div className="stat-icon">👥</div>
                  <div className="stat-value">5.2K+</div>
                  <div className="stat-label">Active Members</div>
                </div>
                <div className="stat-item">
                  <div className="stat-icon">🌱</div>
                  <div className="stat-value">280+</div>
                  <div className="stat-label">Farmers Supported</div>
                </div>
                <div className="stat-item">
                  <div className="stat-icon">📚</div>
                  <div className="stat-value">45+</div>
                  <div className="stat-label">Courses Available</div>
                </div>
                <div className="stat-item">
                  <div className="stat-icon">⭐</div>
                  <div className="stat-value">4.9</div>
                  <div className="stat-label">Community Rating</div>
                </div>
              </div>
            </div>

            <div className="public-actions-section">
              <button 
                className="enter-dashboard-button"
                style={{ background: publicData.color }}
              >
                Explore Public Portal
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default PublicPortal