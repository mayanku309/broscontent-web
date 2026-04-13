import './Button.css'

const Button = ({ children, variant = 'primary', onClick, style, type = 'button', disabled = false }) => {
    return (
        <button
            className={`btn btn--${variant}`}
            onClick={onClick}
            style={style}
            type={type}
            disabled={disabled}
        >
            {children}
        </button>
    )
}

export default Button
