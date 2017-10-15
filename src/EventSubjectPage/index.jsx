import { connect } from 'react-redux';
import React from 'react';
import { Link, NavLink } from 'redux-first-router-link';

const EventSubjectPage = ({ event, eventCode, subject }) => (
  <div>
    {subject && (
      <div>
        <h2>
          <small>
            <NavLink
              to={{
                type: 'EVENTPAGE',
                payload: { eventCode },
              }}
            >
              {event.name}
            </NavLink>
            {' / '}
          </small>

          {subject.name}
        </h2>
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

export default connect(mapState)(EventSubjectPage);
