import React from 'react'

import './Menu.css'

const MenuApp = () => (
    <div className = 'menuAppF'>
        {
            elements.map((element, index) => (
                <div className = 'button' key = {`menuElement${index}`}>{element}</div>
            ))
        }
    </div>
);

const elements = ['Home', 'On Demand', 'Learn', 'Community', 'Guidelines', 'FAQ'];


export default MenuApp
