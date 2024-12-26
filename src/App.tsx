import './App.css'
import AppDownload from './components/AppDownload'
import ApproachSection from './components/ApproachSection'
import Benefits from './components/Benefits'
import Booking from './components/Booking'
import Experts from './components/Experts'
import Features from './components/Features'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Testimonials from './components/Testimonials'

function App() {

  return (
    <div className='max-w-full'>
      <Hero />
      <Benefits />
      <Features />
      <Booking />
      <ApproachSection />
      <Testimonials />
      <Experts />
      <AppDownload />
      <Footer />
    </div>
  )
}

export default App
