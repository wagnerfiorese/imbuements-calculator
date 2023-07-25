import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1 className="title">Imbuement Calculator</h1>
      <ul className="horizontal-links">
        <li>
          <Link to="/life-leech">
            <img
              src="/images/life-leech.gif"
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
              src="/images/mana-leech.gif"
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
              src="/images/crit.gif"
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
