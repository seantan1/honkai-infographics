import React, { useState } from 'react';

import logo from './logo.svg';
import './App.css';
import Header from './components/header-components/Header';
import Banner from './components/banner-components/Banner';
import Sidebar from './components/side-bar-components/Sidebar';




function App() {

    // hooks for sidebar state
    const [sidebarDisplayed, setSidebarDisplay] = useState(false);
    const [sidebarWidth, setSidebarWidth] = useState(0);
    const [pageMarginRight, setPageMarginRight] = useState(0);

    const hamburgerClicked = () => {
        setSidebarDisplay(!sidebarDisplayed);
        if (sidebarDisplayed) {
            setSidebarWidth((prevState) => prevState = 200);
            setPageMarginRight((prevState) => prevState = 200);
        } else {
            setSidebarWidth((prevState) => prevState = 0);
            setPageMarginRight((prevState) => prevState = 0);
        }
    }
    // end of hooks for sidebar state

    return (
        <div>
            <div className="sidebar-container" style={{width:sidebarWidth + 'px'}}>
                <Sidebar />
            </div>

            <div className="page-content-container" style={{marginRight:pageMarginRight + 'px'}}>
                <Header hamburgerClicked={hamburgerClicked} />
                <Banner />


                <div className="App">

                    <header className="App-header">

                        <img src={logo} className="App-logo" alt="logo" />
                        <p>
                            Edit <code>src/App.js</code> and save to reload. 
        </p>
                        <a
                            className="App-link"
                            href="https://reactjs.org"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Learn React
        </a>
                    </header>
                </div>
            </div>

        </div>

    );
}

export default App;
