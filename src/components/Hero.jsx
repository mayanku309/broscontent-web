import './Hero.css'
import Button from './Button'

const Hero = () => {
    return (
        <section className="hero">
            <div className="container hero-content">
                <h1 className="hero-title">
                    We Build Content Systems That <span className="highlight">Actually Sell.</span>
                </h1>
                <p className="hero-subtitle">
                    Most agencies chase "viral." We chase revenue. We are a specialized growth studio helping founders and creators turn their expertise into booked sales calls—without the corporate agency bloat.
                </p>
                <div className="hero-actions">
                    <Button variant="primary" style={{ padding: '16px 32px', fontSize: '1.1rem' }} onClick={() => window.open('https://wa.me/17052029483?text=I%20want%20to%20book%20a%20strategy%20call', '_blank')}>
                        Book a Free Strategy Call
                    </Button>
                    <Button variant="outline" style={{ padding: '16px 32px', fontSize: '1.1rem' }} onClick={() => document.getElementById('how-it-works').scrollIntoView({ behavior: 'smooth' })}>
                        How We Work
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default Hero
