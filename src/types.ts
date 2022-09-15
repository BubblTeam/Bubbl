export type ActionProps = {
  moveName: string
};

export type Actions = 'Tackle' | 'Flame Thrower' | 'Hydro Pump' | 'Surf';

export type ActionContainerProps = {
  player: 1 | 2
};

export type StatusMessageProps = {
  statusMessage: string
};

export type StatusType = {
  message: string
};

export type AttackType = {
  message: string
  moveName: string
  player: number
}

export type InitialState = {
  statusMessage: string;
  playerHealth: number;
  opponentHealth: number;
  currentTurn: 1 | 2;
};

export type ReduxActions = {
  type: string
  payload: StatusType | AttackType
}

export type Reducers = {
  pokemonReducer: InitialState
}

export type HealthBarType = {
  health: number
  name: string
}