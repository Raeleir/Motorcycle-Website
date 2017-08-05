import React from "react";
import ReactDOM from "react-dom";

// import reducers from "./reducers/index";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const store = createStore(reducers, applyMiddleware(thunk));


class App extends React.Component