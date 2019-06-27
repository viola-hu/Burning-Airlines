
import React from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';

import Search from './components/Search';

const Routes = (
  <Router>
    <div>

        <Route exact path="/search" component={ Search }/>

    </div>
  </Router>
);

export default Routes;
