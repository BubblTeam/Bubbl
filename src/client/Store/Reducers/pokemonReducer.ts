import * as types from '../actionTypes';
import { InitialState, ReduxActions } from '../../../types';

const initialState = {
  statusMessage: 'What will Squirtle do?',
};

const pokemonReducer = (state: InitialState = initialState, action: ReduxActions) => {
  switch (action.type) {
    case types.UPDATE_STATUS: {
      return {
        ...state,
        statusMessage: action.payload.message,
      };
    }
    case types.RESET_STATUS: {
      return initialState;
    }
    default: {
      return state;
    }
  }
};

export default pokemonReducer;
