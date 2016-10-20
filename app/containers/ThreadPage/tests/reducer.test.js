import expect from 'expect';
import configureStore from '../../../store';
import threadPageReducer from '../reducer';
import { sendMessage } from '../actions';
import { browserHistory } from 'react-router';


describe('threadPageReducer', () => {
  let store;
  
  before(() => {
    store = configureStore({}, browserHistory);
  });

  it('returns the initial state', () => {
    expect(store.getState().threadPage).toEqual({ messages: [] });
  });
  it('sent message is saved to messages', () => {
    const msg = {
      userName: "Bob",
      body: "Hello World!"
    };
    store.dispatch(sendMessage(msg));
    expect(store.getState().threadPage.messages[0]).toEqual(msg);
  });
});