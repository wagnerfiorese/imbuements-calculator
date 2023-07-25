import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import GoldToken from '../images/gold-token.gif';
import RopeBelt from '../images/rope-belt.gif';
import SilencerClaws from '../images/silencer-claws.gif';
import GrimeleechWings from '../images/grimeleech-wings.gif';

const LifeLeech = () => {
  const [goldTokenValue, setGoldTokenValue] = useState('');
  const [RopeBeltValue, setRopeBeltValue] = useState('');
  const [SilencerClawsValue, setSilencerClawsValue] = useState('');
  const [GrimeleechWingsValue, setGrimeleechWingsValue] = useState('');

  const formatNumberWithDots = (number) => {
    return number.toLocaleString('en-US');
  };

  const calculateGoldTokenTotal = () => {
    const parsedGoldTokenValue = parseFloat(goldTokenValue);
    return isNaN(parsedGoldTokenValue) ? '' : parsedGoldTokenValue * 6 + 450000;
  };

  const calculateItemsTotal = () => {
    const parsedRopeBeltValue = parseFloat(RopeBeltValue);
    const parsedSilencerClawsValue = parseFloat(SilencerClawsValue);
    const parsedGrimeleechWingsValue = parseFloat(GrimeleechWingsValue);

    const totalRopeBeltValue = isNaN(parsedRopeBeltValue)
      ? 0
      : parsedRopeBeltValue * 25;
    const totalSilencerClawsValue = isNaN(parsedSilencerClawsValue)
      ? 0
      : parsedSilencerClawsValue * 25;
    const totalGrimeleechWingsValue = isNaN(parsedGrimeleechWingsValue)
      ? 0
      : parsedGrimeleechWingsValue * 5;

    const totalItemsValue =
      totalRopeBeltValue + totalSilencerClawsValue + totalGrimeleechWingsValue;
    return totalItemsValue + 450000;
  };

  return (
    <div>
      <h1 className="title-void">Void (Mana Leech)</h1>
      <div>
        <label>
          Gold Token value{' '}
          <a
            href="https://www.tibiawiki.com.br/wiki/Gold_Token"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={GoldToken}
              alt="Gold Token"
              style={{ verticalAlign: 'middle', marginRight: '5px' }}
            />
          </a>
          :
        </label>
        <input
          type="number"
          value={goldTokenValue}
          onChange={(e) => setGoldTokenValue(e.target.value)}
        />
      </div>
      <div>
        <label>
          Rope Belt value{' '}
          <a
            href="https://www.tibiawiki.com.br/wiki/Rope_Belt"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={RopeBelt}
              alt="Rope Belt"
              style={{ verticalAlign: 'middle', marginRight: '5px' }}
            />
          </a>
          :
        </label>
        <input
          type="number"
          value={RopeBeltValue}
          onChange={(e) => setRopeBeltValue(e.target.value)}
        />
      </div>
      <div>
        <label>
          Silencer Claws value{' '}
          <a
            href="https://www.tibiawiki.com.br/wiki/Silencer_Claws"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={SilencerClaws}
              alt="Silencer Claws"
              style={{ verticalAlign: 'middle', marginRight: '5px' }}
            />
          </a>
          :
        </label>
        <input
          type="number"
          value={SilencerClawsValue}
          onChange={(e) => setSilencerClawsValue(e.target.value)}
        />
      </div>
      <div>
        <label>
          Grimeleech Wings value{' '}
          <a
            href="https://www.tibiawiki.com.br/wiki/Some_Grimeleech_Wings"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={GrimeleechWings}
              alt="Grimeleech Wings"
              style={{ verticalAlign: 'middle', marginRight: '5px' }}
            />
          </a>
          :
        </label>
        <input
          type="number"
          value={GrimeleechWingsValue}
          onChange={(e) => setGrimeleechWingsValue(e.target.value)}
        />
      </div>
      <div>
        <p>
          Total value using Gold Token{' '}
          <a
            href="https://www.tibiawiki.com.br/wiki/Gold_Token"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={GoldToken}
              alt="Gold Token"
              style={{ verticalAlign: 'middle', marginRight: '5px' }}
            />
          </a>
          : {formatNumberWithDots(calculateGoldTokenTotal())}
        </p>
        <p>
          Total value using itens:{' '}
          {isNaN(calculateItemsTotal())
            ? ''
            : formatNumberWithDots(calculateItemsTotal())}
        </p>
      </div>
      <ul className="horizontal-buttons">
        <Link to="/imbuements-calculator">
          <button>Home Page</button>
        </Link>
        <br></br>
        <Link to="/vampirism">
          <button>Vampirism</button>
        </Link>
        <br></br>
        <Link to="/strike">
          <button>Strike</button>
        </Link>
      </ul>
    </div>
  );
};

export default LifeLeech;
