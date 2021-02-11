import React from 'react';
import { shallow } from 'enzyme';
import './setupTest';
import App from './App';
import Tabs from './components/Tabs/Tabs';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

describe('Renders main parts of the App', () => {
  const wrapper = shallow(<App />);

  it('renders Header content', () => {
    expect(wrapper.containsMatchingElement(<Header />)).toEqual(true);
  });

  it('renders Main content', () => {
    expect(wrapper.containsMatchingElement(<Tabs />)).toEqual(true);
  });

  it('renders Footer content', () => {
    expect(wrapper.containsMatchingElement(<Footer />)).toEqual(true);
  });
});