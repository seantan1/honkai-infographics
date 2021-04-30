import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Valkyries from './pages/Valkyries'

const Main = () => {
  return (
    <Switch> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/valkyries' component={Valkyries}></Route>
    </Switch>
  );
}

export default Main;