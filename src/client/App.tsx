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
      {isGameOver && <div className="GameOver">GAMEOVER</div> }
      <div className="BattleContainer">
        <div className="MewTwoContainer">
          <HealthBox health={opponentHealth} name="Mew Two" />
          <div className="MewTwoSprite">
            <img src="./assets/mewtwo.gif" className="MewTwo" />
            <img src="./assets/battleground.png" className="TerrainMewTwo" />
          </div>
        </div>
        <div className="SquirtleContainer">
          <HealthBox health={playerHealth} name="Squirtle" />
          <div className="SquirtleSprite">
            <img src="./assets/squirtle.gif" className="Squirtle" />
            <img src="./assets/battleground.png" className="TerrainSquirtle" />
          </div>
        </div>
      </div>
      <MenuContainer isGameOver={isGameOver} />
    </div>
  );
};

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root'),
);
