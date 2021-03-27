import React, { Component } from 'react';
import { Provider } from "react-redux";
import storeConfiguration from "../store/storeConfiguration";
import Foot from './struct/foot';
import Head from './struct/head';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./homepage/homePage";
import BoutiquePage from './boutique/boutiquePage';
import { setup } from "./util/canvas/setup";
const store = storeConfiguration();
class App extends Component {

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
                        <Foot />
                    </BrowserRouter>
                </div>
            </Provider>
        );
    }
}
export default App;