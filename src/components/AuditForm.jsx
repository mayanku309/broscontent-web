import { useState } from 'react'
import './AuditForm.css'
import Button from './Button'

const AuditForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        clinicName: '',
        phone: '',
        email: '',
        city: '',
        challenge: ''
    })
    const [submitted, setSubmitted] = useState(false)
    const [loading, setLoading] = useState(false)

    const challenges = [
        'Not enough new patients',
        'Too many no-shows',
        'No online presence / bad reviews',
        'Staff wasting time on follow-ups',
        'Competitors getting all the patients',
        'Want to automate appointment reminders',
        'Other'
    ]

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)

        // Build WhatsApp message with form data
        const message = encodeURIComponent(
            `🦷 NEW PRACTICE AUDIT REQUEST\n\n` +
            `👤 Name: ${formData.name}\n` +
            `🏥 Clinic: ${formData.clinicName}\n` +
            `📞 Phone: ${formData.phone}\n` +
            `📧 Email: ${formData.email}\n` +
            `📍 City: ${formData.city}\n` +
            `⚡ Challenge: ${formData.challenge}\n\n` +
            `Sent from broscontent.in`
        )

        // Open WhatsApp with pre-filled message
        window.open(`https://wa.me/17052029483?text=${message}`, '_blank')

        setLoading(false)
        setSubmitted(true)
    }

    if (submitted) {
        return (
            <section id="audit-form" className="audit-form-section">
                <div className="container">
                    <div className="audit-form-card audit-form-card--success">
                        <div className="success-icon">✅</div>
                        <h2>We've Received Your Request!</h2>
                        <p>A WhatsApp message was opened with your details. Send it to confirm your free audit. We'll review your practice and get back within 24 hours with a personalized action plan.</p>
                        <Button variant="primary" onClick={() => setSubmitted(false)}>
                            Submit Another Request
                        </Button>
                    </div>
                </div>
            </section>
        )
    }

    return (
        <section id="audit-form" className="audit-form-section">
            <div className="audit-glow"></div>
            <div className="container">
                <div className="audit-form-wrapper">
                    <div className="audit-form-info">
                        <div className="section-label"><span className="label-line"></span>Free Audit</div>
                        <h2 className="audit-form-title">
                            Get Your Free<br />
                            <span className="audit-highlight">Practice Growth Audit</span>
                        </h2>
                        <p className="audit-form-text">
                            We'll analyze your clinic's online presence, patient flow,
                            and automation opportunities — then give you a clear action plan
                            with specific recommendations.
                        </p>
                        <div className="audit-perks">
                            <div className="audit-perk">
                                <span className="perk-icon">🔍</span>
                                <span>Complete online presence review</span>
                            </div>
                            <div className="audit-perk">
                                <span className="perk-icon">📊</span>
                                <span>Patient acquisition gap analysis</span>
                            </div>
                            <div className="audit-perk">
                                <span className="perk-icon">🤖</span>
                                <span>Custom automation recommendations</span>
                            </div>
                            <div className="audit-perk">
                                <span className="perk-icon">🚫</span>
                                <span>No sales pitch — just honest insights</span>
                            </div>
                        </div>
                    </div>

                    <div className="audit-form-card">
                        <h3 className="form-card-title">Request Your Free Audit</h3>
                        <p className="form-card-subtitle">Takes 2 minutes. Results within 24 hours.</p>
                        <form onSubmit={handleSubmit}>
                            <div className="form-row">
                                <div className="form-group">
                                    <label>Your Name *</label>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Dr. Priya Sharma"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Clinic Name *</label>
                                    <input
                                        type="text"
                                        name="clinicName"
                                        placeholder="Smile Care Dental"
                                        value={formData.clinicName}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group">
                                    <label>Phone / WhatsApp *</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder="+91 98765 43210"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="doctor@clinic.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <label>City *</label>
                                <input
                                    type="text"
                                    name="city"
                                    placeholder="Jaipur, Delhi, Mumbai..."
                                    value={formData.city}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>Biggest Challenge *</label>
                                <select
                                    name="challenge"
                                    value={formData.challenge}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">Select your biggest challenge...</option>
                                    {challenges.map((c, i) => (
                                        <option key={i} value={c}>{c}</option>
                                    ))}
                                </select>
                            </div>
                            <Button
                                type="submit"
                                variant="primary"
                                disabled={loading}
                                style={{ width: '100%', padding: '16px', fontSize: '1rem', marginTop: '8px' }}
                            >
                                {loading ? 'Submitting...' : 'Get My Free Audit →'}
                            </Button>
                            <p className="form-disclaimer">
                                100% free. No spam. We'll reach out via WhatsApp within 24 hours.
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AuditForm
