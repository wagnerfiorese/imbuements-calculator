import React, { useState } from 'react';
import RorcFeather from '../images/rorc-feather.gif';
import PeacockFeatherFan from '../images/peacock-feather-fan.gif';
import EnergyVein from '../images/energy-vein.gif';

const Electrify = () => {
  const [RorcFeatherValue, setRorcFeatherValue] = useState('');
  const [PeacockFeatherFanValue, setPeacockFeatherFanValue] = useState('');
  const [EnergyVeinValue, setEnergyVeinValue] = useState('');

  const formatNumberWithDots = (number) => {
    return number.toLocaleString('en-US');
  };

  const calculateItemsTotal = () => {
    const parsedRorcFeatherValue = parseFloat(RorcFeatherValue);
    const parsedPeacockFeatherFanValue = parseFloat(PeacockFeatherFanValue);
    const parsedEnergyVeinValue = parseFloat(EnergyVeinValue);
    const allFieldsFilled =
      !isNaN(parsedRorcFeatherValue) &&
      !isNaN(parsedPeacockFeatherFanValue) &&
      !isNaN(parsedEnergyVeinValue);

    const totalRorcFeatherValue = isNaN(parsedRorcFeatherValue)
      ? 0
      : parsedRorcFeatherValue * 25;
    const totalPeacockFeatherFanValue = isNaN(parsedPeacockFeatherFanValue)
      ? 0
      : parsedPeacockFeatherFanValue * 5;
    const totalEnergyVeinValue = isNaN(parsedEnergyVeinValue)
      ? 0
      : parsedEnergyVeinValue * 1;

    const totalItemsValue = allFieldsFilled
      ? totalRorcFeatherValue +
        totalPeacockFeatherFanValue +
        totalEnergyVeinValue +
        150000
      : totalRorcFeatherValue +
        totalPeacockFeatherFanValue +
        totalEnergyVeinValue;

    return totalItemsValue;
  };

  return (
    <>
      <h1 className="title-electrify">Electrify (Energy Damage) </h1>
      <div className="container">
        <div></div>
        <div>
          <label>
            Rorc Feather value (25x){' '}
            <a
              href="https://www.tibiawiki.com.br/wiki/Rorc_Feather"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={RorcFeather}
                alt="Rorc Feather"
                style={{ verticalAlign: 'middle', marginRight: '5px' }}
              />
            </a>
            :
          </label>
          <input
            type="number"
            value={RorcFeatherValue}
            onChange={(e) => setRorcFeatherValue(e.target.value)}
          />
        </div>
        <div>
          <label>
            Peacock Feather Fan value (5x){' '}
            <a
              href="https://www.tibiawiki.com.br/wiki/Peacock_Feather_Fan"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={PeacockFeatherFan}
                alt="Peacock Feather Fan"
                style={{ verticalAlign: 'middle', marginRight: '5px' }}
              />
            </a>
            :
          </label>
          <input
            type="number"
            value={PeacockFeatherFanValue}
            onChange={(e) => setPeacockFeatherFanValue(e.target.value)}
          />
        </div>
        <div>
          <label>
            Energy Vein value (1x){' '}
            <a
              href="https://www.tibiawiki.com.br/wiki/Energy_Vein"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={EnergyVein}
                alt="Energy Vein"
                style={{ verticalAlign: 'middle', marginRight: '5px' }}
              />
            </a>
            :
          </label>
          <input
            type="number"
            value={EnergyVeinValue}
            onChange={(e) => setEnergyVeinValue(e.target.value)}
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

export default Electrify;
