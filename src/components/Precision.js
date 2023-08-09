import React, { useState } from 'react';
import ElvenScoutingGlass from '../images/elven-scouting-glass.gif';
import ElvenHoof from '../images/elven-hoof.gif';
import MetalSpike from '../images/metal-spike.gif';

const Precision = () => {
  const [ElvenScoutingGlassValue, setElvenScoutingGlassValue] = useState('');
  const [ElvenHoofValue, setElvenHoofValue] = useState('');
  const [MetalSpikeValue, setMetalSpikeValue] = useState('');

  const formatNumberWithDots = (number) => {
    return number.toLocaleString('en-US');
  };

  const calculateItemsTotal = () => {
    const parsedElvenScoutingGlassValue = parseFloat(ElvenScoutingGlassValue);
    const parsedElvenHoofValue = parseFloat(ElvenHoofValue);
    const parsedMetalSpikeValue = parseFloat(MetalSpikeValue);
    const allFieldsFilled =
      !isNaN(parsedElvenScoutingGlassValue) &&
      !isNaN(parsedElvenHoofValue) &&
      !isNaN(parsedMetalSpikeValue);

    const totalElvenScoutingGlassValue = isNaN(parsedElvenScoutingGlassValue)
      ? 0
      : parsedElvenScoutingGlassValue * 25;
    const totalElvenHoofValue = isNaN(parsedElvenHoofValue)
      ? 0
      : parsedElvenHoofValue * 20;
    const totalMetalSpikeValue = isNaN(parsedMetalSpikeValue)
      ? 0
      : parsedMetalSpikeValue * 10;

    const totalItemsValue = allFieldsFilled
      ? totalElvenScoutingGlassValue +
        totalElvenHoofValue +
        totalMetalSpikeValue +
        150000
      : totalElvenScoutingGlassValue +
        totalElvenHoofValue +
        totalMetalSpikeValue;

    return totalItemsValue;
  };

  return (
    <>
      <h1 className="title-precision">Precision (Distance Boost) </h1>
      <div className="container">
        <div></div>
        <div>
          <label>
            Elven Scouting Glass value (25x){' '}
            <a
              href="https://www.tibiawiki.com.br/wiki/Elven_Scouting_Glass"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={ElvenScoutingGlass}
                alt="Elven Scouting Glass"
                style={{ verticalAlign: 'middle', marginRight: '5px' }}
              />
            </a>
            :
          </label>
          <input
            type="number"
            value={ElvenScoutingGlassValue}
            onChange={(e) => setElvenScoutingGlassValue(e.target.value)}
          />
        </div>
        <div>
          <label>
            Elven Hoof value (20x){' '}
            <a
              href="https://www.tibiawiki.com.br/wiki/Elven_Hoof"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={ElvenHoof}
                alt="Elven Hoof"
                style={{ verticalAlign: 'middle', marginRight: '5px' }}
              />
            </a>
            :
          </label>
          <input
            type="number"
            value={ElvenHoofValue}
            onChange={(e) => setElvenHoofValue(e.target.value)}
          />
        </div>
        <div>
          <label>
            Metal Spike value (10x){' '}
            <a
              href="https://www.tibiawiki.com.br/wiki/Metal_Spike"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={MetalSpike}
                alt="Metal Spike"
                style={{ verticalAlign: 'middle', marginRight: '5px' }}
              />
            </a>
            :
          </label>
          <input
            type="number"
            value={MetalSpikeValue}
            onChange={(e) => setMetalSpikeValue(e.target.value)}
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

export default Precision;
