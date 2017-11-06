import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { MemoryRouter, Route } from 'react-router-dom';
import NavMenu from './components/nav-menu';
import Content from './components/content';

const App = (props) => (
    <div id="app">
        <NavMenu/>
        <Content/>
    </div>
);

ReactDOM.render(
    <MemoryRouter><App/></MemoryRouter>,
    document.getElementById('root')
)
