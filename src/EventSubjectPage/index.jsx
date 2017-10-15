import React from 'react';
import { connect } from 'react-redux';

const EventSubjectPage = ({ subject }) => (
  <div>
    {subject && (
      <div>
        <h2>{subject.name}</h2>
      </div>
    )}
  </div>
);

const mapState = ({ events, location }) => {
  const event = events.entries[location.payload.eventCode];
  const { subjectId } = location.payload;
  return {
    subject: event
      ? event.subjects.find(s => s.id === subjectId)
      : null,
  };
};

export default connect(mapState)(EventSubjectPage);
