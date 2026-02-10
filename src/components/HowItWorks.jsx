import './HowItWorks.css'

const steps = [
    {
        number: '01',
        title: 'Deep Dive & Strategy',
        description: 'We audit your offer and audience to identify the "money angles" that drive the highest conversions.'
    },
    {
        number: '02',
        title: 'System Deployment',
        description: 'We build your content engine, visual identity, and rapid-testing protocols to validate messaging immediately.'
    },
    {
        number: '03',
        title: 'Authority & Traction',
        description: 'We launch high-impact content targeting your ICP to build immediate trust and separate you from the noise.'
    },
    {
        number: '04',
        title: 'Scale & Convert',
        description: 'We analyze data, double down on winning formats, and optimize backend funnels to turn attention into booked appointments.'
    }
]

const HowItWorks = () => {
    return (
        <section id="how-it-works" className="how-it-works">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">From "Unknown" to "Unignorable"</h2>
                    <p className="section-subtitle">A predictable process to build your content machine.</p>
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
