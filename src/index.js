import './index.css';

import { Provider, connect } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import AdminPage from './AdminPage';
import EventPage from './EventPage';
import EventSubjectPage from './EventSubjectPage';
import HomePage from './HomePage';
import store from './store';

// import registerServiceWorker from './registerServiceWorker';
// registerServiceWorker();
const Switcher = connect(({ location }) => ({
  location,
}))(props => {
  switch (props.location.type) {
    case 'ADMINPAGE':
      return <AdminPage />;
    case 'HOMEPAGE':
      return <HomePage />;
    case 'EVENTPAGE':
      return <EventPage />;
    case 'EVENTSUBJECTPAGE':
      return <EventSubjectPage />;
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
