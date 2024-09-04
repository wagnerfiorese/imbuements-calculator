import React, { useState, useEffect } from 'react';
import { useAppContext } from './AppContext';
import GoldToken from '../images/gold-token.gif';
import ProtectiveCharm from '../images/protective-charm.gif';
import Sabretooth from '../images/sabretooth.gif';
import VexclawTalon from '../images/vexclaw-talon.gif';

const Strike = () => {
  const { goldTokenValue, setGoldTokenValue } = useAppContext();
  const [protectiveCharmValue, setProtectiveCharmValue] = useState(0);
  const [sabretoothValue, setSabretoothValue] = useState(0);
  const [vexclawTalonValue, setVexclawTalonValue] = useState(0);
  const [calculated, setCalculated] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const storedValue = localStorage.getItem('goldTokenValue');
      if (storedValue) {
        setGoldTokenValue(parseFloat(storedValue) || 0); // Converte para número
      }
    }
  }, [setGoldTokenValue]);

  useEffect(() => {
    if (goldTokenValue && protectiveCharmValue && sabretoothValue && vexclawTalonValue) {
      setCalculated(true);
    }
  }, [goldTokenValue, protectiveCharmValue, sabretoothValue, vexclawTalonValue]);

  const formatNumberWithDots = (number) => {
    return number.toLocaleString('en-US');
  };

  const calculateGoldTokenTotal = () => {
    const parsedGoldTokenValue = parseFloat(goldTokenValue);
    return isNaN(parsedGoldTokenValue) ? 0 : parsedGoldTokenValue * 6 + 150000;
  };

  const calculateItemsTotal = () => {
    const parsedProtectiveCharmValue = parseFloat(protectiveCharmValue);
    const parsedSabretoothValue = parseFloat(sabretoothValue);
    const parsedVexclawTalonValue = parseFloat(vexclawTalonValue);

    const totalProtectiveCharmValue = isNaN(parsedProtectiveCharmValue) ? 0 : parsedProtectiveCharmValue * 20;
    const totalSabretoothValue = isNaN(parsedSabretoothValue) ? 0 : parsedSabretoothValue * 25;
    const totalVexclawTalonValue = isNaN(parsedVexclawTalonValue) ? 0 : parsedVexclawTalonValue * 5;

    return totalProtectiveCharmValue + totalSabretoothValue + totalVexclawTalonValue + 150000;
  };

  const goldTokenTotal = calculateGoldTokenTotal();
  const itemsTotal = calculateItemsTotal();
  const comparisonMessage = goldTokenTotal > itemsTotal
    ? "In this case, buying items from the market is a better option."
    : "In this case, buying Gold Tokens is a better option.";

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
            onChange={(e) => {
              const value = e.target.value;
              setGoldTokenValue(value);
              localStorage.setItem('goldTokenValue', value);
            }}
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
            value={protectiveCharmValue}
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
            value={sabretoothValue}
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
            value={vexclawTalonValue}
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
            : {formatNumberWithDots(goldTokenTotal)}
          </p>
          <p>
            Total value using items:{' '}
            {isNaN(itemsTotal) ? '' : formatNumberWithDots(itemsTotal)}
          </p>
          {calculated && (
            <p>
              <b>{comparisonMessage}</b>
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default Strike;
