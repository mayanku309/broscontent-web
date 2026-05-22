import { Link } from 'react-router-dom'
import Button from '../../components/Button'
import '../../components/Hero.css'
import '../../components/Services.css'

const posts = [
    {
        slug: 'how-to-get-more-patients-dental-clinic-india',
        title: 'How to Get More Patients for Your Dental Clinic in India (2026 Guide)',
        excerpt: 'A complete, actionable guide covering Google Business optimisation, WhatsApp automation, local SEO, and AI lead generation — everything an Indian dental clinic needs to fill appointment slots consistently.',
        date: '2026-05-20',
        readTime: '12 min read',
        category: 'Patient Acquisition'
    }
]

const BlogIndex = () => {
    return (
        <div>
            {/* Hero */}
            <section className="hero" style={{ padding: '140px 0 80px' }}>
                <div className="hero-glow hero-glow--left"></div>
                <div className="container hero-content">
                    <div className="hero-trust-badge">
                        <span className="trust-indicator"></span>
                        Dental Marketing Resources
                    </div>
                    <h1 className="hero-title">
                        Dental Marketing Guides<br />
                        <span className="hero-highlight">for Indian Clinic Owners</span>
                    </h1>
                    <p className="hero-subtitle">
                        Practical, no-fluff guides on AI marketing, WhatsApp automation, patient acquisition,
                        and local SEO — written specifically for dental practices in India.
                    </p>
                </div>
            </section>

            {/* Posts */}
            <section style={{ padding: '80px 0', background: 'var(--bg-primary)' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '28px' }}>
                        {posts.map(post => (
                            <Link
                                key={post.slug}
                                to={`/blog/${post.slug}`}
                                style={{ textDecoration: 'none' }}
                            >
                                <article className="service-card" style={{ height: '100%', display: 'flex', flexDirection: 'column', cursor: 'pointer' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                                        <span style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{post.category}</span>
                                        <span style={{ color: 'var(--text-muted)', fontSize: '0.78rem' }}>·</span>
                                        <span style={{ color: 'var(--text-muted)', fontSize: '0.78rem' }}>{post.readTime}</span>
                                    </div>
                                    <h2 className="service-title" style={{ fontSize: '1.15rem', marginBottom: '14px', lineHeight: '1.4' }}>{post.title}</h2>
                                    <p className="service-description" style={{ flex: 1 }}>{post.excerpt}</p>
                                    <div style={{ marginTop: '20px', color: 'var(--accent)', fontSize: '0.9rem', fontWeight: 600 }}>
                                        Read article →
                                    </div>
                                </article>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section style={{ padding: '80px 0', background: 'var(--bg-secondary)', textAlign: 'center' }}>
                <div className="container">
                    <h2 className="section-title" style={{ marginBottom: '20px', fontSize: '1.8rem' }}>Want a Free Audit for Your Clinic?</h2>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '32px', fontSize: '1.05rem' }}>
                        We'll review your current online presence and tell you exactly what's holding you back from more patients.
                    </p>
                    <Button variant="primary" style={{ padding: '16px 36px', fontSize: '1.05rem' }} onClick={() => { window.location.href = '/#audit-form' }}>
                        Get Your Free Practice Audit
                    </Button>
                </div>
            </section>
        </div>
    )
}

export default BlogIndex
