import React from 'react';
import { shallow } from 'enzyme';

import HeaderBar from '../index';

describe('<HeaderBar />', () => {
  it('should render a div', () => {
    const renderedComponent = shallow(<HeaderBar />);
    expect(renderedComponent.find('div').length).toEqual(1);
  });
});