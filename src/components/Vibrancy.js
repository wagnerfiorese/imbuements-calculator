import React, { useState } from 'react';
import WereboarHooves from '../images/wereboar-hooves.gif';
import CrystalizedAnger from '../images/crystallized-anger.gif';
import Quill from '../images/quill.gif';

const Vibrancy = () => {
  const [WereboarHoovesValue, setWereboarHoovesValue] = useState('');
  const [CrystalizedAngerValue, setCrystalizedAngerValue] = useState('');
  const [QuillValue, setQuillValue] = useState('');

  const formatNumberWithDots = (number) => {
    return number.toLocaleString('en-US');
  };

  const calculateItemsTotal = () => {
    const parsedWereboarHoovesValue = parseFloat(WereboarHoovesValue);
    const parsedCrystalizedAngerValue = parseFloat(CrystalizedAngerValue);
    const parsedQuillValue = parseFloat(QuillValue);
    const allFieldsFilled =
      !isNaN(parsedWereboarHoovesValue) &&
      !isNaN(parsedCrystalizedAngerValue) &&
      !isNaN(parsedQuillValue);

    const totalWereboarHoovesValue = isNaN(parsedWereboarHoovesValue)
      ? 0
      : parsedWereboarHoovesValue * 20;
    const totalCrystalizedAngerValue = isNaN(parsedCrystalizedAngerValue)
      ? 0
      : parsedCrystalizedAngerValue * 15;
    const totalQuillValue = isNaN(parsedQuillValue) ? 0 : parsedQuillValue * 5;

    const totalItemsValue = allFieldsFilled
      ? totalWereboarHoovesValue +
        totalCrystalizedAngerValue +
        totalQuillValue +
        150000
      : totalWereboarHoovesValue + totalCrystalizedAngerValue + totalQuillValue;

    return totalItemsValue;
  };

  return (
    <>
      <h1 className="title-vibrancy">Vibrancy (Anti-Paralyze) </h1>
      <div className="container">
        <div></div>
        <div>
          <label>
            Wereboar Hooves value (20x){' '}
            <a
              href="https://www.tibiawiki.com.br/wiki/Wereboar_Hooves"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={WereboarHooves}
                alt="Wereboar Hooves"
                style={{ verticalAlign: 'middle', marginRight: '5px' }}
              />
            </a>
            :
          </label>
          <input
            type="number"
            value={WereboarHoovesValue}
            onChange={(e) => setWereboarHoovesValue(e.target.value)}
          />
        </div>
        <div>
          <label>
            Crystalized Anger value (15x){' '}
            <a
              href="https://www.tibiawiki.com.br/wiki/Crystallized_Anger"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={CrystalizedAnger}
                alt="Crystalized Anger"
                style={{ verticalAlign: 'middle', marginRight: '5px' }}
              />
            </a>
            :
          </label>
          <input
            type="number"
            value={CrystalizedAngerValue}
            onChange={(e) => setCrystalizedAngerValue(e.target.value)}
          />
        </div>
        <div>
          <label>
            Quill value (5x){' '}
            <a
              href="https://www.tibiawiki.com.br/wiki/Quill"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={Quill}
                alt="Quill"
                style={{ verticalAlign: 'middle', marginRight: '5px' }}
              />
            </a>
            :
          </label>
          <input
            type="number"
            value={QuillValue}
            onChange={(e) => setQuillValue(e.target.value)}
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

export default Vibrancy;
