import React, { Component } from 'react';
import moment from 'moment';
import PriceChart from '../components/PriceChart';
import { getData } from '../utils/api/poloniexApi';
import PropTypes from 'prop-types';

/**
* @class CryptoChart
* @description Handles application wide logic and state management.
*/

class CryptoChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      priceData: [],
      startDate: '',
      endDate: '',
      timeRange: 'years',
      activeBtnLabel: '1y',
      invalidDateRange: false,
      chartWidth: 966,
      chartHeight: 458,
      currCrypto: {
        name: this.props.name,
        symbol: this.props.symbol,
      },
      cryptos: [
        { name: this.props.name, symbol: this.props.symbol},
      ],
    };
  }

  componentDidMount() {
    this.setSize();
    window.onresize = this.setSize;
    const timeRange = this.getTimeRange();
    this.setState({
      ...this.state,
      ...getData(timeRange)
    });
  }

/**
* @function setSize
* @description Sets size of line chart based on width of the window.
*/

  setSize = () => {
    if (window.innerWidth > 1300) {
      this.setState({ chartWidth: 966, chartHeight: 458 });
    } else if (window.innerWidth > 1000 && window.innerWidth < 1240) {
      this.setState({ chartWidth: 710, chartHeight: 322.5 });
    } else if (window.innerWidth > 775 && window.innerWidth < 966) {
      this.setState({ chartWidth: 680, chartHeight: 322 });
    } else if (window.innerWidth > 715 && window.innerWidth < 966) {
      this.setState({ chartWidth: 620, chartHeight: 322 });
    } else if (window.innerWidth > 530 && window.innerWidth < 775) {
      this.setState({ chartWidth: 475, chartHeight: 204.25 });
    } else if (window.innerWidth < 530) {
      this.setState({ chartWidth: 350, chartHeight: 150.5 });
    }
  }

  /**
  * @function getTimeRange
  * @param {object} start
  * @param {object} end
  * @returns {object} Payload object with necessary variables to fetch data from Poloniex API.
  * @description Calculates number of days between start and end dates to determine an appropriate candlestick period.
  */

  getTimeRange = (start, end) => {
    // default time range will be to show past year
    if (!start) start = moment().subtract(1, 'years');
    if (!end) end = moment();

    // calculate difference between start and end dates
    const diff = end.diff(start, 'days');
    // period variable will vary based on whether time range is a year, a month, a week or a day
    // this determines how much data to fetch from Poloniex API
    // (ie. how many data points will go into chart)
    let period;
    // timeRange variable will be used to format scales on XAxis
    let timeRange;
    if (diff < 0) {
      this.setState({ invalidDateRange: true });
    } else if (diff > 1 && diff <= 14) {
      period = 1800;
      timeRange = 'weeks';
    } else if (diff > 14 && diff <= 186) {
      period = 7200;
      timeRange = 'months';
    } else if (diff > 186) {
      period = 86400;
      timeRange = 'years';
    } else {
      period = 300;
      timeRange = 'day';
    }
    return {
      start,
      end,
      period,
      timeRange,
    };
  }

  /**
  * @function changeStartDate
  * @param {object} e
  * @description Handles logic to change start date from buttons and inputs in date range component.
  */

  changeStartDate = (e) => {
    let startDate;
    let endDate;
    if (e.target.nodeName === 'INPUT') {
      startDate = moment(e.target.value);
      endDate = moment(this.state.endDate);
      this.setState({ activeBtnLabel: '' });
    } else {
      const activeBtnLabel = e.target.textContent;
      switch (activeBtnLabel) {
        case '1y': {
          startDate = moment().subtract(1, 'years');
          endDate = moment();
          break;
        }
        case '1m': {
          startDate = moment().subtract(1, 'months');
          endDate = moment();
          break;
        }
        case '7d': {
          startDate = moment().subtract(1, 'weeks');
          endDate = moment();
          break;
        }
        case '1d': {
          startDate = moment().subtract(1, 'days');
          endDate = moment();
          break;
        }
        default:
          console.log('Not a valid button label');
      }
      // update active button
      this.setState({ activeBtnLabel });
    }
    // calculate new time range with new start date
    const timeRange = this.getTimeRange(startDate, endDate);
    // invoke getData() with new time range to get new price data
    this.setState({
      ...this.state,
      ...getData(timeRange)
    })
  }

  /**
  * @function changeEndDate
  * @param {object} e
  * @description Handles logic to change end date from inputs in date range component.
  */

  changeEndDate = (e) => {
    const startDate = moment(this.state.startDate);
    let endDate;
    if (e.target.nodeName === 'INPUT') {
      endDate = moment(e.target.value);
    }
    // calculate new time range with new end date
    const timeRange = this.getTimeRange(startDate, endDate);
    this.setState({ activeBtnLabel: '' });
    // invoke getData() with new time range to get new price data
    this.setState({
      ...this.state,
      ...getData(timeRange)
    })
  }

  /**
  * @function formatDateScales
  * @param {number} date Unix timestamp.
  * @returns {string} Formatted date string.
  * @description Handles logic to format date scales on XAxis.
  */

  formatDateScales = (date) => {
    switch (this.state.timeRange) {
      case 'years': {
        return moment.unix(date).format('MMM YYYY');
      }
      case 'months' || 'weeks': {
        return moment.unix(date).format('MMM Do');
      }
      case 'day': {
        return moment.unix(date).format('h a');
      }
      default:
        return moment.unix(date).format('MMM Do');
    }
  }

  /**
  * @function formatTooltipLabel
  * @param {number} date Unix timestamp.
  * @returns {string} Formatted date string.
  * @description Handles logic to format date label in tooltip with more exact date/time.
  */

  formatTooltipLabel = (date) => {
    return moment.unix(date).format('MMMM Do YYYY, h:mm a');
  }

  /**
  * @function changeCrypto
  * @param {object} e
  * @description Handles logic to display different crypto currency's data.
  */

  changeCrypto = (e) => {
    const symbol = e.target.textContent;
    const name = this.state.cryptos.reduce((acc, curr) => (
      curr.symbol === symbol ? curr.name : acc
    ), '');
    const timeRange = this.getTimeRange();
    // change currCrypto to the one user clicked on and reset active button in this.state
    // after setState has finished and these variables have been changed,
    // invoke getData() to fetch new priceData from API
    this.setState({
      ...this.state,
      currCrypto: { name, symbol }, 
      activeBtnLabel: '1y',
      ...this.getData(timeRange)
    });
  }

  render() {
    return (
      <div>
        {/* <Menu
          cryptos={this.state.cryptos}
          clickHandler={this.changeCrypto}
          activeBtn={this.state.currCrypto.symbol}
        /> */}
        <PriceChart
          width={this.state.chartWidth}
          height={this.state.chartHeight}
          startDate={this.state.startDate}
          endDate={this.state.endDate}
          priceData={this.state.priceData}
          changeStartDate={this.changeStartDate}
          changeEndDate={this.changeEndDate}
          clickHandler={this.changeStartDate}
          formatDateScales={this.formatDateScales}
          formatTooltipLabel={this.formatTooltipLabel}
          activeBtn={this.state.activeBtnLabel}
          cryptoName={this.state.currCrypto.name}
          cryptoSymbol={this.state.currCrypto.symbol}
          invalidDateRange={this.state.invalidDateRange}
        />
      </div>
    );
  }
}

CryptoChart.propTypes = {
  name: PropTypes.string,
  symbol: PropTypes.string
}

export default CryptoChart;
