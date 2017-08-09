import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter, Switch } from "react-router-dom";

import "./index.css";

import reducers from "./reducers/index";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import Encyclopedia from "./components/encyclopedia";
import Race from "./containers/race";
import Home from "./components/home";
import Commute from "./containers/commute";
import Naked from "./containers/naked";

const store = createStore(reducers, applyMiddleware(thunk));


//Explore Wing
class App extends React.Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route exact path="/encyclopedia/" component={Encyclopedia}/>
                            <Route exact path="/encyclopedia/race" component={Race}/>
                            <Route exact path="/encyclopedia/commute" component={Commute}/>
                            <Route exact path="/encyclopedia/naked" component={Naked}/>
                        </Switch>
                    </div>
                </BrowserRouter>
            </div>
        )
    }
};

ReactDOM.render(<Provider store={store}><App/></Provider>, document.querySelector("#root"));