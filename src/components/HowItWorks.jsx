import './HowItWorks.css'

const steps = [
    {
        number: '01',
        title: 'Strategy & Positioning',
        description: 'We align your personal brand with your business goals and define your ideal customer profile.'
    },
    {
        number: '02',
        title: 'Build the Content Engine',
        description: 'We create and publish high-authority content that speaks directly to your target audience.'
    },
    {
        number: '03',
        title: 'Convert Attention to Calls',
        description: 'We implement conversion systems to turn readers into leads and qualified booked meetings.'
    },
    {
        number: '04',
        title: 'Optimize for Results',
        description: 'We track revenue-focused metrics like booked calls and pipeline, optimizing for business growth.'
    }
]

const HowItWorks = () => {
    return (
        <section id="how-it-works" className="how-it-works">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">How It Works</h2>
                    <p className="section-subtitle">From positioning to pipeline in 4 steps.</p>
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
