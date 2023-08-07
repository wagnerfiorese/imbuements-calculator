import React, { useState } from 'react';
import Vampirism from './Vampirism';
import Void from './Void';
import Strike from './Strike';
import VampirismIcon from '../images/vampirism.gif';
import VoidIcon from '../images/void.gif';
import StrikeIcon from '../images/strike.gif';

const Home = () => {
  const [currentComponent, setCurrentComponent] = useState(null);

  const handleButtonClick = (component) => {
    setCurrentComponent(component);
  };

  return (
    <div>
      <div>
        <h1 className="title">Imbuement Calculator</h1>
        <ul className="horizontal-links">
          <li>
            <button onClick={() => handleButtonClick('Vampirism')}>
              <img
                src={VampirismIcon}
                alt="Vampirism"
                style={{ verticalAlign: 'middle' }}
              />
              <br />
              <p className="vampirism-index">Vampirism</p>
            </button>
          </li>
          <li>
            <button onClick={() => handleButtonClick('Void')}>
              <img
                src={VoidIcon}
                alt="Void"
                style={{ verticalAlign: 'middle' }}
              />
              <br />
              <p className="void-index">Void</p>
            </button>
          </li>
          <li>
            <button onClick={() => handleButtonClick('Strike')}>
              <img
                src={StrikeIcon}
                alt="Strike"
                style={{ verticalAlign: 'middle' }}
              />
              <br />
              <p className="strike-index">Strike</p>
            </button>
          </li>
        </ul>
      </div>
      {currentComponent === 'Vampirism' && <Vampirism />}
      {currentComponent === 'Void' && <Void />}
      {currentComponent === 'Strike' && <Strike />}
    </div>
  );
};

export default Home;
