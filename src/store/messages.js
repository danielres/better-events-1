import io from 'socket.io-client';
import store from '../store';

const socket = io();

socket.emit('chat mounted', 'user');
//     socket.on('new bc message', msg =>
//       dispatch(actions.receiveRawMessage(msg))
//     );
//     socket.on('typing bc', user =>
//       dispatch(actions.typing(user))
//     );
//     socket.on('stop typing bc', user =>
//       dispatch(actions.stopTyping(user))
//     );
//     socket.on('new channel', channel =>
//       dispatch(actions.receiveRawChannel(channel))
//     );
//     socket.on('receive socket', socketID =>
//       dispatch(authActions.receiveSocket(socketID))
//     );
//     socket.on('receive private channel', channel =>
//       dispatch(actions.receiveRawChannel(channel))
//     );

socket.on('chat message', function(msg) {
  console.log({ serverSays: msg });
  store.dispatch({ type: 'serverSays', msg });
});

export const types = {
  RECEIVE_MESSAGE: 'RECEIVE_MESSAGE',
};

export const sendMessage = msg => socket.emit('message', msg);

export const initialState = { discussions: {} };

export const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.RECEIVE_MESSAGE:
      return [...state, action.message];

    default:
      return state;
  }
};
