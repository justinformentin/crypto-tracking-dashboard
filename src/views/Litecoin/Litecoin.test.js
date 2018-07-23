import React from 'react';
import ReactDOM from 'react-dom';
import Litecoin from './Litecoin';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<Litecoin />, div);
	ReactDOM.unmountComponentAtNode(div);
});
