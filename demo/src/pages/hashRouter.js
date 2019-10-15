import React from 'react';
import ReactDOM from 'react-dom';

import { HashRouter, Route, Switch } from 'react-router-dom';

ReactDOM.render(
    <HashRouter>
        <Switch>
            <Route exact path="/" component={()=>{return <a href='#/detail'>去detail</a>}} />
            <Route exact path="/detail" component={()=>{return <a href='#/'>回到home</a>}} />
        </Switch>
    </HashRouter>,
    document.getElementById('root')
);