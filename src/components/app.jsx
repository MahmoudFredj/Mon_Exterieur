import React, { Component } from 'react';
import { Provider } from "react-redux";
import storeConfiguration from "../store/storeConfiguration";
import Foot from './struct/foot';
import Head from './struct/head';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./homepage/homePage";
import BoutiquePage from './boutique/boutiquePage';
const store = storeConfiguration();
class App extends Component {
    state = {}
    render() {
        return (
            <Provider store={store}>
                <div className="app-wrapper">
                    <BrowserRouter>
                        <Head />
                        <Switch>
                            <Route path="/boutique" component={BoutiquePage} />
                            <Route exact path="/" component={HomePage} />
                        </Switch>
                    </BrowserRouter>
                    <Foot />
                </div>
            </Provider>
        );
    }
}
export default App;