import React, { useState } from 'react';
import './css/DropdownItem.css';
import Kiana from '../../assets/chibi-icons/Kiana.png';

const DropdownItem = ({valkName}) => {
    

    return (
        <div className="DropDownItemContainer">
        <img className="chibiIcon" src={Kiana}/>
        <div className="valkNameContainer">
        <a className="item" href={"/" + valkName}>{valkName} </a>
        </div>
        
        </div>
    );
}

export default DropdownItem;