import React from 'react';
import { ActionProps } from '../../types';

const ActionComponent = (props: ActionProps): JSX.Element => {
  const { moveName } = props;
  return (
    <div>
      <button type="button" className={`${moveName}Button`}>
        { moveName }
      </button>
    </div>
  );
};

export default ActionComponent;
