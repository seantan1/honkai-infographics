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
            <form className="search">
                <input className="SearchBar" placeholder="Search"></input>
                <button><i class="fa fa-search"></i></button>
            </form>
            <ValkryieDropdownMenu />
            <BossesDropdownMenu />
            <ReferencesDropdownMenu />



        </div>
    );
}

export default Header;
