import './Hero.css'
import Button from './Button'

const Hero = () => {
    return (
        <section className="hero">
            <div className="container hero-content">
                <div className="hero-trust-badge">
                    <span className="trust-indicator"></span>
                    Field-tested with real creators before public rollout
                </div>
                <h1 className="hero-title">
                    We Turn Expertise Into Consistent Inbound Revenue — Without Ads.
                </h1>
                <p className="hero-subtitle">
                    We build structured content systems that attract qualified buyers, start sales conversations, and turn attention into real pipeline — not vanity metrics.
                </p>
                <div className="hero-actions">
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
                        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
                            <Button variant="primary" style={{ padding: '16px 32px', fontSize: '1.1rem' }} onClick={() => window.open('https://wa.me/17052029483?text=I%20want%20to%20book%20a%20strategy%20audit', '_blank')}>
                                Book a Strategy Audit
                            </Button>
                            <Button variant="outline" style={{ padding: '16px 32px', fontSize: '1.1rem' }} onClick={() => document.getElementById('how-it-works').scrollIntoView({ behavior: 'smooth' })}>
                                See How It Works
                            </Button>
                        </div>
                        <p className="hero-micro-trust" style={{ fontSize: '0.9rem', opacity: 0.8, margin: 0 }}>
                            Free 15-min analysis. No sales pressure.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
