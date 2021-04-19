import React from 'react'

import './Involved.css'
import LinkButton from '../Buttons/LinkButton'
import image from '../../img/Flutter_MarketingAssets_Web__0007_GetInvolved.png'

const Involved = () => (
    <section className = 'getInvolvedSection'>
        <div className = 'container'>
            <div>
                <h2>Get involved</h2>
                <h5>RSVP to a community event, share your Dash, and join the conversation.</h5>
                <p>Official hashtag {btn1}</p>
                <p>Follow us on {btn2} on Twitter</p>
                <p>Try the {btn3}</p>
                <p>Check out the {btn4}</p>
                <p>Flutter Questions? Tweet with {btn5}</p>
            </div>
            <img src = {image} alt = 'DashImage'/>
        </div>
    </section>
);

const btn1 = <LinkButton text = '#FlutterEngage' decorated = {true} link = 'https://twitter.com/search?q=%23FlutterEngage' />;
const btn2 = <LinkButton text = '@FlutterDev' decorated = {true} link = 'https://twitter.com/FlutterDev' />;
const btn3 = <LinkButton text = 'Flutter Codelabs' decorated = {true} link = 'https://flutter.dev/docs/codelabs' />;
const btn4 = <LinkButton text = 'Flutter Medium Blog' decorated = {true} link = 'https://medium.com/flutter' />;
const btn5 = <LinkButton text = '#AskFlutter' decorated = {true} link = 'https://twitter.com/search?q=%23AskFlutter' />;



export default Involved
