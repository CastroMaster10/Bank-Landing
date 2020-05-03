import React from 'react';
import Home from '../pages/Home';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from '../containers/Layout';
const App = () => {
    return(
        <BrowserRouter>
        <Layout>
             <Switch>
                <Route exact path = "/" component={Home}/>
            </Switch>
        </Layout>
        </BrowserRouter>
    );
}

export default App; 