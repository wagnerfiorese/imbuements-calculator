import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import GoldToken from '../images/gold-token.gif';
import ProtectiveCharm from '../images/protective-charm.gif';
import Sabretooth from '../images/sabretooth.gif';
import VexclawTalon from '../images/vexclaw-talon.gif';

const LifeLeech = () => {
  const [goldTokenValue, setGoldTokenValue] = useState('');
  const [ProtectiveCharmValue, setProtectiveCharmValue] = useState('');
  const [SabretoothValue, setSabretoothValue] = useState('');
  const [VexclawTalonValue, setVexclawTalonValue] = useState('');

  const formatNumberWithDots = (number) => {
    return number.toLocaleString('en-US');
  };

  const calculateGoldTokenTotal = () => {
    const parsedGoldTokenValue = parseFloat(goldTokenValue);
    return isNaN(parsedGoldTokenValue) ? '' : parsedGoldTokenValue * 6 + 450000;
  };

  const calculateItemsTotal = () => {
    const parsedProtectiveCharmValue = parseFloat(ProtectiveCharmValue);
    const parsedSabretoothValue = parseFloat(SabretoothValue);
    const parsedVexclawTalonValue = parseFloat(VexclawTalonValue);

    const totalProtectiveCharmValue = isNaN(parsedProtectiveCharmValue)
      ? 0
      : parsedProtectiveCharmValue * 20;
    const totalSabretoothValue = isNaN(parsedSabretoothValue)
      ? 0
      : parsedSabretoothValue * 25;
    const totalVexclawTalonValue = isNaN(parsedVexclawTalonValue)
      ? 0
      : parsedVexclawTalonValue * 5;

    const totalItemsValue =
      totalProtectiveCharmValue + totalSabretoothValue + totalVexclawTalonValue;
    return totalItemsValue + 450000;
  };

  return (
    <div>
      <h1 className="title-strike">Strike (Crit)</h1>
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
          Protective Charm value{' '}
          <a
            href="https://www.tibiawiki.com.br/wiki/Protective_Charm"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={ProtectiveCharm}
              alt="Protective Charm"
              style={{ verticalAlign: 'middle', marginRight: '5px' }}
            />
          </a>
          :
        </label>
        <input
          type="number"
          value={ProtectiveCharmValue}
          onChange={(e) => setProtectiveCharmValue(e.target.value)}
        />
      </div>
      <div>
        <label>
          Sabretooth value{' '}
          <a
            href="https://www.tibiawiki.com.br/wiki/Sabretooth_(Item)"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={Sabretooth}
              alt="Sabretooth"
              style={{ verticalAlign: 'middle', marginRight: '5px' }}
            />
          </a>
          :
        </label>
        <input
          type="number"
          value={SabretoothValue}
          onChange={(e) => setSabretoothValue(e.target.value)}
        />
      </div>
      <div>
        <label>
          Vexclaw Talon value{' '}
          <a
            href="https://www.tibiawiki.com.br/wiki/Vexclaw_Talon"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={VexclawTalon}
              alt="Vexclaw Talon"
              style={{ verticalAlign: 'middle', marginRight: '5px' }}
            />
          </a>
          :
        </label>
        <input
          type="number"
          value={VexclawTalonValue}
          onChange={(e) => setVexclawTalonValue(e.target.value)}
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
        <Link to="/void">
          <button>Void</button>
        </Link>
      </ul>
    </div>
  );
};

export default LifeLeech;
