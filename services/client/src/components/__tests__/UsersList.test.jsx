import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import UsersList from '../UsersList';

const users = [
    {
        'active': true,
        'email': 'marat@gmail.com',
        'id': 1,
        'username': 'maratule'
    },
    {
        'active': true,
        'email': 'maratmonne@mmonne.com',
        'id': 2,
        'username': 'maramone'
    }
];

test('UsersList renders properly', () => {
    const wrapper = shallow(<UsersList users={users} />);
    
    const element_tr = wrapper.find('tr');
    expect(element_tr.length).toBe(3);

    const element_th = wrapper.find('th');
    expect(element_th.length).toBe(4);
    expect(element_th.get(0).props.children).toBe('ID');
    expect(element_th.get(1).props.children).toBe('Username');
    expect(element_th.get(2).props.children).toBe('Email');
    expect(element_th.get(3).props.children).toBe('Active');

    const element_td = wrapper.find('td');
    expect(element_td.length).toBe(8);
    expect(element_td.get(0).props.children).toBe(users[0].id);
    expect(element_td.get(1).props.children).toBe(users[0].username);
    expect(element_td.get(2).props.children).toBe(users[0].email); 
    expect(element_td.get(3).props.children).toBe(users[0].active.value);
});

test('UsersList renders a snapshot properly', () => {
    const tree = renderer.create(<UsersList users={users} />).toJSON();
    expect(tree).toMatchSnapshot();
});
