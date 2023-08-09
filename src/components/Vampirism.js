import React, { useState } from 'react';
import { useAppContext } from './AppContext';
import GoldToken from '../images/gold-token.gif';
import VampireTeeth from '../images/vampire-teeth.gif';
import BloodyPincers from '../images/bloody-pincers.gif';
import DeadBrain from '../images/piece-of-dead-brain.gif';

const Vampirism = () => {
  const { goldTokenValue, setGoldTokenValue } = useAppContext();
  const [vampireTeethValue, setVampireTeethValue] = useState('');
  const [bloodyPincersValue, setBloodyPincersValue] = useState('');
  const [deadBrainValue, setDeadBrainValue] = useState('');

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
    const parsedVampireTeethValue = parseFloat(vampireTeethValue);
    const parsedBloodyPincersValue = parseFloat(bloodyPincersValue);
    const parsedDeadBrainValue = parseFloat(deadBrainValue);
    const allFieldsFilled =
      !isNaN(parsedVampireTeethValue) &&
      !isNaN(parsedBloodyPincersValue) &&
      !isNaN(parsedDeadBrainValue);

    const totalVampireTeethValue = isNaN(parsedVampireTeethValue)
      ? 0
      : parsedVampireTeethValue * 25;
    const totalBloodyPincersValue = isNaN(parsedBloodyPincersValue)
      ? 0
      : parsedBloodyPincersValue * 15;
    const totalDeadBrainValue = isNaN(parsedDeadBrainValue)
      ? 0
      : parsedDeadBrainValue * 5;

    const totalItemsValue = allFieldsFilled
      ? totalVampireTeethValue +
        totalBloodyPincersValue +
        totalDeadBrainValue +
        150000
      : totalVampireTeethValue + totalBloodyPincersValue + totalDeadBrainValue;

    return totalItemsValue;
  };

  return (
    <>
      <h1 className="title-vampirism">Vampirism (Life Leech) </h1>
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
            Vampire Teeth value (25x){' '}
            <a
              href="https://www.tibiawiki.com.br/wiki/Vampire_Teeth"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={VampireTeeth}
                alt="Vampire Teeth"
                style={{ verticalAlign: 'middle', marginRight: '5px' }}
              />
            </a>
            :
          </label>
          <input
            type="number"
            value={vampireTeethValue}
            onChange={(e) => setVampireTeethValue(e.target.value)}
          />
        </div>
        <div>
          <label>
            Bloody Pincers value (15x){' '}
            <a
              href="https://www.tibiawiki.com.br/wiki/Bloody_Pincers"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={BloodyPincers}
                alt="Bloody Pincers"
                style={{ verticalAlign: 'middle', marginRight: '5px' }}
              />
            </a>
            :
          </label>
          <input
            type="number"
            value={bloodyPincersValue}
            onChange={(e) => setBloodyPincersValue(e.target.value)}
          />
        </div>
        <div>
          <label>
            Piece of Dead Brain value (5x){' '}
            <a
              href="https://www.tibiawiki.com.br/wiki/Piece_of_Dead_Brain"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={DeadBrain}
                alt="Piece of Dead Brain"
                style={{ verticalAlign: 'middle', marginRight: '5px' }}
              />
            </a>
            :
          </label>
          <input
            type="number"
            value={deadBrainValue}
            onChange={(e) => setDeadBrainValue(e.target.value)}
          />
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

export default Vampirism;
