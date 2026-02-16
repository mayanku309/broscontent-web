import Hero from '../components/Hero'
import Positioning from '../components/Positioning'
import Services from '../components/Services'
import HowItWorks from '../components/HowItWorks'
import Testimonials from '../components/Testimonials'
import About from '../components/About'
import FAQ from '../components/FAQ'
import SEOContent from '../components/SEOContent'

const Home = () => {
    return (
        <>
            <Hero />
            <SEOContent />
            <Positioning />
            <Services />
            <HowItWorks />
            <Testimonials />
            <About />
            <FAQ />
        </>
    )
}

export default Home
