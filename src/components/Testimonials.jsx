import './Testimonials.css'

const testimonials = [
    {
        quote: "I was posting daily but getting zero leads. The 'Authority System' fixed my positioning in week one. Now, my DMs are filled with qualified buyers, not just curious followers.",
        author: "Aman",
        role: "Founder, Ghostwriting Agency (Early Partner)",
        image: "/aman.jpg",
        link: ""
    },
    {
        quote: "We run a busy event business and couldn't keep up with content. BrosContent built a workflow that brings us event inquiries on autopilot. It just works.",
        author: "@sharmas.djsound",
        role: "Owner, Event Production (Test User)",
        image: "/sharma.jpg",
        link: "https://www.instagram.com/sharmas.djsound/"
    },
    {
        quote: "We needed to validate our B2B angle without a massive ad budget. This content engine generated our first 10 inbound demo calls from LinkedIn organic.",
        author: "@porus_ai",
        role: "Co-Founder, AI SaaS (Early Partner)",
        image: "/porus.jpg",
        link: "https://www.instagram.com/porus_ai/"
    },
    {
        quote: "I didn't want to sound like a generic 'influencer'. They nailed my voice and built a system that positions me as an expert, not just a creator.",
        author: "@officialhemantbharti_",
        role: "Video Coach & Creator (Test User)",
        image: "/hemant.jpg",
        link: "https://www.instagram.com/officialhemantbharti_/"
    }
]

const Testimonials = () => {
    return (
        <section id="testimonials" className="testimonials">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Field-Tested with Real Founders.</h2>
                    <p className="section-subtitle" style={{ maxWidth: '700px', margin: '0 auto 60px', fontSize: '1.2rem', color: 'var(--gray-text)', lineHeight: '1.6' }}>
                        We refined our systems with these early partners before ever opening the doors to the public.
                    </p>
                </div>
                <div className="testimonials-grid">
                    {testimonials.map((t, index) => (
                        <div key={index} className="testimonial-card">
                            <div className="testimonial-content">
                                <p className="testimonial-quote">"{t.quote}"</p>
                            </div>
                            <div className="testimonial-footer">
                                <div className="testimonial-avatar-placeholder">
                                    {t.author[0].toUpperCase().replace('@', '')}
                                </div>
                                <div className="testimonial-author">
                                    {t.link ? (
                                        <a href={t.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}>
                                            <h4 style={{ cursor: 'pointer', color: 'var(--black)', margin: 0 }}>{t.author}</h4>
                                        </a>
                                    ) : (
                                        <h4>{t.author}</h4>
                                    )}
                                    <p>{t.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="transparency-note">
                    <strong>Transparency:</strong> These results are from our early test cohort. We believe in building systems that work before selling them.
                </div>
            </div>
        </section>
    )
}

export default Testimonials
