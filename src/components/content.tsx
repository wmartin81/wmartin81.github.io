import * as React from 'react';
import { Route } from 'react-router-dom';
import { Home } from './home';
import { AboutMe } from './aboutme';
import { Resume } from './resume';

export const Content = (props) => (
    <div>
        <Route exact path="/" component={Home}/>
        <Route path="/aboutme" component={AboutMe}/>
        <Route path="/resume" component={Resume}/>
    </div>
)