import React from 'react';
import {Provider} from "react-redux";

import EntryScreen from './screens/EntryScreen';
import LoginScreen from './screens/LoginScreen';
import store from "./utilities/storage/store";
import {Router, Switch, Route} from './utilities/routing/index';

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Switch>
                        <Route exact path='/' component={EntryScreen}/>
                        <Route path='/login' component={LoginScreen}/>
                    </Switch>
                </Router>
            </Provider>
        );
    }
}


export default App;
