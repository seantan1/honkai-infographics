import React, { useState } from 'react';
import './css/DropdownMenu.css';
import DropdownItem from './DropdownItem';

function BossesDropdownMenu() {

    const [isShown, setIsShown] = useState(false);

    return (
        <div 
                onMouseEnter={() => setIsShown(true)}
                onMouseLeave={() => setIsShown(false)}
        >
            <div className="nav-bar-dropdown-button">
                <div 
                    
                className="nav-bar-dropdown-button-text"> Bosses </div>

                {isShown && (
                <ul>
                    <li><DropdownItem valkName="Abyss"/></li>
                    <li><DropdownItem valkName="Memorial Arena"/></li>
                </ul>
                )}
            </div>
        </div>
    );
}

export default BossesDropdownMenu;