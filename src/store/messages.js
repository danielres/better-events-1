import { groupBy } from 'lodash/fp';

export const types = {
  RECEIVE_MESSAGE: 'RECEIVE_MESSAGE',
};

export const initialState = { discussions: {} };

export const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.RECEIVE_MESSAGE:
      return [...state, action.message];

    default:
      return state;
  }
};
