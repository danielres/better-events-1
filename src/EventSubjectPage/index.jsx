import { connect } from 'react-redux';
import React from 'react';
import Link from 'redux-first-router-link';
import io from 'socket.io-client';

var socket = io();

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

const EventSubjectPage = ({
  event,
  eventCode,
  onSubmit,
  subject,
}) => (
  <div>
    {subject && (
      <div>
        <h2>
          <small>
            <Link
              to={{
                type: 'EVENTPAGE',
                payload: { eventCode },
              }}
            >
              {event.name}
            </Link>
            {' / '}
          </small>

          {subject.name}
        </h2>

        <form
          onSubmit={e => {
            e.preventDefault();
            if (this.messageInput.value)
              onSubmit(this.messageInput.value);
            this.messageInput.value = '';
          }}
        >
          <input
            autoFocus
            ref={e => (this.messageInput = e)}
            type="text"
          />

          <button>Send</button>
        </form>
      </div>
    )}
  </div>
);

const mapState = ({ events, location }) => {
  const { eventCode, subjectId } = location.payload;
  const event = events.entries[eventCode];
  return {
    event,
    eventCode,
    subject: event
      ? event.subjects.find(s => s.id === subjectId)
      : null,
  };
};

const mapDispatch = dispatch => ({
  onSubmit: msg => {
    socket.emit('message', msg);
  },
});

export default connect(mapState, mapDispatch)(EventSubjectPage);
