import React, { useState } from 'react';
import GreenDragonLeather from '../images/green-dragon-leather.gif';
import BlazingBone from '../images/blazing-bone.gif';
import DrakenSulphur from '../images/draken-sulphur.gif';

const Dragonhide = () => {
  const [GreenDragonLeatherValue, setGreenDragonLeatherValue] = useState('');
  const [BlazingBoneValue, setBlazingBoneValue] = useState('');
  const [DrakenSulphurValue, setDrakenSulphurValue] = useState('');

  const formatNumberWithDots = (number) => {
    return number.toLocaleString('en-US');
  };

  const calculateItemsTotal = () => {
    const parsedGreenDragonLeatherValue = parseFloat(GreenDragonLeatherValue);
    const parsedBlazingBoneValue = parseFloat(BlazingBoneValue);
    const parsedDrakenSulphurValue = parseFloat(DrakenSulphurValue);
    const allFieldsFilled =
      !isNaN(parsedGreenDragonLeatherValue) &&
      !isNaN(parsedBlazingBoneValue) &&
      !isNaN(parsedDrakenSulphurValue);

    const totalGreenDragonLeatherValue = isNaN(parsedGreenDragonLeatherValue)
      ? 0
      : parsedGreenDragonLeatherValue * 25;
    const totalBlazingBoneValue = isNaN(parsedBlazingBoneValue)
      ? 0
      : parsedBlazingBoneValue * 10;
    const totalDrakenSulphurValue = isNaN(parsedDrakenSulphurValue)
      ? 0
      : parsedDrakenSulphurValue * 5;

    const totalItemsValue = allFieldsFilled
      ? totalGreenDragonLeatherValue +
        totalBlazingBoneValue +
        totalDrakenSulphurValue +
        150000
      : totalGreenDragonLeatherValue +
        totalBlazingBoneValue +
        totalDrakenSulphurValue;

    return totalItemsValue;
  };

  return (
    <>
      <h1 className="title-dragonhide">Dragon Hide (Fire Protection) </h1>
      <div className="container">
        <div></div>
        <div>
          <label>
            Green Dragon Leather value (25x){' '}
            <a
              href="https://www.tibiawiki.com.br/wiki/Green_Dragon_Leather"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={GreenDragonLeather}
                alt="Green Dragon Leather"
                style={{ verticalAlign: 'middle', marginRight: '5px' }}
              />
            </a>
            :
          </label>
          <input
            type="number"
            value={GreenDragonLeatherValue}
            onChange={(e) => setGreenDragonLeatherValue(e.target.value)}
          />
        </div>
        <div>
          <label>
            Blazing Bone value (10x){' '}
            <a
              href="https://www.tibiawiki.com.br/wiki/Blazing_Bone"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={BlazingBone}
                alt="Blazing Bone"
                style={{ verticalAlign: 'middle', marginRight: '5px' }}
              />
            </a>
            :
          </label>
          <input
            type="number"
            value={BlazingBoneValue}
            onChange={(e) => setBlazingBoneValue(e.target.value)}
          />
        </div>
        <div>
          <label>
            Mystical Hourglass value (5x){' '}
            <a
              href="https://www.tibiawiki.com.br/wiki/Draken_Sulphur"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={DrakenSulphur}
                alt="Draken Sulphur"
                style={{ verticalAlign: 'middle', marginRight: '5px' }}
              />
            </a>
            :
          </label>
          <input
            type="number"
            value={DrakenSulphurValue}
            onChange={(e) => setDrakenSulphurValue(e.target.value)}
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

export default Dragonhide;
