import { useState } from 'react';
import './App.css';
import { CgMenu, CgClose } from 'react-icons/cg';

function App() {
  const [MenuIcon, SetMenuIcon] = useState(false);
  return (
    <>

      <div className={MenuIcon ? " navbar active" : "navbar"}>

        <ul className='navbar-list'>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>

        <div className="mobile-navbar-btn">
          <CgMenu className="mobile-nav-icon menu-outline"


            onClick={() => { SetMenuIcon(true) }}
          />
          <CgClose className="mobile-nav-icon close-outline"

            onClick={() => { SetMenuIcon(false) }}
          />
        </div>




      </div>
    </>
  );
}

export default App;
