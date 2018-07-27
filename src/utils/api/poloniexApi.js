/**
 * @module utils/poloniexApi
 * @desc Api resources for Poloniex
 */

 const BASE_URL = 'https://poloniex.com';

 // TODO: Refactor to be a pure api client with just request and response operations; e.g., remove time formatting here by passing as prop in params.
 /**
  * @function getData TODO: change name, is a bit generic if we think of this client as globally reuseable and if it's not part of a class there could also be collision imports
  * @param {object} params
  * @description Fetches price history data from Poloniex API and invokes setState with new data.
  */
async function getData(params, currCrypto) {
  // variables required to fetch price data
  const { symbol } = this.state.currCrypto; // FIXME: this.state does not exist here. currCrypto is a new param, find all uses of 'getData' and pass in currCrypto or just include in params obj
  const { start, end, period, timeRange } = params;

  // format start and end dates to unix timestamp for API request
  const startUnix = start.unix();
  const endUnix = end.unix();

  // TODO: remove this time formatting from this api method
  // format start and end dates to domString for HTML5 date input
  const startString = start.format('YYYY-MM-DD');
  const endString = end.format('YYYY-MM-DD');

  // fetch price priceData from Poloniex API, passing in appropriate start, end and period values
  const url = `${BASE_URL}/public?command=returnChartData&currencyPair=USDT_${symbol}&start=${startUnix}&end=${endUnix}&period=${period}`
  const response = await fetch(url);
  const json = await response.json();
  // parse json to only include values we need (closing price, date and label for XAxis ticks)
  const priceData = json.map((item) => {
    const { date } = item;
    // format closing price to include only 4 decimals
    const close = +item.close.toFixed(4);
    // get label for XAxis ticks based on whether timeRange is a year, a month, a week or a day
    return { 'Price (USD)': close, date };
  });
  return {
      priceData,
      startDate: startString,
      endDate: endString,
      invalidDateRange: false,
      timeRange,
    };
}

  export { getData };