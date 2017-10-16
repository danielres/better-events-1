import {
  Col,
  ListGroup,
  ListGroupItem,
  Panel,
  PanelGroup,
  Row,
} from 'react-bootstrap';
import { connect } from 'react-redux';
import Link from 'redux-first-router-link';
import React from 'react';

const panelTitle = discussion => (
  <h3>
    id: {discussion.id} | event: {discussion.event.name} | Started by:{' '}
    {discussion.author.displayName}
  </h3>
);

const AdminPage = ({ discussions }) => (
  <div>
    {discussions && (
      <div>
        <PanelGroup accordion>
          {discussions.map((discussion, i) => (
            <Panel
              eventKey={i}
              header={panelTitle(discussion)}
              key={discussion.id}
            >
            <ListGroup fill>
              {discussion.messages.map(message => (
                <ListGroupItem key={message.id}>
                  <Row>
                    <Col xs={1} md={2}>
                      <small>
                        {message.author.displayName}
                        {': '}
                      </small>
                    </Col>
                    <Col xs={11} md={11}>
                      {message.body}
                    </Col>
                  </Row>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Panel>
        ))}
        </PanelGroup>
      </div>
    )}
  </div>
);

const mapState = () => ({
  discussions: [
    {
      id: 'kjkweg23',
      event: { id: '2jh393', name: 'Mock event 1' },
      author: { id: 'njh23jh4', displayName: 'Anon1' },
      messages: [
        {
          author: { id: 'njh23jh4', displayName: 'Anon1' },
          body: 'Hello there',
          id: 'al3k8dh',
          timestamp: '2017-01-01:10:00:01',
        },
        {
          author: { id: 'njh23jh4', displayName: 'Anon1' },
          body: 'Is there anyone ?',
          id: 'kne72ts',
          timestamp: '2017-01-01:10:00:02',
        },
      ],
    },
  ],
});

export default connect(mapState)(AdminPage);
