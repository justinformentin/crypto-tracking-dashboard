import React from 'react';
import ReactDOM from 'react-dom';
import XRP from './XRP';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<XRP />, div);
	ReactDOM.unmountComponentAtNode(div);
});
