import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import { thunk } from 'redux-thunk'
import counterReducer from './counter'

const rootReducer = combineReducers({
  counter: counterReducer,
})

const composeEnhancers =
  typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose

const middlewares = [thunk]

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middlewares)),
)

export default store
