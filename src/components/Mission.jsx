import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { joinMission } from "../redux/Mission/missionSlice";
import { cancel } from "../redux/Rockets/RocketSlice";

function Mission() {
  const missions = useSelector((state) => state.Mission.missions);
  const rockets = useSelector((state) => state.Rocket.rockets);
  const dispatch = useDispatch();

  const handleJoinMission = (id) => {
    dispatch(joinMission(id));
    dispatch(cancel(id));
  };

  const handleCancelReservation = (id) => {
    dispatch(cancel(id));
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
          {missions.map((mission) => {
            const rocket = rockets.find(
              (r) => r.reserved && r.mission_id === mission.id
            );
            return (
              <tr key={mission.id}>
                <td>{mission.name}</td>
                <td>{mission.description}</td>
                <td>
                  {rocket ? (
                    <span>{rocket.rocket_name} - Reserved</span>
                  ) : mission.member ? (
                    <span>Active member</span>
                  ) : (
                    <span>Not a member</span>
                  )}
                </td>
                <td>
                  {rocket ? (
                    <button
                      type="button"
                      onClick={() => handleCancelReservation(rocket.id)}
                    >
                      Cancel Reservation
                    </button>
                  ) : mission.member ? (
                    <button type="button">Leave Mission</button>
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
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Mission;
