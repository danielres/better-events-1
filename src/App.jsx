import 'bootstrap/dist/css/bootstrap.css';

import './App.css';

import React, { Component } from 'react';
import { Col, Grid, PageHeader, Row } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <Grid>
        <PageHeader>Better Events</PageHeader>
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
