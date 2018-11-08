/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux';

import { ADD_OPERATION } from './constants';

function appReducer(state = { operations: [] }, action) {
  switch (action.type) {
    case ADD_OPERATION:
      return {
        ...state,
        operations: state.operations.concat(action.payload),
      };
    default:
      return state;
  }
}

/**
 * Creates the main reducer
 */
export default function createReducer(injectedReducers) {
  return combineReducers({
    app: appReducer,
  });
}
