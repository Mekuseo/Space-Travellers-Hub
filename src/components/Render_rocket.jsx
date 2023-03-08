import React from 'react';
import PropTypes from 'prop-types';

function RenderRocket({
  image, name, desc, reserved,
}) {
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
        <button type="submit">
          {reserved ? 'Cancel Reservation' : 'reserve rocket'}
        </button>
      </div>
    </div>
  );
}

RenderRocket.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  reserved: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default RenderRocket;
