import './Services.css'
import Button from './Button'

const servicesData = [
    {
        title: 'Founder Authority System',
        target: 'For founders & creators who want buyers to trust them before the first call.',
        description: 'We position you as a credible authority in your space so the right audience already understands your value before they ever DM or book a call.',
        solves: [
            'You’re posting but people don’t “get” what you do',
            'Leads are low-quality or price-sensitive',
            'You’re competing instead of being chosen'
        ],
        included: [
            'Clear positioning & messaging framework',
            'Content angles that signal authority (not noise)',
            'Short-form content direction built for trust',
            'Buyer psychology mapping'
        ],
        outcome: 'Stronger perception, warmer inbound conversations, and less convincing on calls.',
        icon: '🎯'
    },
    {
        title: 'Inbound Lead Engine',
        target: 'For businesses that want consistent conversations — not random spikes.',
        description: 'We design a structured content engine that attracts qualified buyers and turns attention into inbound leads over time.',
        solves: [
            'Views without DMs',
            'Inconsistent inbound leads',
            'Content that doesn’t convert'
        ],
        included: [
            'Short-form content system (topics, hooks, formats)',
            'Conversion-focused content strategy',
            'CTA & funnel logic (content → conversation)',
            'Ongoing optimization based on response'
        ],
        outcome: 'Predictable inbound conversations with people who already want what you offer.',
        icon: '🚀'
    },
    {
        title: 'Total Content Operations',
        target: 'For teams who want execution handled — properly.',
        description: 'This is for brands who don’t want to manage creators, editors, or posting workflows. We handle the entire content operation with a conversion-first lens.',
        solves: [
            'Time drain from managing content',
            'Inconsistent execution',
            'Multiple freelancers, no system'
        ],
        included: [
            'End-to-end content execution',
            'Weekly content planning & direction',
            'Publishing rhythm built for momentum',
            'Continuous iteration for better conversion'
        ],
        note: 'Note: Selective onboarding. We work with a limited number of partners to maintain quality.',
        outcome: 'A reliable content operation that runs without chaos and feeds your pipeline consistently.',
        icon: '💎'
    }
]

const Services = () => {
    return (
        <section id="services" className="services">
            <div className="container">
                <div className="services-header">
                    <h2 className="section-title">Services built for pipeline — not posting.</h2>
                    <p className="section-subtitle">Each offering is designed to turn your expertise into consistent inbound demand. No ads. No vanity metrics. Just systems that compound.</p>
                </div>

                <div className="services-grid">
                    {servicesData.map((service, index) => (
                        <div key={index} className="service-card">
                            <div className="service-icon">{service.icon}</div>
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-target">{service.target}</p>
                            <p className="service-description">{service.description}</p>

                            <div className="service-section">
                                <h4>What this solves</h4>
                                <ul>
                                    {service.solves.map((item, i) => <li key={i}>{item}</li>)}
                                </ul>
                            </div>

                            <div className="service-section">
                                <h4>What's included</h4>
                                <ul>
                                    {service.included.map((item, i) => <li key={i}>{item}</li>)}
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
                    <p className="services-transition">Not sure which system fits your stage? We’ll map it in a short audit.</p>
                    <div className="services-cta-box">
                        <h3>Book a Strategy Audit</h3>
                        <p>We’ll review your current content, identify leaks, and outline a clear path forward.</p>
                        <Button variant="primary" onClick={() => window.open('https://wa.me/17052029483?text=I%20want%20to%20book%20a%20strategy%20audit', '_blank')}>
                            Book a Strategy Audit
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services
