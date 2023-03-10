import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cancel } from '../redux/Rockets/RocketSlice';

function MissionProfile() {
  const activeMissions = useSelector(
    (state) => state.Mission.missions.filter((mission) => mission.member),
  );
  const dispatch = useDispatch();

  const handleCancel = (id) => {
    dispatch(cancel(id));
  };

  return (
    <div className="profile">
      <h2>My Mission</h2>
      <div className="proof">
        {activeMissions.length === 0 ? (
          <p className="center">No missions available. Join a mission now!</p>
        ) : (
          <ul className="reserve">
            {activeMissions.map((mission) => (
              <li key={mission.id}>
                <p>{mission.name}</p>
                <a href={mission.link}>see more</a>
                <button type="button" onClick={() => handleCancel(mission.id)}>Cancel Mission</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default MissionProfile;
