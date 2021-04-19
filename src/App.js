import React from 'react';

import Head from './components/App/Head'
import CardsSection from './components/Sections/CardsSection';
import HeroSection from './components/Sections/HeroSection'
import InfoSection from './components/Sections/InfoSection.jsx'
import Involved from './components/Sections/Involved'
import Foot from './components/App/Foot'

import img1 from './img/ondemand-hero.png'
import img2 from './img/Flutter_MarketingAssets_Web__0008_ExperienceWithFriends.png'

function App() {
  return (
    <>
      <Head  />
      <HeroSection  />
      <CardsSection  />
      {
        infoSections.map(({title, text, textButton, image, direction}, index)=>(
          <InfoSection title = {title} text = {text} textButton = {textButton} image = {image} direction = {direction}  key = {`sectionInfF${index}`}  />
        ))
      }
      <Involved  />
      <Foot  />
    </>
  );
}

const infoSections = [
  {
    title:      'On Demand',
    text:       'Relive every moment of Flutter Engage from the keynote to breakout sessions and community talks - on demand.',
    textButton: 'Watch Now',
    image:      img1,
    direction:  'left'

  },
  {
    title:      'Flutter Engage Extended',
    text:       'Meet developers, designers, and other community members at regional events from around the world.',
    textButton: 'Join an event',
    image:      img2,
    direction:  'right'

  }
]

export default App;
