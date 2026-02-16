import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import ContentMarketingAgency from './pages/ContentMarketingAgency'
import './App.css'
import ScrollToTop from './components/ScrollToTop'

function App() {
    return (
        <Router>
            <ScrollToTop />
            <div className="app-container">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/content-marketing-agency" element={<ContentMarketingAgency />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    )
}

export default App
