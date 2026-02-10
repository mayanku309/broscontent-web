import './Services.css'
import Button from './Button'

const servicesData = [
    {
        title: 'Founder Authority System',
        description: 'Stop being the "best kept secret." We handle strategic positioning, LinkedIn & X ghostwriting, and profile optimization to turn you into a recognized authority.',
        icon: '🎯'
    },
    {
        title: 'The Inbound Lead Engine',
        description: 'A predictable calendar of calls. We produce short-form video, set up lead magnets, and run non-spammy DM qualification frameworks.',
        icon: '🚀'
    },
    {
        title: 'Total Content Operations',
        description: 'Full-stack strategy (Video, Text, Audio) and multi-platform distribution. currently WAITLISTED to ensure quality for existing partners.',
        icon: '💎'
    }
]

const Services = () => {
    return (
        <section id="services" className="services">
            <div className="container">
                <div className="services-header">
                    <h2 className="section-title">We Don't Sell "Posts." We Sell Pipeline.</h2>
                    <p className="section-subtitle">Growth mechanisms designed for ROI.</p>
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
