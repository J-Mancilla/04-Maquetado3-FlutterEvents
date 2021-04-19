
import React from 'react'
import PropTypes from 'prop-types'
import LinkButton from '../Buttons/LinkButton'

import './InfoCard.css'

const InfoCard = ({text, image, link}) => {
    return (
        <div className = 'infoCard'>
            <img src = {image} alt = 'DashImage'/>
            <h4>{text}</h4>
            <LinkButton text = 'Get Started' link = {link} />
        </div>
    )
}

InfoCard.propTypes = {
    text:  PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    link:  PropTypes.string.isRequired
}

export default InfoCard
