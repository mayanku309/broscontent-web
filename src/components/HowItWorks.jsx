import './HowItWorks.css'

const steps = [
    {
        number: '01',
        title: 'Strategy & Positioning',
        description: 'We identify your "money angles" and audit your current gaps to build a plan that converts.'
    },
    {
        number: '02',
        title: 'Content System Design',
        description: 'We deploy our proven frameworks to create content that filters for intent, not just attention.'
    },
    {
        number: '03',
        title: 'Distribution & Pipeline',
        description: 'We publish, iterate, and optimize for inbound conversations. You focus on closing; we focus on filling the calendar.'
    }
]

const HowItWorks = () => {
    return (
        <section id="how-it-works" className="how-it-works">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">A System, Not A Guess.</h2>
                    <p className="section-subtitle">Predictable, professional, and built for scale.</p>
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
