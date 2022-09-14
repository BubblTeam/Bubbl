import React from 'react';

export default function HealthBox() {
  return (
    <div className="healthContainer">
      <h2 className="name">Squirtle</h2>
      <div className="level">Level 1</div>
      <div className="hpBar">
        <progress max="500" value="300" />
        <span>500</span>
        /500
      </div>
    </div>
  );
}
