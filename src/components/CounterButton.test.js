import React from 'react';
import { shallow } from 'enzyme';
import CounterButton from './CounterButton';

// it('renders without crashing', () => {
//   expect(shallow(<CounterButton />)).toMatchSnapshot();
// });

// it('correnctly increments the counter', () => {
//   const wrapper = shallow(<CounterButton/>)
//   expect(wrapper).toMatchSnapshot();
//   wrapper.find('[id="counter"]').simulate('click');
//   expect((wrapper.state())).toEqual({count: 1})
//   wrapper.find('[id="counter"]').simulate('click');
//   wrapper.find('[id="counter"]').simulate('click');
//   expect((wrapper.state())).toEqual({count: 3})
// });

it('renders without crashing', () => {
  const mockColor ='red';
  const wrapper = shallow(<CounterButton color={mockColor} />);
  expect(wrapper).toMatchSnapshot();
})

it('correctly increments the counter', () => {
  const mockColor = 'red';
  const wrapper = shallow(<CounterButton color={mockColor} />);

  wrapper.find('[id="counter"]').simulate('click');
  expect(wrapper.state()).toEqual({count: 1});
  wrapper.find('[id="counter"]').simulate('click');
  wrapper.find('[id="counter"]').simulate('click');
  expect(wrapper.state()).toEqual({count: 3});
})
