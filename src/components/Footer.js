import React from 'react';

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
        height: '80px' /* Defina a altura desejada para o Footer */,
        backgroundColor:
          '#f1f1f1' /* Opcional: adiciona uma cor de fundo ao Footer */,
      }}
    >
      <p style={{ margin: '0' }}>
        Feito com carinho, por{' '}
        <a
          href="https://github.com/wagnerfiorese"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'black' /* Outros estilos para o link */ }}
        >
          <strong>Wagner Fiorese Bolzan</strong>
        </a>
      </p>
    </footer>
  );
};

export default Footer;
