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
    return number.toLocaleString('pt-BR');
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
      <h1 className="title-mana-leech">Mana Leech</h1>
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
            src={RopeBelt}
            alt="Rope Belt"
            style={{ verticalAlign: 'middle', marginRight: '5px' }}
          />
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
          Valor do{' '}
          <img
            src={SilencerClaws}
            alt="Silencer Claws"
            style={{ verticalAlign: 'middle', marginRight: '5px' }}
          />
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
          Valor do{' '}
          <img
            src={GrimeleechWings}
            alt="Grimeleech Wings"
            style={{ verticalAlign: 'middle', marginRight: '5px' }}
          />
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
        <Link to="/life-leech">Life Leech</Link>
        <br></br>
        <Link to="/crit">Crit</Link>
      </ul>
    </div>
  );
};

export default LifeLeech;
