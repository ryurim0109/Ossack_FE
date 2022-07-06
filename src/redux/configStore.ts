import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { createBrowserHistory,History } from "history";
import { connectRouter } from "connected-react-router";
import { useDispatch } from "react-redux";
import Map from "./modules/map";
import User from "./modules/user";
import Office from "./modules/office";
import Favorite from "./modules/favorite";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

export const history: History = createBrowserHistory();

const rootReducer = combineReducers({
  map: Map,
  user: User,
  office: Office,
  favorite: Favorite,
  router: connectRouter(history),
});

const middlewares = [thunk.withExtraArgument({ history: history })];

const env = process.env.NODE_ENV;

if (env === "development") {
  const { logger } = require("redux-logger");
  middlewares.push(logger);
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(applyMiddleware(...middlewares));

let store = (initialStore? :any) => createStore(rootReducer, enhancer);

export default store();
