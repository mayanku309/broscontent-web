import { useState } from 'react'
import './FAQ.css'

const faqData = [
    {
        question: "Are you a new agency?",
        answer: "Yes, and that is your biggest advantage. We aren't bloated with overhead or distracted by hundreds of clients. You get premium attention, faster execution, and a team that is hungry to prove itself."
    },
    {
        question: "How quickly will I see results?",
        answer: "We don't promise overnight magic. Content is an asset that builds. However, our systems are designed to start generating conversations in the first 30-45 days."
    },
    {
        question: "What if it doesn't work?",
        answer: "We work in 30-day sprints. We don't lock you into 12-month handcuffs. If we don't deliver value, you can leave. It's that simple. We fight to keep you every single month."
    },
    {
        question: "Who is this NOT for?",
        answer: "If you want millions of fake views, cheap bot followers, or are looking for a 'get rich quick' scheme, we are not for you. We work with serious builders."
    },
    {
        question: "What is the investment?",
        answer: "We are a premium specialized partner. Our packages are designed for businesses generating revenue who are ready to scale. Book a call to discuss the best tier for your goals."
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
                <h2 className="section-title">Frequently Asked Questions</h2>
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
