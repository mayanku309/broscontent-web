import './Testimonials.css'

const testimonials = [
    {
        quote: "Working with BrosContent improved my DMs from random to qualified leads within 30 days. The system runs itself now.",
        author: "Aman",
        role: "Creator (LinkedIn focus)",
        image: "/aman.jpg", // Placeholder or generic avatar if real one not available yet
        link: "" // Optional if no link provided
    },
    {
        quote: "We used to miss inquiries, but now our WhatsApp system handles everything instantly. It's automated revenue.",
        author: "@sharmas.djsound",
        role: "Event & Sound Business",
        image: "/sharma.jpg",
        link: "https://www.instagram.com/sharmas.djsound/"
    },
    {
        quote: "Implementing the content engine changed our growth trajectory. We are now booking qualified calls directly from our founder's content.",
        author: "@porus_ai",
        role: "AI Tech Company",
        image: "/porus.jpg",
        link: "https://www.instagram.com/porus_ai/"
    },
    {
        quote: "The team understood our vision perfectly. The content quality is top-notch and the results speak for themselves.",
        author: "@officialhemantbharti_",
        role: "Founder & Creator",
        image: "/hemant.jpg",
        link: "https://www.instagram.com/officialhemantbharti_/"
    }
]

const Testimonials = () => {
    return (
        <section id="testimonials" className="testimonials">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Early Collaborators / Field-Tested.</h2>
                    <p className="section-subtitle" style={{ maxWidth: '800px', margin: '0 auto 40px', fontSize: '1.2rem', color: 'var(--gray-text)' }}>
                        We refined our systems with real businesses before opening the doors.
                    </p>
                </div>
                <div className="testimonials-grid">
                    {testimonials.map((t, index) => (
                        <div key={index} className="testimonial-card">
                            <div className="testimonial-content">
                                <p className="testimonial-quote">"{t.quote}"</p>
                            </div>
                            <div className="testimonial-footer">
                                <img src={t.image} alt={t.author} className="testimonial-avatar" />
                                <div className="testimonial-author">
                                    {t.link ? (
                                        <a href={t.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram" style={{ color: '#E1306C' }}><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
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

                    {/* Stat Card 1 */}
                    <div className="testimonial-card" style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                        <h3 style={{ fontSize: '2.5rem', color: 'var(--yellow)', marginBottom: '10px', fontWeight: '800' }}>20+</h3>
                        <p style={{ fontSize: '1.1rem', color: 'var(--black)', fontWeight: '600' }}>Hours Saved Weekly</p>
                        <p style={{ fontSize: '0.9rem', color: 'var(--gray-text)' }}>Through automated workflows</p>
                    </div>

                    {/* Stat Card 2 */}
                    <div className="testimonial-card" style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                        <h3 style={{ fontSize: '2.5rem', color: 'var(--yellow)', marginBottom: '10px', fontWeight: '800' }}>3x</h3>
                        <p style={{ fontSize: '1.1rem', color: 'var(--black)', fontWeight: '600' }}>Lead Quality</p>
                        <p style={{ fontSize: '0.9rem', color: 'var(--gray-text)' }}>Better targeting & intent</p>
                    </div>

                    {/* Stat Card 3 */}
                    <div className="testimonial-card" style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                        <h3 style={{ fontSize: '2.5rem', color: 'var(--yellow)', marginBottom: '10px', fontWeight: '800' }}>100%</h3>
                        <p style={{ fontSize: '1.1rem', color: 'var(--black)', fontWeight: '600' }}>Founder Led</p>
                        <p style={{ fontSize: '0.9rem', color: 'var(--gray-text)' }}>Personal brand authority</p>
                    </div>
                </div>
                <p className="testimonial-disclaimer">Results may vary based on business processes and usage.</p>
            </div>
        </section>
    )
}

export default Testimonials
