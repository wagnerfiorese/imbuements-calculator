import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import GoldToken from '../images/gold-token.gif';
import VampireTeeth from '../images/vampire-teeth.gif';
import BloodyPincers from '../images/bloody-pincers.gif';
import DeadBrain from '../images/piece-of-dead-brain.gif';

const LifeLeech = () => {
  const [goldTokenValue, setGoldTokenValue] = useState('');
  const [vampireTeethValue, setVampireTeethValue] = useState('');
  const [bloodyPincersValue, setBloodyPincersValue] = useState('');
  const [deadBrainValue, setDeadBrainValue] = useState('');

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
      <h1 className="title-vampirism">Vampirism (Life Leech) (TEST) </h1>
      <div className="container">
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: '10px',
          }}
        >
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
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: '10px',
          }}
        >
          <label>
            Vampire Teeth value{' '}
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
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: '10px',
          }}
        >
          <label>
            Bloody Pincers value{' '}
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
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: '10px',
          }}
        >
          <label>
            Piece of Dead Brain value{' '}
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
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginBottom: '10px',
          }}
        >
          <label>
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
          </label>
          <label>
            Total value using itens:{' '}
            {isNaN(calculateItemsTotal())
              ? ''
              : formatNumberWithDots(calculateItemsTotal())}
          </label>
        </div>
        <div>
          <ul className="horizontal-buttons">
            <Link to="/imbuements-calculator">
              <button>Home Page</button>
            </Link>
            <Link to="/void">
              <button>Void</button>
            </Link>
            <Link to="/strike">
              <button>Strike</button>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
};

export default LifeLeech;
