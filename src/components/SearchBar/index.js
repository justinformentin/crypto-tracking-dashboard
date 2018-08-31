import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
	handleSearchTerm = event => {
		const { handleSearchTerm } = this.props;
		handleSearchTerm(event.target.value);
	};

	render() {
		const { handleSearchTerm } = this;
		const { searchTerm } = this.props;

		return (
			<div className="search-bar__container hide-on-phone">
				<input
					className="search-bar__input"
					placeholder={`filter list by name/symbol`}
					value={searchTerm}
					onChange={handleSearchTerm}
				/>
			</div>
		);
	}
}

SearchBar.propTypes = {
	searchTerm: PropTypes.string,
	handleSearchTerm: PropTypes.func
};

export default SearchBar;
