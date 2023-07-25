import React from 'react';
import { Link } from 'react-router-dom';
import Vampirism from '../images/vampirism.gif';
import Void from '../images/void.gif';
import Strike from '../images/strike.gif';

const Home = () => {
  return (
    <div>
      <h1 className="title">Imbuement Calculator</h1>
      <ul className="horizontal-links">
        <li>
          <Link to="/vampirism">
            <img
              src={Vampirism}
              alt="Vampirism"
              style={{ verticalAlign: 'middle', marginRight: '5px' }}
            />
            <br></br>
            <p className="vampirism-index">Vampirism</p>
          </Link>
        </li>
        <li>
          <Link to="/void">
            <img
              src={Void}
              alt="Void"
              style={{ verticalAlign: 'middle', marginRight: '5px' }}
            />
            <br></br>
            <p className="void-index">Void</p>
          </Link>
        </li>
        <li>
          <Link to="/strike">
            <img
              src={Strike}
              alt="Strike"
              style={{ verticalAlign: 'middle', marginRight: '5px' }}
            />
            <br></br>
            <p className="strike-index">Strike</p>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
