import './Services.css'
import Button from './Button'

const servicesData = [
    {
        title: 'Patient Lead Generation',
        target: 'For clinics losing new patients to competitors with better online presence.',
        description: 'We build automated systems that capture patient inquiries from Google, Instagram, and WhatsApp — and route them directly to your front desk. No more missed leads.',
        solves: [
            'Your clinic doesn\'t show up when patients search "dentist near me"',
            'Leads come in but nobody follows up fast enough',
            'You\'re spending on ads but can\'t track which ones bring real patients'
        ],
        included: [
            'Google Business Profile optimization & local SEO',
            'Automated lead capture from all channels',
            'Instant WhatsApp auto-reply for new inquiries'
        ],
        outcome: 'A steady stream of new patient inquiries landing directly in your booking system — on autopilot.',
        icon: '🎯'
    },
    {
        title: 'Dental Content Creation',
        target: 'For dentists who know they should post online but don\'t have the time.',
        description: 'We create scroll-stopping content that educates patients and builds trust — before they ever walk through your door. Designed specifically for dental practices.',
        solves: [
            'You haven\'t posted on Instagram in months',
            'Your content looks generic and doesn\'t reflect your expertise',
            'Patients choose competitors who "look more professional" online'
        ],
        included: [
            'Monthly content calendar with dental-specific topics',
            'Before/after case showcases (HIPAA-aware)',
            'Educational reels, carousels, and patient testimonials'
        ],
        outcome: 'A professional online presence that makes patients trust you before they book — and refer you to friends.',
        icon: '📸'
    },
    {
        title: 'AI Practice Automation',
        target: 'For clinics wasting staff hours on appointment reminders and follow-ups.',
        description: 'We deploy AI-powered automations that handle appointment reminders, follow-up messages, review collection, and reactivation of dormant patients — all without lifting a finger.',
        solves: [
            'Staff spends hours calling patients for appointment confirmations',
            'No-shows cost you ₹5,000+ per empty chair per day',
            'You forget to follow up with patients who need treatment plans'
        ],
        included: [
            'Automated WhatsApp/SMS appointment reminders',
            'Post-visit review request sequences',
            'Dormant patient reactivation campaigns',
        ],
        note: 'Limited onboarding slots. We work with only 10 clinics per city to maintain quality.',
        outcome: 'An AI receptionist that never forgets, never takes leave, and works 24/7 to keep your chairs full.',
        icon: '🤖'
    }
]

const Services = () => {
    return (
        <section id="services" className="services">
            <div className="container">
                <div className="services-header">
                    <div className="section-label">
                        <span className="label-line"></span>
                        What We Build
                    </div>
                    <h2 className="section-title">Three Systems. One Full Practice.</h2>
                    <p className="section-subtitle" style={{ maxWidth: '650px', margin: '12px auto 0' }}>
                        Each system is designed to solve a specific problem dental clinics face — lead generation, online presence, and operational efficiency.
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
                    <p className="services-transition">Not sure which system your practice needs? We'll diagnose it in a free audit.</p>
                    <div className="services-cta-box">
                        <h3>Book a Free Practice Audit</h3>
                        <p>We'll review your clinic's online presence, patient flow, and automation gaps — then give you a clear action plan.</p>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
                            <Button variant="primary" style={{ padding: '16px 32px', fontSize: '1.1rem', width: '100%', maxWidth: '300px' }} onClick={() => document.getElementById('audit-form').scrollIntoView({ behavior: 'smooth' })}>
                                Get Your Free Audit
                            </Button>
                            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0, fontStyle: 'italic' }}>
                                100% free. No obligation. Takes 15 minutes.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services
