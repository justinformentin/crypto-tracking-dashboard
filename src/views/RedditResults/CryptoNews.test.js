import React from 'react';
import ReactDOM from 'react-dom';
import CryptoNews from './CryptoNews';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<CryptoNews />, div);
	ReactDOM.unmountComponentAtNode(div);
});
