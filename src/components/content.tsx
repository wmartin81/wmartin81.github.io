import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './home';
import AboutMe from './aboutme';
import Resume from './resume';

const Content = (props) => (
    <div className="content">
        <div className="content-header">
            <div className="profile-image"></div>
        </div>
        <div className="route-render-area">
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/aboutme" component={AboutMe}/>
                <Route path="/resume" component={Resume}/>
            </Switch>
        </div>
    </div>
)

export default Content;