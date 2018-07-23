import React, { Component } from 'react';
import PropTypes from 'prop-types';

const backupImg = 'https://b.thumbs.redditmedia.com/bPKOyEBxXWkTmItsSshOs-j273O2_3ZlrU9tbqnSC9Q.jpg';

class RedditResults extends Component {
	render() {
		const { redditResults, chosenCryptoName } = this.props;

		return redditResults.map(result => (
			<li key={result.data.id} className="news__reddit-item">
				<div className="news__reddit-item-content">
					<div className="news__reddit-item-content--top">
						<a href={result.data.url} target="_blank">
							<img
								className="news__reddit-item-thumbnail"
								src={result.data.thumbnail !== 'self' ? result.data.thumbnail : backupImg}
								href={result.data.url}
								target="_blank"
								alt="Reddit Thumbnail"
							/>
						</a>
						<a className="news__reddit-item-title-text" href={result.data.url} target="_blank">
							{result.data.title.length > 100
								? `${result.data.title.substring(0, 100)}...`
								: result.data.title}
						</a>
					</div>
					<div className="news__reddit-item-content--bottom small-text">
						<div className="news__reddit-comments-container">
							<a className="news__reddit-item-link" href={result.data.url} target="_blank">
								<i className="material-icons">forum</i>
								{result.data.num_comments} COMMENTS
							</a>
						</div>
						<div className="news__reddit-links-container">
							<a className="news__reddit-item-link" href={result.data.url} target="_blank">
								<i className="material-icons">link</i>LINK
							</a>
							<a
								className={
									// if subreddit name contains the chosenCryptoName, render the link green
									result.data.subreddit.match(new RegExp(chosenCryptoName, 'i'))
										? 'news__reddit-item-link float-right regular-green'
										: 'news__reddit-item-link float-right'
								}
								href={`https://www.reddit.com/r/${result.data.subreddit}`}
								target="_blank"
								name={result.data.subreddit}
							>
								<i className="material-icons">open_in_new</i>SUBREDDIT
							</a>
						</div>
					</div>
				</div>
			</li>
		));
	}
}

RedditResults.propTypes = {
	redditResults: PropTypes.arrayOf(PropTypes.object),
	chosenCryptoName: PropTypes.string
};

export default RedditResults;
