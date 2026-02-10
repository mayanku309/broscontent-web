import './About.css'

const About = () => {
    return (
        <section id="about" className="about">
            <div className="container about-container">
                <h2 className="section-title">Why Founders Trust Us</h2>
                <div className="about-content">
                    <div className="problem-statement" style={{ marginBottom: '40px' }}>
                        <p className="about-text" style={{ fontWeight: '600', fontSize: '1.4rem', marginBottom: '20px' }}>
                            Why BrosContent?
                        </p>
                        <p className="about-text">
                            I started BrosContent because I was tired of seeing founders get ripped off by "experts" who had never sold a thing in their life. I believe that <strong>marketing should make money. Period.</strong>
                        </p>
                        <p className="about-text" style={{ marginTop: '20px' }}>
                            We aren't a giant agency with 500 employees. And that's your advantage. When you work with us, you get <em>obsessive</em> attention. You get speed. You get honesty. We are building our reputation on <strong>your results</strong>, which means we can't afford to fail you.
                        </p>
                    </div>

                    {/* Removed 3-Pillar Approach as it is covered in Services/Positioning */}

                    <div className="founder-signature">
                        <h4 className="founder-name">Mayank Raj Singh</h4>
                        <p className="founder-title">CEO & Founder, BrosContent</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
