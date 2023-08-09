import React, { useState } from 'react';
import LionsMane from '../images/lions-mane.gif';
import MoohtahShell from '../images/moohtah-shell.gif';
import WarCrystal from '../images/war-crystal.gif';

const Slash = () => {
  const [LionsManeValue, setLionsManeValue] = useState('');
  const [MoohtahShellValue, setMoohtahShellValue] = useState('');
  const [WarCrystalValue, setWarCrystalValue] = useState('');

  const formatNumberWithDots = (number) => {
    return number.toLocaleString('en-US');
  };

  const calculateItemsTotal = () => {
    const parsedLionsManeValue = parseFloat(LionsManeValue);
    const parsedMoohtahShellValue = parseFloat(MoohtahShellValue);
    const parsedWarCrystalValue = parseFloat(WarCrystalValue);
    const allFieldsFilled =
      !isNaN(parsedLionsManeValue) &&
      !isNaN(parsedMoohtahShellValue) &&
      !isNaN(parsedWarCrystalValue);

    const totalLionsManeValue = isNaN(parsedLionsManeValue)
      ? 0
      : parsedLionsManeValue * 25;
    const totalMoohtahShellValue = isNaN(parsedMoohtahShellValue)
      ? 0
      : parsedMoohtahShellValue * 25;
    const totalWarCrystalValue = isNaN(parsedWarCrystalValue)
      ? 0
      : parsedWarCrystalValue * 5;

    const totalItemsValue = allFieldsFilled
      ? totalLionsManeValue +
        totalMoohtahShellValue +
        totalWarCrystalValue +
        150000
      : totalLionsManeValue + totalMoohtahShellValue + totalWarCrystalValue;

    return totalItemsValue;
  };

  return (
    <>
      <h1 className="title-slash">Slash (Sword Boost) </h1>
      <div className="container">
        <div></div>
        <div>
          <label>
            Lion's Mane value (25x){' '}
            <a
              href="https://www.tibiawiki.com.br/wiki/Lion%27s_Mane"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={LionsMane}
                alt="Lion's Mane"
                style={{ verticalAlign: 'middle', marginRight: '5px' }}
              />
            </a>
            :
          </label>
          <input
            type="number"
            value={LionsManeValue}
            onChange={(e) => setLionsManeValue(e.target.value)}
          />
        </div>
        <div>
          <label>
            Mooh'tah Shell value (25x){' '}
            <a
              href="https://www.tibiawiki.com.br/wiki/Mooh%27tah_Shell"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={MoohtahShell}
                alt="Mooh'tah Shell"
                style={{ verticalAlign: 'middle', marginRight: '5px' }}
              />
            </a>
            :
          </label>
          <input
            type="number"
            value={MoohtahShellValue}
            onChange={(e) => setMoohtahShellValue(e.target.value)}
          />
        </div>
        <div>
          <label>
            War Crystal value (5x){' '}
            <a
              href="https://www.tibiawiki.com.br/wiki/War_Crystal"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={WarCrystal}
                alt="War Crystal"
                style={{ verticalAlign: 'middle', marginRight: '5px' }}
              />
            </a>
            :
          </label>
          <input
            type="number"
            value={WarCrystalValue}
            onChange={(e) => setWarCrystalValue(e.target.value)}
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

export default Slash;
