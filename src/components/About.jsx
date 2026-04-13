import './About.css'

const About = () => {
    return (
        <section id="about" className="about">
            <div className="container about-container">
                <div className="section-header">
                    <div className="section-label"><span className="label-line"></span>About Us</div>
                    <h2 className="section-title">Why Dentists Trust BrosContent</h2>
                </div>
                <div className="about-content">
                    <div className="about-text-block">
                        <p className="about-lead">
                            We're not a generic marketing agency that works with everyone.
                        </p>
                        <p className="about-text">
                            BrosContent was built specifically for dental clinics in India. We understand the unique challenges you face — from competing with the clinic down the road to dealing with no-shows that cost you lakhs every year. We've studied what works in dental marketing, and we've built systems around it.
                        </p>
                        <p className="about-text">
                            Our AI-powered automations aren't theoretical. They're running right now in clinics across Jaipur, Delhi, Hyderabad, and Ahmedabad — filling appointment books, sending reminders, and reactivating dormant patients. We don't promise "brand awareness." We deliver <strong>booked appointments</strong>.
                        </p>
                        <p className="about-text">
                            When you work with us, you get obsessive attention. You get speed. You get honesty. We are building our reputation on <strong>your results</strong>, which means we can't afford to fail you.
                        </p>
                    </div>

                    <div className="founder-signature">
                        <h4 className="founder-name">Mayank Raj Singh</h4>
                        <p className="founder-title">Founder, BrosContent</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
