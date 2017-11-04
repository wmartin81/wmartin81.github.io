import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {getRandomInt} from './math-helper'
import {greetings} from './greetings';

function App(props){
    return (<h1>{greetings[getRandomInt(0, greetings.length)]}</h1>);
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)
