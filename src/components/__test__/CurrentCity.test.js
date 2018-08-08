import 'react-native';
import React from 'react'
import CurrentCity from '../CurrentCity';

import renderer from 'react-test-renderer';

it('should renders', () => {
  const tree = renderer.create(<CurrentCity />).toJSON();
  expect(tree).toMatchSnapshot();
});