import React, { useState } from 'react';


import './App.css';
import Header from './components/header-components/Header';
import Banner from './components/banner-components/Banner';
import Sidebar from './components/side-bar-components/Sidebar';
import Main from './Main'




function App() {

    // hooks for sidebar state
    const [sidebarDisplayed, setSidebarDisplay] = useState(false);
    const [sidebarWidth, setSidebarWidth] = useState(0);
    const [pageMarginRight, setPageMarginRight] = useState(0);
    const [headerComponentsDisplayState, setHeaderComponentsDisplayState] = useState("flex");

    const hamburgerClicked = () => {
        if (!sidebarDisplayed) {
            setSidebarWidth((prevState) => prevState = 250);
            setPageMarginRight((prevState) => prevState = 250);
            setHeaderComponentsDisplayState((prevState) => prevState = "none");
            setSidebarDisplay(!sidebarDisplayed);
        } else {
            setSidebarWidth((prevState) => prevState = 0);
            setPageMarginRight((prevState) => prevState = 0);
            setHeaderComponentsDisplayState((prevState) => prevState = "flex");
            setSidebarDisplay(!sidebarDisplayed);
        }
    }
    // end of hooks for sidebar state

    return (
        <div>
            <div className="sidebar-container" style={{width:sidebarWidth + 'px'}}>
                <Sidebar />
            </div>

            <div className="page-content-container" style={{marginRight:pageMarginRight + 'px'}}>
                <Header hamburgerClicked={hamburgerClicked} headerComponentsDisplayState={headerComponentsDisplayState}/>
                <Banner />

                <Main />
            </div>

        </div>

    );
}

export default App;
