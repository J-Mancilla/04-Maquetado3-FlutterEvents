

import React from 'react'

import './HeroSection.css'
import FillButton from '../Buttons/FillButton'
import LinkButton from '../Buttons/LinkButton'

const HeroSection = () => (
    <section className = 'heroSection'>
        <h1>Flutter 2 is here</h1>
        <p>Catch the highlights of our Keynote in the recap below then dig in to all the new features in our latest release.</p>
        <FillButton text = 'Install Flutter 2' size = 'large' />
        <LinkButton text = 'Learn More' decorated = {true} link = 'https://developers.googleblog.com/2021/03/announcing-flutter-2.html' />
        <iframe width="1080" height="608" src="https://www.youtube.com/embed/IdrCyS7EF8M" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </section>
);


export default HeroSection
