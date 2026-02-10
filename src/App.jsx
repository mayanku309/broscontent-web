import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import FirstThirtyDays from './components/FirstThirtyDays'
import HowItWorks from './components/HowItWorks'
import UseCases from './components/UseCases'
import Testimonials from './components/Testimonials'
import About from './components/About'
import Footer from './components/Footer'
import './App.css'

function App() {
    return (
        <div className="app-container">
            <Navbar />
            <Hero />
            <Services />
            <HowItWorks />
            <UseCases />
            <FirstThirtyDays />
            <Testimonials />
            <About />
            <Footer />
        </div>
    )
}

export default App
