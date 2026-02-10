import './Hero.css'
import Button from './Button'

const Hero = () => {
    return (
        <section className="hero">
            <div className="container hero-content">
                <h1 className="hero-title">
                    We Turn Your Content Into <span className="highlight">Revenue.</span> Not Just "Likes."
                </h1>
                <p className="hero-subtitle">
                    Stop posting into the void. We build high-performance content systems for founders & agencies that drive qualified inbound leads and book sales calls on autopilot.
                </p>
                <div className="hero-actions">
                    <Button variant="primary" style={{ padding: '16px 32px', fontSize: '1.1rem' }} onClick={() => window.open('https://wa.me/17052029483?text=I%20want%20to%20book%20a%20strategy%20call', '_blank')}>
                        Book a Free Strategy Call
                    </Button>
                    <Button variant="outline" style={{ padding: '16px 32px', fontSize: '1.1rem' }} onClick={() => document.getElementById('how-it-works').scrollIntoView({ behavior: 'smooth' })}>
                        See How It Works
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default Hero
