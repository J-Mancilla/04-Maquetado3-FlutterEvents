

import React from 'react'
import PropTypes from 'prop-types'

import './FillButton.css'

const FillButton = ({text, size}) => (
    <div className = {`fillButton ${size}`}>
        {text}
    </div>
)

FillButton.propTypes = {
    text: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired
}

export default FillButton
