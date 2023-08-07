import React, { useState } from 'react';
import { useAppContext } from './AppContext';
import GoldToken from '../images/gold-token.gif';
import RopeBelt from '../images/rope-belt.gif';
import SilencerClaws from '../images/silencer-claws.gif';
import GrimeleechWings from '../images/grimeleech-wings.gif';

const Void = () => {
  const { goldTokenValue, setGoldTokenValue } = useAppContext();
  const [RopeBeltValue, setRopeBeltValue] = useState('');
  const [SilencerClawsValue, setSilencerClawsValue] = useState('');
  const [GrimeleechWingsValue, setGrimeleechWingsValue] = useState('');

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
    const parsedRopeBeltValue = parseFloat(RopeBeltValue);
    const parsedSilencerClawsValue = parseFloat(SilencerClawsValue);
    const parsedGrimeleechWingsValue = parseFloat(GrimeleechWingsValue);
    const allFieldsFilled =
      !isNaN(parsedRopeBeltValue) &&
      !isNaN(parsedSilencerClawsValue) &&
      !isNaN(parsedGrimeleechWingsValue);

    const totalRopeBeltValue = isNaN(parsedRopeBeltValue)
      ? 0
      : parsedRopeBeltValue * 25;
    const totalSilencerClawsValue = isNaN(parsedSilencerClawsValue)
      ? 0
      : parsedSilencerClawsValue * 25;
    const totalGrimeleechWingsValue = isNaN(parsedGrimeleechWingsValue)
      ? 0
      : parsedGrimeleechWingsValue * 5;

    const totalItemsValue = allFieldsFilled
      ? totalRopeBeltValue +
        totalSilencerClawsValue +
        totalGrimeleechWingsValue +
        150000
      : totalRopeBeltValue +
        totalSilencerClawsValue +
        totalGrimeleechWingsValue;

    return totalItemsValue;
  };

  return (
    <>
      <h1 className="title-void">Void (Mana Leech)</h1>
      <div className="container">
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

export default Void;
