import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {getRandomInt} from './math-helper'
import {greetings} from './greetings';

ReactDOM.render(
    <h1>{greetings[getRandomInt(0, greetings.length)]}</h1>,
    document.getElementById('root')
)
