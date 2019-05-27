import React from 'react';
import { Provider } from "react-redux";

import EntryScreen from './screens/EntryScreen';
import LoginScreen from './screens/LoginScreen';
import NoMatch from './components/NoMatch';
import ElectronRedirect from './components/ElectronRedirect';
import configureStore from "./utilities/storage/store";
import { Router, Switch, Route } from './utilities/routing/index';
import { PersistGate } from 'redux-persist/integration/react';
import Loading from './components/Loading';

const { persistor, store } = configureStore();

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <PersistGate loading={<Loading />} persistor={persistor}>
                    <Router>
                        <Switch>
                            <Route exact path='/' component={EntryScreen} />
                            <Route exact path='/login' component={LoginScreen} />
                            <Route exact path='/index.html' component={ElectronRedirect} />
                            <Route component={NoMatch} />
                        </Switch>
                    </Router>
                </PersistGate>
            </Provider>
        );
    }
}


export default App;
