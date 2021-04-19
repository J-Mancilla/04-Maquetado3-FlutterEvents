
import React from 'react'
import PropTypes from 'prop-types'

import './InfoSection.css'

import FillButton from '../Buttons/FillButton'

const InfoSection = ({title, text, textButton, image, direction}) => (
    <section className = 'informationSection'>
        <div className = {`container ${direction}`}>
            <div>
                <h3>{title}</h3>
                <p>{text}</p>
                <FillButton text = {textButton} size = 'small'/>
            </div>
            <img src = {image} alt = 'flutterImage'/>
        </div>
    </section>
)


InfoSection.propTypes = {
    title:      PropTypes.string.isRequired,
    text:       PropTypes.string.isRequired,
    textButton: PropTypes.string.isRequired,
    image:      PropTypes.string.isRequired,
    direction:  PropTypes.string.isRequired
}

export default InfoSection
