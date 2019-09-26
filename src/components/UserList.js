import React from 'react';
import User from './User';
import styled from 'styled-components'

const UserList = ({ userList, payUser }) => (
  <Friends>
    {userList.map(user => (
      <User 
        key={user.id} 
        user={user} 
        payUser={payUser}
      />
    ))}
  </Friends>
);

export default UserList;

const Friends = styled.div`
  border: solid black 1px;
  background-color: aqua;
`
