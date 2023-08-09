import React, { useState } from 'react';
import DamselflyWings from '../images/damselfly-wing.gif';
import Compass from '../images/compass.gif';
import WaspoidWings from '../images/waspoid-wing.gif';

const Swiftness = () => {
  const [DamselflyWingsValue, setDamselflyWingsValue] = useState('');
  const [CompassValue, setCompassValue] = useState('');
  const [WaspoidWingsValue, setWaspoidWingsValue] = useState('');

  const formatNumberWithDots = (number) => {
    return number.toLocaleString('en-US');
  };

  const calculateItemsTotal = () => {
    const parsedDamselflyWingsValue = parseFloat(DamselflyWingsValue);
    const parsedCompassValue = parseFloat(CompassValue);
    const parsedWaspoidWingsValue = parseFloat(WaspoidWingsValue);
    const allFieldsFilled =
      !isNaN(parsedDamselflyWingsValue) &&
      !isNaN(parsedCompassValue) &&
      !isNaN(parsedWaspoidWingsValue);

    const totalDamselflyWingsValue = isNaN(parsedDamselflyWingsValue)
      ? 0
      : parsedDamselflyWingsValue * 15;
    const totalCompassValue = isNaN(parsedCompassValue)
      ? 0
      : parsedCompassValue * 25;
    const totalWaspoidWingsValue = isNaN(parsedWaspoidWingsValue)
      ? 0
      : parsedWaspoidWingsValue * 20;

    const totalItemsValue = allFieldsFilled
      ? totalDamselflyWingsValue +
        totalCompassValue +
        totalWaspoidWingsValue +
        150000
      : totalDamselflyWingsValue + totalCompassValue + totalWaspoidWingsValue;

    return totalItemsValue;
  };

  return (
    <>
      <h1 className="title-swiftness">Swiftness (Speed Boost) </h1>
      <div className="container">
        <div></div>
        <div>
          <label>
            Damselfly Wings value (15x){' '}
            <a
              href="https://www.tibiawiki.com.br/wiki/Damselfly_Wing"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={DamselflyWings}
                alt="Damselfly Wings"
                style={{ verticalAlign: 'middle', marginRight: '5px' }}
              />
            </a>
            :
          </label>
          <input
            type="number"
            value={DamselflyWingsValue}
            onChange={(e) => setDamselflyWingsValue(e.target.value)}
          />
        </div>
        <div>
          <label>
            Compass value (25x){' '}
            <a
              href="https://www.tibiawiki.com.br/wiki/Compass"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={Compass}
                alt="Compass"
                style={{ verticalAlign: 'middle', marginRight: '5px' }}
              />
            </a>
            :
          </label>
          <input
            type="number"
            value={CompassValue}
            onChange={(e) => setCompassValue(e.target.value)}
          />
        </div>
        <div>
          <label>
            Waspoid Wings value (20x){' '}
            <a
              href="https://www.tibiawiki.com.br/wiki/Waspoid_Wing"
              rel="noreferrer"
            >
              <img
                src={WaspoidWings}
                alt="Waspoid Wings"
                style={{ verticalAlign: 'middle', marginRight: '5px' }}
              />
            </a>
            :
          </label>
          <input
            type="number"
            value={WaspoidWingsValue}
            onChange={(e) => setWaspoidWingsValue(e.target.value)}
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

export default Swiftness;
