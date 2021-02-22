import React, { useState } from 'react';
import './css/HamburgerMobileIcon.css';
import '../../../node_modules/font-awesome/css/font-awesome.min.css';

function HamburgerMobileIcon() {

    return (
        <div>
            <div className="nav-bar-hamburger-icon-container">
                <i class="fa fa-bars nav-bar-hamburger-icon"></i>
            </div>
        </div>
    );
}

export default HamburgerMobileIcon;