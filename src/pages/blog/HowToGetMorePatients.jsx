import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../../components/Button'
import AuditForm from '../../components/AuditForm'
import '../../components/Hero.css'
import '../../components/FAQ.css'

const schema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "headline": "How to Get More Patients for Your Dental Clinic in India (2026 Guide)",
            "description": "A complete guide covering Google Business optimisation, WhatsApp automation, local SEO, AI lead generation, and content strategy for dental clinics in India.",
            "author": {
                "@type": "Organization",
                "name": "BrosContent"
            },
            "publisher": {
                "@type": "Organization",
                "name": "BrosContent",
                "url": "https://www.broscontent.in"
            },
            "datePublished": "2026-05-20",
            "url": "https://www.broscontent.in/blog/how-to-get-more-patients-dental-clinic-india"
        },
        {
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "How can I get more patients for my dental clinic in India?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "To get more patients for a dental clinic in India, start with Google Business Profile optimisation so you rank in local searches, then add WhatsApp automation to capture and follow up with enquiries. Build local SEO through consistent Google reviews and location-specific content. Add online appointment booking so patients can book 24/7. These four actions together typically double monthly new patient enquiries within 60 days."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How much does dental marketing cost in India?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Dental marketing in India costs between ₹15,000 and ₹50,000 per month for a full-service package including lead generation, content creation, and AI automation. Individual services like Google Ads management start at ₹8,000 to ₹12,000 per month plus ad spend. The ROI typically ranges from 3x to 8x when tracked against actual booked appointments."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Is WhatsApp effective for dental clinic marketing in India?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. WhatsApp is the most effective patient communication channel for dental clinics in India because 98% of smartphone users in India are active on WhatsApp daily. Appointment reminders sent via WhatsApp achieve 95%+ open rates compared to 20% for email. Clinics using WhatsApp automation see 60 to 70 percent reductions in no-shows and recover significant revenue from dormant patient reactivation."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How long does it take to see results from dental marketing?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Google Business optimisation and WhatsApp automation show results fastest — typically within 2 to 4 weeks. Local SEO takes 2 to 3 months to show significant ranking improvements. Content marketing builds trust over 3 to 6 months and compounds over time. Running all channels simultaneously produces the fastest return."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What is the best way to increase Google reviews for a dental clinic?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "The best way to increase Google reviews for a dental clinic is to automate the review request via WhatsApp immediately after each appointment. An automated message sent 2 hours post-visit, with a direct link to your Google review page and a simple one-tap button, achieves 20 to 30 percent review conversion rates. This is far more effective than asking in person, where conversion rates rarely exceed 3 to 5 percent."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Do dental clinics need social media marketing?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Social media helps dental clinics build trust and stay top-of-mind with existing patients, but it rarely drives direct bookings on its own. The highest ROI activities for dental clinics are Google Business optimisation and local SEO (for new patient acquisition) and WhatsApp automation (for retaining and reactivating existing patients). Social media is most valuable as a trust-building layer that supports those primary channels."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How do I reduce no-shows at my dental clinic?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "The most effective way to reduce dental clinic no-shows is automated WhatsApp reminders. Send a reminder 24 hours before the appointment and another 2 hours before, each with a one-tap confirm or reschedule button. This removes the friction of patients having to call to cancel and allows them to reschedule easily. Clinics using this system see 60 to 70 percent reductions in no-show rates within the first month."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What keywords should a dental clinic rank for?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Dental clinics should prioritise ranking for location-specific keywords: 'dentist in [city/area]', 'dental clinic near me', and treatment-specific terms like 'teeth whitening [city]', 'root canal [city]', and 'dental implants [city]'. Google Business Profile rankings (the map pack) are more important than organic rankings for local dental searches, since 70% of users click map results over organic links for local service queries."
                    }
                }
            ]
        }
    ]
}

