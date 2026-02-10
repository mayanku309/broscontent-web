import './Hero.css'
import Button from './Button'

const Hero = () => {
    return (
        <section className="hero">
            <div className="container hero-content">
                <h1 className="hero-title">
                    We turn founder content into <span className="highlight">qualified demo calls.</span>
                </h1>
                <p className="hero-subtitle">
                    BrosContent builds founder-led content systems that attract the right audience and convert attention into booked sales conversations — not just likes or followers.
                </p>
                <div className="hero-actions">
                    <Button variant="primary" style={{ padding: '16px 32px', fontSize: '1.1rem' }} onClick={() => window.open('https://wa.me/17052029483?text=hey', '_blank')}>
                        Book a Strategy Call
                    </Button>
                    <Button variant="outline" style={{ padding: '16px 32px', fontSize: '1.1rem' }} onClick={() => window.open('https://wa.me/17052029483?text=hey', '_blank')}>
                        Start with a 30-Day Pilot
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default Hero
