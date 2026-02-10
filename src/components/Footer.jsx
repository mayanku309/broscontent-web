import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand hidden-brand">
                        <img src="/logo.png" alt="BrosContent" className="footer-logo-image" />
                        <p className="footer-tagline">Building smarter systems for modern businesses.</p>
                    </div>

                    <div className="footer-links">
                        <div className="link-column">
                            <h4>Company</h4>
                            <a href="#about">Why Us</a>
                            <a href="#services">Services</a>
                            <a href="#how-it-works">Process</a>
                            <a href="#offers">Offers</a>
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
                    <p>&copy; {new Date().getFullYear()} BrosContent. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
