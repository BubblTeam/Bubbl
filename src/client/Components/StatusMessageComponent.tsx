import React from 'react';
import { StatusMessageProps } from '../../types';

const StatusMessageComponent = (props: StatusMessageProps) => {
  const { statusMessage } = props;
  return (
    <div className="StatusMessageComponent">
      { statusMessage }
    </div>
  );
};

export default StatusMessageComponent;
