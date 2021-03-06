import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/homepage.component';

const HatsPage = () => (
    <div>
        <h1>Hats Page</h1>
    </div>
)

function App() {
    return (
        <div>
            <Switch>
                <Route path='/hats' component={HatsPage} />
                <Route path='/' component={HomePage} exact={true} />
            </Switch>
        </div>
    );
}

export default App;