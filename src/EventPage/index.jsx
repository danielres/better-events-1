import { ListGroup, ListGroupItem } from 'react-bootstrap';
import React from 'react';

const subjects = [
  {
    id: 'j3hd83hm',
    name: 'Subject 1',
  },
  {
    id: 'j4sk8ohv',
    name: 'Subject 2',
  },
  {
    id: 'jss485kl',
    name: 'Other subject',
  },
];

export default ({ eventCode }) => (
  <div>
    <h2>
      [Event name] <small>Event code: {eventCode}</small>
    </h2>
    <h3>Subjects</h3>
    <ListGroup>
      {subjects.map(subject => (
        <ListGroupItem href="#" key={subject.id}>
          {subject.name}
        </ListGroupItem>
      ))}
    </ListGroup>{' '}
  </div>
);
