import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [menu, setMenu] = useState(false);
  const changebar = () => { setMenu(!menu); };
  return (
    <nav>
      <div className="logo">
        <Link to="/"> Space X</Link>
      </div>

      <div className="menubar" onClick={changebar} onKeyDown={changebar} role="none">
        {menu ? <i className="fa-solid fa-x" /> : <i className="fa-solid fa-bars" /> }
      </div>

      <ul
        onClick={() => setMenu(false)}
        onKeyDown={() => setMenu(false)}
        role="none"
        className={menu ? 'show' : 'hide'}
      >
        <li>
          <Link to="/"> Rocket </Link>
        </li>
        <li>
          <Link to="mission"> Mission </Link>
        </li>

        <li>
          <Link to="profile"> Profile </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
