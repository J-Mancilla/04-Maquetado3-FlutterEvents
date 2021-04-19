
import React from 'react'
import PropTypes from 'prop-types'

import './LinkButton.css'

const LinkButton = ({text, decorated, link, size}) =>{
    const cssClass = decorated ? 'btnDecorated' : '';
    return (
        <a className = {`linkButton ${cssClass} ${size}`} href = {link}>
            {text}
        </a>
    )
} 


LinkButton.propTypes = {
    text:      PropTypes.string.isRequired,
    link:      PropTypes.string.isRequired,
    decorated: PropTypes.bool,
    size:      PropTypes.string
}

export default LinkButton
