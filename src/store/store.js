import { applyMiddleware, compose, createStore } from "redux";
import rootReducer from "../reducers/rootReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const initialState = {};

const store = createStore(rootReducer, initialState);

export default store;