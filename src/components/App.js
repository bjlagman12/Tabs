import React from 'react';
import UserListContainer from '../containers/userListContainer';
import CurrentUserContainer from '../containers/CurrentUserContainer';
import PayUserContainer from '../containers/payUserContainer'

import styled from 'styled-components'

const App = () => (
  <Body>
    <UserListContainer />
    <div>
      <CurrentUserContainer />
      <PayUserContainer />
    </div>
  </Body>
);

export default App;

const Body = styled.div`
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif !important;
  display: flex;
  justify-content: center
`
