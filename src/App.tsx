import React, { ReactNode } from "react";
import { Provider } from "react-redux";

import EntryScreen from "./screens/EntryScreen";
import NoMatch from "./components/NoMatch";
import ElectronRedirect from "./components/ElectronRedirect";
import { store, persistor } from "./utilities/storage/store";
import { Router, Switch, Route } from "./utilities/routing";
import { PersistGate } from "redux-persist/integration/react";
import Loading from "./components/Loading";
import HomeComponent from "./components/HomeComponent";
import LoginComponent from "./components/LoginComponent";

class App extends React.Component {
    render(): ReactNode {
        return (
          <Provider store={store}>
            <PersistGate loading={<Loading />} persistor={persistor}>
              <Router>
                <Switch>
                  <Route exact path="/" component={EntryScreen} />
                  <Route exact path="/login" component={LoginComponent} />
                  <Route exact path="/home" component={HomeComponent} />
                  <Route exact path="/index.html" component={ElectronRedirect} />
                  <Route component={NoMatch} />
                </Switch>
              </Router>
            </PersistGate>
          </Provider>
        );
    }
}

export default App;
