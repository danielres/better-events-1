import 'whatwg-fetch';

export const types = {
  EVENT_REQUEST: 'EVENT_REQUEST',
  EVENT_SUCCESS: 'EVENT_SUCCESS',
  EVENT_FAILURE: 'EVENT_FAILURE',
};

export const fetchEvent = eventId => dispatch => {
  fetch(`http://localhost:3000/api/v1/event/${eventId}`)
    .then(response => response.json())
    .then(event => dispatch({ type: types.EVENT_SUCCESS, event }))
    .catch(error =>
      dispatch({ type: types.EVENT_FAILURE, error, eventId })
    );
};

const initialState = { entries: [] };

export const eventsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.EVENT_SUCCESS:
      return {
        ...state,
        events: {
          ...state.events,
          [action.event.id]: action.event,
        },
      };
    case types.EVENT_FAILURE:
      console.error({ error: action.error, eventId: action.eventId });
    default:
      return state;
  }
};
