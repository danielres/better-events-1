import 'bootstrap/dist/css/bootstrap.css';

import './App.css';

import { Col, Grid, PageHeader, Row } from 'react-bootstrap';
import Link from 'redux-first-router-link';
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <Grid>
        <PageHeader>
          <Link to={{ type: 'HOMEPAGE' }}>Better Events</Link>
        </PageHeader>
        <Row>
          <Col xs={12} md={12}>
            {this.props.children}
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
