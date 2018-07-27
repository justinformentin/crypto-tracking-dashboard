import React from 'react';
import Loadable from 'react-loadable'

import DefaultLayout from './containers/DefaultLayout';

function Loading() {
  return <div>Loading...</div>;
}

const Dashboard = Loadable({
  loader: () => import('./views/Dashboard/Dashboard'),
  loading: Loading,
});

const CryptoDetails = Loadable({
  loader: () => import('./views/CryptoDetails/CryptoDetails'),
  loading: Loading,
});

const routes = [
  { path: '/', exact: true, name: 'Home', component: DefaultLayout },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/bitcoin', name: 'Bitcoin', symbol: 'BTC', twitterScreenname: 'bitcoin', component: CryptoDetails },
  { path: '/ethereum', name: 'Ethereum', symbol: 'ETH', twitterScreenname: 'ethereum', component:  CryptoDetails },
  { path: '/litecoin', name: 'Litecoin', symbol: 'LTC', twitterScreenname: 'litecoin', component:  CryptoDetails },
  { path: '/monero', name: 'Monero', symbol: 'XMR', twitterScreenname: 'monero', component:  CryptoDetails },
  { path: '/ripple', name: 'XRP', symbol: 'XRP', twitterScreenname: 'ripple', component:  CryptoDetails },

];

export default routes;
