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
                <Route path="/valkyries/:id" children={<Child />} />
            </div>
        </Router>
    );
}

const battlesuits = battlesuits_data.map((data) => {
    return (
        <div>
            <h1><Link style={{color:"black"}} to={"/valkyries/"+data.battlesuit}>{data.battlesuit}</Link></h1>
        </div>
    )
})

function Child() {
    // We can use the `useParams` hook here to access
    // the dynamic pieces of the URL.
    let { id } = useParams();
  
    return (
      <div>
        <h3>ID: {id}</h3>
      </div>
    );
  }


