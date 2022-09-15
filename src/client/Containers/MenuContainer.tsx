import React from 'react';
import { useSelector } from 'react-redux';
import { Reducers } from '../../types';
import StatusMessageComponent from '../Components/StatusMessageComponent';
import ActionContainer from './ActionContainer';

const MenuContainer = () => {
  const statusMessage = useSelector((state: Reducers) => state.pokemonReducer.statusMessage);
  const currentTurn = useSelector((state: Reducers) => state.pokemonReducer.currentTurn);

  console.log(currentTurn);
  return (
    <div>
      <StatusMessageComponent statusMessage={statusMessage} />
      <ActionContainer player={currentTurn} />
    </div>
  );
};

export default MenuContainer;
