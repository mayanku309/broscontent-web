import './FirstThirtyDays.css'
import Button from './Button'

const offers = [
    {
        title: '30-Day Pilot',
        desc: 'The perfect entry point. We build your strategy and launch your first content system to book initial qualified calls.',
        price: 'Entry Offer'
    },
    {
        title: 'Monthly Retainer',
        desc: 'Full-service growth engine. Ghostwriting, design, publishing, and the complete content-to-demo conversion system.',
        price: 'Most Popular'
    },
    {
        title: 'Fractional Content Growth',
        desc: 'Deep partnership. We embed into your team to lead strategy, execution, and growth sprints for rapid scaling.',
        price: 'Enterprise'
    }
]

const FirstThirtyDays = () => {
    return (
        <section className="first-30-days" id="offers">
            <div className="container">
                <h2 className="section-title">How We Partner</h2>
                <div className="deliverables-grid">
                    {offers.map((item, index) => (
                        <div key={index} className="deliverable-card" style={{ flexDirection: 'column', alignItems: 'flex-start', padding: '32px' }}>
                            <div style={{ textTransform: 'uppercase', fontSize: '0.8rem', color: 'var(--yellow)', fontWeight: 'bold', letterSpacing: '1px', marginBottom: '8px' }}>
                                {item.price}
                            </div>
                            <h3 style={{ fontSize: '1.5rem', color: 'var(--black)', marginBottom: '12px' }}>{item.title}</h3>
                            <p className="deliverable-text" style={{ fontWeight: '400', color: 'var(--gray-text)', lineHeight: '1.6' }}>{item.desc}</p>
                        </div>
                    ))}
                </div>

                <div style={{ marginTop: '60px', textAlign: 'center' }}>
                    <h2 className="section-title">Ready to turn content into conversations?</h2>
                    <Button variant="primary" style={{ padding: '16px 32px', fontSize: '1.1rem' }} onClick={() => window.open('https://wa.me/17052029483?text=hey', '_blank')}>
                        Book a Strategy Call
                    </Button>
                    <p style={{ marginTop: '16px', fontSize: '0.9rem', color: '#666' }}>
                        Limited slots available for this month.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default FirstThirtyDays
