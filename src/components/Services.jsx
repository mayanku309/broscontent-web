import './Services.css'
import Button from './Button'

const servicesData = [
    {
        title: 'Founder Authority System',
        description: 'Demand Creation. We clarify your positioning and turn your expertise into high-leverage content that builds trust at scale. Stop chasing trends, start leading.',
        icon: '🎯'
    },
    {
        title: 'Inbound Lead Engine',
        description: 'Qualified Pipeline. We build the systems that turn views into conversations. Content engineered to filter for qualified buyers, not just attention.',
        icon: '🚀'
    },
    {
        title: 'Total Content Operations',
        description: 'End-to-End Execution. Strategy, production, editing, and distribution handled by a partner team. Currently WAITLISTED to maintain quality.',
        icon: '💎'
    }
]

const Services = () => {
    return (
        <section id="services" className="services">
            <div className="container">
                <div className="services-header">
                    <h2 className="section-title">Outcomes, Not Features.</h2>
                    <p className="section-subtitle">We don't sell deliverables. We sell revenue engines.</p>
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
