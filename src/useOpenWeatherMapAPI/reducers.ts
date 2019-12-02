import { IState } from "./interfaces";
import { ActionTypes } from "./types";
import {
  ACTION_REQUEST_PENDING,
  ACTION_REQUEST_FULFILLED,
  ACTION_REQUEST_REJECTED
} from "./constants";

/**
 * openWeatherMapAPIReducer
 *
 * @export
 * @param {IState} state
 * @param {ActionTypes} action
 * @returns {IState}
 */
export function openWeatherMapAPIReducer(
  state: IState,
  action: ActionTypes
): IState {
  switch (action.type) {
    case ACTION_REQUEST_PENDING:
      return {
        ...state,
        pending: true
      };

    case ACTION_REQUEST_FULFILLED:
      return {
        ...state,
        data: action.payload,
        pending: false
      };

    case ACTION_REQUEST_REJECTED:
      return {
        ...state,
        error: action.payload,
        pending: false
      };

    default:
      return state;
  }
}
