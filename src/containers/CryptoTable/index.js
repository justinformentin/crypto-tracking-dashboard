import React, { Component } from 'react';
import FooterBar from '../../components/FooterBar';
import CryptoRows from '../../components/CryptoRows';
import getAllTickers from '../../helpers/getAllTickers';
import sortStringData from '../../helpers/sortStringData';
import sortNumberData from '../../helpers/sortNumberData';
import PropTypes from 'prop-types';

class CryptoTable extends Component {
  state = {
    tickers: []
  };

  componentDidMount() {
    getAllTickers().then(response => {
      this.setState({
        tickers: response.data
      });
    });
  }

  sortStringData = event => {
    const { tickers } = this.state;
    const headerName = event.target.value;
    let sortedTickers;

    if (event.target.checked === true) {
      sortedTickers = tickers.sort(sortStringData(headerName));
    } else {
      // sort column descending on second click
      sortedTickers = tickers.sort(sortStringData(headerName, 'desc'));
    }

    this.setState({
      tickers: sortedTickers
    });
  };

  sortNumberData = event => {
    const { tickers } = this.state;
    const headerName = event.target.value;
    let sortedTickers;

    if (event.target.checked === true) {
      sortedTickers = sortNumberData(tickers, headerName);
    } else {
      // sort the columb smallest to largest on second click
      sortedTickers = sortNumberData(tickers, headerName).reverse();
    }

    this.setState({
      tickers: sortedTickers
    });
  };

  render() {
    const { tickers } = this.state;
    const { sortStringData, sortNumberData } = this;
    const { searchTerm, handleChosenCryptoName, handleChosenCryptoSymbol } = this.props;

    return (
				<div>
					<div className="crypto-table__container" overflow="auto">
						<table className="crypto-table__table" cellPadding="0" cellSpacing="0">
							<thead>
								<tr id="crypto-table__header-row">
									<td className="crypto-table__table-header-data">
										<label className="crypto-table__header-text">
											RANK
											<br />
											<i className="material-icons crypto-table__sorting-arrows rotate-90">
												compare_arrows
											</i>
											<input
												type="checkbox"
												className="crypto-table__checkbox"
												value="rank"
												onClick={sortNumberData}
											/>
										</label>
									</td>
									<td className="crypto-table__table-header-data">
										<label className="crypto-table__header-text">
											NAME
											<br />
											<i className="material-icons crypto-table__sorting-arrows rotate-90">
												compare_arrows
											</i>
											<input
												type="checkbox"
												className="crypto-table__checkbox"
												value="name"
												onClick={sortStringData}
											/>
										</label>
									</td>
									<td className="crypto-table__table-header-data hide-on-ipad">
										<label className="crypto-table__header-text">
											SYMBOL
											<br />
											<i className="material-icons crypto-table__sorting-arrows rotate-90">
												compare_arrows
											</i>
											<input
												type="checkbox"
												className="crypto-table__checkbox"
												value="symbol"
												onClick={sortStringData}
											/>
										</label>
									</td>
									<td className="crypto-table__table-header-data">
										<label className="crypto-table__header-text">
											PRICE
											<br />
											<i className="material-icons crypto-table__sorting-arrows rotate-90">
												compare_arrows
											</i>
											<input
												type="checkbox"
												className="crypto-table__checkbox"
												value="price_usd"
												onClick={sortNumberData}
											/>
										</label>
									</td>
									<td className="crypto-table__table-header-data hide-on-tablet">
										<label className="crypto-table__header-text">
											MARKET CAP
											<br />
											<i className="material-icons crypto-table__sorting-arrows rotate-90">
												compare_arrows
											</i>
											<input
												type="checkbox"
												className="crypto-table__checkbox"
												value="market_cap_usd"
												onClick={sortNumberData}
											/>
										</label>
									</td>
									<td className="crypto-table__table-header-data">
										<label className="crypto-table__header-text">
											CHANGE (24HR)
											<br />
											<i className="material-icons crypto-table__sorting-arrows rotate-90">
												compare_arrows
											</i>
											<input
												type="checkbox"
												className="crypto-table__checkbox"
												value="percent_change_24h"
												onClick={sortNumberData}
											/>
										</label>
									</td>
									<td className="crypto-table__table-header-data">
										<label className="crypto-table__header-text">NEWS</label>
										<br />
										<i className="material-icons rotate-90 opaque">compare_arrows</i>
									</td>
								</tr>
							</thead>

							<tbody className="crypto-table__table-body">
								<CryptoRows
									tickers={tickers}
									searchTerm={searchTerm}
									handleChosenCryptoName={handleChosenCryptoName}
									handleChosenCryptoSymbol={handleChosenCryptoSymbol}
								/>
							</tbody>
						</table>
					</div>
				<FooterBar />
			</div>			
    );
  }
}

CryptoTable.propTypes = {
  searchTerm: PropTypes.string,
  handleChosenCryptoSymbol: PropTypes.func,
  handleChosenCryptoName: PropTypes.func
};

export default CryptoTable;
