import React, { useState } from 'react';
import './css/DropdownMenu.css';

function GearsDropdownMenu() {

    const [isShown, setIsShown] = useState(false);

    return (
        <div 
                onMouseEnter={() => setIsShown(true)}
                onMouseLeave={() => setIsShown(false)}
        >
            <div className="nav-bar-dropdown-button">
                <div 
                    
                className="nav-bar-dropdown-button-text"> Gears </div>

                {isShown && (
                <ul>
                    <li><a className="active" href="/">Foundry</a></li>
                    <li><a className="active" href="/">Bounty</a></li>
                    <li><a className="active" href="/">Exchange Shop</a></li>
                    <li><a className="active" href="/">Gacha</a></li>
                </ul>
                )}
            </div>
        </div>
    );
}

export default GearsDropdownMenu;