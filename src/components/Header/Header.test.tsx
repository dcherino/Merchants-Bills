import React from 'react';
import { shallow } from 'enzyme';
import '../../setupTest';
import Header from './Header';
import Logo from './Logo';

describe('Header', () => {
  const wrapper = shallow(<Header />);

  it('renders App title', () => {
    const welcome = <h1>Merchants Bill App</h1>;
    expect(wrapper.contains(welcome)).toEqual(true)
  });

  it('renders Logo', () => {
    expect(wrapper.containsMatchingElement(<Logo />)).toEqual(true)
  })
})
