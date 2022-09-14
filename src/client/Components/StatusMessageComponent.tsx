import React from 'react';
import { StatusMessageProps } from '../../types';

const StatusMessageComponent = (props: StatusMessageProps) => {
  const { statusMessage } = props;
  return (
    <div>
      { statusMessage }
    </div>
  );
};

export default StatusMessageComponent;
