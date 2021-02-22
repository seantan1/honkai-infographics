import React from 'react';
import './css/ValkDropdownItem.css';

const DropdownItem = ({valkName, chibiIcon}) => {
    

    return (
        <div>

            <img className="chibiIcon noDrag" src={chibiIcon}/>

            <div className="valkNameContainer">
                
                <a className="nav-bar-drop-down-valk-text noDrag" href={"/" + valkName}>{valkName} </a>
            
            </div>
        
        </div>
    );
}

export default DropdownItem;