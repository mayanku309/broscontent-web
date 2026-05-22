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
            "name": "Dental Appointment Automation India",
            "provider": {
                "@type": "Organization",
                "name": "BrosContent",
                "url": "https://www.broscontent.in"
            },
            "areaServed": "India",
            "description": "Automated dental appointment booking and management for Indian dental clinics — online self-booking, WhatsApp confirmations, smart scheduling, and staff time savings through AI-powered practice automation.",
            "url": "https://www.broscontent.in/services/appointment-systems"
        },
        {
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "What is dental appointment automation?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Dental appointment automation is a system that allows patients to book, confirm, cancel, or reschedule appointments online or via WhatsApp — without calling the clinic. The system automatically sends confirmations, reminders, and post-visit follow-ups, freeing your receptionist from repetitive phone calls."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How does online appointment booking increase patient volume?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Online appointment booking increases patient volume because 40 to 60 percent of dental appointment searches happen outside clinic hours — evenings and weekends. When patients can book instantly online or via WhatsApp at 10 PM, they book with you instead of calling a competitor the next morning."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Will I need to replace my current clinic management software?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "No. We integrate with your existing clinic management software or appointment system. If you currently manage appointments in a spreadsheet or WhatsApp group, we build a lightweight automation layer on top — you keep your existing workflow but appointments get automated reminders and follow-ups."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How much staff time does appointment automation save?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Dental clinics using our appointment automation save 2 to 4 hours of receptionist time per day. Tasks eliminated include manually calling patients for reminders, confirming appointments, handling rescheduling requests, and chasing patients for treatment follow-ups."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Can the system handle appointment rescheduling automatically?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. Patients can reschedule by replying to the WhatsApp reminder with a single tap. The system shows available slots, confirms the new time, and updates your calendar automatically. This reduces the administrative burden on your receptionist and prevents double-bookings."
                    }
                }
            ]
        }
    ]
}

const faqItems = [
    {
        question: "What is dental appointment automation?",
        answer: "Dental appointment automation lets patients book, confirm, cancel, or reschedule online or via WhatsApp — without calling the clinic. The system automatically sends confirmations, reminders, and post-visit follow-ups, freeing your receptionist from repetitive phone calls."
    },
    {
        question: "How does online booking increase patient volume?",
        answer: "Online booking increases patient volume because 40–60% of dental appointment searches happen outside clinic hours — evenings and weekends. When patients can book instantly at 10 PM, they choose you instead of calling a competitor the next morning."
    },
    {
        question: "Will I need to replace my current clinic management software?",
        answer: "No. We integrate with your existing system. If you manage appointments in a spreadsheet or WhatsApp group, we build an automation layer on top — you keep your workflow but appointments get automated reminders and follow-ups."
    },
    {
        question: "How much staff time does automation save?",
        answer: "Dental clinics using our automation save 2 to 4 hours of receptionist time per day — time previously spent manually calling patients for reminders, confirming appointments, and handling rescheduling requests."
    },
    {
        question: "Can it handle rescheduling automatically?",
        answer: "Yes. Patients reschedule by replying to the WhatsApp reminder with a single tap. The system shows available slots, confirms the new time, and updates your calendar automatically — preventing double-bookings with zero staff involvement."
    }
]

