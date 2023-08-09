import React, { useState } from 'react';
import PieceOfSwamplingWood from '../images/piece-of-swampling-wood.gif';
import SnakeSkin from '../images/snake-skin.gif';
import BrimstoneFangs from '../images/brimstone-fangs.gif';

const Snakeskin = () => {
  const [PieceOfSwamplingWoodValue, setPieceOfSwamplingWoodValue] =
    useState('');
  const [SnakeSkinValue, setSnakeSkinValue] = useState('');
  const [BrimstoneFangsValue, setBrimstoneFangsValue] = useState('');

  const formatNumberWithDots = (number) => {
    return number.toLocaleString('en-US');
  };

  const calculateItemsTotal = () => {
    const parsedPieceOfSwamplingWoodValue = parseFloat(
      PieceOfSwamplingWoodValue
    );
    const parsedSnakeSkinValue = parseFloat(SnakeSkinValue);
    const parsedBrimstoneFangsValue = parseFloat(BrimstoneFangsValue);
    const allFieldsFilled =
      !isNaN(parsedPieceOfSwamplingWoodValue) &&
      !isNaN(parsedSnakeSkinValue) &&
      !isNaN(parsedBrimstoneFangsValue);

    const totalPieceOfSwamplingWoodValue = isNaN(
      parsedPieceOfSwamplingWoodValue
    )
      ? 0
      : parsedPieceOfSwamplingWoodValue * 25;
    const totalSnakeSkinValue = isNaN(parsedSnakeSkinValue)
      ? 0
      : parsedSnakeSkinValue * 20;
    const totalBrimstoneFangsValue = isNaN(parsedBrimstoneFangsValue)
      ? 0
      : parsedBrimstoneFangsValue * 10;

    const totalItemsValue = allFieldsFilled
      ? totalPieceOfSwamplingWoodValue +
        totalSnakeSkinValue +
        totalBrimstoneFangsValue +
        150000
      : totalPieceOfSwamplingWoodValue +
        totalSnakeSkinValue +
        totalBrimstoneFangsValue;

    return totalItemsValue;
  };

  return (
    <>
      <h1 className="title-snakeskin">Snake Skin (Earth Protection) </h1>
      <div className="container">
        <div></div>
        <div>
          <label>
            Piece of Swampling Wood value (25x){' '}
            <a
              href="https://www.tibiawiki.com.br/wiki/Piece_of_Swampling_Wood"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={PieceOfSwamplingWood}
                alt="Piece of Swampling Wood"
                style={{ verticalAlign: 'middle', marginRight: '5px' }}
              />
            </a>
            :
          </label>
          <input
            type="number"
            value={PieceOfSwamplingWoodValue}
            onChange={(e) => setPieceOfSwamplingWoodValue(e.target.value)}
          />
        </div>
        <div>
          <label>
            Snake Skin value (20x){' '}
            <a
              href="https://www.tibiawiki.com.br/wiki/Snake_Skin"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={SnakeSkin}
                alt="Snake Skin"
                style={{ verticalAlign: 'middle', marginRight: '5px' }}
              />
            </a>
            :
          </label>
          <input
            type="number"
            value={SnakeSkinValue}
            onChange={(e) => setSnakeSkinValue(e.target.value)}
          />
        </div>
        <div>
          <label>
            Brimstone Fangs value (10x){' '}
            <a
              href="https://www.tibiawiki.com.br/wiki/Brimstone_Fangs"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={BrimstoneFangs}
                alt="Brimstone Fangs"
                style={{ verticalAlign: 'middle', marginRight: '5px' }}
              />
            </a>
            :
          </label>
          <input
            type="number"
            value={BrimstoneFangsValue}
            onChange={(e) => setBrimstoneFangsValue(e.target.value)}
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

export default Snakeskin;
