import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import CryptoChart from './CryptoChart';
import './styles.css';

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root')
  );
};

render(CryptoChart);

module.hot.accept('./CryptoChart', () => {
  render(CryptoChart);
});
