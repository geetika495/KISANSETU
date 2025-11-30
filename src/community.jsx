import React from 'react'
import { MessageCircle, ThumbsUp, Share2, User } from 'lucide-react'

const Community = () => {
  const discussions = [
    {
      user: 'Rajesh Kumar',
      role: 'Farmer',
      question: 'Best practices for organic tomato farming in rainy season?',
      answers: 12,
      likes: 24,
      time: '2 hours ago'
    },
    {
      user: 'Dr. Priya Sharma',
      role: 'Agricultural Expert',
      question: 'Upcoming workshop on modern irrigation techniques',
      answers: 8,
      likes: 15,
      time: '5 hours ago'
    },
    {
      user: 'Amit Patel',
      role: 'Farmer',
      question: 'Looking for buyers for organic wheat in Maharashtra',
      answers: 5,
      likes: 10,
      time: '1 day ago'
    }
  ]

  return (
    <div>
      <h1>Community Discussions</h1>
      <p>Connect with farmers, experts, and enthusiasts. Share knowledge and experiences.</p>

      <div className="community-grid">
        {discussions.map((discussion, index) => (
          <div key={index} className="community-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
              <div style={{ background: '#e8f5e8', padding: '8px', borderRadius: '50%' }}>
                <User size={20} color="#2e7d32" />
              </div>
              <div>
                <strong>{discussion.user}</strong>
                <div style={{ color: '#666', fontSize: '0.9rem' }}>{discussion.role}</div>
              </div>
            </div>
            
            <h3>{discussion.question}</h3>
            
            <div style={{ display: 'flex', gap: '2rem', marginTop: '1rem', color: '#666' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <MessageCircle size={16} />
                <span>{discussion.answers} answers</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <ThumbsUp size={16} />
                <span>{discussion.likes} likes</span>
              </div>
            </div>
            
            <div style={{ marginTop: '1rem', color: '#999', fontSize: '0.9rem' }}>
              {discussion.time}
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: '2rem', background: 'white', padding: '2rem', borderRadius: '10px' }}>
        <h3>Start a New Discussion</h3>
        <textarea 
          placeholder="Ask a question or share your experience..."
          style={{ 
            width: '100%', 
            height: '100px', 
            padding: '1rem', 
            border: '1px solid #ddd', 
            borderRadius: '5px',
            marginBottom: '1rem'
          }}
        />
        <button className="cta-button">Post Discussion</button>
      </div>
    </div>
  )
}

export default Community