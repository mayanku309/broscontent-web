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
            "name": "WhatsApp Automation for Dental Clinics",
            "provider": {
                "@type": "Organization",
                "name": "BrosContent",
                "url": "https://www.broscontent.in"
            },
            "areaServed": "India",
            "description": "WhatsApp automation for dental clinics in India — appointment reminders, patient follow-ups, review requests, and dormant patient reactivation, all running automatically on WhatsApp Business API.",
            "url": "https://www.broscontent.in/services/whatsapp-automation"
        },
        {
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "What is WhatsApp automation for dental clinics?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "WhatsApp automation for dental clinics means your appointment reminders, follow-up messages, review requests, and patient reactivation campaigns are sent automatically via WhatsApp — without your staff manually typing or calling. The system runs 24/7 on WhatsApp Business API."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How much does WhatsApp automation reduce no-shows?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Dental clinics using our WhatsApp automation typically see a 60 to 70 percent reduction in no-shows. Automated reminders sent 24 hours and 2 hours before appointments — with a one-tap confirmation button — dramatically increase show-up rates."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Does WhatsApp automation work with my existing clinic management software?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. We can integrate with most clinic management systems used in India. If your software exports appointment data, we can automate the reminder workflow. We handle the entire technical setup — your staff only needs to confirm the integration works."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Is WhatsApp automation legal and compliant for medical practices in India?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. We use the official WhatsApp Business API, which is fully compliant. All messages are opt-in — patients who provide their WhatsApp number for appointments have implicitly consented to appointment-related communications. We follow all applicable messaging guidelines."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Can WhatsApp automation reactivate patients who stopped visiting?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. Dormant patient reactivation is one of the highest-ROI use cases for dental clinics. We send personalised WhatsApp messages to patients who have not visited in 6 or more months, offering a reason to return. Clinics recover ₹3 to 8 lakh in revenue from their existing patient database within the first campaign."
                    }
                }
            ]
        }
    ]
}

const faqItems = [
    {
        question: "What is WhatsApp automation for dental clinics?",
        answer: "WhatsApp automation for dental clinics means your appointment reminders, follow-up messages, review requests, and patient reactivation campaigns are sent automatically via WhatsApp — without your staff manually typing or calling. The system runs 24/7 on the WhatsApp Business API."
    },
    {
        question: "How much does it reduce no-shows?",
        answer: "Dental clinics using our WhatsApp automation typically see a 60 to 70 percent reduction in no-shows. Automated reminders sent 24 hours and 2 hours before appointments — with a one-tap confirmation button — dramatically increase show-up rates."
    },
    {
        question: "Does it work with my clinic management software?",
        answer: "Yes. We integrate with most clinic management systems used in India. If your software exports appointment data, we can automate the reminder workflow. We handle the entire technical setup — you just confirm it works."
    },
    {
        question: "Is WhatsApp automation legally compliant for medical practices?",
        answer: "Yes. We use the official WhatsApp Business API, which is fully compliant. All messages are opt-in — patients who provide their WhatsApp number for appointments have implicitly consented to appointment-related communications. We follow all applicable messaging guidelines."
    },
    {
        question: "Can it reactivate patients who stopped visiting?",
        answer: "Yes. Dormant patient reactivation is one of the highest-ROI use cases for dental clinics. We send personalised messages to patients inactive for 6+ months, offering a reason to return. Clinics typically recover ₹3 to 8 lakh from their existing patient database within the first campaign."
    }
]

