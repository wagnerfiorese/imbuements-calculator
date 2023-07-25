import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
    return isNaN(parsedGoldTokenValue)
      ? ''
      : parsedGoldTokenValue * 18 + 450000;
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
      : parsedSilencerClawsValue * 15;
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
            src="/images/gold-token.gif"
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
            src="/images/rope-belt.gif"
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
            src="/images/silencer-claws.gif"
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
            src="/images/grimeleech-wings.gif"
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
            src="/images/gold-token.gif"
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
        <Link to="/">Voltar para página inicial</Link>
        <br></br>
        <Link to="/life-leech">Life Leech</Link>
        <br></br>
        <Link to="/crit">Crit</Link>
      </ul>
    </div>
  );
};

export default LifeLeech;
