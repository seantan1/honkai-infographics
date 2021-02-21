import React, { useState } from 'react';
import './css/DropdownMenu.css';

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
                    <li><a className="active" href="/">Kiana</a></li>
                    <li><a className="active" href="/">Mei</a></li>
                    <li><a className="active" href="/">Bronya</a></li>
                    <li><a className="active" href="/">Seele</a></li>
                    <li><a className="active" href="/">Himeko</a></li>
                    <li><a className="active" href="/">Fu Hua</a></li>
                    <li><a className="active" href="/">Rita</a></li>
                    <li><a className="active" href="/">Durandal</a></li>
                </ul>
                )}
            </div>
        </div>
    );
}

export default ValkryieDropdownMenu;