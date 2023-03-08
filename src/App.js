import { Route, Routes } from 'react-router-dom';
import './App.css';
import Mission from './components/Mission';
import Navbar from './components/navbar';
import Profile from './components/Profile';
import Rockets from './components/Rockets';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="mission" element={<Mission />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
