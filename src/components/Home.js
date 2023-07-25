import React from 'react';
import { Link } from 'react-router-dom';
import LifeLeech from '../images/life-leech.gif';
import ManaLeech from '../images/mana-leech.gif';
import Crit from '../images/crit.gif';

const Home = () => {
  return (
    <div>
      <h1 className="title">Imbuement Calculator</h1>
      <ul className="horizontal-links">
        <li>
          <Link to="/life-leech">
            <img
              src={LifeLeech}
              alt="Life Leech"
              style={{ verticalAlign: 'middle', marginRight: '5px' }}
            />
            <br></br>
            <p className="life-leech-index">Life Leech</p>
          </Link>
        </li>
        <li>
          <Link to="/mana-leech">
            <img
              src={ManaLeech}
              alt="Mana Leech"
              style={{ verticalAlign: 'middle', marginRight: '5px' }}
            />
            <br></br>
            <p className="mana-leech-index">Mana Leech</p>
          </Link>
        </li>
        <li>
          <Link to="/crit">
            <img
              src={Crit}
              alt="Crit"
              style={{ verticalAlign: 'middle', marginRight: '5px' }}
            />
            <br></br>
            <p className="crit-index">Crit</p>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
