import './index.css';

import { Provider, connect } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import EventPage from './EventPage';
import store from './store';

// import registerServiceWorker from './registerServiceWorker';
// registerServiceWorker();

const Switcher = connect(({ location }) => ({
  location,
}))(props => {
  switch (props.location.type) {
    case 'HOMEPAGE':
      return <div>HOME</div>;
    case 'EVENTPAGE':
      return (
        <EventPage eventCode={props.location.payload.eventCode} />
      );
    default:
      return <div>NOT FOUND</div>;
  }
});

ReactDOM.render(
  <Provider store={store}>
    <App>
      <Switcher />
    </App>
  </Provider>,
  document.getElementById('root')
);
