import React, { useState } from 'react';
import FlaskOfEmbalmingFluid from '../images/flask-of-embalming-fluid.gif';
import GloomWolfFur from '../images/gloom-wolf-fur.gif';
import MysticalHourglass from '../images/mystical-hourglass.gif';

const Lichshroud = () => {
  const [FlaskOfEmbalmingFluidValue, setFlaskOfEmbalmingFluidValue] =
    useState('');
  const [GloomWolfFurValue, setGloomWolfFurValue] = useState('');
  const [MysticalHourglassValue, setMysticalHourglassValue] = useState('');

  const formatNumberWithDots = (number) => {
    return number.toLocaleString('en-US');
  };

  const calculateItemsTotal = () => {
    const parsedFlaskOfEmbalmingFluidValue = parseFloat(
      FlaskOfEmbalmingFluidValue
    );
    const parsedGloomWolfFurValue = parseFloat(GloomWolfFurValue);
    const parsedMysticalHourglassValue = parseFloat(MysticalHourglassValue);
    const allFieldsFilled =
      !isNaN(parsedFlaskOfEmbalmingFluidValue) &&
      !isNaN(parsedGloomWolfFurValue) &&
      !isNaN(parsedMysticalHourglassValue);

    const totalFlaskOfEmbalmingFluidValue = isNaN(
      parsedFlaskOfEmbalmingFluidValue
    )
      ? 0
      : parsedFlaskOfEmbalmingFluidValue * 25;
    const totalGloomWolfFurValue = isNaN(parsedGloomWolfFurValue)
      ? 0
      : parsedGloomWolfFurValue * 20;
    const totalMysticalHourglassValue = isNaN(parsedMysticalHourglassValue)
      ? 0
      : parsedMysticalHourglassValue * 5;

    const totalItemsValue = allFieldsFilled
      ? totalFlaskOfEmbalmingFluidValue +
        totalGloomWolfFurValue +
        totalMysticalHourglassValue +
        150000
      : totalFlaskOfEmbalmingFluidValue +
        totalGloomWolfFurValue +
        totalMysticalHourglassValue;

    return totalItemsValue;
  };

  return (
    <>
      <h1 className="title-lichshroud">Lich Shroud (Death Protection) </h1>
      <div className="container">
        <div></div>
        <div>
          <label>
            Flask of Embalming Fluid value (25x){' '}
            <a
              href="https://www.tibiawiki.com.br/wiki/Flask_of_Embalming_Fluid"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={FlaskOfEmbalmingFluid}
                alt="Flask of Embalming Fluid"
                style={{ verticalAlign: 'middle', marginRight: '5px' }}
              />
            </a>
            :
          </label>
          <input
            type="number"
            value={FlaskOfEmbalmingFluidValue}
            onChange={(e) => setFlaskOfEmbalmingFluidValue(e.target.value)}
          />
        </div>
        <div>
          <label>
            Gloom Wolf Fur value (20x){' '}
            <a
              href="https://www.tibiawiki.com.br/wiki/Gloom_Wolf_Fur"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={GloomWolfFur}
                alt="Gloom Wolf Fur"
                style={{ verticalAlign: 'middle', marginRight: '5px' }}
              />
            </a>
            :
          </label>
          <input
            type="number"
            value={GloomWolfFurValue}
            onChange={(e) => setGloomWolfFurValue(e.target.value)}
          />
        </div>
        <div>
          <label>
            Mystical Hourglass value (5x){' '}
            <a
              href="https://www.tibiawiki.com.br/wiki/Mystical_Hourglass"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={MysticalHourglass}
                alt="Mystical Hourglass"
                style={{ verticalAlign: 'middle', marginRight: '5px' }}
              />
            </a>
            :
          </label>
          <input
            type="number"
            value={MysticalHourglassValue}
            onChange={(e) => setMysticalHourglassValue(e.target.value)}
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

export default Lichshroud;
