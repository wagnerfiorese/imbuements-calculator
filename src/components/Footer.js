import React from 'react';
import Icon from '../images/icon.svg';

const Footer = () => {
  return (
    <footer
      style={{
        textAlign: 'center',
        position: 'fixed',
        bottom: '0',
        left: '0',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '80px',
        backgroundColor: 'black',
        color: 'white',
      }}
    >
      <p style={{ margin: '0' }}>
        Made with love, by{' '}
        <a
          href="https://github.com/wagnerfiorese"
          target="_blank"
          rel="noopener noreferrer"
        >
          <strong>wagner.fiorese</strong>{' '}
          <img
            src={Icon}
            alt="GitHub Icon"
            style={{
              verticalAlign: 'middle',
              marginRight: '5px',
              width: '20px',
              height: '20px',
            }}
          />
        </a>
      </p>
    </footer>
  );
};

export default Footer;
