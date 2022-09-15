import React from 'react';
import { useSelector } from 'react-redux';
import { Reducers } from '../../types';
import StatusMessageComponent from '../Components/StatusMessageComponent';
import ActionContainer from './ActionContainer';
import { MenuContainerType } from '../../types';

const MenuContainer = (props: MenuContainerType) => {
  const statusMessage = useSelector((state: Reducers) => state.pokemonReducer.statusMessage);
  const currentTurn = useSelector((state: Reducers) => state.pokemonReducer.currentTurn);
  const { isGameOver } = props;
  console.log(currentTurn);
  return (
    <div className="MenuContainer">
      <StatusMessageComponent statusMessage={statusMessage} />
      <ActionContainer player={currentTurn} isGameOver={isGameOver} />
    </div>
  );
};

export default MenuContainer;
