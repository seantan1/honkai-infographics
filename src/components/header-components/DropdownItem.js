import React, { useState } from 'react';
import './css/DropdownItem.css';

const DropdownItem = ({valkName}) => {
    

    return (
        <div className="nav-bar-drop-down-container">

            <a className="nav-bar-drop-down-text nav-bar-drop-down-no-drag" href={"/" + valkName}>{valkName} </a>
        
        </div>
    );
}

export default DropdownItem;