import React, { useState } from 'react';
import './css/Header.css';
// import '../../../node_modules/font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from 'react-bootstrap'

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

                    <div style={{ display: headerComponentsDisplayState }}>
                        <SearchBar />
                        <ValkryieDropdownMenu />
                        <BossesDropdownMenu />
                        <GearsDropdownMenu />
                        <ReferencesDropdownMenu />
                    </div>

                    <div
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
