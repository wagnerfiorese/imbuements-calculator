import React, { useState } from 'react';
import PieceOfScarabShell from '../images/piece-of-scarab-shell.gif';
import BrimstoneShell from '../images/brimstone-shell.gif';
import FrazzleSkin from '../images/frazzle-skin.gif';

const Blockade = () => {
  const [PieceOfScarabShellValue, setPieceOfScarabShellValue] = useState('');
  const [BrimstoneShellValue, setBrimstoneShellValue] = useState('');
  const [FrazzleSkinValue, setFrazzleSkinValue] = useState('');

  const formatNumberWithDots = (number) => {
    return number.toLocaleString('en-US');
  };

  const calculateItemsTotal = () => {
    const parsedPieceOfScarabShellValue = parseFloat(PieceOfScarabShellValue);
    const parsedBrimstoneShellValue = parseFloat(BrimstoneShellValue);
    const parsedFrazzleSkinValue = parseFloat(FrazzleSkinValue);
    const allFieldsFilled =
      !isNaN(parsedPieceOfScarabShellValue) &&
      !isNaN(parsedBrimstoneShellValue) &&
      !isNaN(parsedFrazzleSkinValue);

    const totalPieceOfScarabShellValue = isNaN(parsedPieceOfScarabShellValue)
      ? 0
      : parsedPieceOfScarabShellValue * 20;
    const totalBrimstoneShellValue = isNaN(parsedBrimstoneShellValue)
      ? 0
      : parsedBrimstoneShellValue * 25;
    const totalFrazzleSkinValue = isNaN(parsedFrazzleSkinValue)
      ? 0
      : parsedFrazzleSkinValue * 25;

    const totalItemsValue = allFieldsFilled
      ? totalPieceOfScarabShellValue +
        totalBrimstoneShellValue +
        totalFrazzleSkinValue +
        150000
      : totalPieceOfScarabShellValue +
        totalBrimstoneShellValue +
        totalFrazzleSkinValue;

    return totalItemsValue;
  };

  return (
    <>
      <h1 className="title-blockade">Blockade (Shield Boost) </h1>
      <div className="container">
        <div></div>
        <div>
          <label>
            Piece of Scarab Shell value (20x){' '}
            <a
              href="https://www.tibiawiki.com.br/wiki/Piece_of_Scarab_Shell"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={PieceOfScarabShell}
                alt="Piece of Scarab Shell"
                style={{ verticalAlign: 'middle', marginRight: '5px' }}
              />
            </a>
            :
          </label>
          <input
            type="number"
            value={PieceOfScarabShellValue}
            onChange={(e) => setPieceOfScarabShellValue(e.target.value)}
          />
        </div>
        <div>
          <label>
            Brimstone Shell value (25x){' '}
            <a
              href="https://www.tibiawiki.com.br/wiki/Brimstone_Shell"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={BrimstoneShell}
                alt="Brimstone Shell"
                style={{ verticalAlign: 'middle', marginRight: '5px' }}
              />
            </a>
            :
          </label>
          <input
            type="number"
            value={BrimstoneShellValue}
            onChange={(e) => setBrimstoneShellValue(e.target.value)}
          />
        </div>
        <div>
          <label>
            Frazzle Skin value (25x){' '}
            <a
              href="https://www.tibiawiki.com.br/wiki/Frazzle_Skin"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={FrazzleSkin}
                alt="Frazzle Skin"
                style={{ verticalAlign: 'middle', marginRight: '5px' }}
              />
            </a>
            :
          </label>
          <input
            type="number"
            value={FrazzleSkinValue}
            onChange={(e) => setFrazzleSkinValue(e.target.value)}
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

export default Blockade;
