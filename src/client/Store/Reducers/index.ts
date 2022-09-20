import { combineReducers } from 'redux';

import pokemonReducer from './pokemonReducer';

const reducer = combineReducers({
  pokemonReducer,
});

export default reducer;
