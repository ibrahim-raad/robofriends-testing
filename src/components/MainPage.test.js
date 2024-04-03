import React from 'react';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';
import MainPage from './MainPage';

let wrapper;

beforeEach(() => {
  const mockProps = {
    onRequestRobots: jest.fn(),
    robots: [],
    searchField: '',
    isPending: false
  }
  wrapper = shallow(<MainPage {...mockProps} />)
})

it('renders without crashing', () => {
  expect(wrapper).toMatchSnapshot()
})

it('filters robots correctly', () => {
  const mockProps2 = {
    onRequestRobots: jest.fn(),
    robots: [{
      id: 3,
      name: 'John',
      email: 'john@gmail.com'
    }],
    searchField: 'john',
    isPending: false
  }
  const wrapper2 = shallow(<MainPage {...mockProps2} />)
  expect(wrapper2.instance().filterRobots()).toEqual([{
    id: 3,
    name: 'John',
    email: 'john@gmail.com'
  }]);
})
// beforeEach(() => {
//   const mockProps = {
//     onRequestRobots: jest.fn(),
//     robots: [],
//     searchField: '',
//     isPending: false
//   }
//   wrapper = shallow(<MainPage {...mockProps}/>)
//  })

// it('renders without crashing', () => {
//   expect(wrapper).toMatchSnapshot();
// });

// it('fileters Robots', () => {
//   const mockProps = {
//     onRequestRobots: jest.fn(),
//     robots: [],
//     searchField: 'a',
//     isPending: false
//   }
//   wrapper = shallow(<MainPage {...mockProps}/>)
//   expect(wrapper.instance().filterRobots()).toEqual([]);
// });

// it('fileters Robots correctly', () => {
//   const filteredRobots = [{
//     id: 1,
//     name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz'
//   }]
//   const mockProps = {
//     onRequestRobots: jest.fn(),
//     robots: [{
//       id: 1,
//       name: 'Leanne Graham',
//       username: 'Bret',
//       email: 'Sincere@april.biz'
//     }],
//     searchField: 'Leanne',
//     isPending: false
//   }
//   wrapper = shallow(<MainPage {...mockProps}/>)
//   expect(wrapper.instance().filterRobots()).toEqual(filteredRobots);
// });

// it('fileters Robots correctly 2', () => {
//   const filteredRobots = [{
//     id: 1,
//     name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz'
//   }]
//   const mockProps = {
//     onRequestRobots: jest.fn(),
//     robots: [{
//       id: 1,
//       name: 'Leanne Graham',
//       username: 'Bret',
//       email: 'Sincere@april.biz'
//     }],
//     searchField: 'Xavier',
//     isPending: false
//   }
//   wrapper = shallow(<MainPage {...mockProps}/>)
//   expect(wrapper.instance().filterRobots()).toEqual([]);
// });

