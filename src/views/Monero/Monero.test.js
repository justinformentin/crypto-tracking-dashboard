import React from 'react';
import ReactDOM from 'react-dom';
import Monero from './Monero';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<Monero />, div);
	ReactDOM.unmountComponentAtNode(div);
});
