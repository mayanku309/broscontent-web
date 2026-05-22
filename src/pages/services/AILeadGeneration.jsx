import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../../components/Button'
import AuditForm from '../../components/AuditForm'
import '../../components/Hero.css'
import '../../components/Services.css'
import '../../components/FAQ.css'

const schema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Service",
            "name": "Dental Lead Generation India",
            "provider": {
                "@type": "Organization",
                "name": "BrosContent",
                "url": "https://www.broscontent.in"
            },
            "areaServed": "India",
            "description": "AI-powered patient lead generation for dental clinics in India. Google Business optimisation, local SEO, WhatsApp lead capture and automated follow-ups that convert searches into booked appointments.",
            "url": "https://www.broscontent.in/services/ai-lead-generation"
        },
        {
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "How does AI lead generation work for dental clinics?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "AI lead generation for dental clinics captures patient enquiries from Google, Instagram, and WhatsApp, then automatically qualifies and follows up with each lead using personalised messages. The system works 24/7, so no lead goes unanswered even after clinic hours."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How long does it take to see new patients from lead generation?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Most dental clinics see measurable results — new enquiries and booked appointments — within 30 to 45 days of system setup. Google Business optimisation shows the fastest impact, while SEO-driven leads build over 60 to 90 days."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What is the cost of dental lead generation in India?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Our AI lead generation packages for dental clinics start at ₹15,000 per month. The exact cost depends on your city, competition, and target patient volume. Book a free audit and we will recommend the right package for your practice."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Do you run Google Ads for dental clinics?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. We manage Google Ads campaigns specifically tuned for dental clinics in Indian cities, combining paid search with local SEO and Google Business Profile optimisation for maximum visibility at the lowest cost per lead."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Can you generate leads for a dental clinic in a Tier-2 city?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Absolutely. We have active systems running in Tier-2 cities including Jaipur, Ahmedabad, and Indore. Competition is often lower in Tier-2 markets, which means cost per lead is cheaper and results come faster than in metros."
                    }
                }
            ]
        }
    ]
}

const faqItems = [
    {
        question: "How does AI lead generation work for dental clinics?",
        answer: "AI lead generation for dental clinics captures patient enquiries from Google, Instagram, and WhatsApp, then automatically qualifies and follows up with each lead using personalised messages. The system works 24/7, so no lead goes unanswered even after clinic hours."
    },
    {
        question: "How long does it take to see new patients?",
        answer: "Most dental clinics see measurable results — new enquiries and booked appointments — within 30 to 45 days. Google Business optimisation shows the fastest impact, while SEO-driven leads build over 60 to 90 days as your local authority grows."
    },
    {
        question: "What does dental lead generation cost in India?",
        answer: "Our AI lead generation packages start at ₹15,000 per month. The exact cost depends on your city, competition level, and target patient volume. Book a free audit and we will recommend the right package for your practice size."
    },
    {
        question: "Do you run Google Ads for dental clinics?",
        answer: "Yes. We manage Google Ads campaigns specifically tuned for dental clinics in Indian cities, combining paid search with local SEO and Google Business Profile optimisation for maximum visibility at the lowest cost per lead."
    },
    {
        question: "Can you generate leads for a clinic in a Tier-2 city?",
        answer: "Absolutely. We have active systems in Tier-2 cities including Jaipur, Ahmedabad, and Indore. Competition is often lower in Tier-2 markets, so cost per lead is cheaper and results come faster than in metros like Delhi or Mumbai."
    }
]

