import './Positioning.css'

const Positioning = () => {
    return (
        <section className="positioning">
            <div className="container">
                <div className="section-header" style={{ marginBottom: '60px' }}>
                    <h2 className="section-title">Growth Built on Truth.</h2>
                    <p className="section-subtitle" style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.2rem', color: 'var(--gray-text)' }}>
                        Most founders are stuck playing a game they can't win. Here is the shift.
                    </p>
                </div>
                <div className="positioning-content">
                    <div className="positioning-block problem">
                        <h3 className="positioning-label">The Reality</h3>
                        <div className="positioning-text">
                            <p className="highlight-text">The "Content Hamster Wheel"</p>
                            <ul>
                                <li>You post randomly, hoping for a "viral" hit that never converts.</li>
                                <li>You hire cheap agencies who focus on vanity metrics (likes/views).</li>
                                <li><strong>Result:</strong> You have attention, but zero predictable pipeline.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="positioning-divider"></div>
                    <div className="positioning-block solution">
                        <h3 className="positioning-label highlight">Our Promise</h3>
                        <div className="positioning-text">
                            <p className="highlight-text">A Predictable Revenue Engine</p>
                            <ul>
                                <li>We build systems that turn your expertise into authority assets.</li>
                                <li>Content designed for <strong>buyer intent</strong>, not just algorithm attention.</li>
                                <li><strong>Result:</strong> Qualified inbound leads who are ready to buy.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Positioning
