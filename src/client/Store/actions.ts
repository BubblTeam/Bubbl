import * as types from './actionTypes';
import { StatusType, AttackType } from '../../types';

export const updateStatus = (status: StatusType) => ({
  type: types.UPDATE_STATUS,
  payload: status,
});

export const updateTurn = (turn: 1 | 2) => ({
  type: types.UPDATE_TURN,
  payload: turn,
});

export const resetStatus = () => ({
  type: types.RESET_STATUS,
});

export const playerAttack = (attack: AttackType) => ({
  type: types.PLAYER_ATTACK,
  payload: attack,
});

export const gameOver = () => ({
  type: types.GAME_OVER,
});
