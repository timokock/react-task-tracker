import PropTypes from 'prop-types'
import Button from './Button'

export const Header = ({ title, onClick, showAdd }) => {



    return (
        <header className="header">
            <h1>{title}</h1>
            <Button color={showAdd ? "darkred" : "green"} text={showAdd ? "Close" : "Add"} onClick={onClick}/>
        </header>
    )
}

Header.defaultProps = {
    title: "Task Tracker"
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}