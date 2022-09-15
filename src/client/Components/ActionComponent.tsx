import React from 'react';
import { ActionProps } from '../../types';

const ActionComponent = (props: ActionProps): JSX.Element => {
  const { moveName, id } = props;
  return (
    <div className="ActionComponent">
      <button type="button" id={id} className={`${moveName}Button`}>
        { moveName }
      </button>
    </div>
  );
};

export default ActionComponent;
