import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RocketApi } from '../redux/Rockets/RocketSlice';
import RenderRocket from './Render_rocket';

function Rockets() {
  const dispatch = useDispatch();
  const rocket = useSelector((state) => state.Rocket.rockets);
  useEffect(() => {
    dispatch((RocketApi()));
  }, [dispatch]);
  return (
    <div>
      {rocket.map((rocket) => (
        <RenderRocket
          key={rocket.id}
          id={rocket.id}
          image={rocket.images[0]}
          name={rocket.rocket_name}
          desc={rocket.description}
          reserved={rocket.reserved}
        />
      ))}
    </div>
  );
}

export default Rockets;
