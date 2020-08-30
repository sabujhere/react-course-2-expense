import React from 'react';
import { shallow } from 'enzyme';
import Login from '../../components/LoginPage';

test('should render Login page correctly', () => {
  const wrapper = shallow(<Login />);
  expect(wrapper).toMatchSnapshot();
});
