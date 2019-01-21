import React from 'react';
import {Provider} from "react-redux";

import EntryScreen from './screens/EntryScreen';
import LoginScreen from './screens/LoginScreen';
import NoMatch from './components/NoMatch';
import ElectronRedirect from './components/ElectronRedirect';
import store from "./utilities/storage/store";
import {Router, Switch, Route} from './utilities/routing/index';

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>                
                <Router>
                    <Switch>                        
                        <Route exact path='/' component={EntryScreen}/>                        
                        <Route exact path='/login' component={LoginScreen}/>
                        <Route exact path='/index.html' component={ElectronRedirect}/>
                        <Route component={NoMatch}/>
                    </Switch>
                </Router>
            </Provider>
        );
    }
}


export default App;
