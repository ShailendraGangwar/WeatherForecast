import 'react-native';
import React from 'react'
import ZipCodeInput from '../ZipCodeInput';

import renderer from 'react-test-renderer';

it('should renders', () => {
  const tree = renderer.create(<ZipCodeInput />).toJSON();
  expect(tree).toMatchSnapshot();
});