import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cancel } from '../redux/Rockets/RocketSlice';
import MissionProfile from './MissionProfile';

function Profile() {
  const rocket = useSelector((state) => state.Rocket.rockets);
  const reserved = rocket.filter((rock) => rock.reserve === true);
  const leng = reserved.length;
  const dispatch = useDispatch();
  const handlecancel = (id) => {
    dispatch(cancel(id));
  };
  return (
    <div>
      <div className="profile">
        <h2>My Rockets</h2>
        <div className="proof">
          {leng === 0 ? <p className="center">oh! no rocket reserved, please reserve a rocket</p> : (
            <ul className="reserve">
              {reserved.map((reserve) => (
                <li key={reserve.id}>
                  <p>{reserve.rocket_name}</p>
                  <a href={reserve.link}> see more</a>
                  <button type="button" onClick={() => handlecancel(reserve.id)}>cancel reserve</button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <MissionProfile />
    </div>
  );
}

export default Profile;
