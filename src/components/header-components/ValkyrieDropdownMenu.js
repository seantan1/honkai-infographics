import React, { useState } from 'react';
import './css/DropdownMenu.css';

import DropdownItem from './ValkDropdownItem';

// important chibi icons
import Kiana from '../../assets/chibi-icons/Kiana.png';

function ValkryieDropdownMenu() {

    const [isShown, setIsShown] = useState(false);

    return (
        <div 
                onMouseEnter={() => setIsShown(true)}
                onMouseLeave={() => setIsShown(false)}
        className="parent">
            <div className="dropdown">
                <div 
                    
                className="button"> Valkyries </div>

                {isShown && (
                <ul>
                    <li><DropdownItem valkName="Kiana" /></li>
                    <li><DropdownItem valkName="Mei" /></li>
                    <li><DropdownItem valkName="Bronya" /></li>
                    <li><DropdownItem valkName="Seele" /></li>
                    <li><DropdownItem valkName="Himeko" /></li>
                    <li><DropdownItem valkName="Fu Hua" /></li>
                    <li><DropdownItem valkName="Rita" /></li>
                    <li><DropdownItem valkName="Durandal" /></li>
                </ul>
                )}
            </div>
        </div>
    );
}

export default ValkryieDropdownMenu;