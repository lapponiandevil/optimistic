/*
 *
 * ThreadPage reducer
 *
 */

import {
  SEND_MESSAGE,
  CHANGE_MESSAGE
} from './constants';

const initialState = {
  messages: []
};

function threadPageReducer(state = initialState, action) {
  switch (action.type) {
    case SEND_MESSAGE:
      return Object.assign({}, state, {
        messages: [...state.messages, action.message]
      });
    default:
      return state;
  }
}

export default threadPageReducer;
