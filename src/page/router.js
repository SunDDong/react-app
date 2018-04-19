import React from 'react';
import { Route, Switch} from 'react-router-dom';
import Dictionary from './dictionary/index';
import About from './about/index';
import Home from './home/index'

export default () => {
    return (
        <Switch>
            <Route path="/" exact component={Home}></Route>,
            <Route path="/about" component={About}></Route>,
            <Route path="/dictionary" component={Dictionary}></Route>
        </Switch>
    )
}