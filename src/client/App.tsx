import React, { useEffect, useState } from 'react';
import { render } from 'react-dom';
import { useSelector, useDispatch, Provider } from 'react-redux';
import store from './Store/store';
import MenuContainer from './Containers/MenuContainer';
import HealthBox from './Components/HealthComponent';
import { gameOver } from './Store/actions';
import { Reducers } from '../types';

const App = () => {
  const playerHealth = useSelector((state: Reducers) => state.pokemonReducer.playerHealth);
  const opponentHealth = useSelector((state: Reducers) => state.pokemonReducer.opponentHealth);
  const dispatch = useDispatch();

  const [isGameOver, changeGameState] = useState(false);
  useEffect(() => {
    if (playerHealth <= 0 || opponentHealth <= 0) {
      dispatch(gameOver());
      changeGameState(true);
    }
  }, [playerHealth, opponentHealth, isGameOver]);

  return (
    <div>
      {isGameOver ? <div>GAMEOVER</div> : ''}
      <MenuContainer />
      <HealthBox health={playerHealth} name="Squirtle" />
      <HealthBox health={opponentHealth} name="Mew Two" />
    </div>
  );
};

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root'),
);
