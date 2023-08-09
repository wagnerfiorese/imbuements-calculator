import React, { useState } from 'react';
import CultishRobe from '../images/green-dragon-leather.gif';
import CultishMask from '../images/blazing-bone.gif';
import HellspawnTail from '../images/draken-sulphur.gif';

const Demonpresence = () => {
  const [CultishRobeValue, setCultishRobeValue] = useState('');
  const [CultishMaskValue, setCultishMaskValue] = useState('');
  const [HellspawnTailValue, setHellspawnTailValue] = useState('');

  const formatNumberWithDots = (number) => {
    return number.toLocaleString('en-US');
  };

  const calculateItemsTotal = () => {
    const parsedCultishRobeValue = parseFloat(CultishRobeValue);
    const parsedCultishMaskValue = parseFloat(CultishMaskValue);
    const parsedHellspawnTailValue = parseFloat(HellspawnTailValue);
    const allFieldsFilled =
      !isNaN(parsedCultishRobeValue) &&
      !isNaN(parsedCultishMaskValue) &&
      !isNaN(parsedHellspawnTailValue);

    const totalCultishRobeValue = isNaN(parsedCultishRobeValue)
      ? 0
      : parsedCultishRobeValue * 25;
    const totalCultishMaskValue = isNaN(parsedCultishMaskValue)
      ? 0
      : parsedCultishMaskValue * 25;
    const totalHellspawnTailValue = isNaN(parsedHellspawnTailValue)
      ? 0
      : parsedHellspawnTailValue * 20;

    const totalItemsValue = allFieldsFilled
      ? totalCultishRobeValue +
        totalCultishMaskValue +
        totalHellspawnTailValue +
        150000
      : totalCultishRobeValue + totalCultishMaskValue + totalHellspawnTailValue;

    return totalItemsValue;
  };

  return (
    <>
      <h1 className="title-demonpresence">Demon Presence (Holy Protection) </h1>
      <div className="container">
        <div></div>
        <div>
          <label>
            Cultish Robe value (25x){' '}
            <a
              href="https://www.tibiawiki.com.br/wiki/Cultish_Robe"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={CultishRobe}
                alt="Cultish Robe"
                style={{ verticalAlign: 'middle', marginRight: '5px' }}
              />
            </a>
            :
          </label>
          <input
            type="number"
            value={CultishRobeValue}
            onChange={(e) => setCultishRobeValue(e.target.value)}
          />
        </div>
        <div>
          <label>
            Cultish Mask value (25x){' '}
            <a
              href="https://www.tibiawiki.com.br/wiki/Cultish_Mask"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={CultishMask}
                alt="Cultish Mask"
                style={{ verticalAlign: 'middle', marginRight: '5px' }}
              />
            </a>
            :
          </label>
          <input
            type="number"
            value={CultishMaskValue}
            onChange={(e) => setCultishMaskValue(e.target.value)}
          />
        </div>
        <div>
          <label>
            Hellspawn Tail value (20x){' '}
            <a
              href="https://www.tibiawiki.com.br/wiki/Hellspawn_Tail"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={HellspawnTail}
                alt="Hellspawn Tail"
                style={{ verticalAlign: 'middle', marginRight: '5px' }}
              />
            </a>
            :
          </label>
          <input
            type="number"
            value={HellspawnTailValue}
            onChange={(e) => setHellspawnTailValue(e.target.value)}
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

export default Demonpresence;
