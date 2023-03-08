import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { cancel, reserve } from '../redux/Rockets/RocketSlice';

function RenderRocket({ id, image, name, desc, reserved,}) {
    const dispatch = useDispatch()
 const handlecancel = () => {
   dispatch((cancel(id)))
 }
 const handlereserve = () => {
   dispatch((reserve(id)))
 }

  return (
    <div className="each">
      <div className="image">
        <img src={image} alt="" />
      </div>
      <div className="text">
        <h3>{name}</h3>
        <p>
          {reserved ? <span className="reserve"> reserved </span> : null}
          {desc}
        </p>
         {reserved ? <button type="button" onClick={() => handlecancel(id)}>Cancel Reservation</button> : <button type="button" onClick={() => handlereserve(id)}>reserve rocket</button> }
      </div>
    </div>
  );
}

RenderRocket.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
  desc: PropTypes.string.isRequired,
};

export default RenderRocket;
