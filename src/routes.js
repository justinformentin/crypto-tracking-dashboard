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

const Bitcoin = Loadable({
  loader: () => import('./views/Bitcoin/Bitcoin'),
  loading: Loading,
});

const Ethereum = Loadable({
  loader: () => import('./views/Ethereum/Ethereum'),
  loading: Loading,
});

const Litecoin = Loadable({
  loader: () => import('./views/Litecoin/Litecoin'),
  loading: Loading,
});

const Monero = Loadable({
  loader: () => import('./views/Monero/Monero'),
  loading: Loading,
});

const XRP = Loadable({
  loader: () => import('./views/XRP/XRP'),
  loading: Loading,
});

const routes = [
  { path: '/', exact: true, name: 'Home', component: DefaultLayout },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/bitcoin', name: 'Bitcoin', component: Bitcoin },
  { path: '/ethereum', name: 'Ethereum', component: Ethereum },
  { path: '/litecoin', name: 'Litecoin', component: Litecoin },
  { path: '/monero', name: 'Monero', component: Monero },
  { path: '/ripple', name: 'XRP', component: XRP },

];

export default routes;
