import React, { useState } from 'react';
import FrostyHeart from '../images/frosty-heart.gif';
import SeacrestHair from '../images/seacrest-hair.gif';
import PolarBearPaw from '../images/polar-bear-paw.gif';

const Frost = () => {
  const [FrostyHeartValue, setFrostyHeartValue] = useState('');
  const [SeacrestHairValue, setSeacrestHairValue] = useState('');
  const [PolarBearPawValue, setPolarBearPawValue] = useState('');

  const formatNumberWithDots = (number) => {
    return number.toLocaleString('en-US');
  };

  const calculateItemsTotal = () => {
    const parsedFrostyHeartValue = parseFloat(FrostyHeartValue);
    const parsedSeacrestHairValue = parseFloat(SeacrestHairValue);
    const parsedPolarBearPawValue = parseFloat(PolarBearPawValue);
    const allFieldsFilled =
      !isNaN(parsedFrostyHeartValue) &&
      !isNaN(parsedSeacrestHairValue) &&
      !isNaN(parsedPolarBearPawValue);

    const totalFrostyHeartValue = isNaN(parsedFrostyHeartValue)
      ? 0
      : parsedFrostyHeartValue * 25;
    const totalSeacrestHairValue = isNaN(parsedSeacrestHairValue)
      ? 0
      : parsedSeacrestHairValue * 10;
    const totalPolarBearPawValue = isNaN(parsedPolarBearPawValue)
      ? 0
      : parsedPolarBearPawValue * 5;

    const totalItemsValue = allFieldsFilled
      ? totalFrostyHeartValue +
        totalSeacrestHairValue +
        totalPolarBearPawValue +
        150000
      : totalFrostyHeartValue + totalSeacrestHairValue + totalPolarBearPawValue;

    return totalItemsValue;
  };

  return (
    <>
      <h1 className="title-frost">Frost (Ice Damage) </h1>
      <div className="container">
        <div></div>
        <div>
          <label>
            Frosty Heart value (25x){' '}
            <a
              href="https://www.tibiawiki.com.br/wiki/Frosty_Heart"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={FrostyHeart}
                alt="Frosty Heart"
                style={{ verticalAlign: 'middle', marginRight: '5px' }}
              />
            </a>
            :
          </label>
          <input
            type="number"
            value={FrostyHeartValue}
            onChange={(e) => setFrostyHeartValue(e.target.value)}
          />
        </div>
        <div>
          <label>
            Seacrest Hair value (10x){' '}
            <a
              href="https://www.tibiawiki.com.br/wiki/Seacrest_Hair"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={SeacrestHair}
                alt="Seacrest Hair"
                style={{ verticalAlign: 'middle', marginRight: '5px' }}
              />
            </a>
            :
          </label>
          <input
            type="number"
            value={SeacrestHairValue}
            onChange={(e) => setSeacrestHairValue(e.target.value)}
          />
        </div>
        <div>
          <label>
            Polar Bear Paw value (5x){' '}
            <a
              href="https://www.tibiawiki.com.br/wiki/Polar_Bear_Paw"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={PolarBearPaw}
                alt="Polar Bear Paw"
                style={{ verticalAlign: 'middle', marginRight: '5px' }}
              />
            </a>
            :
          </label>
          <input
            type="number"
            value={PolarBearPawValue}
            onChange={(e) => setPolarBearPawValue(e.target.value)}
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

export default Frost;
