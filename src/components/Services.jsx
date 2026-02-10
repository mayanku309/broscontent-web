import './Services.css'
import Button from './Button'

const servicesData = [
    {
        title: 'Founder Authority Engine',
        description: 'Become the "Category King" in your niche. We handle strategy, LinkedIn & X ghostwriting, and profile optimization to attract high-ticket clients who trust you before the call.',
        icon: '🎯'
    },
    {
        title: 'Inbound Lead Ecosystem',
        description: 'A predictable stream of qualified leads. We produce short-form video, set up lead magnets, and run DM qualification scripts to fill your calendar.',
        icon: '🚀'
    },
    {
        title: 'Total Brand Transformation',
        description: 'Dominate your market with "media company" level output. Full-stack content strategy, multi-platform distribution, and community building without hiring an internal team.',
        icon: '💎'
    }
]

const Services = () => {
    return (
        <section id="services" className="services">
            <div className="container">
                <div className="services-header">
                    <h2 className="section-title">Growth Mechanisms Designed for ROI</h2>
                    <p className="section-subtitle">We don't sell deliverables. We sell outcomes.</p>
                </div>

                <div className="services-grid">
                    {servicesData.map((service, index) => (
                        <div key={index} className="service-card">
                            <div className="service-icon">{service.icon}</div>
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-description">{service.description}</p>
                            <Button variant="ghost" className="service-link">Learn More →</Button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Services
