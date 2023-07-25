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
    return number.toLocaleString('pt-BR');
  };

  const calculateGoldTokenTotal = () => {
    const parsedGoldTokenValue = parseFloat(goldTokenValue);
    return isNaN(parsedGoldTokenValue) ? '' : parsedGoldTokenValue * 6 + 450000;
  };

  const calculateItemsTotal = () => {
    const parsedVampireTeethValue = parseFloat(vampireTeethValue);
    const parsedBloodyPincersValue = parseFloat(bloodyPincersValue);
    const parsedDeadBrainValue = parseFloat(deadBrainValue);

    const totalVampireTeethValue = isNaN(parsedVampireTeethValue)
      ? 0
      : parsedVampireTeethValue * 25;
    const totalBloodyPincersValue = isNaN(parsedBloodyPincersValue)
      ? 0
      : parsedBloodyPincersValue * 15;
    const totalDeadBrainValue = isNaN(parsedDeadBrainValue)
      ? 0
      : parsedDeadBrainValue * 5;

    const totalItemsValue =
      totalVampireTeethValue + totalBloodyPincersValue + totalDeadBrainValue;
    return totalItemsValue + 450000;
  };

  return (
    <div>
      <h1 className="title-life-leech">Life Leech </h1>
      <div>
        <label>
          Valor do{' '}
          <img
            src={GoldToken}
            alt="Gold Token"
            style={{ verticalAlign: 'middle', marginRight: '5px' }}
          />
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
          Valor do{' '}
          <img
            src={VampireTeeth}
            alt="Vampire Teeth"
            style={{ verticalAlign: 'middle', marginRight: '5px' }}
          />
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
          Valor do{' '}
          <img
            src={BloodyPincers}
            alt="Bloody Pincers"
            style={{ verticalAlign: 'middle', marginRight: '5px' }}
          />
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
          Valor do{' '}
          <img
            src={DeadBrain}
            alt="Piece of Dead Brain"
            style={{ verticalAlign: 'middle', marginRight: '5px' }}
          />
          :
        </label>
        <input
          type="number"
          value={deadBrainValue}
          onChange={(e) => setDeadBrainValue(e.target.value)}
        />
      </div>
      <div>
        <p>
          Valor total usando{' '}
          <img
            src={GoldToken}
            alt="Gold Token"
            style={{ verticalAlign: 'middle', marginRight: '5px' }}
          />
          : {formatNumberWithDots(calculateGoldTokenTotal())}
        </p>
        <p>
          Valor total usando itens:{' '}
          {isNaN(calculateItemsTotal())
            ? ''
            : formatNumberWithDots(calculateItemsTotal())}
        </p>
      </div>
      <ul>
        <Link to="/imbuements-calculator">Voltar para página inicial</Link>
        <br></br>
        <Link to="/mana-leech">Mana Leech</Link>
        <br></br>
        <Link to="/crit">Crit</Link>
      </ul>
    </div>
  );
};

export default LifeLeech;
