import './App.css';

import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Better Events</h1>
        </header>

        {this.props.children}
      </div>
    );
  }
}

export default App;
