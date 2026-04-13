import { useState } from 'react'
import './FAQ.css'

const faqData = [
    {
        question: "Is this only for dental clinics?",
        answer: "Yes. We specialize exclusively in dental practices across India. This means our systems, templates, and automations are built specifically for how dental clinics operate — appointment scheduling, treatment follow-ups, review management, and patient reactivation. No generic marketing here."
    },
    {
        question: "How quickly will I see new patients?",
        answer: "Most clinics see measurable results within 30-45 days. Google Business optimization and automated reminders show impact fastest. Content-driven leads build over 60-90 days as your online authority grows. We'll set realistic expectations during your free audit."
    },
    {
        question: "What if I already have a website and social media?",
        answer: "Great — we build on what you have. We'll audit your existing presence and plug in automations where they'll have the most impact. Most clinics already have the foundation; they just need the systems to convert visitors into booked patients."
    },
    {
        question: "How much does it cost?",
        answer: "Our packages start at ₹15,000/month for basic automation and go up to ₹50,000/month for full-service (lead gen + content + AI automation). Every rupee is tied to measurable outcomes. Book a free audit and we'll recommend the right tier for your practice size."
    },
    {
        question: "Do I need to be tech-savvy?",
        answer: "Not at all. We handle all the technical setup. You and your staff just need WhatsApp and a phone. We'll train your receptionist in one 30-minute session. If they can send a text message, they can use our system."
    },
    {
        question: "What makes you different from other marketing agencies?",
        answer: "Three things: (1) We ONLY work with dental clinics, so we understand your business deeply. (2) We use AI automation, not just 'posting content and hoping.' (3) We track booked appointments, not likes and views. Your ROI is measured in patients, not impressions."
    }
]

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null)

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index)
    }

    return (
        <section id="faq" className="faq">
            <div className="container">
                <div className="section-header">
                    <div className="section-label"><span className="label-line"></span>FAQ</div>
                    <h2 className="section-title">Questions Dentists Ask Us</h2>
                </div>
                <div className="faq-grid">
                    {faqData.map((item, index) => (
                        <div key={index} className={`faq-item ${activeIndex === index ? 'active' : ''}`} onClick={() => toggleFAQ(index)}>
                            <div className="faq-question">
                                <h3>{item.question}</h3>
                                <span className="faq-icon">{activeIndex === index ? '−' : '+'}</span>
                            </div>
                            <div className="faq-answer">
                                <p>{item.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default FAQ
