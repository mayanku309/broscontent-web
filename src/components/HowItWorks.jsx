import './HowItWorks.css'

const steps = [
    {
        number: '01',
        title: 'Free Practice Audit',
        description: 'We analyze your clinic\'s online presence, patient flow, and automation gaps. You get a clear report showing exactly where you\'re losing patients — and how to fix it.'
    },
    {
        number: '02',
        title: 'Custom Automation Setup',
        description: 'We build your AI-powered system: automated appointment reminders, lead capture from Google & social media, and WhatsApp follow-up sequences — tailored to your clinic.'
    },
    {
        number: '03',
        title: 'Patients On Autopilot',
        description: 'Your systems go live. New patients find you online, book automatically, get reminded before appointments, and leave reviews afterward. Your staff focuses on care, not calls.'
    }
]

const HowItWorks = () => {
    return (
        <section id="how-it-works" className="how-it-works">
            <div className="container">
                <div className="section-header">
                    <div className="section-label"><span className="label-line"></span>How It Works</div>
                    <h2 className="section-title">From Empty Chairs to Full Books in 3 Steps</h2>
                    <p className="section-subtitle" style={{ maxWidth: '600px', margin: '12px auto 0' }}>
                        We handle everything. You focus on treating patients.
                    </p>
                </div>

                <div className="steps-grid">
                    {steps.map((step, index) => (
                        <div key={index} className="step-card">
                            <div className="step-number">{step.number}</div>
                            <h3 className="step-title">{step.title}</h3>
                            <p className="step-description">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default HowItWorks
