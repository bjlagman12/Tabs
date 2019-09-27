import React from 'react';
import styled from 'styled-components'

const CurrentUser = ({ currentUser }) => (
  <CurrentUserSum>
    <div>Hello {currentUser.name}</div>
    <div>You have ${currentUser.money} left</div>
  </CurrentUserSum>
);

export default CurrentUser;


const CurrentUserSum = styled.div`
  background-color: #70acba;
  border: solid black 2px;
  padding: 15px;
  margin: 20px;
  border-radius: 10px;
  font-size: 35px;
  font-weight: 600;
  color: aliceblue;
  box-shadow: 3px 3px 16px 1px #00000078;
`