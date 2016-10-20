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
      return state.messages.push(action.message);
    default:
      return state;
  }
}

export default threadPageReducer;
