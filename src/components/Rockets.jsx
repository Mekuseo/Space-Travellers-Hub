import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RocketApi } from '../redux/Rockets/RocketSlice';

function Rockets() {
  const dispatch = useDispatch();
  const rocket = useSelector((state) => state.Rocket.rockets);
  useEffect(() => {
    dispatch((RocketApi()));
  }, [dispatch]);
  console.log(rocket);
  return (
    <div>
      Rocket
    </div>
  );
}

export default Rockets;
