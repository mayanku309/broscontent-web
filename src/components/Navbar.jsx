import './Navbar.css'
import Button from './Button'
import { useState } from 'react'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <nav className="navbar">
            <div className="container navbar-content">
                <a href="/" className="logo">
                    <img src="/logo.png" alt="BrosContent" className="logo-image" />
                </a>

                <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                    <a href="/content-marketing-agency" className="nav-item" onClick={() => setIsMenuOpen(false)}>Content Marketing Agency</a>
                    <a href="/#services" className="nav-item" onClick={() => setIsMenuOpen(false)}>Systems</a>
                    <a href="/#how-it-works" className="nav-item" onClick={() => setIsMenuOpen(false)}>Process</a>
                    <a href="/#testimonials" className="nav-item" onClick={() => setIsMenuOpen(false)}>Results</a>
                    <a href="/#faq" className="nav-item" onClick={() => setIsMenuOpen(false)}>FAQ</a>
                    <a href="/#about" className="nav-item" onClick={() => setIsMenuOpen(false)}>About</a>
                </div>

                <div className="hamburger" onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>

                <div className="nav-actions">
                    <Button variant="primary" style={{ padding: '10px 20px', fontSize: '0.9rem' }} onClick={() => window.open('https://wa.me/17052029483', '_blank')}>
                        Get Audit
                    </Button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
