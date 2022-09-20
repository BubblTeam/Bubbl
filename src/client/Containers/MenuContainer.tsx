import React from 'react';
import { useSelector } from 'react-redux';
import { Reducers, MenuContainerType } from '../../types';
import StatusMessageComponent from '../Components/StatusMessageComponent';
import ActionContainer from './ActionContainer';

const MenuContainer = (props: MenuContainerType) => {
  const statusMessage = useSelector((state: Reducers) => state.pokemonReducer.statusMessage);
  const currentTurn = useSelector((state: Reducers) => state.pokemonReducer.currentTurn);
  const { isGameOver } = props;
  return (
    <div className="MenuContainer">
      <StatusMessageComponent statusMessage={statusMessage} />
      <ActionContainer player={currentTurn} isGameOver={isGameOver} />
    </div>
  );
};

export default MenuContainer;
