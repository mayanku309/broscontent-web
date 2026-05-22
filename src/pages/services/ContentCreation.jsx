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
            "name": "AI Content Creation for Dental Clinics India",
            "provider": {
                "@type": "Organization",
                "name": "BrosContent",
                "url": "https://www.broscontent.in"
            },
            "areaServed": "India",
            "description": "AI-assisted dental content creation for Indian clinics — educational social media posts, Instagram reels scripts, Google Business content, treatment explainers, and patient trust-building content that converts followers into booked appointments.",
            "url": "https://www.broscontent.in/services/content-creation"
        },
        {
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "What kind of content does BrosContent create for dental clinics?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "BrosContent creates dental-specific social media posts, Instagram Reels scripts, educational carousels, before-and-after treatment showcases, patient testimonial formats, Google Business posts, and treatment explainer content — all designed specifically for dental practices in India and calibrated to build patient trust."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How is AI used in dental content creation?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "AI is used to research trending dental topics, identify the content formats your target patients engage with most, generate first drafts for review, and optimise captions for local SEO keywords. Human dental marketing specialists then edit every piece to ensure clinical accuracy and brand voice before delivery."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How many posts do we get per month?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Our content packages include 12 to 20 social media posts per month, 4 to 8 Reels scripts, 4 Google Business posts, and a monthly email or WhatsApp newsletter for your existing patient base. The exact volume depends on your package tier."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Does the content actually bring in new patients?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Content alone rarely brings immediate bookings — but it does two critical things. First, it builds trust: patients who see consistent, educational content from your clinic are far more likely to book and refer others. Second, it supports your SEO and Google Business ranking, which drives direct bookings. We combine content with lead capture so every post has a path to an appointment."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Do you post the content on our behalf?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. We can manage full posting — scheduling and publishing on Instagram, Facebook, and Google Business — or deliver a monthly content calendar for your team to post. Most clinics prefer we handle posting so the clinic owner and doctors do not need to think about social media at all."
                    }
                }
            ]
        }
    ]
}

const faqItems = [
    {
        question: "What kind of content do you create for dental clinics?",
        answer: "Dental-specific social media posts, Instagram Reels scripts, educational carousels, before-and-after treatment showcases, patient testimonial formats, Google Business posts, and treatment explainer content — all calibrated to build patient trust and convert followers into bookings."
    },
    {
        question: "How is AI used in dental content creation?",
        answer: "AI researches trending dental topics, identifies content formats your target patients engage with most, and generates first drafts. Human dental marketing specialists then edit every piece for clinical accuracy and brand voice before delivery."
    },
    {
        question: "How many posts do we get per month?",
        answer: "Our packages include 12 to 20 social media posts per month, 4 to 8 Reels scripts, 4 Google Business posts, and a monthly patient newsletter. The exact volume depends on your package tier."
    },
    {
        question: "Does content actually bring in new patients?",
        answer: "Content builds patient trust and supports your SEO ranking, which drives direct bookings. Patients who see consistent educational content are far more likely to book and refer others. We pair every content piece with a clear path to an appointment."
    },
    {
        question: "Do you post the content on our behalf?",
        answer: "Yes. We can manage full posting on Instagram, Facebook, and Google Business, or deliver a monthly calendar for your team to post. Most clinics prefer we handle posting so doctors don't need to think about social media."
    }
]

