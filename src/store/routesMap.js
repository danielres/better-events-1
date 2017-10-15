import { fetchEvent } from './events';
import { redirect } from 'redux-first-router';

export default {
  HOMEPAGE: '/',
  EVENTPAGE: {
    path: '/:eventCode',
    thunk: (dispatch, getState) =>
      fetchEvent(getState().location.payload.eventCode)(dispatch),
  },
};
