import './Hero.css'
import Button from './Button'

const Hero = () => {
    return (
        <section className="hero">
            <div className="container hero-content">
                <div className="hero-trust-badge">
                    <span className="trust-indicator"></span>
                    Field-tested with real creators before public rollout.
                </div>
                <h1 className="hero-title">
                    We turn expertise into consistent inbound revenue without ads.
                </h1>
                <p className="hero-subtitle">
                    We build structured content systems that attract qualified buyers and start sales conversations—no vanity metrics, just pipeline.
                </p>
                <div className="hero-actions">
                    <Button variant="primary" style={{ padding: '16px 32px', fontSize: '1.1rem' }} onClick={() => window.open('https://wa.me/17052029483?text=I%20want%20to%20book%20a%20strategy%20audit', '_blank')}>
                        Book a Strategy Audit
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
