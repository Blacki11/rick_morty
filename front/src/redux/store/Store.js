import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducer/Reducer";
import { compose } from "redux";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
    rootReducer, 
    composeEnhancer(applyMiddleware(thunk))
);

export default store;