const ContentCreation = () => {
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
                        AI Content Creation · Dental Clinics India
                    </div>
                    <h1 className="hero-title">
                        AI Content Creation That Turns<br />
                        <span className="hero-highlight">Dental Patients Into Loyal Advocates</span>
                    </h1>
                    <p className="hero-subtitle">
                        Stop posting generic health quotes. We create dental-specific content — educational posts,
                        Reels scripts, treatment explainers, and patient stories — that builds trust and converts
                        your social following into a steady stream of booked appointments.
                    </p>
                    <div className="hero-actions">
                        <Button variant="primary" style={{ padding: '16px 36px', fontSize: '1.05rem' }} onClick={scrollToAudit}>
                            Get Your Free Content Audit
                        </Button>
                    </div>
                    <div className="hero-stats" style={{ marginTop: '48px' }}>
                        <div className="hero-stat"><span className="hero-stat-number">20+</span><span className="hero-stat-label">Posts per month</span></div>
                        <div className="hero-stat"><span className="hero-stat-number">100%</span><span className="hero-stat-label">Dental-specific content</span></div>
                        <div className="hero-stat"><span className="hero-stat-number">0</span><span className="hero-stat-label">Hours of your time required</span></div>
                    </div>
                </div>
            </section>

            {/* Problem */}
            <section style={{ padding: '80px 0', background: 'var(--bg-secondary)' }}>
                <div className="container">
                    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <h2 className="section-title" style={{ marginBottom: '32px' }}>Why Generic Content Fails Dental Clinics</h2>
                        <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-secondary)', marginBottom: '24px' }}>
                            Most dental clinics either have no social media presence, or they post generic "World Smile Day" graphics and toothbrush tips copied from a template pack. This content gets ignored by the algorithm and, more importantly, doesn't persuade a patient to book an appointment.
                        </p>
                        <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-secondary)', marginBottom: '24px' }}>
                            Dental patients are making a trust-based decision. Before they book, they want to know: Does this dentist understand my problem? Are they good at what they do? Are other patients like me happy? <strong style={{ color: 'var(--accent)' }}>AI content for dental clinics</strong> answers those questions before the patient ever calls you.
                        </p>
                        <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-secondary)' }}>
                            We don't create content for the sake of posting. Every piece is designed to move a potential patient one step closer to booking — by educating them, building credibility, and making your clinic the obvious choice in your area.
                        </p>
                    </div>
                </div>
            </section>

            {/* Content Types */}
            <section style={{ padding: '80px 0', background: 'var(--bg-primary)' }}>
                <div className="container">
                    <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '56px' }}>What We Create for Your Dental Clinic</h2>
                    <div className="services-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '28px' }}>
                        <div className="service-card">
                            <div className="service-icon">🎬</div>
                            <h3 className="service-title">Instagram Reels Scripts</h3>
                            <p className="service-description">Short-form video is the fastest way to build a local audience in India. We write Reels scripts for your doctors to film — patient FAQs, treatment explainers, day-in-the-clinic content — and provide a shot-by-shot guide so filming takes under 10 minutes.</p>
                        </div>
                        <div className="service-card">
                            <div className="service-icon">📸</div>
                            <h3 className="service-title">Before & After Showcases</h3>
                            <p className="service-description">Before-and-after posts consistently drive the highest engagement and direct bookings for dental clinics. We create professionally formatted showcase content with treatment context, patient outcomes, and a clear call-to-action to book a consultation.</p>
                        </div>
                        <div className="service-card">
                            <div className="service-icon">📋</div>
                            <h3 className="service-title">Educational Carousels</h3>
                            <p className="service-description">Multi-slide Instagram posts explaining dental procedures, debunking myths ("Root canals are painful"), and answering common patient questions. Educational carousels are shared by patients to family and friends — free referral marketing.</p>
                        </div>
                        <div className="service-card">
                            <div className="service-icon">💬</div>
                            <h3 className="service-title">Patient Testimonial Content</h3>
                            <p className="service-description">We create testimonial content formats — designed for patients to easily share their experience — and provide scripts for collecting authentic patient stories. Real patient voices in dental marketing outperform any promotional content by a factor of 5–10x.</p>
                        </div>
                        <div className="service-card">
                            <div className="service-icon">🔍</div>
                            <h3 className="service-title">Google Business Posts</h3>
                            <p className="service-description">Weekly Google Business posts that target local keywords, announce offers, and highlight services. Regular Google Business posting improves your local search ranking and ensures your profile stays active in Google's eyes — directly impacting your "dentist near me" visibility.</p>
                        </div>
                        <div className="service-card">
                            <div className="service-icon">📧</div>
                            <h3 className="service-title">Patient Newsletter</h3>
                            <p className="service-description">A monthly WhatsApp or email newsletter for your existing patient base — oral health tips, seasonal reminders (pre-Diwali smile whitening, post-Holi check-ups), and exclusive offers. Patient newsletters deliver the highest ROI of any content format for dental clinics.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process */}
            <section style={{ padding: '80px 0', background: 'var(--bg-secondary)' }}>
                <div className="container">
                    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <h2 className="section-title" style={{ marginBottom: '32px' }}>Zero Time Required From Your Doctors</h2>
                        <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-secondary)', marginBottom: '24px' }}>
                            We know you went to dental college to treat patients, not to manage a content calendar. Our process requires minimal input from you — an onboarding call to capture your voice and preferences, and occasional photo sharing via WhatsApp.
                        </p>
                        <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-secondary)', marginBottom: '24px' }}>
                            We research trending dental topics in your city, write all content, create graphics, and deliver a ready-to-approve content calendar every month. You review, approve, and we handle posting on all platforms. Total time from you: under 30 minutes a month.
                        </p>
                        <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-secondary)' }}>
                            All content is reviewed by our dental marketing specialists before delivery — we never publish anything that is clinically inaccurate or that could create a compliance issue for your practice.
                        </p>
                    </div>
                </div>
            </section>

            {/* Internal links */}
            <section style={{ padding: '60px 0', background: 'var(--bg-primary)' }}>
                <div className="container">
                    <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '40px', fontSize: '1.6rem' }}>Pair Content With Patient Acquisition</h2>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center' }}>
                        <Link to="/services/ai-lead-generation" style={{ padding: '14px 24px', background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)', color: 'var(--text-primary)', textDecoration: 'none', fontSize: '0.95rem' }}>
                            AI Lead Generation →
                        </Link>
                        <Link to="/services/whatsapp-automation" style={{ padding: '14px 24px', background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)', color: 'var(--text-primary)', textDecoration: 'none', fontSize: '0.95rem' }}>
                            WhatsApp Automation →
                        </Link>
                        <Link to="/services/appointment-systems" style={{ padding: '14px 24px', background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)', color: 'var(--text-primary)', textDecoration: 'none', fontSize: '0.95rem' }}>
                            Appointment Systems →
                        </Link>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="faq" style={{ padding: '80px 0' }}>
                <div className="container">
                    <div className="section-header">
                        <div className="section-label"><span className="label-line"></span>FAQ</div>
                        <h2 className="section-title">Dental Content Creation — Common Questions</h2>
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

export default ContentCreation
