import React from 'react'
import { Link } from 'react-router-dom'
import { Sprout, Users, BookOpen, TrendingUp } from 'lucide-react'

const Home = () => {
  return (
    <div>
      <section className="hero">
        <h1>Kisan Setu - Farmer's Bridge</h1>
        <p>Connecting farmers with resources, experts, and opportunities to transform agriculture</p>
        <Link to="/login">
          <button className="cta-button">Get Started</button>
        </Link>
      </section>

      <section className="features-grid">
        <div className="feature-card">
          <Sprout className="feature-icon" />
          <h3>For Farmers</h3>
          <p>Access resources, connect with markets, and get expert guidance to enhance your farming practices</p>
        </div>

        <div className="feature-card">
          <Users className="feature-icon" />
          <h3>For Experts</h3>
          <p>Share your knowledge, guide farmers, and contribute to agricultural development</p>
        </div>

        <div className="feature-card">
          <BookOpen className="feature-icon" />
          <h3>For Public</h3>
          <p>Learn about farming, engage with agricultural community, and support local farmers</p>
        </div>

        <div className="feature-card">
          <TrendingUp className="feature-icon" />
          <h3>Market Connect</h3>
          <p>Connect with different sectors and explore opportunities for better livelihood</p>
        </div>
      </section>
    </div>
  )
}

export default Home