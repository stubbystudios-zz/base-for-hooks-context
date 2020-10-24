import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from '../../test/testUtils';
import Input from './Input';

const setup = () => {
  return shallow(<Input />)
}

test('renders without error', () => {
  const wrapper = setup();
  const inputComponent = findByTestAttr(wrapper, 'input-component');
  expect(inputComponent.length).toBe(1);
}); 