import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import session from './session'
import groupsReducer from "./groups"
import groupEventsReducer from "./groupEvents"
import eventsReducer from "./events"
import usersReducer from "./users"
import memberTablesReducer from "./memberTables"

const rootReducer = combineReducers({
  session: session,
  groups: groupsReducer,
  groupEvents: groupEventsReducer,
  events: eventsReducer,
  users: usersReducer,
  memberTables: memberTablesReducer
});

let enhancer;

if (process.env.NODE_ENV === 'production') {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require('redux-logger').default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
