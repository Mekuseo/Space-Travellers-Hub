import { useSelector } from 'react-redux';
import RenderRocket from './Render_rocket';

function Rockets() {
  const rocket = useSelector((state) => state.Rocket.rockets);
  return (
    <div>
      {rocket.map((rocket) => (
        <RenderRocket
          key={rocket.id}
          id={rocket.id}
          image={rocket.images[0]}
          name={rocket.rocket_name}
          desc={rocket.description}
          reserved={rocket.reserve}
        />
      ))}
    </div>
  );
}

export default Rockets;
