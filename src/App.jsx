import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import ContentMarketingAgency from './pages/ContentMarketingAgency'
import AILeadGeneration from './pages/services/AILeadGeneration'
import WhatsAppAutomation from './pages/services/WhatsAppAutomation'
import AppointmentSystems from './pages/services/AppointmentSystems'
import ContentCreation from './pages/services/ContentCreation'
import BlogIndex from './pages/blog/BlogIndex'
import HowToGetMorePatients from './pages/blog/HowToGetMorePatients'
import ScrollToTop from './components/ScrollToTop'
import './App.css'

function App() {
    return (
        <Router>
            <ScrollToTop />
            <div className="app-container">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/content-marketing-agency" element={<ContentMarketingAgency />} />
                    <Route path="/services/ai-lead-generation" element={<AILeadGeneration />} />
                    <Route path="/services/whatsapp-automation" element={<WhatsAppAutomation />} />
                    <Route path="/services/appointment-systems" element={<AppointmentSystems />} />
                    <Route path="/services/content-creation" element={<ContentCreation />} />
                    <Route path="/blog" element={<BlogIndex />} />
                    <Route path="/blog/how-to-get-more-patients-dental-clinic-india" element={<HowToGetMorePatients />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    )
}

export default App
