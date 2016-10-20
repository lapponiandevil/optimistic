import expect from 'expect';
import configureStore from '../../../store';
import threadPageReducer from '../reducer';
import { sendMessage } from '../actions';
import { browserHistory } from 'react-router';


describe('threadPageReducer', () => {
  let store;
  
  beforeEach(() => {
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
  it('messages can be read in order', () => {
    const makeMessage = (name, message) =>
      store.dispatch(sendMessage({
        userName: name,
        body: message
      })
    );
    makeMessage('Fabian', 'Detta ar min unika kreativitet');
    makeMessage('Mikko', 'I am boss of code');
    makeMessage('Henrik', 'management through cringe');
    expect(store.getState().threadPage.messages).toEqual(
      [
        {
          userName: 'Fabian',
          body: 'Detta ar min unika kreativitet'
        },
        {
          userName: 'Mikko',
          body: 'I am boss of code'
        },
        {
          userName: 'Henrik',
          body: 'management through cringe'
        }
      ]
    );
  });
});