import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import ActionComponent from '../Components/ActionComponent';
import { ActionContainerProps, Actions } from '../../types';
import { resetStatus, playerAttack } from '../Store/actions';

const ActionContainer = (props: ActionContainerProps) => {
  const [selectedAction, changeAction] = useState<Actions>('Tackle');
  const dispatch = useDispatch();
  const { player, isGameOver } = props;

  //  Handling event for key presses. Moves in a 2x2 grid. Press Enter to enact
  const handleKeyDown = (e: KeyboardEvent) => {
    if (player === 2 || isGameOver) {
      return;
    } else if (e.key === 'Enter') {
      dispatch(playerAttack(
        {
          message: `Squirtle used ${selectedAction}!`,
          moveName: selectedAction,
          player: 1,
        },
      ));
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

  //  Key event listener. Remove event listener whent this component is unmounted
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedAction, player]);

  //  When player 2, automate mew two moves
  useEffect(() => {
    if (player === 2) {
      setTimeout(() => {
        dispatch(playerAttack(
          {
            message: 'Mew Two used Psybeam!',
            moveName: 'Psybeam',
            player: 2,
          },
        ));
        playerAttack({
          message: 'Mew Two used Psybeam!',
          moveName: 'Psybeam',
          player: 2,
        });
        setTimeout(() => dispatch(resetStatus()), 2500);
      }, 2500);
    }
  }, [player]);

  const ActionsList: Actions[] = ['Tackle', 'Flame Thrower', 'Hydro Pump', 'Surf'];
  const RenderActions: JSX.Element[] = [];

  ActionsList.forEach((elem, idx) => {
    (elem === selectedAction)
      ? RenderActions.push(<ActionComponent key={`action-${idx}`} id="Active" moveName={`${elem}`} />)
      : RenderActions.push(<ActionComponent key={`action-${idx}`} id="Inactive" moveName={`${elem}`} />);
  });

  return (
    <div className="ActionContainer" id={`ActionOnTurn${player}`}>
      {RenderActions}
    </div>
  );
};

export default ActionContainer;
