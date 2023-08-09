import React, { useState } from 'react';
import WinterWolfFur from '../images/winter-wolf-fur.gif';
import ThickFur from '../images/thick-fur.gif';
import DeeplingWarts from '../images/deepling-warts.gif';

const Quarascale = () => {
  const [WinterWolfFurValue, setWinterWolfFurValue] = useState('');
  const [ThickFurValue, setThickFurValue] = useState('');
  const [DeeplingWartsValue, setDeeplingWartsValue] = useState('');

  const formatNumberWithDots = (number) => {
    return number.toLocaleString('en-US');
  };

  const calculateItemsTotal = () => {
    const parsedWinterWolfFurValue = parseFloat(WinterWolfFurValue);
    const parsedThickFurValue = parseFloat(ThickFurValue);
    const parsedDeeplingWartsValue = parseFloat(DeeplingWartsValue);
    const allFieldsFilled =
      !isNaN(parsedWinterWolfFurValue) &&
      !isNaN(parsedThickFurValue) &&
      !isNaN(parsedDeeplingWartsValue);

    const totalWinterWolfFurValue = isNaN(parsedWinterWolfFurValue)
      ? 0
      : parsedWinterWolfFurValue * 25;
    const totalThickFurValue = isNaN(parsedThickFurValue)
      ? 0
      : parsedThickFurValue * 15;
    const totalDeeplingWartsValue = isNaN(parsedDeeplingWartsValue)
      ? 0
      : parsedDeeplingWartsValue * 10;

    const totalItemsValue = allFieldsFilled
      ? totalWinterWolfFurValue +
        totalThickFurValue +
        totalDeeplingWartsValue +
        150000
      : totalWinterWolfFurValue + totalThickFurValue + totalDeeplingWartsValue;

    return totalItemsValue;
  };

  return (
    <>
      <h1 className="title-quarascale">Quara Scale (Ice Protection) </h1>
      <div className="container">
        <div></div>
        <div>
          <label>
            Winter Wolf Fur value (25x){' '}
            <a
              href="https://www.tibiawiki.com.br/wiki/Winter_Wolf_Fur"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={WinterWolfFur}
                alt="Winter Wolf Fur"
                style={{ verticalAlign: 'middle', marginRight: '5px' }}
              />
            </a>
            :
          </label>
          <input
            type="number"
            value={WinterWolfFurValue}
            onChange={(e) => setWinterWolfFurValue(e.target.value)}
          />
        </div>
        <div>
          <label>
            Thick Fur value (15x){' '}
            <a
              href="https://www.tibiawiki.com.br/wiki/Thick_Fur"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={ThickFur}
                alt="Thick Fur"
                style={{ verticalAlign: 'middle', marginRight: '5px' }}
              />
            </a>
            :
          </label>
          <input
            type="number"
            value={ThickFurValue}
            onChange={(e) => setThickFurValue(e.target.value)}
          />
        </div>
        <div>
          <label>
            Deepling Warts value (10x){' '}
            <a
              href="https://www.tibiawiki.com.br/wiki/Deepling_Warts"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={DeeplingWarts}
                alt="Deepling Warts"
                style={{ verticalAlign: 'middle', marginRight: '5px' }}
              />
            </a>
            :
          </label>
          <input
            type="number"
            value={DeeplingWartsValue}
            onChange={(e) => setDeeplingWartsValue(e.target.value)}
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

export default Quarascale;
