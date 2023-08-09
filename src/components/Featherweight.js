import React, { useState } from 'react';
import FairyWings from '../images/fairy-wings.gif';
import LittleBowlOfMyrrh from '../images/little-bowl.gif';
import GoosebumpLeather from '../images/goosebump-leather.gif';

const Featherweight = () => {
  const [FairyWingsValue, setFairyWingsValue] = useState('');
  const [LittleBowlOfMyrrhValue, setLittleBowlOfMyrrhValue] = useState('');
  const [GoosebumpLeatherValue, setGoosebumpLeatherValue] = useState('');

  const formatNumberWithDots = (number) => {
    return number.toLocaleString('en-US');
  };

  const calculateItemsTotal = () => {
    const parsedFairyWingsValue = parseFloat(FairyWingsValue);
    const parsedLittleBowlOfMyrrhValue = parseFloat(LittleBowlOfMyrrhValue);
    const parsedGoosebumpLeatherValue = parseFloat(GoosebumpLeatherValue);
    const allFieldsFilled =
      !isNaN(parsedFairyWingsValue) &&
      !isNaN(parsedLittleBowlOfMyrrhValue) &&
      !isNaN(parsedGoosebumpLeatherValue);

    const totalFairyWingsValue = isNaN(parsedFairyWingsValue)
      ? 0
      : parsedFairyWingsValue * 20;
    const totalLittleBowlOfMyrrhValue = isNaN(parsedLittleBowlOfMyrrhValue)
      ? 0
      : parsedLittleBowlOfMyrrhValue * 10;
    const totalGoosebumpLeatherValue = isNaN(parsedGoosebumpLeatherValue)
      ? 0
      : parsedGoosebumpLeatherValue * 5;

    const totalItemsValue = allFieldsFilled
      ? totalFairyWingsValue +
        totalLittleBowlOfMyrrhValue +
        totalGoosebumpLeatherValue +
        150000
      : totalFairyWingsValue +
        totalLittleBowlOfMyrrhValue +
        totalGoosebumpLeatherValue;

    return totalItemsValue;
  };

  return (
    <>
      <h1 className="title-featherweight">Featherweight (Cap Boost) </h1>
      <div className="container">
        <div></div>
        <div>
          <label>
            Fairy Wings value (20x){' '}
            <a
              href="https://www.tibiawiki.com.br/wiki/Fairy_Wings"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={FairyWings}
                alt="Fairy Wings"
                style={{ verticalAlign: 'middle', marginRight: '5px' }}
              />
            </a>
            :
          </label>
          <input
            type="number"
            value={FairyWingsValue}
            onChange={(e) => setFairyWingsValue(e.target.value)}
          />
        </div>
        <div>
          <label>
            Little Bowl of Myrrh value (10x){' '}
            <a
              href="https://www.tibiawiki.com.br/wiki/Little_Bowl_of_Myrrh"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={LittleBowlOfMyrrh}
                alt="Little Bowl of Myrrh"
                style={{ verticalAlign: 'middle', marginRight: '5px' }}
              />
            </a>
            :
          </label>
          <input
            type="number"
            value={LittleBowlOfMyrrhValue}
            onChange={(e) => setLittleBowlOfMyrrhValue(e.target.value)}
          />
        </div>
        <div>
          <label>
            Goosebump Leather value (5x){' '}
            <a
              href="https://www.tibiawiki.com.br/wiki/Goosebump_Leather"
              rel="noreferrer"
            >
              <img
                src={GoosebumpLeather}
                alt="Goosebump Leather"
                style={{ verticalAlign: 'middle', marginRight: '5px' }}
              />
            </a>
            :
          </label>
          <input
            type="number"
            value={GoosebumpLeatherValue}
            onChange={(e) => setGoosebumpLeatherValue(e.target.value)}
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

export default Featherweight;
