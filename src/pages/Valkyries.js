import React, { useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from "react-router-dom";

import './css/Valkyries.css';

export default function Valkyries() {
    return (
        <Router>
            <div className="black">
                <h2>Valkyries</h2>
                <h2><Link to="/valkyries/kiana" style={{color:"black"}}>Kiana</Link></h2>
                <p><Link to="/valkyries/kiana/white_comet" style={{color:"black"}}>white comet</Link></p>
                <Link to="/valkyries/mei" style={{color:"black"}}>Mei</Link>

                <Switch>
                    <Route path="/valkyries/:valkname/:battlesuit" compenent={Child} />
                </Switch>
            </div>
        </Router>
    );
}

const Child = () => {
    // We can use the `useParams` hook here to access
    // the dynamic pieces of the URL.
    let { valkname,battlesuit } = useParams();

    return (
        <div className="valk-child-container">
            <h2 className="black" style={{color:"black"}}>You Selected:</h2>
            <h3 style={{color:"black"}}>Valk Name: {valkname}</h3>
            <h3 style={{color:"black"}}>Valk Name: {battlesuit}</h3>
        </div>
    );
}


