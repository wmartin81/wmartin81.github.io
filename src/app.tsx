import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { NavMenu } from './components/nav-menu';
import { Content } from './components/content';

const App = (props) => (
    <div>
        <NavMenu/>
        <Content/>
    </div>
);

ReactDOM.render(
    <BrowserRouter><App/></BrowserRouter>,
    document.getElementById('root')
)
