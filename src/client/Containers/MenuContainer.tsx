import React from 'react';
import { useSelector } from 'react-redux';
import { Reducers } from '../../types';
import StatusMessageComponent from '../Components/StatusMessageComponent';
import ActionContainer from './ActionContainer';

const MenuContainer = () => {
  const statusMessage = useSelector((state: Reducers) => state.pokemonReducer.statusMessage);
  return (
    <div>
      <StatusMessageComponent statusMessage={statusMessage} />
      <ActionContainer />
    </div>
  );
};

export default MenuContainer;
