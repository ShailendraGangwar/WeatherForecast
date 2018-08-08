import 'react-native';
import React from 'react'
import WeatherContainer from '../WeatherContainer';

import renderer from 'react-test-renderer';

it('should renders', () => {
  const tree = renderer.create(<WeatherContainer />).toJSON();
  expect(tree).toMatchSnapshot();
});