import { useState } from 'react'
import './FAQ.css'

const faqData = [
    {
        question: "How fast will I see results?",
        answer: "We focus on quick wins. While brand building is a long-term game, our conversion systems are designed to start generating qualified conversations within the first 30-45 days."
    },
    {
        question: "Is this strictly done-for-you?",
        answer: "Yes. We handle the heavy lifting—strategy, scripting, editing, and publishing. Your involvement is focused on high-level approval and, where needed, recording raw video (which we guide you through)."
    },
    {
        question: "Who is this NOT for?",
        answer: "This is NOT for people looking for a \"get rich quick\" scheme or those unwilling to invest in quality. If you have a weak offer or no proven product-market fit, we aren't the right fix. We amplify what works."
    },
    {
        question: "What is the investment?",
        answer: "We are a premium strategic partner, not a budget freelance marketplace. Our packages are designed for businesses generating revenue who are ready to scale. Book a call to discuss the best tier for your goals."
    },
    {
        question: "Do you offer guarantees?",
        answer: "We guarantee our work quality and the implementation of our systems. While we cannot legally promise specific revenue numbers (markets vary), we work on a performance-basis for select long-term partners after the initial term."
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
