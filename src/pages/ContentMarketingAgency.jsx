import '../components/Hero.css'
import '../components/Positioning.css'
import '../components/Services.css'
import '../components/HowItWorks.css'
import Button from '../components/Button'

const ContentMarketingAgency = () => {
    return (
        <div className="content-marketing-agency-page">
            {/* Hero Section */}
            <section className="hero" style={{ padding: '120px 0 80px' }}>
                <div className="container hero-content">
                    <div className="hero-trust-badge">
                        <span className="trust-indicator"></span>
                        Performance-Driven Content Marketing Agency
                    </div>
                    <h1 className="hero-title">
                        A Content Marketing Agency That Actually Drives Revenue.
                    </h1>
                    <p className="hero-subtitle">
                        Stop treating content like a guessing game. We build high-converting content marketing systems that turn attention into qualified pipeline for B2B brands and founders.
                    </p>
                    <div className="hero-actions">
                        <Button variant="primary" style={{ padding: '16px 32px', fontSize: '1.1rem' }} onClick={() => window.open('https://wa.me/17052029483?text=I%20want%20to%20book%20a%20strategy%20audit', '_blank')}>
                            Book a Strategy Audit
                        </Button>
                    </div>
                </div>
            </section>

            {/* Introduction / Problem */}
            <section className="positioning" style={{ padding: '80px 0', backgroundColor: '#fff' }}>
                <div className="container">
                    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <h2 className="section-title" style={{ marginBottom: '40px' }}>Most Content Marketing Agencies Fail You.</h2>
                        <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--gray-text)', marginBottom: '32px' }}>
                            They focus on "brand awareness," "impressions," and "viral reach." But you can't deposit views in the bank. As a performance-driven <strong>content marketing agency</strong>, we focus on one metric: <strong>Revenue.</strong>
                        </p>
                        <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--gray-text)' }}>
                            We don't just create noise. We build strategic assets that educate your buyers, handle objections before the sales call, and position you as the only logical choice in your market.
                        </p>
                    </div>
                </div>
            </section>

            {/* Services / Approach */}
            <section className="services" style={{ padding: '80px 0', backgroundColor: '#fafafa' }}>
                <div className="container">
                    <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '60px' }}>Our Content Marketing Framework</h2>

                    <div className="services-grid" style={{ gridTemplateColumns: '1fr', maxWidth: '800px', margin: '0 auto', gap: '40px' }}>
                        {/* Phase 1 */}
                        <div className="service-card">
                            <h3 className="service-title" style={{ fontSize: '1.5rem', marginBottom: '16px' }}>1. Content Marketing Strategy & Positioning</h3>
                            <p className="service-description">
                                We start by auditing your offer and market. We identify the "money angles"—the specific topics and pain points that your highest-value clients care about. We don't guess; we engineer a <strong>content marketing strategy</strong> based on buyer intent.
                            </p>
                        </div>

                        {/* Phase 2 */}
                        <div className="service-card">
                            <h3 className="service-title" style={{ fontSize: '1.5rem', marginBottom: '16px' }}>2. High-Converting Content Execution</h3>
                            <p className="service-description">
                                Our team handles the entire production workflow. From LinkedIn thought leadership to SEO-driven articles (if applicable) and visual assets. We create <strong>high-converting content</strong> that stops the scroll and starts the conversation.
                            </p>
                        </div>

                        {/* Phase 3 */}
                        <div className="service-card">
                            <h3 className="service-title" style={{ fontSize: '1.5rem', marginBottom: '16px' }}>3. Distribution & Revenue Attribution</h3>
                            <p className="service-description">
                                Content is useless if the right people don't see it. We distribute your content where your buyers hang out and track the results. We optimize based on what drives booked calls, not just likes.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SEO Content Section */}
            <section className="how-it-works" style={{ padding: '80px 0', backgroundColor: '#fff' }}>
                <div className="container">
                    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <h2 className="section-title" style={{ fontSize: '2rem', marginBottom: '40px' }}>Why Work With BrosContent?</h2>

                        <div style={{ marginBottom: '40px' }}>
                            <h3 style={{ fontSize: '1.4rem', marginBottom: '16px' }}>We Are More Than Just Writers</h3>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: 'var(--gray-text)' }}>
                                Traditional agencies employ junior copywriters who don't understand business. We are founders and growth marketers. We understand unit economics, sales cycles, and positioning. Our <strong>content marketing agency</strong> acts as a strategic partner to your leadership team.
                            </p>
                        </div>

                        <div style={{ marginBottom: '40px' }}>
                            <h3 style={{ fontSize: '1.4rem', marginBottom: '16px' }}>Systems Over Random Acts of Content</h3>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: 'var(--gray-text)' }}>
                                We build scalable <strong>content systems</strong>. This means you get a predictable output of high-quality assets every week, without having to manage freelancers or chase deadlines. We handle the operations; you reap the rewards (authority & leads).
                            </p>
                        </div>
                    </div>

                    <div style={{ marginTop: '60px', textAlign: 'center' }}>
                        <h3 style={{ marginBottom: '24px' }}>Ready to Scale Your Revenue?</h3>
                        <Button variant="primary" style={{ padding: '16px 32px', fontSize: '1.1rem' }} onClick={() => window.open('https://wa.me/17052029483?text=I%20want%20to%20book%20a%20strategy%20audit', '_blank')}>
                            Book a Strategy Audit
                        </Button>
                        <p style={{ fontSize: '0.9rem', color: 'var(--gray-text)', marginTop: '12px', fontStyle: 'italic' }}>
                            100% free. No obligation.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ContentMarketingAgency
