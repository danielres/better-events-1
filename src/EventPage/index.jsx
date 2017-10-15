import { ListGroup, ListGroupItem } from 'react-bootstrap';
import React from 'react';
import { connect } from 'react-redux';

const EventPage = ({ eventCode, event }) => (
  <div>
    {event && (
      <div>
        <h2>
          {event.name} <small>Event code: {eventCode}</small>
        </h2>

        <ListGroup>
          {event.subjects.map(subject => (
            <ListGroupItem href="#" key={subject.id}>
              {subject.name}
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
    )}
  </div>
);

const mapState = ({ events, location }) => ({
  event: events.entries[location.payload.eventCode],
});

export default connect(mapState)(EventPage);
