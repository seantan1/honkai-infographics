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

const Header = ({ hamburgerClicked, headerComponentsDisplayState }) => {



    return (
        <div>
            <div className="navbar">
                <a href="/" className="Brand">Honkai Infographics</a>

                <div className="nav navbar-right">

                    <div className="nav-bar-right-hide-in-mobile" style={{ display: headerComponentsDisplayState }}>
                        <div className="nav-bar-right-search-bar-hide-in-mobile">
                            <SearchBar />
                        </div>
                        <ValkryieDropdownMenu />
                        <BossesDropdownMenu />
                        <GearsDropdownMenu />
                        <ReferencesDropdownMenu />
                    </div>

                    <div class="hamburger-sidenav"
                        onClick={hamburgerClicked}
                    ><HamburgerMobileIcon /></div>
                </div>
            </div>

            <div className="nav-bar-mobile-drop-down-container">

            </div>
        </div>

    );
}

export default Header;
