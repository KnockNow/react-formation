/**
 * Create the store with dynamic reducers
 */
import { createStore, applyMiddleware, compose } from 'redux';
import createReducer from './reducers';

export default function configureStore(initialState = {}, history) {
  // Create a middleware that log every action dispatched in the store
  const middlewares = [
    (action) => (action) => {
      console.log('Une action vient de passer dans le store', { action });
      return action;
    }
  ];

  const enhancers = [
    applyMiddleware(...middlewares),
  ]

  const store = createStore(
    createReducer(),
    initialState,
    compose(...enhancers)
  );

  return store;
}
