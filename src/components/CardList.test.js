import React from 'react';
import { shallow } from 'enzyme';
import CardList from './CardList';
// const filteredRobots = [{
//     id: 1,
//     name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz'
//   }]

// it('renders without crashing', () => {
//   expect(shallow(<CardList robots={filteredRobots}/>)).toMatchSnapshot();
// });

it('', () => {
  const mockRobots = [
    {
      id: 1,
      name: 'Jhon snow',
      username: 'jhon0',
      email: 'jhon@gmail.com',
    }
  ]
  expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot();
})