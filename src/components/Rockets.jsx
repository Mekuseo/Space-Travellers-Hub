import React from 'react';
import { useSelector } from 'react-redux';

function Rockets() {
  const list = useSelector((state) => state.Rocket.rockets);
  return (
    <div className="mii">
      <ul>
        {list.map((lee) => (
          <li key={Math.floor(Math.random() * 1000)}>{lee}</li>
        ))}
      </ul>
    </div>
  );
}

export default Rockets;
