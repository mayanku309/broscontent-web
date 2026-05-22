import './Navbar.css'
import Button from './Button'
import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const location = useLocation()

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

    const scrollToSection = (id) => {
        setIsMenuOpen(false)
        if (location.pathname === '/') {
            const el = document.getElementById(id)
            if (el) el.scrollIntoView({ behavior: 'smooth' })
        } else {
            window.location.href = `/#${id}`
        }
    }

    return (
        <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
            <div className="container navbar-content">
                <Link to="/" className="logo" onClick={() => setIsMenuOpen(false)}>
                    <div className="logo-icon">B</div>
                    <span className="logo-text">Bros<span className="logo-accent">Content</span></span>
                </Link>

                <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                    <button className="nav-item" onClick={() => scrollToSection('services')}>Services</button>
                    <button className="nav-item" onClick={() => scrollToSection('how-it-works')}>Process</button>
                    <button className="nav-item" onClick={() => scrollToSection('testimonials')}>Results</button>
                    <button className="nav-item" onClick={() => scrollToSection('faq')}>FAQ</button>
                    <Link className="nav-item" to="/blog" onClick={() => setIsMenuOpen(false)}>Blog</Link>
                    <button className="nav-item" onClick={() => scrollToSection('about')}>About</button>
                    <div className="nav-mobile-cta">
                        <Button variant="primary" onClick={() => scrollToSection('audit-form')}>
                            Free Practice Audit
                        </Button>
                    </div>
                </div>

                <div className="hamburger" onClick={toggleMenu}>
                    <span className={`bar ${isMenuOpen ? 'open' : ''}`}></span>
                    <span className={`bar ${isMenuOpen ? 'open' : ''}`}></span>
                    <span className={`bar ${isMenuOpen ? 'open' : ''}`}></span>
                </div>

                <div className="nav-actions">
                    <Button variant="primary" style={{ padding: '10px 24px', fontSize: '0.875rem' }} onClick={() => scrollToSection('audit-form')}>
                        Free Practice Audit
                    </Button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
