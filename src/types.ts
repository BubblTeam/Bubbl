export type ActionProps = {
  moveName: string
};

export type Actions = 'Tackle' | 'Flame Thrower' | 'Hydro Pump' | 'Surf';

export type ActionContainerProps = {
  statusUpdate: (status: string) => void
};

export type StatusMessageProps = {
  statusMessage: string
};

export type StatusType = {
  message: string
};

export type InitialState = {
  statusMessage: string
};

export type ReduxActions = {
  type: 'UPDATE_STATUS' | 'UPDATE_TURN' | 'RESET_STATUS'
  payload: StatusType
}

export type Reducers = {
  pokemonReducer: InitialState
}
