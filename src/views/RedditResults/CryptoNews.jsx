import React, { Component } from 'react';
import PropTypes from 'prop-types';
import getRedditResults from './helpers/getRedditResults';
import sortBySubreddit from './helpers/sortBySubreddit';
import RedditResults from './components/RedditResults';

class CryptoNews extends Component {
	state = {
		redditResults: [],
	};

	componentDidMount() {
		const { chosenCryptoName } = this.props;

		getRedditResults(chosenCryptoName).then(response => {
			let sortedRedditResults = sortBySubreddit(response.data.data.children, chosenCryptoName);

			this.setState({
				redditResults: sortedRedditResults
			});
		});
	}

	componentWillReceiveProps(nextProps) {
		const { chosenCryptoName } = this.props;

		if (chosenCryptoName !== nextProps.chosenCryptoName) {
			getRedditResults(nextProps.chosenCryptoName).then(response => {
				let sortedRedditResults = sortBySubreddit(response.data.data.children, chosenCryptoName);

				this.setState({
					redditResults: sortedRedditResults
				});
			});
		}
	}

	render() {
		const { redditResults } = this.state;
		const { chosenCryptoName } = this.props;

		return (
			<div>
				<ul className="news__reddit-list">
					<RedditResults redditResults={redditResults} chosenCryptoName={chosenCryptoName} />
				</ul>
			</div>
		);
	}
}

CryptoNews.propTypes = {
	chosenCryptoName: PropTypes.string,
	chosenCryptoSymbol: PropTypes.string
};

export default CryptoNews;
