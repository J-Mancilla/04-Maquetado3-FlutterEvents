

import React from 'react'

import logoMono from '../../img/flutter-mono-81x100.png'
import './Foot.css'
import LinkButton from '../Buttons/LinkButton'

const Foot = () => (
    <footer>
        <img src = {logoMono} alt = "logoFlutter" />
        <div className = 'flutterComps'>
            <div>
                {
                    links.map(({text, link}, index) => (
                        <>
                            <LinkButton text = {text} link = {link} decorated = {true} size = 'small' />
                            {index<links.length-1 ? <p>•</p> : <></>}
                        </>
                    ))
                }
            </div>
            <p className = 'licenses'>Except as otherwise noted, this work is licensed under a Creative Commons Attribution 4.0 International License, and code samples are licensed under the BSD License.</p>
        </div>
    </footer>
);

const links = [
    { text: 'flutter-dev@', link: 'https://groups.google.com/forum/#!forum/flutter-dev' },
    { text: 'terms', link: 'https://flutter.dev/tos' },
    { text: 'brand usage', link: 'https://flutter.dev/brand' },
    { text: 'security', link: 'https://flutter.dev/security' },
    { text: 'privacity', link: 'https://www.google.com/intl/en/policies/privacy' },
    { text: 'We stand in solidarity with the Black community. Black Lives Matter.', link: 'https://blog.google/inside-google/company-announcements/standing-with-black-community' }
]


export default Foot
