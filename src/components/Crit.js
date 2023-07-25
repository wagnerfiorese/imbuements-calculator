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
    return number.toLocaleString('pt-BR');
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
      <h1 className="title-crit">Crit</h1>
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
            src={ProtectiveCharm}
            alt="Protective Charm"
            style={{ verticalAlign: 'middle', marginRight: '5px' }}
          />
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
          Valor do{' '}
          <img
            src={Sabretooth}
            alt="Sabretooth"
            style={{ verticalAlign: 'middle', marginRight: '5px' }}
          />
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
          Valor do{' '}
          <img
            src={VexclawTalon}
            alt="Vexclaw Talon"
            style={{ verticalAlign: 'middle', marginRight: '5px' }}
          />
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
        <Link to="/mana-leech">Mana Leech</Link>
      </ul>
    </div>
  );
};

export default LifeLeech;
