import React from 'react'
import { BookOpen, Video, FileText, Download } from 'lucide-react'

const Resources = () => {
  const resources = [
    {
      title: 'Sustainable Farming Guide',
      type: 'PDF Guide',
      icon: FileText,
      description: 'Complete guide to sustainable agricultural practices',
      category: 'Farming Techniques'
    },
    {
      title: 'Crop Management Video Series',
      type: 'Video',
      icon: Video,
      description: 'Learn crop management from industry experts',
      category: 'Education'
    },
    {
      title: 'Market Price Trends',
      type: 'Report',
      icon: BookOpen,
      description: 'Monthly analysis of agricultural commodity prices',
      category: 'Market Intelligence'
    },
    {
      title: 'Government Schemes Handbook',
      type: 'PDF Guide',
      icon: FileText,
      description: 'All government schemes and subsidies for farmers',
      category: 'Government Support'
    }
  ]

  return (
    <div>
      <h1>Agricultural Resources</h1>
      <p>Access educational materials, guides, and tools to enhance your farming knowledge</p>

      <div className="resource-grid">
        {resources.map((resource, index) => {
          const IconComponent = resource.icon
          return (
            <div key={index} className="resource-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <IconComponent size={24} color="#2e7d32" />
                <span style={{ background: '#e8f5e8', padding: '4px 8px', borderRadius: '4px', fontSize: '0.8rem' }}>
                  {resource.category}
                </span>
              </div>
              <h3>{resource.title}</h3>
              <p>{resource.description}</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem' }}>
                <span style={{ color: '#666', fontSize: '0.9rem' }}>{resource.type}</span>
                <button style={{ background: 'none', border: 'none', color: '#2e7d32', cursor: 'pointer' }}>
                  <Download size={20} />
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Resources