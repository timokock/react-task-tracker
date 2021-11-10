import PropTypes from 'prop-types'

const Button = ({ color, text, onClick }) => {
    return <button 
                onClick={onClick} 
                className="btn" 
                style={{backgroundColor: color}}>
                {text}
            </button>
}

Button.defaultProps ={
    color: "steelblue",
    onClick: () => alert("Please, implement onClick function!")
}

Button.propTypes = {
    color: PropTypes.string,
    text: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button