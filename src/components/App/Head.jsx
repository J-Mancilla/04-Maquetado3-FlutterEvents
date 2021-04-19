import React from 'react'

import './Head.css'
import MenuApp from './Menu'
import SocialMedia from '../Social/SocialMedia'

const Head = () => (
    <>
        <section className = 'whiteSection'></section>
        <header className = 'appHeader'>
            <div className = 'logoHead'></div>
            <div className = 'menuHead'>
                <MenuApp  />
                <SocialMedia  />
            </div>
        </header>
    </>
);


export default Head
