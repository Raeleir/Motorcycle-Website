import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter, Switch } from "react-router-dom";

import RaceListContainer from "./containers/race-list-container";

import reducers from "./reducers/index";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import CustomNavbar from "./components/navbar";
import EncyclopediaHome from "./components/encyclo-home";

const store = createStore(reducers, applyMiddleware(thunk));


//Explore Wing
class App extends React.Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <CustomNavbar/>
                        <Switch>
                            <Route exact path="/" component={EncyclopediaHome}/>
                            <Route exact path="/race" component={RaceListContainer}/>
                        </Switch>
                    </div>
                </BrowserRouter>
            </div>
        )
    }
};

ReactDOM.render(<Provider store={store}><App/></Provider>, document.querySelector("#root"));