const faqItems = [
    {
        question: "How can I get more patients for my dental clinic in India?",
        answer: "Start with Google Business Profile optimisation so you rank in local searches, then add WhatsApp automation to capture and follow up with enquiries. Build local SEO through consistent Google reviews and location-specific content. Add online appointment booking so patients can book 24/7. These four actions together typically double monthly new patient enquiries within 60 days."
    },
    {
        question: "How much does dental marketing cost in India?",
        answer: "Dental marketing in India costs between ₹15,000 and ₹50,000 per month for a full-service package. Individual services like Google Ads management start at ₹8,000–12,000 per month plus ad spend. ROI typically ranges from 3x to 8x when tracked against actual booked appointments."
    },
    {
        question: "Is WhatsApp effective for dental marketing in India?",
        answer: "Yes. WhatsApp is the most effective patient communication channel in India because 98% of smartphone users are active on it daily. Appointment reminders via WhatsApp achieve 95%+ open rates. Clinics using WhatsApp automation see 60–70% reductions in no-shows and significant revenue from dormant patient reactivation."
    },
    {
        question: "How long does it take to see results from dental marketing?",
        answer: "Google Business optimisation and WhatsApp automation show results within 2 to 4 weeks. Local SEO takes 2 to 3 months for significant ranking improvements. Content marketing builds over 3 to 6 months. Running all channels simultaneously produces the fastest return."
    },
    {
        question: "What is the best way to get more Google reviews for my clinic?",
        answer: "Automate the review request via WhatsApp 2 hours after each appointment, with a direct link to your Google review page. This achieves 20–30% conversion rates, compared to 3–5% when asking in person."
    },
    {
        question: "How do I reduce no-shows at my dental clinic?",
        answer: "Send automated WhatsApp reminders 24 hours and 2 hours before each appointment, each with a one-tap confirm or reschedule button. Clinics using this system see 60–70% reductions in no-show rates within the first month."
    },
    {
        question: "Do dental clinics need social media marketing?",
        answer: "Social media builds trust and keeps you top-of-mind, but rarely drives direct bookings on its own. The highest ROI activities are Google Business optimisation and local SEO for new patients, and WhatsApp automation for existing patient retention. Social is most valuable as a trust layer supporting those primary channels."
    },
    {
        question: "What keywords should a dental clinic rank for?",
        answer: "Prioritise location-specific keywords: 'dentist in [city/area]', 'dental clinic near me', and treatment terms like 'teeth whitening [city]' or 'root canal [city]'. Google Business (map pack) rankings matter more than organic for dental searches — 70% of users click map results over organic links for local service queries."
    }
]

