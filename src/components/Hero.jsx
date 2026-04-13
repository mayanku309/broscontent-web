import './Hero.css'
import Button from './Button'

const Hero = () => {
    const scrollToAudit = () => {
        const el = document.getElementById('audit-form')
        if (el) el.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <section className="hero">
            <div className="hero-glow hero-glow--left"></div>
            <div className="hero-glow hero-glow--right"></div>
            <div className="container hero-content">
                <div className="hero-trust-badge">
                    <span className="trust-indicator"></span>
                    Built for dental clinics across India
                </div>
                <h1 className="hero-title">
                    Stop Losing Patients to<br />
                    <span className="hero-highlight">Empty Appointment Slots</span>
                </h1>
                <p className="hero-subtitle">
                    Your clinic deserves a full schedule — not wasted staff hours chasing follow-ups.
                    We build AI-powered automations that fill your chairs with new patients,
                    send reminders on autopilot, and turn your online presence into a lead machine.
                </p>
                <div className="hero-actions">
                    <div className="hero-actions-inner">
                        <div className="hero-buttons">
                            <Button variant="primary" style={{ padding: '16px 36px', fontSize: '1.05rem' }} onClick={scrollToAudit}>
                                Get Your Free Practice Audit
                            </Button>
                            <Button variant="outline" style={{ padding: '16px 32px', fontSize: '1.05rem' }} onClick={() => document.getElementById('how-it-works').scrollIntoView({ behavior: 'smooth' })}>
                                See How It Works
                            </Button>
                        </div>
                        <p className="hero-micro-trust">
                            Free 15-min analysis • No sales pressure • Built for Indian dental clinics
                        </p>
                    </div>
                </div>

                <div className="hero-stats">
                    <div className="hero-stat">
                        <div className="hero-stat__number">3x</div>
                        <div className="hero-stat__label">More Patient Bookings</div>
                    </div>
                    <div className="hero-stat">
                        <div className="hero-stat__number">80%</div>
                        <div className="hero-stat__label">Less Staff Follow-up Time</div>
                    </div>
                    <div className="hero-stat">
                        <div className="hero-stat__number">24/7</div>
                        <div className="hero-stat__label">Automated Reminders</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
