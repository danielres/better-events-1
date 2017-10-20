import { connect } from 'react-redux';
import React from 'react';
import { sendMessage } from '../store/messages';
import Link from 'redux-first-router-link';

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
  onSubmit: sendMessage,
});

export default connect(mapState, mapDispatch)(EventSubjectPage);
