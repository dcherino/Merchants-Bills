import React from 'react';
import { shallow } from 'enzyme';
import '../../setupTest';
import Hero, { HeroProps } from './Hero';
import { Title, Subtitle } from './Hero.styles';

const props: HeroProps = {
  title: 'Name',
  subtitle: 'Position title',
};

describe('Hero', () => {
  const wrapper = shallow(<Hero {...props} />);

  it('renders name 40 times', () => {
    expect(wrapper.find('span')).toHaveLength(40)
  });

  it('renders correctly text in the hero background', () => {
    expect(wrapper.find('span').first().find(Title).text()).toEqual(props.title);
    expect(wrapper.find('span').first().find(Subtitle).text()).toEqual(props.subtitle);
  });
});
