import React, { useState } from 'react';
import './css/Header.css';
import '../../../node_modules/font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from 'react-bootstrap'

import ValkryieDropdownMenu from './ValkyrieDropdownMenu';
import BossesDropdownMenu from './BossesDropdownMenu';
import GearsDropdownMenu from './GearsDropdownMenu'
import ReferencesDropdownMenu from './ReferencesDropdownMenu';

function Header() {

    return (

        <div className="navbar">
            <a href="/" className="Brand">Honkai Infographics</a>

            <div className="nav navbar-right">
                <div className="searchContainer">

                    <div className="searchBox">
                        <form className="search">
                            <input className="SearchBar" type="text" placeholder="Search"></input>
                            <button type="submit"><i class="fa fa-search"></i></button>
                        </form>
                    </div>
                    
                </div>

                <ValkryieDropdownMenu />
                <BossesDropdownMenu />
                <GearsDropdownMenu />
                <ReferencesDropdownMenu />

            </div>


        </div>
    );
}

export default Header;
