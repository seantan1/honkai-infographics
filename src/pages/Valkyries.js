import React, { useState, Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from "react-router-dom";

import './css/Valkyries.css';
import battlesuits_data from '../assets/valk-data/battlesuits.json'

export default function Valkyries() {
    return (
        <Router>
            <div>
                <h2>Valkyries</h2>
                <p>{battlesuits}</p>
                <p>{battlesuits2}</p>

                <Route path="/valkyries/:valkname" children={<ValkyrieDetails />} />
                <Route path="/valkyries/:valkname/:battlesuitname" children={<BattlesuitDetails />} />
            </div>
        </Router>
    );
}

const battlesuits = battlesuits_data.map((data) => {
    return (
        <div>
            <h1><Link style={{color:"black"}} to={"/valkyries/"+data.valkyrie+"/"+data.battlesuit}>{data.battlesuit}</Link></h1>
        </div>
    )
})

const battlesuits2 = battlesuits_data.map((data) => {
    return (
        <div>
            <h1><Link style={{color:"black"}} to={"/valkyries/"+data.valkyrie}>{data.valkyrie}</Link></h1>
        </div>
    )
})

function ValkyrieDetails() {
    // We can use the `useParams` hook here to access
    // the dynamic pieces of the URL.
    let { valkname } = useParams();
  
    return (
      <div>
        <h3>valk: {valkname}</h3>
      </div>
    );
  }

function BattlesuitDetails() {
    // We can use the `useParams` hook here to access
    // the dynamic pieces of the URL.
    let { valkname, battlesuitname } = useParams();
  
    return (
      <div>
        <h3>valk: {valkname}</h3>
        <h3>battlesuit: {battlesuitname}</h3>
      </div>
    );
  }


