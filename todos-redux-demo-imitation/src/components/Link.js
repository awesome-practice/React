import React from 'react'
import PropTypes from 'prop-types'

const Link = ({onClick, active, children}) => {
    if (active) {
        return (<span>{children}</span>)
    }
    return (
        // eslint-disable-next-line
        <a href="#" onClick={e => {
            e.preventDefault();
            onClick();
        }}>
            {children}
        </a>)
};
Link.propTypes = {
    onClick: PropTypes.func.isRequired,
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired
}

export default Link