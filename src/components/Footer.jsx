import './Footer.css'
import Button from './Button'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-cta">
                        <h2 className="footer-title">Ready to build a content system that actually converts?</h2>
                        <p className="footer-subtitle">Book a strategy audit to identify your content gaps and see exactly how we can build your inbound pipeline.</p>
                        <Button variant="primary" style={{ padding: '16px 32px', fontSize: '1.1rem' }} onClick={() => window.open('https://wa.me/17052029483?text=I%20want%20to%20book%20a%20strategy%20audit', '_blank')}>
                            Book a Strategy Audit
                        </Button>
                    </div>

                    <div className="footer-links">
                        <div className="link-column">
                            <h4>Company</h4>
                            <a href="#about">Why Us</a>
                            <a href="#services">Services</a>
                            <a href="#how-it-works">Process</a>
                        </div>
                        <div className="link-column">
                            <h4>Socials</h4>
                            <a href="https://www.instagram.com/broscontent_/" target="_blank" rel="noopener noreferrer">Instagram</a>
                            <a href="https://www.linkedin.com/in/mayank-raj-13477a284" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p style={{ marginBottom: '10px', opacity: 0.8 }}>BrosContent is not an agency. We are a specialized growth partner for founders who value pipeline over popularity.</p>
                    <p>&copy; {new Date().getFullYear()} BrosContent. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
