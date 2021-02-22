import React, { useState } from 'react';
import './css/Header.css';
// import '../../../node_modules/font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.css';

import SearchBar from './SearchBar';
import ValkryieDropdownMenu from './ValkyrieDropdownMenu';
import BossesDropdownMenu from './BossesDropdownMenu';
import GearsDropdownMenu from './GearsDropdownMenu'
import ReferencesDropdownMenu from './ReferencesDropdownMenu';
import HamburgerMobileIcon from './HamburgerMobileIcon';

function Header() {

    const [MobileNavDisplayed, setMobileNavDisplay] = useState(false);

    return (
        <div>
            <div className="navbar">
                <a href="/" className="Brand">Honkai Infographics</a>

                <div className="nav navbar-right">
                    <SearchBar />

                    <ValkryieDropdownMenu />
                    <BossesDropdownMenu />
                    <GearsDropdownMenu />
                    <ReferencesDropdownMenu />

                    <div
                        onClick={() => setMobileNavDisplay(!MobileNavDisplayed)}
                    ><HamburgerMobileIcon /></div>
                </div>
            </div>

            <div className="nav-bar-mobile-drop-down-container">
                
            </div>
        </div>

    );
}

export default Header;
