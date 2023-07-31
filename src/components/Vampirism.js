import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import GoldToken from '../images/gold-token.gif';
import VampireTeeth from '../images/vampire-teeth.gif';
import BloodyPincers from '../images/bloody-pincers.gif';
import DeadBrain from '../images/piece-of-dead-brain.gif';

const Vampirism = () => {
  const [goldTokenValue, setGoldTokenValue] = useState('');
  const [vampireTeethValue, setVampireTeethValue] = useState('');
  const [bloodyPincersValue, setBloodyPincersValue] = useState('');
  const [deadBrainValue, setDeadBrainValue] = useState('');

  // Recuperar o valor do localStorage (se houver) quando a página for carregada
  useEffect(() => {
    const storedValue = localStorage.getItem('goldTokenValue');
    if (storedValue) {
      setGoldTokenValue(storedValue);
    }
  }, []);

  // Salvar o valor no localStorage sempre que ele for alterado
  useEffect(() => {
    localStorage.setItem('goldTokenValue', goldTokenValue);
  }, [goldTokenValue]);

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
        <div>
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
        <div>
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

export default Vampirism;
