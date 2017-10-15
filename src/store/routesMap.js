import 'whatwg-fetch';

import { types as eventTypes } from './events';

export default {
  HOMEPAGE: '/',
  EVENTPAGE: {
    path: '/:eventCode',
    thunk: (dispatch, getState) => {
      const { eventCode } = getState().location.payload;

      fetch(`/api/v1/events/${eventCode}`)
        .then(response => response.json())
        .then(({ event }) =>
          dispatch({
            type: eventTypes.EVENT_SUCCESS,
            event,
            eventCode,
          })
        )
        .catch(error =>
          dispatch({
            type: eventTypes.EVENT_FAILURE,
            error,
            eventCode,
          })
        );
    },
  },
};
