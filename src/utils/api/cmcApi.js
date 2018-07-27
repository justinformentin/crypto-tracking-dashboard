/**
 * @module utils/cmcApi
 * @desc 
 */
import axios from 'axios';

const BASE_URL = 'https://api.coinmarketcap.com';

export function getAllTickers() {
  const request = axios.get(`${BASE_URL}/v1/ticker/`);
  return request;
}
