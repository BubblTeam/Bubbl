// @ts-nocheck
import * as types from '../actionTypes';
import { InitialState, ReduxActions } from '../../../types';

const initialState: InitialState = {
  statusMessage: 'What will Squirtle do?',
  playerHealth: 500,
  opponentHealth: 500,
  currentTurn: 1,
};

const pokemonReducer = (state = initialState, action: ReduxActions) => {
  switch (action.type) {
    case types.UPDATE_STATUS: {
      return {
        ...state,
        statusMessage: action.payload.message,
      };
    }
    case types.PLAYER_ATTACK: {
      let damage;
      const { moveName, player } = action.payload;
      if (moveName === 'Tackle') {
        damage = 50;
      } else if (moveName === 'Flame Thrower') {
        damage = 10;
      } else if (moveName === 'Hydro Pump') {
        damage = 80;
      } else if (moveName === 'Surf') {
        damage = 60;
      } else if (moveName === 'Psybeam') {
        damage = 60;
      }
      return (player === 1)
        ? {
          ...state,
          statusMessage: action.payload.message,
          opponentHealth: (damage > state.opponentHealth) ? 0 : state.opponentHealth - damage,
          currentTurn: 2,
        }
        : {
          ...state,
          statusMessage: action.payload.message,
          playerHealth: (damage > state.playerHealth) ? 0 : state.playerHealth - damage,
        };
    }
    case types.RESET_STATUS: {
      return {
        ...state,
        currentTurn: 1,
        statusMessage: initialState.statusMessage,
      };
    }
    case types.GAME_OVER: {
      return {
        ...state,
        statusMessage: (state.currentTurn === 1) ? 'Squirtle has fainted!' : 'Mew Two has fainted!',
      };
    }
    default: {
      return state;
    }
  }
};

export default pokemonReducer;
