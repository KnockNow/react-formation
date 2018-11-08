/*
 *
 * Calculette actions
 *
 */

import {
  ADD_OPERATION,
} from './constants';

export function addOperationAction(operation) {
  return {
    type: ADD_OPERATION,
    payload: operation,
  };
}
