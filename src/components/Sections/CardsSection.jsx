

import React from 'react'

import './CardsSection.css'
import folio from '../../img/01-folio.png'
import upgrade from '../../img/02-upgrade.png'
import ads from '../../img/03-ads.png'

import InfoCard from './InfoCard'

const CardsSection = () => (
    <section className = 'cardsSection'>
        <h3>Start exploring with these big announcements from Flutter Engage</h3>
        <div className = 'cardContainer'>
            {
                infoCards.map(({image, text, link}, index)=>(
                    <InfoCard image = {image} text = {text} link = {link} key = {`cardInfoF${index}`} />
                ))
            }
        </div>
    </section>
)

const infoCards = [
    {
        image: folio,
        text:  'Check out our Flutter folio demo on mobile, web, and desktop',
        link:  'https://flutter.gskinner.com/'
    },
    {
        image: upgrade,
        text:  'Your apps got an upgrade with Flutter on the web',
        link:  'https://medium.com/flutter/whats-new-in-flutter-2-0-fe8e95ecc65'
    },
    {
        image: ads,
        text:  'Start monetizing your apps with the Google Mobile Ads SDK',
        link:  'https://flutter.dev/ads'
    }
]


export default CardsSection
