import { useState, useEffect } from 'react'
import './ExitIntent.css'
import Button from './Button'

const ExitIntent = () => {
    const [show, setShow] = useState(false)
    const [dismissed, setDismissed] = useState(false)

    useEffect(() => {
        // Don't show if already dismissed this session
        if (sessionStorage.getItem('exitIntentDismissed')) return

        const handleMouseLeave = (e) => {
            if (e.clientY <= 5 && !dismissed) {
                setShow(true)
            }
        }

        // Also show after 45 seconds of inactivity
        const timeout = setTimeout(() => {
            if (!dismissed && !sessionStorage.getItem('exitIntentDismissed')) {
                setShow(true)
            }
        }, 45000)

        document.addEventListener('mouseleave', handleMouseLeave)

        return () => {
            document.removeEventListener('mouseleave', handleMouseLeave)
            clearTimeout(timeout)
        }
    }, [dismissed])

    const handleDismiss = () => {
        setShow(false)
        setDismissed(true)
        sessionStorage.setItem('exitIntentDismissed', 'true')
    }

    const handleCTA = () => {
        handleDismiss()
        const el = document.getElementById('audit-form')
        if (el) el.scrollIntoView({ behavior: 'smooth' })
    }

    if (!show) return null

    return (
        <div className="exit-overlay" onClick={handleDismiss}>
            <div className="exit-modal" onClick={(e) => e.stopPropagation()}>
                <button className="exit-close" onClick={handleDismiss}>×</button>
                <div className="exit-icon">🦷</div>
                <h2 className="exit-title">Wait — Don't Leave Empty-Handed</h2>
                <p className="exit-text">
                    Get a <strong>free practice growth audit</strong> before you go.
                    We'll show you exactly how many patients you're losing online
                    — and how to fix it in 30 days.
                </p>
                <Button variant="primary" style={{ width: '100%', padding: '16px', fontSize: '1rem' }} onClick={handleCTA}>
                    Get My Free Audit →
                </Button>
                <button className="exit-dismiss" onClick={handleDismiss}>
                    No thanks, I have enough patients
                </button>
            </div>
        </div>
    )
}

export default ExitIntent
