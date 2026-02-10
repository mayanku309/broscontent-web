import './Navbar.css'
import Button from './Button'

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container navbar-content">
                <div className="logo">
                    <img src="/logo.png" alt="BrosContent" className="logo-image" />
                </div>

                <div className="nav-links">
                    <a href="#services">Services</a>
                    <a href="#how-it-works">Process</a>
                    <a href="#use-cases">For Founders</a>
                    <a href="#offers">Offers</a>
                </div>

                <div className="nav-actions">
                    <Button variant="primary" onClick={() => window.open('https://wa.me/17052029483', '_blank')}>Get Audit</Button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
