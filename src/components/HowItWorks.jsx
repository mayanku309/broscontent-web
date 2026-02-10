import './HowItWorks.css'

const steps = [
    {
        number: '01',
        title: 'The Audit (Real Talk)',
        description: 'We look at what you’re doing and tell you honestly what’s working and what’s wasting money. No sugar-coating.'
    },
    {
        number: '02',
        title: 'The Build',
        description: 'We design your system, workflows, and visual identity using frameworks that have actually worked for us.'
    },
    {
        number: '03',
        title: 'The Sprint',
        description: 'We execute, publish, and test. We iterate based on market feedback to find your winning message fast.'
    },
    {
        number: '04',
        title: 'The Scale',
        description: 'Once we have data on what drives revenue, we double down to maximize your ROI.'
    }
]

const HowItWorks = () => {
    return (
        <section id="how-it-works" className="how-it-works">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Simple. Transparent. Effective.</h2>
                    <p className="section-subtitle">Our process to build your content machine.</p>
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
