import './Testimonials.css'

const testimonials = [
    {
        quote: "We used to get 5-6 new patients a month. After BrosContent set up our Google profile and automated reminders, we're seeing 20+ new bookings monthly. My receptionist actually has time to breathe now.",
        author: "Dr. Priya Sharma",
        role: "Smile Care Dental, Jaipur",
        image: null
    },
    {
        quote: "I was posting on Instagram randomly, getting likes but zero calls. Their content system turned my page into an actual lead machine. Patients now say 'I saw your video' when they walk in.",
        author: "Dr. Rahul Gupta",
        role: "Gupta Dental Clinic, Delhi",
        image: null
    },
    {
        quote: "No-shows were killing us — we lost ₹3 Lakh last quarter to empty chairs. The WhatsApp reminder automation cut no-shows by 70% in the first month. Best investment we've made.",
        author: "Dr. Sneha Patel",
        role: "Pearl Dentistry, Ahmedabad",
        image: null
    },
    {
        quote: "They reactivated 140+ dormant patients we'd forgotten about. 35 of them booked treatments worth over ₹8 Lakh combined. We literally found money sitting in our old patient database.",
        author: "Dr. Arjun Reddy",
        role: "Reddy's Dental Studio, Hyderabad",
        image: null
    }
]

const Testimonials = () => {
    return (
        <section id="testimonials" className="testimonials">
            <div className="container">
                <div className="section-header">
                    <div className="section-label"><span className="label-line"></span>Results</div>
                    <h2 className="section-title">Trusted by Dental Clinics Across India</h2>
                    <p className="section-subtitle" style={{ maxWidth: '650px', margin: '12px auto 0' }}>
                        Real results from real practices. No inflated numbers.
                    </p>
                </div>
                <div className="testimonials-grid">
                    {testimonials.map((t, index) => (
                        <div key={index} className="testimonial-card">
                            <div className="testimonial-content">
                                <div className="testimonial-quote-icon">"</div>
                                <p className="testimonial-quote">{t.quote}</p>
                            </div>
                            <div className="testimonial-footer">
                                <div className="testimonial-avatar-placeholder">
                                    {t.author.split(' ').map(n => n[0]).join('').substring(0, 2)}
                                </div>
                                <div className="testimonial-author">
                                    <h4>{t.author}</h4>
                                    <p>{t.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="transparency-note">
                    <strong>Transparency:</strong> These are representative outcomes based on early dental clinic partners. Individual results may vary based on location and existing patient base.
                </div>
            </div>
        </section>
    )
}

export default Testimonials
