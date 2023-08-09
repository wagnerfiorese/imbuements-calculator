import React, { useState } from 'react';
import OrcTooth from '../images/orc-tooth.gif';
import BattleStone from '../images/battle-stone.gif';
import MootantHorn from '../images/moohtant-horn.gif';

const Chop = () => {
  const [OrcToothValue, setOrcToothValue] = useState('');
  const [BattleStoneValue, setBattleStoneValue] = useState('');
  const [MootantHornValue, setMootantHornValue] = useState('');

  const formatNumberWithDots = (number) => {
    return number.toLocaleString('en-US');
  };

  const calculateItemsTotal = () => {
    const parsedOrcToothValue = parseFloat(OrcToothValue);
    const parsedBattleStoneValue = parseFloat(BattleStoneValue);
    const parsedMootantHornValue = parseFloat(MootantHornValue);
    const allFieldsFilled =
      !isNaN(parsedOrcToothValue) &&
      !isNaN(parsedBattleStoneValue) &&
      !isNaN(parsedMootantHornValue);

    const totalOrcToothValue = isNaN(parsedOrcToothValue)
      ? 0
      : parsedOrcToothValue * 20;
    const totalBattleStoneValue = isNaN(parsedBattleStoneValue)
      ? 0
      : parsedBattleStoneValue * 25;
    const totalMootantHornValue = isNaN(parsedMootantHornValue)
      ? 0
      : parsedMootantHornValue * 20;

    const totalItemsValue = allFieldsFilled
      ? totalOrcToothValue +
        totalBattleStoneValue +
        totalMootantHornValue +
        150000
      : totalOrcToothValue + totalBattleStoneValue + totalMootantHornValue;

    return totalItemsValue;
  };

  return (
    <>
      <h1 className="title-chop">Chop (Axe Boost) </h1>
      <div className="container">
        <div></div>
        <div>
          <label>
            Orc Tooth value (20x){' '}
            <a
              href="https://www.tibiawiki.com.br/wiki/Orc_Tooth"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={OrcTooth}
                alt="Orc Tooth"
                style={{ verticalAlign: 'middle', marginRight: '5px' }}
              />
            </a>
            :
          </label>
          <input
            type="number"
            value={OrcToothValue}
            onChange={(e) => setOrcToothValue(e.target.value)}
          />
        </div>
        <div>
          <label>
            Battle Stone value (25x){' '}
            <a
              href="https://www.tibiawiki.com.br/wiki/Battle_Stone"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={BattleStone}
                alt="Battle Stone"
                style={{ verticalAlign: 'middle', marginRight: '5px' }}
              />
            </a>
            :
          </label>
          <input
            type="number"
            value={BattleStoneValue}
            onChange={(e) => setBattleStoneValue(e.target.value)}
          />
        </div>
        <div>
          <label>
            Moohtant Horn value (20x){' '}
            <a
              href="https://www.tibiawiki.com.br/wiki/Moohtant_Horn"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={MootantHorn}
                alt="Moohtant Horn"
                style={{ verticalAlign: 'middle', marginRight: '5px' }}
              />
            </a>
            :
          </label>
          <input
            type="number"
            value={MootantHornValue}
            onChange={(e) => setMootantHornValue(e.target.value)}
          />
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

export default Chop;
