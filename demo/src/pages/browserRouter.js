import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './home';
import Detail from './detail';

ReactDOM.render(<Router>
    <Route exact path="/" component={Home} />
    <Route path="/detail" component={Detail} />
</Router>, document.getElementById('root'));