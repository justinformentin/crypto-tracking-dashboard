import React from 'react';
import { shallow } from 'enzyme';
import FooterBar from '../index';


describe('<FooterBar />', () => {
  it('should render the copyright notice', () => {
    const renderedComponent = shallow(<FooterBar />);
    expect(
      renderedComponent.contains(
        <section>
          <span className="app-footer"><a href="https://justinformentin.com">Made by Jutin Formentin</a> &copy; 2018</span>
        </section>,
      ),
    ).toBe(true);
  });
});