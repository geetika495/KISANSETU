import React, { useState } from 'react'
import './App.css'
import ExpertPortal from './pages/expertportal'
import PublicPortal from './pages/publicportal'
import FarmerPortal from './pages/farmerportal'

function App() {
  const [currentStep, setCurrentStep] = useState(1)
  const [selectedRole, setSelectedRole] = useState(null)
  const [language, setLanguage] = useState('en')
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  // Translation dictionary
  const translations = {
    en: {
      // Login Page
      kisanSetu: 'KISANSETU',
      emailAddress: 'Email Address',
      password: 'Password',
      registerLogin: 'Register / Login',
      forgotPassword: 'Forgot Password?',
      sendAccountKey: 'Send here an account for key',
      
      // Role Selection
      howToUse: 'How do you want to use',
      farmer: 'Farmer',
      expert: 'Expert',
      public: 'Public',
      admin: 'Admin',
      accessText: 'Access to open access to web and networking sites',
      backToLogin: '← Back to Login',
      
      // Buttons
      logout: 'Logout',
      backToRoles: '← Back to Roles'
    },
    te: {
      // Login Page
      kisanSetu: 'కిసాన్ సేతు',
      emailAddress: 'ఇమెయిల్ చిరునామా',
      password: 'పాస్వర్డ్',
      registerLogin: 'నమోదు / లాగిన్',
      forgotPassword: 'పాస్వర్డ్ మర్చిపోయారా?',
      sendAccountKey: 'కీ కోసం ఇక్కడ ఖాతాను పంపండి',
      
      // Role Selection
      howToUse: 'మీరు ఎలా ఉపయోగించాలనుకుంటున్నారు',
      farmer: 'రైతు',
      expert: 'నిపుణుడు',
      public: 'ప్రజలు',
      admin: 'నిర్వాహకుడు',
      accessText: 'వెబ్ మరియు నెట్వర్కింగ్ సైట్లకు ఓపెన్ యాక్సెస్',
      backToLogin: '← లాగిన్‌కు తిరిగి వెళ్ళండి',
      
      // Buttons
      logout: 'లాగ్ అవుట్',
      backToRoles: '← పాత్రలకు తిరిగి వెళ్ళండి'
    }
  }

  const t = (key) => translations[language]?.[key] || key

  const handleLogin = (e) => {
    e.preventDefault()
    setCurrentStep(2)
  }

  const handleRoleSelect = (role) => {
    setSelectedRole(role)
    setCurrentStep(3)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleBackToRoles = () => {
    setCurrentStep(2)
    setSelectedRole(null)
  }

  const handleLogout = () => {
    setCurrentStep(1)
    setSelectedRole(null)
    setFormData({ email: '', password: '' })
  }

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'te' : 'en')
  }

  // Simple Admin Portal Component (since EnhancedAdminPortal doesn't exist)
  const AdminPortal = ({ onBackToRoles, onLogout, language, t }) => {
    return (
      <div className="admin-portal-container">
        <div className="portal-header">
          <button onClick={onBackToRoles} className="back-button">
            {t('backToRoles')}
          </button>
          <button onClick={onLogout} className="logout-button">
            {t('logout')}
          </button>
        </div>
        <div className="portal-content">
          <div className="admin-hero-section">
            <div className="admin-hero-icon">⚙️</div>
            <h1 className="admin-portal-title">Admin Portal</h1>
            <p className="admin-portal-subtitle">Manage platform operations</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="App">
      {/* Language Toggle Button - Visible on all pages */}
      <button className="language-toggle" onClick={toggleLanguage}>
        {language === 'en' ? 'తెలుగు' : 'English'}
      </button>

      {/* Step 1: Login Page */}
      {currentStep === 1 && (
        <div className="login-container">
          <div className="login-card">
            <h1 className="main-title">{t('kisanSetu')}</h1>
            
            <form onSubmit={handleLogin} className="login-form">
              <div className="input-group">
                <label className="input-label">{t('emailAddress')}</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="input-field"
                  required
                  placeholder={t('emailAddress')}
                />
              </div>

              <div className="input-group">
                <label className="input-label">{t('password')}</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="input-field"
                  required
                  placeholder={t('password')}
                />
              </div>

              <button type="submit" className="login-button">
                {t('registerLogin')}
              </button>
            </form>

            <div className="divider"></div>

            <div className="image-password-section">
              <p className="image-password-text">{t('forgotPassword')}</p>
              <p className="helper-text">{t('sendAccountKey')}</p>
            </div>
          </div>
        </div>
      )}

      {/* Step 2: Role Selection */}
      {currentStep === 2 && (
        <div className="role-selection-container">
          <div className="role-card">
            <button 
              onClick={() => setCurrentStep(1)} 
              className="back-to-login-button"
            >
              {t('backToLogin')}
            </button>
            
            <h2 className="section-title">{t('howToUse')}<br />KisanSetu?</h2>
            
            <div className="roles-grid">
              <div className="role-option" onClick={() => handleRoleSelect('farmer')}>
                <div className="role-icon">🌾</div>
                <span className="role-name">{t('farmer')}</span>
              </div>
              <div className="role-option" onClick={() => handleRoleSelect('expert')}>
                <div className="role-icon">👨‍🌾</div>
                <span className="role-name">{t('expert')}</span>
              </div>
              <div className="role-option" onClick={() => handleRoleSelect('public')}>
                <div className="role-icon">👥</div>
                <span className="role-name">{t('public')}</span>
              </div>
              <div className="role-option" onClick={() => handleRoleSelect('admin')}>
                <div className="role-icon">⚙️</div>
                <span className="role-name">{t('admin')}</span>
              </div>
            </div>

            <p className="access-text">
              {t('accessText')}
            </p>
          </div>
        </div>
      )}

      {/* Step 3: Role Portals */}
      {currentStep === 3 && (
        <>
          {selectedRole === 'farmer' && (
            <FarmerPortal 
              onBackToRoles={handleBackToRoles} 
              onLogout={handleLogout}
              language={language}
              t={t}
            />
          )}
          {selectedRole === 'expert' && (
            <ExpertPortal 
              onBackToRoles={handleBackToRoles} 
              onLogout={handleLogout}
              language={language}
              t={t}
            />
          )}
          {selectedRole === 'public' && (
            <PublicPortal 
              onBackToRoles={handleBackToRoles} 
              onLogout={handleLogout}
              language={language}
              t={t}
            />
          )}
          {selectedRole === 'admin' && (
            <AdminPortal 
              onBackToRoles={handleBackToRoles} 
              onLogout={handleLogout}
              language={language}
              t={t}
            />
          )}
        </>
      )}
    </div>
  )
}

export default App