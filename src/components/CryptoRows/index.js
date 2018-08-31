import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ArrowRight1x from '../../image/arrow-right-1x.png';
import PropTypes from 'prop-types';

class CryptoRows extends Component {
	// spin the crypto symbol, and brighten the text in the row on arrow button hover
	handleArrowHover = event => {
		const tickerSymbol = event.target.id;
		const tickerLogo = document.getElementById(`crypto-rows__${tickerSymbol}-image`);
		const tickerRow = document.getElementById(`crypto-rows__${tickerSymbol}-row`);

		if (event.type === 'mouseenter') {
			tickerLogo.classList.add('crypto-rows__logo--spin');
			tickerRow.classList.add('crypto-rows__row--light-up');
		} else {
			tickerLogo.classList.remove('crypto-rows__logo--spin');
			tickerRow.classList.remove('crypto-rows__row--light-up');
		}
	};

	// send the chosenCryptoName, chosenCryptoSymbol to the application state
	handleChosenCrypto = event => {
		const { handleChosenCryptoName, handleChosenCryptoSymbol } = this.props;

		handleChosenCryptoName(event.target.name);
		handleChosenCryptoSymbol(event.target.id);
	};

	render() {
		const { handleArrowHover, handleChosenCrypto } = this;
		const { searchTerm, tickers } = this.props;

		let tickersToDisplay;

		// render only the tickers with a name or symbol name that match the searchTerm entered into searchBar
		if (searchTerm !== '') {
			const filteredTickers = tickers.filter(
				ticker => `${ticker.name} ${ticker.symbol}`.toUpperCase().indexOf(searchTerm.toUpperCase()) >= 0
			);
			tickersToDisplay = filteredTickers;
			// else render all 100 ticker rows when nothing is typed into searchBar
		} else {
			tickersToDisplay = tickers;
		}

		return tickersToDisplay.map(ticker => (
			<tr key={ticker.name} className="crypto-rows__row" id={`crypto-rows__${ticker.symbol}-row`}>
				<td className="crypto-table__table-row-data">{ticker.rank}</td>
				<td className="crypto-table__table-row-data">
					<div className="crypto-rows__crypto-name-data-content">
						<img
							className="crypto-rows__ticker-image"
							id={`crypto-rows__${ticker.symbol}-image`}
							src={`https://raw.githubusercontent.com/cjdowner/cryptocurrency-icons/master/128/color/${ticker.symbol.toLowerCase()}.png`}
							alt={ticker.symbol}
						/>
						{ticker.name}
					</div>
				</td>
				<td className="crypto-table__table-row-data hide-on-ipad">{ticker.symbol}</td>
				<td className="crypto-table__table-row-data">${ticker.price_usd.substring(0, 7)}</td>
				<td className="crypto-table__table-row-data hide-on-tablet">
					${Number(ticker.market_cap_usd).toLocaleString()}
				</td>
				{/* render % increase as green text, % decrease as red text*/}
				<td className={ticker.percent_change_24h < 0 ? 'red-text' : 'green-text'}>
					{ticker.percent_change_24h}%
				</td>
				<td>
					<Link to="/news">
						<img
							src={ArrowRight1x}
							alt="right arrow"
							name={ticker.name}
							id={ticker.symbol}
							onMouseEnter={handleArrowHover}
							onMouseLeave={handleArrowHover}
							onClick={handleChosenCrypto}
						/>
					</Link>
				</td>
			</tr>
		));
	}
}

CryptoRows.propTypes = {
	tickers: PropTypes.arrayOf(PropTypes.object),
	searchTerm: PropTypes.string,
	handleChosenCryptoName: PropTypes.func,
	handleChosenCryptoSymbol: PropTypes.func
};

export default CryptoRows;
