import React, { useState } from 'react';
import './css/Header.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';

import ValkryieDropdownMenu from './ValkyrieDropdownMenu';
import BossesDropdownMenu from './BossesDropdownMenu';
import ReferencesDropdownMenu from './ReferencesDropdownMenu';

function Header() {

    return (
        <div className="Header">
            <a href="/" className="Title">Honkai Infographics</a>
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
            <ReferencesDropdownMenu />



        </div>
    );
}

export default Header;
