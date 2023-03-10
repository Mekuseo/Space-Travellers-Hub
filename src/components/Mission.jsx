import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { joinMission, leaveMission } from '../redux/Mission/missionSlice';
import { cancel } from '../redux/Rockets/RocketSlice';

function Mission() {
  const missions = useSelector((state) => state.Mission.missions);
  const dispatch = useDispatch();

  const handleJoinMission = (id) => {
    dispatch(joinMission(id));
    dispatch(cancel(id));
  };

  const handleLeaveMission = (id) => {
    dispatch(leaveMission(id));
  };

  return (
    <div className="mii">
      <table>
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <tr key={mission.id}>
              <td>{mission.name}</td>
              <td>{mission.description}</td>
              <td>
                {mission.member ? <span>Active member</span> : <span>Not a member</span>}
              </td>
              <td>
                {mission.member ? (
                  <button
                    type="button"
                    onClick={() => handleLeaveMission(mission.id)}
                  >
                    Leave Mission
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => handleJoinMission(mission.id)}
                  >
                    Join Mission
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Mission;
