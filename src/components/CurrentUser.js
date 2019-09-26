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
  background-color: beige;
  border: solid black 2px;
  padding: 10px
`