import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Positioning from './components/Positioning'
import Services from './components/Services'
import HowItWorks from './components/HowItWorks'
import Testimonials from './components/Testimonials'
import About from './components/About'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import './App.css'

function App() {
    return (
        <div className="app-container">
            <Navbar />
            <Hero />
            <Positioning />
            <Services />
            <HowItWorks />
            <Testimonials />
            <About />
            <FAQ />
            <Footer />
        </div>
    )
}

export default App