const AppointmentSystems = () => {
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
                        Dental Appointment Automation · India
                    </div>
                    <h1 className="hero-title">
                        Dental Appointment Automation That<br />
                        <span className="hero-highlight">Books Patients While You Sleep</span>
                    </h1>
                    <p className="hero-subtitle">
                        Let patients book, confirm, and reschedule 24/7 — online or on WhatsApp. Your receptionist handles
                        clinical work; the system handles scheduling, reminders, and follow-ups automatically.
                    </p>
                    <div className="hero-actions">
                        <Button variant="primary" style={{ padding: '16px 36px', fontSize: '1.05rem' }} onClick={scrollToAudit}>
                            Automate Your Appointment Booking
                        </Button>
                    </div>
                    <div className="hero-stats" style={{ marginTop: '48px' }}>
                        <div className="hero-stat"><span className="hero-stat-number">24/7</span><span className="hero-stat-label">Online booking availability</span></div>
                        <div className="hero-stat"><span className="hero-stat-number">4 hrs</span><span className="hero-stat-label">Daily staff time saved</span></div>
                        <div className="hero-stat"><span className="hero-stat-number">40%</span><span className="hero-stat-label">More new patient bookings</span></div>
                    </div>
                </div>
            </section>

            {/* Problem */}
            <section style={{ padding: '80px 0', background: 'var(--bg-secondary)' }}>
                <div className="container">
                    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <h2 className="section-title" style={{ marginBottom: '32px' }}>Your Clinic Is Losing Patients After Hours Every Single Night</h2>
                        <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-secondary)', marginBottom: '24px' }}>
                            A patient has a toothache at 9 PM. They search for a dentist, find your clinic, and want to book. But your phone goes to voicemail and your website has no online booking. So they move to the next clinic on Google that does accept late-night bookings — and you never knew that patient existed.
                        </p>
                        <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-secondary)', marginBottom: '24px' }}>
                            Research consistently shows that 40–60% of dental appointment-related searches happen outside standard clinic hours. Without <strong style={{ color: 'var(--accent)' }}>dental appointment automation</strong>, you are invisible to nearly half your potential patients.
                        </p>
                        <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-secondary)' }}>
                            Beyond lost new patients, your receptionist spends hours every day on reminder calls, rescheduling requests, and follow-up chases that could all be automated. That is time that could go toward actual patient care and revenue-generating activities.
                        </p>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section style={{ padding: '80px 0', background: 'var(--bg-primary)' }}>
                <div className="container">
                    <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '56px' }}>What Our Appointment Automation System Includes</h2>
                    <div className="services-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '28px' }}>
                        <div className="service-card">
                            <div className="service-icon">📅</div>
                            <h3 className="service-title">24/7 Online Booking</h3>
                            <p className="service-description">Patients can book an appointment any time — from your Google Business Profile, website, Instagram bio, or WhatsApp link. The system shows real available slots, collects the patient's details, and confirms instantly. No phone call required.</p>
                        </div>
                        <div className="service-card">
                            <div className="service-icon">✅</div>
                            <h3 className="service-title">Automatic Confirmations</h3>
                            <p className="service-description">The moment a patient books, they receive a WhatsApp confirmation with appointment details, clinic address, and directions. For new patients, we include what to bring and a welcome message from your clinic. Arrival rates increase by 40%.</p>
                        </div>
                        <div className="service-card">
                            <div className="service-icon">🔔</div>
                            <h3 className="service-title">Smart Reminder Sequences</h3>
                            <p className="service-description">Automated reminders go out 48 hours, 24 hours, and 2 hours before each appointment. Each reminder includes a one-tap confirm or reschedule button. This sequence alone cuts no-show rates by 60–70% in the first month of operation.</p>
                        </div>
                        <div className="service-card">
                            <div className="service-icon">🔄</div>
                            <h3 className="service-title">Self-Service Rescheduling</h3>
                            <p className="service-description">When a patient cannot make their appointment, they tap "Reschedule" in the WhatsApp message. The system shows the next 5 available slots, they pick one, and your calendar updates automatically. Your receptionist never needs to get involved.</p>
                        </div>
                        <div className="service-card">
                            <div className="service-icon">📊</div>
                            <h3 className="service-title">Waitlist Management</h3>
                            <p className="service-description">When a cancellation happens, the system automatically messages patients on your waitlist about the open slot. Clinics that previously had 20% utilisation gaps routinely fill 80%+ of cancellations within 2 hours using this feature.</p>
                        </div>
                        <div className="service-card">
                            <div className="service-icon">📈</div>
                            <h3 className="service-title">Booking Analytics Dashboard</h3>
                            <p className="service-description">A simple dashboard shows your booking volume, show-up rate, most popular appointment times, and revenue recovered from the waitlist. You always know which days need promotion and which slots are under-utilised.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Staff impact */}
            <section style={{ padding: '80px 0', background: 'var(--bg-secondary)' }}>
                <div className="container">
                    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <h2 className="section-title" style={{ marginBottom: '32px' }}>What Your Receptionist Stops Doing</h2>
                        <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-secondary)', marginBottom: '24px' }}>
                            The typical dental receptionist spends 2–4 hours a day on appointment-related phone calls — reminders, confirmations, rescheduling, and follow-ups. That is 40–80 hours a month of labour cost going into tasks that can be fully automated.
                        </p>
                        <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-secondary)', marginBottom: '24px' }}>
                            With our appointment automation in place, your receptionist's role shifts toward higher-value work: welcoming patients when they arrive, handling complex clinical queries, and focusing on the in-clinic experience that drives reviews and word-of-mouth.
                        </p>
                        <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-secondary)' }}>
                            This is not about replacing your staff — it is about giving them back the hours that the phone was stealing.
                        </p>
                    </div>
                </div>
            </section>

            {/* Internal links */}
            <section style={{ padding: '60px 0', background: 'var(--bg-primary)' }}>
                <div className="container">
                    <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '40px', fontSize: '1.6rem' }}>Complete Your Automation Stack</h2>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center' }}>
                        <Link to="/services/ai-lead-generation" style={{ padding: '14px 24px', background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)', color: 'var(--text-primary)', textDecoration: 'none', fontSize: '0.95rem' }}>
                            AI Lead Generation →
                        </Link>
                        <Link to="/services/whatsapp-automation" style={{ padding: '14px 24px', background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)', color: 'var(--text-primary)', textDecoration: 'none', fontSize: '0.95rem' }}>
                            WhatsApp Automation →
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
                        <h2 className="section-title">Appointment Automation — Common Questions</h2>
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

export default AppointmentSystems
