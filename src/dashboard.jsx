import React, { useState } from 'react'
import { BarChart3, Users, BookOpen, DollarSign } from 'lucide-react'

const Dashboard = () => {
  const [userRole] = useState('farmer') // This would come from auth context

  const farmerStats = [
    { title: 'Resources Accessed', value: '24', icon: BookOpen },
    { title: 'Experts Connected', value: '5', icon: Users },
    { title: 'Market Opportunities', value: '12', icon: DollarSign },
    { title: 'Community Posts', value: '8', icon: BarChart3 }
  ]

  const expertStats = [
    { title: 'Farmers Helped', value: '156', icon: Users },
    { title: 'Articles Published', value: '23', icon: BookOpen },
    { title: 'Sessions Conducted', value: '45', icon: BarChart3 },
    { title: 'Ratings', value: '4.8/5', icon: DollarSign }
  ]

  const stats = userRole === 'farmer' ? farmerStats : expertStats

  return (
    <div className="dashboard">
      <div className="user-welcome">
        <h1>Welcome to Your Dashboard</h1>
        <p>Manage your activities and track your progress</p>
      </div>

      <div className="stats-grid">
        {stats.map((stat, index) => {
          const IconComponent = stat.icon
          return (
            <div key={index} className="stat-card">
              <IconComponent size={32} color="#2e7d32" />
              <div className="stat-number">{stat.value}</div>
              <div className="stat-title">{stat.title}</div>
            </div>
          )
        })}
      </div>

      <div className="recent-activities">
        <h2>Recent Activities</h2>
        <div className="activity-list">
          <div className="activity-item">
            <strong>New market opportunity:</strong> Organic vegetable buyers in your area
          </div>
          <div className="activity-item">
            <strong>Expert advice:</strong> Dr. Sharma responded to your query
          </div>
          <div className="activity-item">
            <strong>Resource added:</strong> New guide on sustainable farming
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard