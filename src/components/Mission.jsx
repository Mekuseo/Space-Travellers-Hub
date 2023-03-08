import { useSelector } from 'react-redux';

function Mission() {
  const mission = useSelector((state) => state.Mission.mission);
  return (
    <div className="mii">
      mission page
    </div>
  );
}

export default Mission;
