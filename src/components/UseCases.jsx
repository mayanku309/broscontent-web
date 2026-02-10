import './UseCases.css'
import Button from './Button'

const whoItsFor = [
    {
        title: 'Founders & Co-Founders',
        description: 'Establish authority and drive inbound leads without spending hours on content creation.',
    },
    {
        title: 'Consultants & Fractional Leaders',
        description: 'Turn your expertise into a consistent client acquisition channel.',
    },
    {
        title: 'B2B SaaS & Service Businesses',
        description: 'Build a scalable organic growth engine that reduces reliance on paid ads.',
    },
    {
        title: 'High-Ticket Offers (€2k+)',
        description: 'Perfect for businesses where trust and authority are the primary drivers of sales.',
    }
]

const UseCases = () => {
    return (
        <section id="use-cases" className="use-cases">
            <div className="container">
                <h2 className="section-title">Is This For You?</h2>
                <div className="use-cases-grid">
                    {whoItsFor.map((item, index) => (
                        <div key={index} className="use-case-card">
                            <h4 className="use-case-title">{item.title}</h4>
                            <p className="use-case-desc">{item.description}</p>
                        </div>
                    ))}
                </div>

                <div style={{ marginTop: '60px', textAlign: 'center', opacity: 0.9 }}>
                    <h4 style={{ marginBottom: '20px', color: 'var(--black)', fontSize: '1.2rem' }}>Who It's NOT For</h4>
                    <p style={{ color: 'var(--gray-text)', maxWidth: '600px', margin: '0 auto', fontSize: '1rem' }}>
                        We are not for influencers chasing fame, low-ticket dropshippers, or anyone looking for "viral hacks." We build systems for revenue.
                    </p>
                    <div style={{ marginTop: '40px' }}>
                        <Button variant="primary" style={{ padding: '16px 32px', fontSize: '1.1rem' }} onClick={() => window.open('https://wa.me/17052029483?text=I%20want%20to%20book%20a%20strategy%20audit', '_blank')}>
                            Book Your Strategy Audit
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default UseCases