const WhatsAppAutomation = () => {
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
                        WhatsApp Automation · Dental Clinics India
                    </div>
                    <h1 className="hero-title">
                        WhatsApp Automation That Cuts<br />
                        <span className="hero-highlight">No-Shows by 70% for Dental Clinics</span>
                    </h1>
                    <p className="hero-subtitle">
                        Every missed appointment is ₹2,000–8,000 of revenue lost. Our AI-powered WhatsApp automation sends reminders,
                        handles follow-ups, requests reviews, and reactivates dormant patients — automatically, around the clock.
                    </p>
                    <div className="hero-actions">
                        <Button variant="primary" style={{ padding: '16px 36px', fontSize: '1.05rem' }} onClick={scrollToAudit}>
                            Set Up WhatsApp Automation Free
                        </Button>
                    </div>
                    <div className="hero-stats" style={{ marginTop: '48px' }}>
                        <div className="hero-stat"><span className="hero-stat-number">70%</span><span className="hero-stat-label">Fewer no-shows</span></div>
                        <div className="hero-stat"><span className="hero-stat-number">80%</span><span className="hero-stat-label">Less staff follow-up time</span></div>
                        <div className="hero-stat"><span className="hero-stat-number">₹8L</span><span className="hero-stat-label">Avg. reactivation revenue</span></div>
                    </div>
                </div>
            </section>

            {/* Problem */}
            <section style={{ padding: '80px 0', background: 'var(--bg-secondary)' }}>
                <div className="container">
                    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <h2 className="section-title" style={{ marginBottom: '32px' }}>Every Empty Chair Is a WhatsApp Message That Was Never Sent</h2>
                        <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-secondary)', marginBottom: '24px' }}>
                            The average Indian dental clinic loses 15–25% of booked appointments to no-shows. At ₹3,000–8,000 per appointment, that is ₹1.5 to 5 lakh of revenue walking out every month — not because patients don't want to come, but because life got in the way and nobody reminded them.
                        </p>
                        <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-secondary)', marginBottom: '24px' }}>
                            WhatsApp is where your patients already are. 98% of Indians with a smartphone use WhatsApp daily. A well-timed reminder on WhatsApp — with a single "Confirm" button — converts a forgotten appointment into a kept one. Yet most dental clinics still rely on a receptionist making phone calls, or don't follow up at all.
                        </p>
                        <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-secondary)' }}>
                            BrosContent deploys the official <strong style={{ color: 'var(--accent)' }}>WhatsApp Business API</strong> to automate every patient communication touchpoint — from the moment they book to the moment they leave a review.
                        </p>
                    </div>
                </div>
            </section>

            {/* Automation Sequences */}
            <section style={{ padding: '80px 0', background: 'var(--bg-primary)' }}>
                <div className="container">
                    <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '56px' }}>What Gets Automated on WhatsApp</h2>
                    <div className="services-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '28px' }}>
                        <div className="service-card">
                            <div className="service-icon">⏰</div>
                            <h3 className="service-title">Appointment Reminders</h3>
                            <p className="service-description">Automated messages sent 24 hours and 2 hours before every appointment. Each message includes the date, time, doctor's name, and a one-tap "Confirm" or "Reschedule" button. No-show rates drop 60–70% in the first month.</p>
                        </div>
                        <div className="service-card">
                            <div className="service-icon">💬</div>
                            <h3 className="service-title">Post-Visit Follow-Ups</h3>
                            <p className="service-description">After each appointment, patients automatically receive a follow-up checking how they feel, a link to leave a Google review, and treatment care instructions. This single sequence builds your review count and shows patients you care after they leave.</p>
                        </div>
                        <div className="service-card">
                            <div className="service-icon">🔄</div>
                            <h3 className="service-title">Dormant Patient Reactivation</h3>
                            <p className="service-description">We identify patients who haven't visited in 6+ months and send personalised WhatsApp reactivation campaigns — a check-in message, a seasonal offer, or a reminder about overdue cleanings. Clinics routinely recover ₹3–8 lakh from their own existing database.</p>
                        </div>
                        <div className="service-card">
                            <div className="service-icon">⭐</div>
                            <h3 className="service-title">Review Collection</h3>
                            <p className="service-description">Getting patients to leave Google reviews is awkward in person. On WhatsApp, a friendly automated message 2 hours after the appointment with a direct review link achieves 20–30% review rates — far above the industry average of 2–5%.</p>
                        </div>
                        <div className="service-card">
                            <div className="service-icon">📋</div>
                            <h3 className="service-title">Treatment Follow-Up Sequences</h3>
                            <p className="service-description">For ongoing treatments like braces, root canals, or implants, we build multi-step WhatsApp sequences that keep patients informed, remind them of next steps, and prompt re-booking before the appointment window closes.</p>
                        </div>
                        <div className="service-card">
                            <div className="service-icon">🤝</div>
                            <h3 className="service-title">New Patient Onboarding</h3>
                            <p className="service-description">First impressions matter. New patients receive a welcome message with clinic address, parking info, what to bring, and a WhatsApp link to ask questions before their first visit. Arrival rates for new patients increase by over 40%.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Setup */}
            <section style={{ padding: '80px 0', background: 'var(--bg-secondary)' }}>
                <div className="container">
                    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <h2 className="section-title" style={{ marginBottom: '32px' }}>Setup Takes 5 Days. Your Staff Learns in 30 Minutes.</h2>
                        <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-secondary)', marginBottom: '24px' }}>
                            We handle the entire technical setup — WhatsApp Business API approval, message template creation, integration with your appointment system, and automation flow configuration. You don't need to understand any of the technology.
                        </p>
                        <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-secondary)' }}>
                            Once live, your receptionist monitors a simple dashboard and handles any patient replies that need a human response. We train them in one 30-minute session. If they can use WhatsApp normally, they can manage the system.
                        </p>
                    </div>
                </div>
            </section>

            {/* Internal links */}
            <section style={{ padding: '60px 0', background: 'var(--bg-primary)' }}>
                <div className="container">
                    <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '40px', fontSize: '1.6rem' }}>Pair With Our Other Services</h2>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center' }}>
                        <Link to="/services/ai-lead-generation" style={{ padding: '14px 24px', background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)', color: 'var(--text-primary)', textDecoration: 'none', fontSize: '0.95rem' }}>
                            AI Lead Generation →
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
                        <h2 className="section-title">WhatsApp Automation — Common Questions</h2>
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

export default WhatsAppAutomation
