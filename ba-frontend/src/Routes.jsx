
import React from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import SelectedFlight from './components/SelectedFlight';


import Search from './components/Search';

const Routes = (
  <Router>
    <div>

        <Route exact path="/search" component={ Search }/>
        <Route exact path="/flight/:selectedFlight" component={ SelectedFlight }/>


    </div>
  </Router>
);

export default Routes;
