import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Sprout, User } from 'lucide-react'

const Navbar = () => {
  const location = useLocation()

  return (
    <nav className="navbar">
      <div className="nav-content">
        <Link to="/" className="logo">
          <Sprout size={32} />
          <span>Kisan Setu</span>
        </Link>
        
        <ul className="nav-links">
          <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link></li>
          <li><Link to="/resources" className={location.pathname === '/resources' ? 'active' : ''}>Resources</Link></li>
          <li><Link to="/community" className={location.pathname === '/community' ? 'active' : ''}>Community</Link></li>
          <li><Link to="/dashboard" className={location.pathname === '/dashboard' ? 'active' : ''}>Dashboard</Link></li>
          <li><Link to="/login" className={location.pathname === '/login' ? 'active' : ''}>
            <User size={20} />
          </Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar