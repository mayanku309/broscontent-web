import './Services.css'
import Button from './Button'

const servicesData = [
    {
        title: 'Founder Authority System',
        target: 'For founders & creators who want buyers to trust them before the first call.',
        description: 'We position you clearly in your market so the right audience understands why you’re worth paying before they ever DM or book a call.',
        solves: [
            'People see your content but don’t "get" what you actually do',
            'Leads feel cold, low-intent, or price-sensitive',
            'You’re competing instead of being chosen'
        ],
        included: [
            'Sharpens your positioning and message',
            'Aligns your content with buyer psychology',
            'Signals authority without hype or flexing'
        ],
        outcome: 'Stronger perception, warmer inbound conversations, and less convincing on calls.',
        icon: '🎯'
    },
    {
        title: 'Inbound Lead Engine',
        target: 'For businesses that want consistent conversations — not random spikes.',
        description: 'We design a structured content engine that attracts qualified buyers and turns attention into inbound leads over time.',
        solves: [
            'You’re getting views but no DMs',
            'Inbound leads are inconsistent',
            'Content feels busy but not effective'
        ],
        included: [
            'Builds content around demand, not trends',
            'Connects content → CTA → conversation',
            'Optimizes for responses, not likes'
        ],
        outcome: 'Predictable inbound conversations with people who already want what you offer.',
        icon: '🚀'
    },
    {
        title: 'Content Operations (End-to-End)',
        target: 'For teams who want execution handled — properly.',
        description: 'We run your entire content operation with a conversion-first lens, so you’re not managing freelancers, workflows, or posting chaos.',
        solves: [
            'Content management drains your time',
            'Execution is inconsistent',
            'Multiple people are involved, but nothing compounds'
        ],
        included: [
            'Handles planning, execution, and iteration',
            'Maintains a consistent publishing rhythm',
            'Improves performance based on responses, not guesses'
        ],
        note: 'Note: Selective onboarding. We work with a limited number of partners to maintain quality.',
        outcome: 'A reliable content operation that feeds your pipeline without constant oversight.',
        icon: '💎'
    }
]

const Services = () => {
    return (
        <section id="services" className="services">
            <div className="container">
                <div className="services-header">
                    <h2 className="section-title">Services built for pipeline — not posting.</h2>
                    <p className="section-subtitle">
                        Each system is designed to turn your expertise into consistent inbound demand. No ads. No vanity metrics. Just content that compounds.
                    </p>
                </div>

                <div className="services-grid">
                    {servicesData.map((service, index) => (
                        <div key={index} className="service-card">
                            <div className="service-icon">{service.icon}</div>
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-target">{service.target}</p>
                            <p className="service-description">{service.description}</p>

                            <div className="service-section">
                                <h4>This is for you if:</h4>
                                <ul>
                                    {service.solves.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className="service-section">
                                <h4>What this system does:</h4>
                                <ul>
                                    {service.included.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </div>

                            {service.note && <p className="service-note">{service.note}</p>}

                            <div className="service-outcome">
                                <h4>Outcome</h4>
                                <p>{service.outcome}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="services-cta-container">
                    <p className="services-transition">Not sure which system fits your stage? We’ll map it out in a short audit.</p>
                    <div className="services-cta-box">
                        <h3>Book a Strategy Audit</h3>
                        <p>We’ll review your current content, identify leaks, and outline a clear path forward.</p>
                        <Button variant="primary" style={{ padding: '16px 32px', fontSize: '1.2rem', width: '100%', maxWidth: '300px' }} onClick={() => window.open('https://wa.me/17052029483?text=I%20want%20to%20book%20a%20strategy%20audit', '_blank')}>
                            Book a Strategy Audit
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services
