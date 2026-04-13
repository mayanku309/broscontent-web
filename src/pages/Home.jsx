import Hero from '../components/Hero'
import Positioning from '../components/Positioning'
import Services from '../components/Services'
import HowItWorks from '../components/HowItWorks'
import Testimonials from '../components/Testimonials'
import About from '../components/About'
import FAQ from '../components/FAQ'
import SEOContent from '../components/SEOContent'
import AuditForm from '../components/AuditForm'
import ExitIntent from '../components/ExitIntent'

const Home = () => {
    return (
        <>
            <Hero />
            <SEOContent />
            <Positioning />
            <Services />
            <HowItWorks />
            <Testimonials />
            <AuditForm />
            <About />
            <FAQ />
            <ExitIntent />
        </>
    )
}

export default Home
