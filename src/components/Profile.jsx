import React from 'react';
import { useSelector } from 'react-redux';

function Profile() {
  const rocket = useSelector((state) => state.Rocket.rockets);
  const reserved = rocket.filter((rock) => rock.reserve === true);
  return (
    <div className="proof">
      <ul className="reserve">
        {reserved.map((reserve) => (
          <li key={reserve.id}>
            {reserve.rocket_name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Profile;
