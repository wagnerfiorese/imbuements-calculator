import React, { useState } from 'react';
import CyclopsToe from '../images/piece-of-scarab-shell.gif';
import OgreNose from '../images/brimstone-shell.gif';
import WarmastersWristguards from '../images/frazzle-skin.gif';

const Bash = () => {
  const [CyclopsToeValue, setCyclopsToeValue] = useState('');
  const [OgreNoseValue, setOgreNoseValue] = useState('');
  const [WarmastersWristguardsValue, setWarmastersWristguardsValue] =
    useState('');

  const formatNumberWithDots = (number) => {
    return number.toLocaleString('en-US');
  };

  const calculateItemsTotal = () => {
    const parsedCyclopsToeValue = parseFloat(CyclopsToeValue);
    const parsedOgreNoseValue = parseFloat(OgreNoseValue);
    const parsedWarmastersWristguardsValue = parseFloat(
      WarmastersWristguardsValue
    );
    const allFieldsFilled =
      !isNaN(parsedCyclopsToeValue) &&
      !isNaN(parsedOgreNoseValue) &&
      !isNaN(parsedWarmastersWristguardsValue);

    const totalCyclopsToeValue = isNaN(parsedCyclopsToeValue)
      ? 0
      : parsedCyclopsToeValue * 20;
    const totalOgreNoseValue = isNaN(parsedOgreNoseValue)
      ? 0
      : parsedOgreNoseValue * 15;
    const totalWarmastersWristguardsValue = isNaN(
      parsedWarmastersWristguardsValue
    )
      ? 0
      : parsedWarmastersWristguardsValue * 10;

    const totalItemsValue = allFieldsFilled
      ? totalCyclopsToeValue +
        totalOgreNoseValue +
        totalWarmastersWristguardsValue +
        150000
      : totalCyclopsToeValue +
        totalOgreNoseValue +
        totalWarmastersWristguardsValue;

    return totalItemsValue;
  };

  return (
    <>
      <h1 className="title-bash">Bash (Club Boost) </h1>
      <div className="container">
        <div></div>
        <div>
          <label>
            Cyclops Toe value (20x){' '}
            <a
              href="https://www.tibiawiki.com.br/wiki/Cyclops_Toe"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={CyclopsToe}
                alt="Cyclops Toe"
                style={{ verticalAlign: 'middle', marginRight: '5px' }}
              />
            </a>
            :
          </label>
          <input
            type="number"
            value={CyclopsToeValue}
            onChange={(e) => setCyclopsToeValue(e.target.value)}
          />
        </div>
        <div>
          <label>
            Ogre Nose value (15x){' '}
            <a
              href="https://www.tibiawiki.com.br/wiki/Ogre_Nose"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={OgreNose}
                alt="Ogre Nose"
                style={{ verticalAlign: 'middle', marginRight: '5px' }}
              />
            </a>
            :
          </label>
          <input
            type="number"
            value={OgreNoseValue}
            onChange={(e) => setOgreNoseValue(e.target.value)}
          />
        </div>
        <div>
          <label>
            Warmaster's Wristguards value (10x){' '}
            <a
              href="https://www.tibiawiki.com.br/wiki/Warmaster%27s_Wristguards"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={WarmastersWristguards}
                alt="Warmaster's Wristguards"
                style={{ verticalAlign: 'middle', marginRight: '5px' }}
              />
            </a>
            :
          </label>
          <input
            type="number"
            value={WarmastersWristguardsValue}
            onChange={(e) => setWarmastersWristguardsValue(e.target.value)}
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

export default Bash;
