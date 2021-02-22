import React from 'react';

import './css/SearchBar.css';
import '../../../node_modules/font-awesome/css/font-awesome.min.css';

function SearchBar() {
    return (
        <div className="searchContainer">
            <div className="searchBox">
                <form className="search">
                    <input className="SearchBar" type="text" placeholder="Search"></input>
                    <button type="submit"><i class="fa fa-search"></i></button>
                </form>
            </div>

        </div>
    );
}

export default SearchBar;