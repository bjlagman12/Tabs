import React from 'react';
import User from './User';
import styled from 'styled-components'

const UserList = ({ userList, payUser }) => (
  <Friends>
    <AllFriendsTitle>
      All Friends
    </AllFriendsTitle>
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
  border: solid black 2px;
  background-color: #70acba;
  border-radius: 10px;
  margin: 20px;
  box-shadow: 3px 3px 16px 1px #00000078;
`;

const AllFriendsTitle = styled.div`
  font-size: 35px;
  font-weight: 600;
  text-align: center;
  padding: 15px;
  color: aliceblue;
`;
