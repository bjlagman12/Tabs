import React from 'react';
import UserListContainer from '../containers/userListContainer';
import CurrentUserContainer from '../containers/CurrentUserContainer';
import PayUserContainer from '../containers/payUserContainer';

import styled from 'styled-components';

const App = () => (
  <div>
    <Title>Keep Tabs on Friends</Title>
    <Body>
      <UserListContainer />
      <div>
        <CurrentUserContainer />
        <PayUserContainer />
      </div>
    </Body>
  </div>
);

export default App;

const Body = styled.div`
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto,
    'Helvetica Neue', sans-serif !important;
  display: flex;
  justify-content: center;
`;

const Title = styled.div`
  font-variant-caps: small-caps;
  text-align: center;
  font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,'Helvetica Neue',sans-serif !important;
  font-size: 4rem;
  font-weight: 500;
  color: #6e6e6e;
  text-shadow: 4px 3px 5px #3f3f3f40;
`;
