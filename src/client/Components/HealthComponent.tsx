import React from 'react';
import { HealthBarType } from '../../types';

const HealthBox = (props: HealthBarType) => {
  const { health, name } = props;
  return (
    <div className="healthContainer">
      <h2 className="name">{name}</h2>
      <div className="level">Level 50</div>
      <div className="hpBar">
        <progress max="500" value={health} />
        <span>{health}</span>
        /500
      </div>
    </div>
  );
};

export default HealthBox;
