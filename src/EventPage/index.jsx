import { ListGroup, ListGroupItem } from 'react-bootstrap';
import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'redux-first-router-link';

const EventPage = ({ eventCode, event }) => (
  <div>
    {event && (
      <div>
        <h2>
          {event.name} <small>Event code: {eventCode}</small>
        </h2>

        <ListGroup>
          {event.subjects.map(subject => (
            <NavLink
              className="list-group-item"
              key={subject.id}
              to={{
                type: 'EVENTSUBJECTPAGE',
                payload: { eventCode, subjectId: subject.id },
              }}
            >
              {subject.name}
            </NavLink>
          ))}
        </ListGroup>
      </div>
    )}
  </div>
);

const mapState = ({ events, location }) => ({
  event: events.entries[location.payload.eventCode],
  eventCode: location.payload.eventCode,
});

export default connect(mapState)(EventPage);
