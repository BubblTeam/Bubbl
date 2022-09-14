import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ActionComponent from '../Components/ActionComponent';
import { Actions, ActionContainerProps, Reducers } from '../../types';
import { updateStatus, resetStatus } from '../Store/actions';
import './styles.css';

const ActionContainer = () => {
  const [selectedAction, changeAction] = useState<Actions>('Tackle');
  const dispatch = useDispatch();

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      dispatch(updateStatus({ message: `Squirtle used ${selectedAction}!` }));
      setTimeout(() => dispatch(resetStatus()), 5000);
    } else if (selectedAction === 'Tackle') {
      if (e.key === 'ArrowDown') {
        changeAction('Hydro Pump');
      } else if (e.key === 'ArrowRight') {
        changeAction('Flame Thrower');
      }
    } else if (selectedAction === 'Flame Thrower') {
      if (e.key === 'ArrowDown') {
        changeAction('Surf');
      } else if (e.key === 'ArrowLeft') {
        changeAction('Tackle');
      }
    } else if (selectedAction === 'Hydro Pump') {
      if (e.key === 'ArrowUp') {
        changeAction('Tackle');
      } else if (e.key === 'ArrowRight') {
        changeAction('Surf');
      }
    } else if (selectedAction === 'Surf') {
      if (e.key === 'ArrowUp') {
        changeAction('Flame Thrower');
      } else if (e.key === 'ArrowLeft') {
        changeAction('Hydro Pump');
      }
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedAction]);

  const ActionsList: Actions[] = ['Tackle', 'Flame Thrower', 'Hydro Pump', 'Surf'];
  const RenderActions: JSX.Element[] = [];

  ActionsList.forEach((elem, idx) => {
    (elem === selectedAction)
      ? RenderActions.push(<ActionComponent key={`action-${idx}`} moveName={`ACTIVE ${elem}`} />)
      : RenderActions.push(<ActionComponent key={`action-${idx}`} moveName={`${elem}`} />);
  });

  return (
    <div>
      {RenderActions}
    </div>
  );
};

export default ActionContainer;