const AILeadGeneration = () => {
    const [activeIndex, setActiveIndex] = useState(null)

    useEffect(() => {
        const script = document.createElement('script')
        script.type = 'application/ld+json'
        script.id = 'service-schema'
        script.text = JSON.stringify(schema)
        document.head.appendChild(script)
        return () => { document.getElementById('service-schema')?.remove() }
    }, [])

    const scrollToAudit = () => { window.location.href = '/#audit-form' }

    return (
        <div>
            {/* Hero */}
            <section className="hero" style={{ padding: '140px 0 80px' }}>
                <div className="hero-glow hero-glow--left"></div>
                <div className="container hero-content">
                    <div className="hero-trust-badge">
                        <span className="trust-indicator"></span>
                        Dental Lead Generation India
                    </div>
                    <h1 className="hero-title">
                        AI-Powered Patient Lead Generation<br />
                        <span className="hero-highlight">for Dental Clinics in India</span>
                    </h1>
                    <p className="hero-subtitle">
                        Fill your appointment books with qualified patients — not just website visitors.
                        Our AI systems capture leads from Google, Instagram, and WhatsApp, then automatically follow up
                        until they book.
                    </p>
                    <div className="hero-actions">
                        <Button variant="primary" style={{ padding: '16px 36px', fontSize: '1.05rem' }} onClick={scrollToAudit}>
                            Get Your Free Practice Audit
                        </Button>
                    </div>
                    <div className="hero-stats" style={{ marginTop: '48px' }}>
                        <div className="hero-stat"><span className="hero-stat-number">3x</span><span className="hero-stat-label">More monthly bookings</span></div>
                        <div className="hero-stat"><span className="hero-stat-number">24/7</span><span className="hero-stat-label">Automated lead follow-up</span></div>
                        <div className="hero-stat"><span className="hero-stat-number">30–45</span><span className="hero-stat-label">Days to first results</span></div>
                    </div>
                </div>
            </section>

            {/* Problem */}
            <section style={{ padding: '80px 0', background: 'var(--bg-secondary)' }}>
                <div className="container">
                    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <h2 className="section-title" style={{ marginBottom: '32px' }}>Why Most Dental Clinics Lose Patients Before They Even Call</h2>
                        <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-secondary)', marginBottom: '24px' }}>
                            A patient searches "dentist near me" in your city. Your clinic appears. They click your website, look around for 30 seconds, and leave — without booking. Meanwhile, the clinic ranked above you captures that patient with an instant WhatsApp confirmation and a reminder the day before.
                        </p>
                        <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-secondary)', marginBottom: '24px' }}>
                            The gap is not your clinical skill. It's your <strong style={{ color: 'var(--accent)' }}>dental lead generation system</strong>. Most Indian dental clinics have no automated way to capture, qualify, and follow up with potential patients outside business hours — which is when 60% of searches happen.
                        </p>
                        <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-secondary)' }}>
                            BrosContent builds that system for you. We combine Google visibility with AI-powered lead capture so your clinic books patients around the clock — without your staff lifting a finger.
                        </p>
                    </div>
                </div>
            </section>

            {/* What We Do */}
            <section style={{ padding: '80px 0', background: 'var(--bg-primary)' }}>
                <div className="container">
                    <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '56px' }}>How Our Dental Lead Generation System Works</h2>
                    <div className="services-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '28px' }}>
                        <div className="service-card">
                            <div className="service-icon">📍</div>
                            <h3 className="service-title">Google Business Profile Optimisation</h3>
                            <p className="service-description">We fully optimise your Google Business Profile — categories, services, photos, Q&As, and weekly posts — so you rank in the local 3-pack for "dentist near me" searches in your city. This single step drives the fastest results.</p>
                        </div>
                        <div className="service-card">
                            <div className="service-icon">🔍</div>
                            <h3 className="service-title">Local SEO for Dental Clinics</h3>
                            <p className="service-description">We build local SEO authority through citation management, on-page optimisation, and dental-specific content targeting keywords like "dental clinic in [your city]" and "teeth whitening [your area]" — driving organic patient enquiries for months.</p>
                        </div>
                        <div className="service-card">
                            <div className="service-icon">🤖</div>
                            <h3 className="service-title">AI-Powered Lead Capture</h3>
                            <p className="service-description">Every visitor who contacts your clinic — via WhatsApp, website form, or social media — is automatically captured and entered into a follow-up sequence. Our AI sends personalised messages, answers common questions, and nudges leads toward booking.</p>
                        </div>
                        <div className="service-card">
                            <div className="service-icon">📱</div>
                            <h3 className="service-title">WhatsApp Lead Qualification</h3>
                            <p className="service-description">We set up a WhatsApp automation that qualifies leads instantly — asking about treatment needed, preferred timing, and location. Qualified leads are forwarded to your receptionist with full context, cutting the time from enquiry to booking by 80%.</p>
                        </div>
                        <div className="service-card">
                            <div className="service-icon">📊</div>
                            <h3 className="service-title">Google Ads for Dentists</h3>
                            <p className="service-description">For faster results, we run tightly targeted Google Ads campaigns for high-intent keywords like "root canal treatment Mumbai" or "dental implants Bangalore." Every rupee is tracked to an actual booked appointment — not just clicks.</p>
                        </div>
                        <div className="service-card">
                            <div className="service-icon">⭐</div>
                            <h3 className="service-title">Google Review Automation</h3>
                            <p className="service-description">More 5-star reviews mean more patients choose your clinic over competitors. We automate review requests via WhatsApp after every appointment, building your review count and rating without your staff having to ask awkwardly in person.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Results */}
            <section style={{ padding: '80px 0', background: 'var(--bg-secondary)' }}>
                <div className="container">
                    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <h2 className="section-title" style={{ marginBottom: '32px' }}>What Dental Clinics Achieve With AI Lead Generation</h2>
                        <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-secondary)', marginBottom: '24px' }}>
                            Dental clinics using our lead generation systems typically see a 2–3x increase in monthly new patient enquiries within the first 60 days. No-show rates drop because every booked patient receives automated reminders. And dormant patients — those who haven't visited in 6+ months — are reactivated through targeted WhatsApp campaigns.
                        </p>
                        <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-secondary)', marginBottom: '24px' }}>
                            The compounding effect is significant: more reviews improve your Google ranking, better ranking drives more leads, more leads convert to more patients, and more patients leave more reviews. Within 3–6 months, your clinic's online presence becomes a self-reinforcing growth engine.
                        </p>
                        <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-secondary)' }}>
                            We measure everything: cost per lead, lead-to-booking rate, show-up rate, and revenue per patient acquired. You always know exactly what your investment is returning.
                        </p>
                    </div>
                </div>
            </section>

            {/* Internal links */}
            <section style={{ padding: '60px 0', background: 'var(--bg-primary)' }}>
                <div className="container">
                    <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '40px', fontSize: '1.6rem' }}>Complete Your Patient Acquisition Stack</h2>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center' }}>
                        <Link to="/services/whatsapp-automation" style={{ padding: '14px 24px', background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)', color: 'var(--text-primary)', textDecoration: 'none', fontSize: '0.95rem', transition: 'border-color 0.2s' }}>
                            WhatsApp Automation →
                        </Link>
                        <Link to="/services/appointment-systems" style={{ padding: '14px 24px', background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)', color: 'var(--text-primary)', textDecoration: 'none', fontSize: '0.95rem' }}>
                            Appointment Systems →
                        </Link>
                        <Link to="/services/content-creation" style={{ padding: '14px 24px', background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)', color: 'var(--text-primary)', textDecoration: 'none', fontSize: '0.95rem' }}>
                            Content Creation →
                        </Link>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="faq" style={{ padding: '80px 0' }}>
                <div className="container">
                    <div className="section-header">
                        <div className="section-label"><span className="label-line"></span>FAQ</div>
                        <h2 className="section-title">Dental Lead Generation — Common Questions</h2>
                    </div>
                    <div className="faq-grid">
                        {faqItems.map((item, index) => (
                            <div key={index} className={`faq-item ${activeIndex === index ? 'active' : ''}`} onClick={() => setActiveIndex(activeIndex === index ? null : index)}>
                                <div className="faq-question">
                                    <h3>{item.question}</h3>
                                    <span className="faq-icon">{activeIndex === index ? '−' : '+'}</span>
                                </div>
                                <div className="faq-answer"><p>{item.answer}</p></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <AuditForm />
        </div>
    )
}

export default AILeadGeneration
