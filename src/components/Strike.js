import React, { useState } from 'react';
import { useAppContext } from './AppContext';
import GoldToken from '../images/gold-token.gif';
import ProtectiveCharm from '../images/protective-charm.gif';
import Sabretooth from '../images/sabretooth.gif';
import VexclawTalon from '../images/vexclaw-talon.gif';

const Strike = () => {
  const { goldTokenValue, setGoldTokenValue } = useAppContext();
  const [ProtectiveCharmValue, setProtectiveCharmValue] = useState('');
  const [SabretoothValue, setSabretoothValue] = useState('');
  const [VexclawTalonValue, setVexclawTalonValue] = useState('');

  useState(() => {
    const storedValue = localStorage.getItem('goldTokenValue');
    if (storedValue) {
      setGoldTokenValue(storedValue);
    }
  }, []);

  const formatNumberWithDots = (number) => {
    return number.toLocaleString('en-US');
  };

  const calculateGoldTokenTotal = () => {
    const parsedGoldTokenValue = parseFloat(goldTokenValue);
    return isNaN(parsedGoldTokenValue) ? '' : parsedGoldTokenValue * 6 + 150000;
  };

  const calculateItemsTotal = () => {
    const parsedProtectiveCharmValue = parseFloat(ProtectiveCharmValue);
    const parsedSabretoothValue = parseFloat(SabretoothValue);
    const parsedVexclawTalonValue = parseFloat(VexclawTalonValue);
    const allFieldsFilled =
      !isNaN(parsedProtectiveCharmValue) &&
      !isNaN(parsedSabretoothValue) &&
      !isNaN(parsedVexclawTalonValue);

    const totalProtectiveCharmValue = isNaN(parsedProtectiveCharmValue)
      ? 0
      : parsedProtectiveCharmValue * 20;
    const totalSabretoothValue = isNaN(parsedSabretoothValue)
      ? 0
      : parsedSabretoothValue * 25;
    const totalVexclawTalonValue = isNaN(parsedVexclawTalonValue)
      ? 0
      : parsedVexclawTalonValue * 5;

    const totalItemsValue = allFieldsFilled
      ? totalProtectiveCharmValue +
        totalSabretoothValue +
        totalVexclawTalonValue +
        150000
      : totalProtectiveCharmValue +
        totalSabretoothValue +
        totalVexclawTalonValue;

    return totalItemsValue;
  };

  return (
    <>
      <h1 className="title-strike">Strike (Crit)</h1>
      <div className="container">
        <div>
          <label>
            Gold Token value (6x){' '}
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
            Protective Charm value (20x){' '}
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
            Sabretooth value (25x){' '}
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
            Vexclaw Talon value (5x){' '}
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
            Total value using items:{' '}
            {isNaN(calculateItemsTotal())
              ? ''
              : formatNumberWithDots(calculateItemsTotal())}
          </p>
        </div>
      </div>
    </>
  );
};

export default Strike;
