import './HowItWorks.css'

const steps = [
    {
        number: '01',
        title: 'Strategy & "Money Angles"',
        description: 'We audit your offer and identify the specific angles that will attract buyers, not just viewers.'
    },
    {
        number: '02',
        title: 'The Content Engine',
        description: 'We build the systems to produce high-trust content consistently, without you being on the content hamster wheel.'
    },
    {
        number: '03',
        title: 'Pipeline & Conversion',
        description: 'We distribute focused content that drives traffic to your audit or demo booking page. Attention becomes revenue.'
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
