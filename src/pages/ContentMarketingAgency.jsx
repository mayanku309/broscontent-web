import '../components/Hero.css'
import '../components/Positioning.css'
import '../components/Services.css'
import '../components/HowItWorks.css'
import Button from '../components/Button'

const ContentMarketingAgency = () => {
    const scrollToAudit = () => {
        window.location.href = '/#audit-form'
    }

    return (
        <div className="content-marketing-agency-page">
            {/* Hero Section */}
            <section className="hero" style={{ padding: '160px 0 100px' }}>
                <div className="hero-glow hero-glow--left"></div>
                <div className="container hero-content">
                    <div className="hero-trust-badge">
                        <span className="trust-indicator"></span>
                        AI-Powered Dental Marketing Agency
                    </div>
                    <h1 className="hero-title">
                        The Only Marketing Agency Built<br />
                        <span className="hero-highlight">Exclusively for Dentists</span>
                    </h1>
                    <p className="hero-subtitle">
                        Stop wasting money on generic agencies that don't understand dental practices.
                        We build AI-powered lead generation, content creation, and appointment automation
                        systems that fill your chairs with paying patients.
                    </p>
                    <div className="hero-actions">
                        <Button variant="primary" style={{ padding: '16px 36px', fontSize: '1.05rem' }} onClick={scrollToAudit}>
                            Get Your Free Practice Audit
                        </Button>
                    </div>
                </div>
            </section>

            {/* Problem */}
            <section className="positioning" style={{ padding: '80px 0' }}>
                <div className="container">
                    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <h2 className="section-title" style={{ marginBottom: '40px' }}>Most Dental Marketing Agencies Fail You.</h2>
                        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-secondary)', marginBottom: '28px' }}>
                            They focus on "brand awareness," "impressions," and "followers." But you can't treat patients with Instagram likes.
                            As a performance-driven <strong style={{ color: 'var(--accent)' }}>dental marketing agency</strong>, we focus on one metric: <strong style={{ color: 'var(--accent)' }}>booked appointments.</strong>
                        </p>
                        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-secondary)' }}>
                            We don't just create pretty posts. We build AI-powered systems that capture patient leads from Google,
                            send automated appointment reminders via WhatsApp, and reactivate dormant patients who haven't visited in months
                            — turning your online presence into a predictable patient acquisition engine.
                        </p>
                    </div>
                </div>
            </section>

            {/* Framework */}
            <section style={{ padding: '80px 0', background: 'var(--bg-secondary)' }}>
                <div className="container">
                    <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '60px' }}>Our Dental Growth Framework</h2>

                    <div className="services-grid" style={{ gridTemplateColumns: '1fr', maxWidth: '800px', margin: '0 auto', gap: '32px' }}>
                        <div className="service-card">
                            <h3 className="service-title" style={{ fontSize: '1.4rem', marginBottom: '14px' }}>1. Patient Lead Generation & Local SEO</h3>
                            <p className="service-description">
                                We optimize your Google Business Profile, build local SEO authority, and set up automated lead capture
                                so that when patients search "dentist near me" in your city, <strong>you</strong> show up first — and they book instantly.
                            </p>
                        </div>

                        <div className="service-card">
                            <h3 className="service-title" style={{ fontSize: '1.4rem', marginBottom: '14px' }}>2. Trust-Building Content Creation</h3>
                            <p className="service-description">
                                Our team creates dental-specific content — before/after showcases, educational reels, patient testimonials,
                                and treatment explainers. Content that makes patients trust you before they walk through the door.
                            </p>
                        </div>

                        <div className="service-card">
                            <h3 className="service-title" style={{ fontSize: '1.4rem', marginBottom: '14px' }}>3. AI Automation & Revenue Recovery</h3>
                            <p className="service-description">
                                We deploy AI-powered WhatsApp reminders that cut no-shows by 70%, automated review collection that builds
                                your reputation, and dormant patient reactivation campaigns that recover lost revenue from your existing database.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why BrosContent */}
            <section style={{ padding: '80px 0', background: 'var(--bg-primary)' }}>
                <div className="container">
                    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <h2 className="section-title" style={{ fontSize: '2rem', marginBottom: '40px' }}>Why Indian Dentists Choose BrosContent</h2>

                        <div style={{ marginBottom: '36px' }}>
                            <h3 style={{ fontSize: '1.3rem', marginBottom: '14px', fontFamily: 'var(--font-heading)', fontWeight: 700, color: 'var(--text-primary)' }}>We Only Work With Dental Clinics</h3>
                            <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
                                Generic agencies treat you like "just another client." We understand appointment scheduling,
                                treatment plan follow-ups, patient retention cycles, and the competitive dynamics of dental markets
                                in Indian cities. Our <strong style={{ color: 'var(--accent)' }}>dental marketing systems</strong> are built from the ground up for your industry.
                            </p>
                        </div>

                        <div style={{ marginBottom: '36px' }}>
                            <h3 style={{ fontSize: '1.3rem', marginBottom: '14px', fontFamily: 'var(--font-heading)', fontWeight: 700, color: 'var(--text-primary)' }}>AI Automation, Not Manual Labor</h3>
                            <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
                                Your staff shouldn't spend hours calling patients for confirmations.
                                Our AI systems handle appointment reminders, follow-ups, review requests, and patient reactivation
                                — running 24/7 on WhatsApp with zero staff involvement.
                            </p>
                        </div>
                    </div>

                    <div style={{ marginTop: '48px', textAlign: 'center' }}>
                        <h3 style={{ marginBottom: '20px', fontFamily: 'var(--font-heading)', fontWeight: 700, color: 'var(--text-primary)' }}>Ready to Fill Your Appointment Books?</h3>
                        <Button variant="primary" style={{ padding: '16px 36px', fontSize: '1.05rem' }} onClick={scrollToAudit}>
                            Get Your Free Practice Audit
                        </Button>
                        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '12px', fontStyle: 'italic' }}>
                            100% free. No obligation.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ContentMarketingAgency