const HowToGetMorePatients = () => {
    const [activeIndex, setActiveIndex] = useState(null)

    useEffect(() => {
        const script = document.createElement('script')
        script.type = 'application/ld+json'
        script.id = 'article-schema'
        script.text = JSON.stringify(schema)
        document.head.appendChild(script)
        return () => { document.getElementById('article-schema')?.remove() }
    }, [])

    const articleStyles = {
        section: { padding: '80px 0' },
        sectionAlt: { padding: '80px 0', background: 'var(--bg-secondary)' },
        prose: { maxWidth: '800px', margin: '0 auto' },
        h2: { fontSize: '1.8rem', fontFamily: 'var(--font-heading)', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '28px', lineHeight: 1.3 },
        h3: { fontSize: '1.25rem', fontFamily: 'var(--font-heading)', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '16px', marginTop: '40px' },
        p: { fontSize: '1.05rem', lineHeight: 1.8, color: 'var(--text-secondary)', marginBottom: '24px' },
        strong: { color: 'var(--accent)' },
        tip: { background: 'var(--bg-card)', border: '1px solid var(--border-accent)', borderRadius: 'var(--radius-md)', padding: '20px 24px', margin: '32px 0' }
    }

    return (
        <div>
            {/* Hero */}
            <section className="hero" style={{ padding: '140px 0 80px' }}>
                <div className="hero-glow hero-glow--left"></div>
                <div className="container hero-content">
                    <div className="hero-trust-badge">
                        <span className="trust-indicator"></span>
                        Patient Acquisition · India · 2026 Guide
                    </div>
                    <h1 className="hero-title" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}>
                        How to Get More Patients for Your<br />
                        <span className="hero-highlight">Dental Clinic in India (2026 Guide)</span>
                    </h1>
                    <p className="hero-subtitle">
                        A complete, actionable guide covering Google Business optimisation, WhatsApp automation,
                        local SEO, and AI lead generation — everything an Indian dental clinic needs to fill
                        appointment slots consistently.
                    </p>
                    <div style={{ display: 'flex', gap: '24px', justifyContent: 'center', marginTop: '32px', flexWrap: 'wrap' }}>
                        <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>By BrosContent · May 2026</span>
                        <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>12 min read</span>
                    </div>
                </div>
            </section>

            {/* Intro */}
            <section style={articleStyles.section}>
                <div className="container">
                    <div style={articleStyles.prose}>
                        <p style={articleStyles.p}>
                            The average Indian dental clinic has 200–400 patient slots per month. Most fill 60–70% of them. That gap — 60 to 160 empty chairs every month — is not a quality problem. Patients who have visited your clinic trust you. The problem is <strong style={articleStyles.strong}>patient acquisition and retention systems</strong>, or the lack of them.
                        </p>
                        <p style={articleStyles.p}>
                            This guide covers the four highest-ROI actions a dental clinic in India can take in 2026 to fill more appointment slots: Google Business optimisation, WhatsApp automation, local SEO, and AI lead generation. Each section gives you enough to understand the strategy and take the first step.
                        </p>
                        <div style={articleStyles.tip}>
                            <strong style={{ color: 'var(--accent)', display: 'block', marginBottom: '8px' }}>Quick Summary</strong>
                            <p style={{ ...articleStyles.p, marginBottom: 0 }}>
                                If you implement all four strategies, most dental clinics see a 2–3x increase in new patient enquiries within 60 days and a 40–60% reduction in no-shows. The total investment is ₹15,000–30,000/month depending on which channels you activate.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Step 1 */}
            <section style={articleStyles.sectionAlt}>
                <div className="container">
                    <div style={articleStyles.prose}>
                        <h2 style={articleStyles.h2}>1. Optimise Your Google Business Profile First</h2>
                        <p style={articleStyles.p}>
                            Google Business Profile (formerly Google My Business) is the single most important digital asset a dental clinic in India can have. When a patient searches "dentist near me" or "dental clinic in [your city]," the map pack — those three highlighted clinic listings with ratings and photos — appears before any organic search results.
                        </p>
                        <p style={articleStyles.p}>
                            70% of users click the map pack results instead of scrolling to organic listings. If your clinic is not in the top 3, you are invisible to the majority of patients who are actively looking for a dentist right now.
                        </p>
                        <h3 style={articleStyles.h3}>What a fully optimised Google Business Profile looks like</h3>
                        <p style={articleStyles.p}>
                            Most dental clinics have a basic GBP: name, phone number, address. That is not enough to compete in 2026. A fully optimised profile includes:
                        </p>
                        <ul style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.8, paddingLeft: '24px', marginBottom: '24px' }}>
                            <li style={{ marginBottom: '10px' }}><strong style={articleStyles.strong}>20+ high-quality photos</strong> — clinic exterior, reception, treatment rooms, doctors, equipment</li>
                            <li style={{ marginBottom: '10px' }}><strong style={articleStyles.strong}>All services listed</strong> — not just "dental clinic" but every service you offer with a description</li>
                            <li style={{ marginBottom: '10px' }}><strong style={articleStyles.strong}>Weekly posts</strong> — Google rewards profiles with regular activity; weekly posts on offers, dental tips, or before/afters signal an active business</li>
                            <li style={{ marginBottom: '10px' }}><strong style={articleStyles.strong}>Answered Q&As</strong> — pre-load 10 common patient questions with answers so Google shows these proactively</li>
                            <li style={{ marginBottom: '10px' }}><strong style={articleStyles.strong}>50+ Google reviews at 4.5+</strong> — rating is the primary factor patients use to choose between clinics</li>
                        </ul>
                        <p style={articleStyles.p}>
                            Getting to 50+ reviews consistently requires automation. A manual request in person converts at 3–5%. An automated WhatsApp message sent 2 hours after the appointment, with a direct review link, converts at 20–30%. See <Link to="/services/whatsapp-automation" style={{ color: 'var(--accent)' }}>WhatsApp automation for dental clinics</Link> for how this works in practice.
                        </p>
                    </div>
                </div>
            </section>

            {/* Step 2 */}
            <section style={articleStyles.section}>
                <div className="container">
                    <div style={articleStyles.prose}>
                        <h2 style={articleStyles.h2}>2. Set Up WhatsApp Automation for Appointment Reminders</h2>
                        <p style={articleStyles.p}>
                            The average Indian dental clinic loses 15–25% of booked appointments to no-shows. At ₹3,000–8,000 per appointment, that is ₹1.5 to 5 lakh of revenue walking out every month. The fix is simple: automated WhatsApp reminders.
                        </p>
                        <p style={articleStyles.p}>
                            WhatsApp is the right channel because 98% of Indian smartphone users check it daily. Appointment reminder messages sent via WhatsApp achieve 95%+ open rates, compared to 20% for SMS and under 10% for email. The combination of high open rates, a one-tap confirm button, and easy rescheduling reduces no-shows by 60–70% in the first month.
                        </p>
                        <h3 style={articleStyles.h3}>The reminder sequence that works</h3>
                        <p style={articleStyles.p}>
                            The optimal sequence for dental appointment reminders:
                        </p>
                        <ul style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.8, paddingLeft: '24px', marginBottom: '24px' }}>
                            <li style={{ marginBottom: '10px' }}><strong style={articleStyles.strong}>Immediate confirmation</strong> — when the appointment is booked: date, time, doctor, address, and a "Add to calendar" link</li>
                            <li style={{ marginBottom: '10px' }}><strong style={articleStyles.strong}>24-hour reminder</strong> — the day before: appointment details with a "Confirm" or "Reschedule" button</li>
                            <li style={{ marginBottom: '10px' }}><strong style={articleStyles.strong}>2-hour reminder</strong> — morning of: a short friendly reminder with clinic address and parking info</li>
                            <li style={{ marginBottom: '10px' }}><strong style={articleStyles.strong}>Post-visit follow-up</strong> — 2 hours after the appointment: a check-in and a Google review request link</li>
                        </ul>
                        <p style={articleStyles.p}>
                            Beyond no-show reduction, <Link to="/services/whatsapp-automation" style={{ color: 'var(--accent)' }}>WhatsApp automation</Link> can reactivate dormant patients — those who haven't visited in 6+ months. Clinics running a single reactivation campaign typically recover ₹3–8 lakh from their existing patient database.
                        </p>
                    </div>
                </div>
            </section>

            {/* Step 3 */}
            <section style={articleStyles.sectionAlt}>
                <div className="container">
                    <div style={articleStyles.prose}>
                        <h2 style={articleStyles.h2}>3. Build Local SEO Authority for Your Clinic</h2>
                        <p style={articleStyles.p}>
                            Local SEO is about making your dental clinic the most credible, visible, and trusted option for patients searching in your area. It takes 2–3 months to build but compounds indefinitely — unlike paid advertising, which stops the moment you stop paying.
                        </p>
                        <h3 style={articleStyles.h3}>The three pillars of dental local SEO in India</h3>
                        <p style={articleStyles.p}>
                            <strong style={articleStyles.strong}>Citation consistency:</strong> Your clinic's name, address, and phone number must be identical across Google Business Profile, Justdial, Sulekha, ClinicSpots, Practo, and every other directory where you are listed. Inconsistencies confuse Google and reduce your local ranking authority.
                        </p>
                        <p style={articleStyles.p}>
                            <strong style={articleStyles.strong}>Location-specific content:</strong> Create content pages targeting "dental clinic in [your area]" and treatment-specific pages for "teeth whitening in [city]", "root canal treatment [city]", etc. Each page should have 600–800 words of genuine helpful content, not keyword stuffing. See <Link to="/services/content-creation" style={{ color: 'var(--accent)' }}>AI content creation for dental clinics</Link> for how we handle this at scale.
                        </p>
                        <p style={articleStyles.p}>
                            <strong style={articleStyles.strong}>Review velocity:</strong> Consistently accumulating new reviews signals to Google that your clinic is active and trusted. Aim for 5–10 new reviews per month. Automated WhatsApp review requests (as described above) make this achievable without manual effort.
                        </p>
                        <h3 style={articleStyles.h3}>Schema markup for AI search visibility</h3>
                        <p style={articleStyles.p}>
                            AI search systems — ChatGPT, Perplexity, Gemini — increasingly answer patient questions directly. When a patient asks "best dental marketing agency for clinics in India" or "dentist in Jaipur who does implants," these systems pull from structured data on websites. Adding JSON-LD schema markup to your site (LocalBusiness, Service, FAQPage) makes your clinic's information machine-readable and increases the chance of being cited in AI answers.
                        </p>
                    </div>
                </div>
            </section>

            {/* Step 4 */}
            <section style={articleStyles.section}>
                <div className="container">
                    <div style={articleStyles.prose}>
                        <h2 style={articleStyles.h2}>4. Add AI Lead Generation to Capture After-Hours Enquiries</h2>
                        <p style={articleStyles.p}>
                            40–60% of dental appointment searches in India happen outside clinic hours — evenings, weekends, and late nights. If a patient can't reach you immediately, they move to the next clinic on Google that responds instantly.
                        </p>
                        <p style={articleStyles.p}>
                            <Link to="/services/ai-lead-generation" style={{ color: 'var(--accent)' }}>AI lead generation for dental clinics</Link> solves this by deploying automated lead capture across every channel — WhatsApp, website, Instagram DMs, Google Business messages — and immediately responding with a personalised message, asking qualifying questions, and guiding the patient toward booking an appointment.
                        </p>
                        <h3 style={articleStyles.h3}>What AI lead generation looks like in practice</h3>
                        <p style={articleStyles.p}>
                            A patient sends a WhatsApp message at 10 PM asking about tooth implant costs. The AI system responds within 30 seconds, asks about their specific situation, provides a price range, and offers to book a consultation the next morning. By the time your receptionist arrives, the appointment is already confirmed.
                        </p>
                        <p style={articleStyles.p}>
                            The qualification step is important. Not every enquiry converts — some are just price-checking. The AI system filters out tyre-kickers and passes only serious leads to your staff, saving hours of receptionist time while ensuring no genuine patient interest goes unaddressed.
                        </p>
                        <p style={articleStyles.p}>
                            Combined with Google Ads targeting high-intent keywords like "root canal treatment Mumbai" or "dental implants cost Bangalore," AI lead generation typically delivers a cost per acquired patient of ₹800–2,500 — compared to ₹4,000–8,000 for traditional advertising.
                        </p>
                    </div>
                </div>
            </section>

            {/* What to do first */}
            <section style={articleStyles.sectionAlt}>
                <div className="container">
                    <div style={articleStyles.prose}>
                        <h2 style={articleStyles.h2}>Where to Start: Priority Order</h2>
                        <p style={articleStyles.p}>
                            If you're implementing from scratch, here is the order that delivers results fastest:
                        </p>
                        <ol style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.8, paddingLeft: '24px', marginBottom: '24px' }}>
                            <li style={{ marginBottom: '16px' }}><strong style={articleStyles.strong}>Week 1–2:</strong> Fully optimise your Google Business Profile (photos, services, Q&As) and activate WhatsApp appointment reminders. These two steps together cut no-shows and improve your local map ranking.</li>
                            <li style={{ marginBottom: '16px' }}><strong style={articleStyles.strong}>Week 3–4:</strong> Launch automated Google review requests via WhatsApp. Aim for 5–10 new reviews in the first month.</li>
                            <li style={{ marginBottom: '16px' }}><strong style={articleStyles.strong}>Month 2:</strong> Start a dormant patient reactivation WhatsApp campaign. Most clinics recover significant revenue from patients who lapsed in the previous 6–12 months.</li>
                            <li style={{ marginBottom: '16px' }}><strong style={articleStyles.strong}>Month 2–3:</strong> Add AI lead capture for after-hours enquiries and consider a targeted Google Ads campaign for your highest-value service keywords.</li>
                            <li style={{ marginBottom: '16px' }}><strong style={articleStyles.strong}>Month 3+:</strong> Publish consistent content for local SEO — treatment pages, FAQ content, and educational posts. This compounds over 3–6 months and eventually becomes your lowest cost-per-patient channel.</li>
                        </ol>
                        <p style={articleStyles.p}>
                            BrosContent runs all of these systems for dental clinics across India. If you'd rather have us implement and manage everything, <Link to="/#audit-form" style={{ color: 'var(--accent)' }}>book a free practice audit</Link> and we'll walk through exactly what's holding your clinic back and what we'd fix first.
                        </p>
                    </div>
                </div>
            </section>

            {/* Internal links */}
            <section style={{ padding: '60px 0', background: 'var(--bg-primary)' }}>
                <div className="container">
                    <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '40px', fontSize: '1.6rem' }}>Explore Our Services</h2>
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
                        <h2 className="section-title">Getting More Dental Patients — Common Questions</h2>
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

export default HowToGetMorePatients
