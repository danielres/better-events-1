import './index.css';

import { Provider, connect } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import store from './store';

// import registerServiceWorker from './registerServiceWorker';
// registerServiceWorker();

const Switcher = connect(({ location: { type } }) => ({
  type,
}))(props => {
  switch (props.type) {
    case 'HOME':
      return <div>HOME</div>;
    case 'EVENTPAGE':
      return <div>EVENTPAGE</div>;
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
