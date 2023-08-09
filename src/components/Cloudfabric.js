import React, { useState } from 'react';
import WyvernTalisman from '../images/wyvern-talisman.gif';
import CrawlerHeadPlating from '../images/crawler-head-plating.gif';
import WyrmScale from '../images/wyrm-scale.gif';

const Cloudfabric = () => {
  const [WyvernTalismanValue, setWyvernTalismanValue] = useState('');
  const [CrawlerHeadPlatingValue, setCrawlerHeadPlatingValue] = useState('');
  const [WyrmScaleValue, setWyrmScaleValue] = useState('');

  const formatNumberWithDots = (number) => {
    return number.toLocaleString('en-US');
  };

  const calculateItemsTotal = () => {
    const parsedWyvernTalismanValue = parseFloat(WyvernTalismanValue);
    const parsedCrawlerHeadPlatingValue = parseFloat(CrawlerHeadPlatingValue);
    const parsedWyrmScaleValue = parseFloat(WyrmScaleValue);
    const allFieldsFilled =
      !isNaN(parsedWyvernTalismanValue) &&
      !isNaN(parsedCrawlerHeadPlatingValue) &&
      !isNaN(parsedWyrmScaleValue);

    const totalWyvernTalismanValue = isNaN(parsedWyvernTalismanValue)
      ? 0
      : parsedWyvernTalismanValue * 20;
    const totalCrawlerHeadPlatingValue = isNaN(parsedCrawlerHeadPlatingValue)
      ? 0
      : parsedCrawlerHeadPlatingValue * 15;
    const totalWyrmScaleValue = isNaN(parsedWyrmScaleValue)
      ? 0
      : parsedWyrmScaleValue * 10;

    const totalItemsValue = allFieldsFilled
      ? totalWyvernTalismanValue +
        totalCrawlerHeadPlatingValue +
        totalWyrmScaleValue +
        150000
      : totalWyvernTalismanValue +
        totalCrawlerHeadPlatingValue +
        totalWyrmScaleValue;

    return totalItemsValue;
  };

  return (
    <>
      <h1 className="title-cloudfabric">Cloud Fabric (Energy Protection) </h1>
      <div className="container">
        <div></div>
        <div>
          <label>
            Wyvern Talisman value (20x){' '}
            <a
              href="https://www.tibiawiki.com.br/wiki/Wyvern_Talisman"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={WyvernTalisman}
                alt="Wyvern Talisman"
                style={{ verticalAlign: 'middle', marginRight: '5px' }}
              />
            </a>
            :
          </label>
          <input
            type="number"
            value={WyvernTalismanValue}
            onChange={(e) => setWyvernTalismanValue(e.target.value)}
          />
        </div>
        <div>
          <label>
            Crawler Head Plating value (15x){' '}
            <a
              href="https://www.tibiawiki.com.br/wiki/Crawler_Head_Plating"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={CrawlerHeadPlating}
                alt="Crawler Head Plating"
                style={{ verticalAlign: 'middle', marginRight: '5px' }}
              />
            </a>
            :
          </label>
          <input
            type="number"
            value={CrawlerHeadPlatingValue}
            onChange={(e) => setCrawlerHeadPlatingValue(e.target.value)}
          />
        </div>
        <div>
          <label>
            Wyrm Scale value (10x){' '}
            <a
              href="https://www.tibiawiki.com.br/wiki/Wyrm_Scale"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={WyrmScale}
                alt="Wyrm Scale"
                style={{ verticalAlign: 'middle', marginRight: '5px' }}
              />
            </a>
            :
          </label>
          <input
            type="number"
            value={WyrmScaleValue}
            onChange={(e) => setWyrmScaleValue(e.target.value)}
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

export default Cloudfabric;
