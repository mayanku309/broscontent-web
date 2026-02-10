import './About.css'

const About = () => {
    return (
        <section id="about" className="about">
            <div className="container about-container">
                <h2 className="section-title">Why Founders Trust Us</h2>
                <div className="about-content">
                    <div className="problem-statement" style={{ marginBottom: '40px' }}>
                        <p className="about-text" style={{ fontWeight: '600' }}>
                            Most founders are told to "just post content," but they never get leads.
                        </p>
                        <p className="about-text">
                            Agencies often focus on vanity metrics like visibility and likes, ignoring what matters most: revenue. Founders want inbound demos, not just followers. BrosContent bridges this gap by building systems that actually convert.
                        </p>
                    </div>

                    <div className="differentiation-pillars" style={{ textAlign: 'left', marginTop: '20px' }}>
                        <h3 style={{ marginBottom: '20px', textAlign: 'center' }}>Our 3-Pillar Approach</h3>
                        <div style={{ marginBottom: '20px' }}>
                            <h4 style={{ color: 'var(--black)', marginBottom: '5px' }}>1. Founder-Led Authority</h4>
                            <p style={{ color: 'var(--gray-text)' }}>We position you as the expert using strong narratives and platform-native content that resonates.</p>
                        </div>
                        <div style={{ marginBottom: '20px' }}>
                            <h4 style={{ color: 'var(--black)', marginBottom: '5px' }}>2. Done-For-You Content Engine</h4>
                            <p style={{ color: 'var(--gray-text)' }}>Ghostwriting, visual design, and publishing — we handle the heavy lifting so you don't have to be a full-time creator.</p>
                        </div>
                        <div style={{ marginBottom: '20px' }}>
                            <h4 style={{ color: 'var(--black)', marginBottom: '5px' }}>3. Content → Demo Conversion System</h4>
                            <p style={{ color: 'var(--gray-text)' }}>We build the flows (CTAs, DMs, calendar booking) that turn passive engagement into real sales conversations.</p>
                        </div>
                    </div>

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
