import './Services.css'
import Button from './Button'

const servicesData = [
    {
        title: 'Founder Positioning & Narrative',
        description: 'We define your ICP, build your unique positioning, create content pillars, and optimize your profile to establish authority.',
        icon: '🎯'
    },
    {
        title: 'Done-For-You Content Engine',
        description: 'Ghostwritten LinkedIn / X posts and short-form repurposing to build consistent authority without you becoming a full-time creator.',
        icon: '✍️'
    },
    {
        title: 'Content → Demo Conversion',
        description: 'We map CTAs, setup lead magnets, and implement DM qualification frameworks to turn engagement into booked calendar meetings.',
        icon: '📅'
    },
    {
        title: 'Performance & Optimization',
        description: 'Monthly reporting on inbound DMs, booked calls, and qualified leads — ensuring your content drives real business revenue.',
        icon: '📊'
    }
]

const Services = () => {
    return (
        <section id="services" className="services">
            <div className="container">
                <div className="services-header">
                    <h2 className="section-title">Our Services</h2>
                    <p className="section-subtitle">A complete system to turn content into revenue.</p>
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
