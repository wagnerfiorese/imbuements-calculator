import React, { useState } from 'react';
import FieryHeart from '../images/fiery-heart.gif';
import GreenDragonScale from '../images/green-dragon-scale.gif';
import DemonHorn from '../images/demon-horn.gif';

const Scorch = () => {
  const [FieryHeartValue, setFieryHeartValue] = useState('');
  const [GreenDragonScaleValue, setGreenDragonScaleValue] = useState('');
  const [DemonHornValue, setDemonHornValue] = useState('');

  const formatNumberWithDots = (number) => {
    return number.toLocaleString('en-US');
  };

  const calculateItemsTotal = () => {
    const parsedFieryHeartValue = parseFloat(FieryHeartValue);
    const parsedGreenDragonScaleValue = parseFloat(GreenDragonScaleValue);
    const parsedDemonHornValue = parseFloat(DemonHornValue);
    const allFieldsFilled =
      !isNaN(parsedFieryHeartValue) &&
      !isNaN(parsedGreenDragonScaleValue) &&
      !isNaN(parsedDemonHornValue);

    const totalFieryHeartValue = isNaN(parsedFieryHeartValue)
      ? 0
      : parsedFieryHeartValue * 25;
    const totalGreenDragonScaleValue = isNaN(parsedGreenDragonScaleValue)
      ? 0
      : parsedGreenDragonScaleValue * 5;
    const totalDemonHornValue = isNaN(parsedDemonHornValue)
      ? 0
      : parsedDemonHornValue * 5;

    const totalItemsValue = allFieldsFilled
      ? totalFieryHeartValue +
        totalGreenDragonScaleValue +
        totalDemonHornValue +
        150000
      : totalFieryHeartValue + totalGreenDragonScaleValue + totalDemonHornValue;

    return totalItemsValue;
  };

  return (
    <>
      <h1 className="title-scorch">Scorch (Fire Damage) </h1>
      <div className="container">
        <div></div>
        <div>
          <label>
            Fiery Heart value (25x){' '}
            <a
              href="https://www.tibiawiki.com.br/wiki/Fiery_Heart"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={FieryHeart}
                alt="Fiery Heart"
                style={{ verticalAlign: 'middle', marginRight: '5px' }}
              />
            </a>
            :
          </label>
          <input
            type="number"
            value={FieryHeartValue}
            onChange={(e) => setFieryHeartValue(e.target.value)}
          />
        </div>
        <div>
          <label>
            Green Dragon Scale value (5x){' '}
            <a
              href="https://www.tibiawiki.com.br/wiki/Green_Dragon_Scale"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={GreenDragonScale}
                alt="Green Dragon Scale"
                style={{ verticalAlign: 'middle', marginRight: '5px' }}
              />
            </a>
            :
          </label>
          <input
            type="number"
            value={GreenDragonScaleValue}
            onChange={(e) => setGreenDragonScaleValue(e.target.value)}
          />
        </div>
        <div>
          <label>
            Demon Horn value (5x){' '}
            <a
              href="https://www.tibiawiki.com.br/wiki/Demon_Horn"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={DemonHorn}
                alt="Demon Horn"
                style={{ verticalAlign: 'middle', marginRight: '5px' }}
              />
            </a>
            :
          </label>
          <input
            type="number"
            value={DemonHornValue}
            onChange={(e) => setDemonHornValue(e.target.value)}
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

export default Scorch;
