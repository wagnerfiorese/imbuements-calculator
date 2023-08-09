import React, { useState } from 'react';
import SwampGrass from '../images/swamp-grass.gif';
import PoisonousSlime from '../images/poisonous-slime.gif';
import SlimeHeart from '../images/slime-heart.gif';

const Venom = () => {
  const [SwampGrassValue, setSwampGrassValue] = useState('');
  const [PoisonousSlimeValue, setPoisonousSlimeValue] = useState('');
  const [SlimeHeartValue, setSlimeHeartValue] = useState('');

  const formatNumberWithDots = (number) => {
    return number.toLocaleString('en-US');
  };

  const calculateItemsTotal = () => {
    const parsedSwampGrassValue = parseFloat(SwampGrassValue);
    const parsedPoisonousSlimeValue = parseFloat(PoisonousSlimeValue);
    const parsedSlimeHeartValue = parseFloat(SlimeHeartValue);
    const allFieldsFilled =
      !isNaN(parsedSwampGrassValue) &&
      !isNaN(parsedPoisonousSlimeValue) &&
      !isNaN(parsedSlimeHeartValue);

    const totalSwampGrassValue = isNaN(parsedSwampGrassValue)
      ? 0
      : parsedSwampGrassValue * 25;
    const totalPoisonousSlimeValue = isNaN(parsedPoisonousSlimeValue)
      ? 0
      : parsedPoisonousSlimeValue * 20;
    const totalSlimeHeartValue = isNaN(parsedSlimeHeartValue)
      ? 0
      : parsedSlimeHeartValue * 2;

    const totalItemsValue = allFieldsFilled
      ? totalSwampGrassValue +
        totalPoisonousSlimeValue +
        totalSlimeHeartValue +
        150000
      : totalSwampGrassValue + totalPoisonousSlimeValue + totalSlimeHeartValue;

    return totalItemsValue;
  };

  return (
    <>
      <h1 className="title-venom">Venom (Earth Damage) </h1>
      <div className="container">
        <div></div>
        <div>
          <label>
            Swamp Grass value (25x){' '}
            <a
              href="https://www.tibiawiki.com.br/wiki/Swamp_Grass"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={SwampGrass}
                alt="Swamp Grass"
                style={{ verticalAlign: 'middle', marginRight: '5px' }}
              />
            </a>
            :
          </label>
          <input
            type="number"
            value={SwampGrassValue}
            onChange={(e) => setSwampGrassValue(e.target.value)}
          />
        </div>
        <div>
          <label>
            Poisonous Slime value (20x){' '}
            <a
              href="https://www.tibiawiki.com.br/wiki/Poisonous_Slime"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={PoisonousSlime}
                alt="Poisonous Slime"
                style={{ verticalAlign: 'middle', marginRight: '5px' }}
              />
            </a>
            :
          </label>
          <input
            type="number"
            value={PoisonousSlimeValue}
            onChange={(e) => setPoisonousSlimeValue(e.target.value)}
          />
        </div>
        <div>
          <label>
            Slime Heart value (2x){' '}
            <a
              href="https://www.tibiawiki.com.br/wiki/Slime_Heart"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={SlimeHeart}
                alt="Slime Heart"
                style={{ verticalAlign: 'middle', marginRight: '5px' }}
              />
            </a>
            :
          </label>
          <input
            type="number"
            value={SlimeHeartValue}
            onChange={(e) => setSlimeHeartValue(e.target.value)}
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

export default Venom;
