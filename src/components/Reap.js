import React, { useState } from 'react';
import PileOfGraveEarth from '../images/pile-of-grave-earth.gif';
import DemonicSkeletalHand from '../images/demonic-skeletal-hand.gif';
import PetrifiedScream from '../images/petrified-scream.gif';

const Reap = () => {
  const [PileOfGraveEarthValue, setPileOfGraveEarthValue] = useState('');
  const [DemonicSkeletalHandValue, setDemonicSkeletalHandValue] = useState('');
  const [PetrifiedScreamValue, setPetrifiedScreamValue] = useState('');

  const formatNumberWithDots = (number) => {
    return number.toLocaleString('en-US');
  };

  const calculateItemsTotal = () => {
    const parsedPileOfGraveEarthValue = parseFloat(PileOfGraveEarthValue);
    const parsedDemonicSkeletalHandValue = parseFloat(DemonicSkeletalHandValue);
    const parsedPetrifiedScreamValue = parseFloat(PetrifiedScreamValue);
    const allFieldsFilled =
      !isNaN(parsedPileOfGraveEarthValue) &&
      !isNaN(parsedDemonicSkeletalHandValue) &&
      !isNaN(parsedPetrifiedScreamValue);

    const totalPileOfGraveEarthValue = isNaN(parsedPileOfGraveEarthValue)
      ? 0
      : parsedPileOfGraveEarthValue * 25;
    const totalDemonicSkeletalHandValue = isNaN(parsedDemonicSkeletalHandValue)
      ? 0
      : parsedDemonicSkeletalHandValue * 20;
    const totalPetrifiedScreamValue = isNaN(parsedPetrifiedScreamValue)
      ? 0
      : parsedPetrifiedScreamValue * 5;

    const totalItemsValue = allFieldsFilled
      ? totalPileOfGraveEarthValue +
        totalDemonicSkeletalHandValue +
        totalPetrifiedScreamValue +
        150000
      : totalPileOfGraveEarthValue +
        totalDemonicSkeletalHandValue +
        totalPetrifiedScreamValue;

    return totalItemsValue;
  };

  return (
    <>
      <h1 className="title-reap">Reap (Death Damage) </h1>
      <div className="container">
        <div></div>
        <div>
          <label>
            Pile of Grave Earth value (25x){' '}
            <a
              href="https://www.tibiawiki.com.br/wiki/Pile_of_Grave_Earth"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={PileOfGraveEarth}
                alt="Pile of Grave Earth"
                style={{ verticalAlign: 'middle', marginRight: '5px' }}
              />
            </a>
            :
          </label>
          <input
            type="number"
            value={PileOfGraveEarthValue}
            onChange={(e) => setPileOfGraveEarthValue(e.target.value)}
          />
        </div>
        <div>
          <label>
            Demonic Skeletal Hand value (20x){' '}
            <a
              href="https://www.tibiawiki.com.br/wiki/Demonic_Skeletal_Hand"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={DemonicSkeletalHand}
                alt="Demonic Skeletal Hand"
                style={{ verticalAlign: 'middle', marginRight: '5px' }}
              />
            </a>
            :
          </label>
          <input
            type="number"
            value={DemonicSkeletalHandValue}
            onChange={(e) => setDemonicSkeletalHandValue(e.target.value)}
          />
        </div>
        <div>
          <label>
            Petrified Scream value (5x){' '}
            <a
              href="https://www.tibiawiki.com.br/wiki/Petrified_Scream"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={PetrifiedScream}
                alt="Petrified Scream"
                style={{ verticalAlign: 'middle', marginRight: '5px' }}
              />
            </a>
            :
          </label>
          <input
            type="number"
            value={PetrifiedScreamValue}
            onChange={(e) => setPetrifiedScreamValue(e.target.value)}
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

export default Reap;
