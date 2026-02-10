import './About.css'

const About = () => {
    return (
        <section id="about" className="about">
            <div className="container about-container">
                <h2 className="section-title">Why Founders Trust Us</h2>
                <div className="about-content">
                    <div className="problem-statement" style={{ marginBottom: '40px' }}>
                        <p className="about-text" style={{ fontWeight: '600', fontSize: '1.4rem', marginBottom: '20px' }}>
                            Your Partner in Profit.
                        </p>
                        <p className="about-text">
                            BrosContent exists because we were tired of seeing brilliant founders get ignored. We watched incredible businesses fail to grow because their "marketing experts" were obsessed with vanity metrics. They celebrated viral videos that brought in zero dollars. That's broken.
                        </p>
                        <p className="about-text" style={{ marginTop: '20px' }}>
                            We believe content is a financial asset. It should perform. It should yield returns. We don't do 'trends' unless they pay. We don't do 'cute'. We do <strong>conversion</strong>. We are here to make you the undisputed authority in your space and put money in your bank account.
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
