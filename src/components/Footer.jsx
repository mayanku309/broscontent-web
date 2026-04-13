import './Footer.css'
import Button from './Button'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-cta">
                        <h2 className="footer-title">Your Next Patient Is Searching Right Now.</h2>
                        <p className="footer-subtitle">Stop losing them to the clinic down the road. Let's build an AI-powered system that fills your chairs — on autopilot.</p>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px', marginTop: '32px' }}>
                            <Button variant="primary" style={{ padding: '16px 32px', fontSize: '1.05rem' }} onClick={() => document.getElementById('audit-form').scrollIntoView({ behavior: 'smooth' })}>
                                Get Your Free Practice Audit
                            </Button>
                            <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)', margin: 0 }}>
                                15 minutes. Zero cost. Actionable insights.
                            </p>
                        </div>
                    </div>

                    <div className="footer-links">
                        <div className="link-column">
                            <h4>Services</h4>
                            <button onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}>Patient Lead Gen</button>
                            <button onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}>Dental Content</button>
                            <button onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}>AI Automation</button>
                            <button onClick={() => document.getElementById('how-it-works').scrollIntoView({ behavior: 'smooth' })}>How It Works</button>
                        </div>
                        <div className="link-column">
                            <h4>Connect</h4>
                            <a href="https://www.instagram.com/broscontent_/" target="_blank" rel="noopener noreferrer">Instagram</a>
                            <a href="https://www.linkedin.com/in/mayank-raj-13477a284" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                            <a href="https://wa.me/17052029483" target="_blank" rel="noopener noreferrer">WhatsApp</a>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p style={{ marginBottom: '8px', opacity: 0.7 }}>BrosContent is a specialized AI growth partner for dental clinics across India.</p>
                    <p>&copy; {new Date().getFullYear()} BrosContent. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
