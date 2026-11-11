import React from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import ProgramOverview from './components/ProgramOverview.jsx'
import LearningPath from './components/LearningPath.jsx'
import CallToAction from './components/CallToAction.jsx'
import RegistrationForm from './components/RegistrationForm.jsx'

const App = () => {
  const [isRegistrationVisible, setIsRegistrationVisible] = React.useState(false)

  if (isRegistrationVisible) {
    return (
      <RegistrationForm onBack={() => setIsRegistrationVisible(false)} />
    )
  }

  return (
    <div className="app-shell">
      <Navbar onRegister={() => setIsRegistrationVisible(true)} />
      <main>
        <Hero onRegister={() => setIsRegistrationVisible(true)} />
        <ProgramOverview />
        <LearningPath />
        <CallToAction onRegister={() => setIsRegistrationVisible(true)} />
      </main>

      <footer className="site-footer">
        <section className="footer-section footer-contact">
          <p className="footer-contact-title">CONTACT US</p>
          <p className="footer-phone">0000 456 879</p>
        </section>
        <section className="footer-section footer-location">
          <p className="footer-location-title">LOCATION</p>
          <p className="footer-location-address">Karshi, Abuja</p>
        </section>
      </footer>
    </div>
  )
}

export default App
