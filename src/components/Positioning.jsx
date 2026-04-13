import './Positioning.css'

const Positioning = () => {
    return (
        <section className="positioning">
            <div className="container">
                <div className="section-header" style={{ marginBottom: '60px' }}>
                    <div className="section-label"><span className="label-line"></span>The Problem</div>
                    <h2 className="section-title">Your Clinic Is Losing Patients Every Day.</h2>
                    <p className="section-subtitle" style={{ maxWidth: '650px', margin: '12px auto 0' }}>
                        Most dental practices in India struggle with the same broken cycle. Here's the shift we create.
                    </p>
                </div>
                <div className="positioning-content">
                    <div className="positioning-block problem">
                        <h3 className="positioning-label">The Reality</h3>
                        <div className="positioning-text">
                            <p className="highlight-text">The "Empty Chair" Problem</p>
                            <ul>
                                <li>Patients search "dentist near me" — and book with your competitor who shows up first.</li>
                                <li>Your staff wastes 2+ hours daily calling patients for appointment confirmations.</li>
                                <li>You have no system to bring back patients who haven't visited in 6+ months.</li>
                                <li><strong>Result:</strong> You're leaving ₹2-5 Lakh/month on the table in missed appointments alone.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="positioning-divider"></div>
                    <div className="positioning-block solution">
                        <h3 className="positioning-label highlight">Our Solution</h3>
                        <div className="positioning-text">
                            <p className="highlight-text">AI-Powered Practice Growth</p>
                            <ul>
                                <li>Show up #1 on Google when patients search for dental services in your area.</li>
                                <li>AI sends appointment reminders, follow-ups, and review requests — automatically.</li>
                                <li>Dormant patients get reactivated with personalized WhatsApp campaigns.</li>
                                <li><strong>Result:</strong> Full appointment books, zero staff burnout, and predictable growth.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Positioning
