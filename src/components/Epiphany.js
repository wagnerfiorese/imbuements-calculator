import React, { useState } from 'react';
import ElvishTalisman from '../images/elvish-talisman.gif';
import BrokenShamanicStaff from '../images/broken-shamanic-staff.gif';
import StrandOfMedusaHair from '../images/strand-of-medusa-hair.gif';

const Epiphany = () => {
  const [ElvishTalismanValue, setElvishTalismanValue] = useState('');
  const [BrokenShamanicStaffValue, setBrokenShamanicStaffValue] = useState('');
  const [StrandOfMedusaHairValue, setStrandOfMedusaHairValue] = useState('');

  const formatNumberWithDots = (number) => {
    return number.toLocaleString('en-US');
  };

  const calculateItemsTotal = () => {
    const parsedElvishTalismanValue = parseFloat(ElvishTalismanValue);
    const parsedBrokenShamanicStaffValue = parseFloat(BrokenShamanicStaffValue);
    const parsedStrandOfMedusaHairValue = parseFloat(StrandOfMedusaHairValue);
    const allFieldsFilled =
      !isNaN(parsedElvishTalismanValue) &&
      !isNaN(parsedBrokenShamanicStaffValue) &&
      !isNaN(parsedStrandOfMedusaHairValue);

    const totalElvishTalismanValue = isNaN(parsedElvishTalismanValue)
      ? 0
      : parsedElvishTalismanValue * 25;
    const totalBrokenShamanicStaffValue = isNaN(parsedBrokenShamanicStaffValue)
      ? 0
      : parsedBrokenShamanicStaffValue * 15;
    const totalStrandOfMedusaHairValue = isNaN(parsedStrandOfMedusaHairValue)
      ? 0
      : parsedStrandOfMedusaHairValue * 15;

    const totalItemsValue = allFieldsFilled
      ? totalElvishTalismanValue +
        totalBrokenShamanicStaffValue +
        totalStrandOfMedusaHairValue +
        150000
      : totalElvishTalismanValue +
        totalBrokenShamanicStaffValue +
        totalStrandOfMedusaHairValue;

    return totalItemsValue;
  };

  return (
    <>
      <h1 className="title-epiphany">Epiphany (Magic Boost) </h1>
      <div className="container">
        <div></div>
        <div>
          <label>
            Elvish Talisman value (25x){' '}
            <a
              href="https://www.tibiawiki.com.br/wiki/Elvish_Talisman"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={ElvishTalisman}
                alt="Elvish Talisman"
                style={{ verticalAlign: 'middle', marginRight: '5px' }}
              />
            </a>
            :
          </label>
          <input
            type="number"
            value={ElvishTalismanValue}
            onChange={(e) => setElvishTalismanValue(e.target.value)}
          />
        </div>
        <div>
          <label>
            Broken Shamanic Staff value (15x){' '}
            <a
              href="https://www.tibiawiki.com.br/wiki/Broken_Shamanic_Staff"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={BrokenShamanicStaff}
                alt="Broken Shamanic Staff"
                style={{ verticalAlign: 'middle', marginRight: '5px' }}
              />
            </a>
            :
          </label>
          <input
            type="number"
            value={BrokenShamanicStaffValue}
            onChange={(e) => setBrokenShamanicStaffValue(e.target.value)}
          />
        </div>
        <div>
          <label>
            Strand of Medusa Hair value (15x){' '}
            <a
              href="https://www.tibiawiki.com.br/wiki/Strand_of_Medusa_Hair"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={StrandOfMedusaHair}
                alt="Strand of Medusa Hair"
                style={{ verticalAlign: 'middle', marginRight: '5px' }}
              />
            </a>
            :
          </label>
          <input
            type="number"
            value={StrandOfMedusaHairValue}
            onChange={(e) => setStrandOfMedusaHairValue(e.target.value)}
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

export default Epiphany;
