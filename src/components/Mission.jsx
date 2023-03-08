import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchmission } from '../redux/Mission/missionSlice';

function Mission() {
  const mission = useSelector((state) => state.Mission.mission);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchmission());
  }, [dispatch]);
  return (
    <div className="mii">
      {mission.map((miss) => (
        <div className="amission" key={miss.id}>
          <h3>{miss.name}</h3>
          <div className="text">
            {miss.description}
          </div>
          <div className="status">
            <p>{miss.member ? <span>active member</span> : <span> not a member </span> }</p>
            <div className="btn">
              {miss.member
                ? <button type="button"> leave mission </button>
                : <button type="button"> join mission </button>}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Mission;
