import React from 'react'
import styled from 'styled-components'


const User = ({ user, payUser }) => (
  <EachUser onClick={() => payUser(user)}>
    <div>
      Name: {user.name}
    </div>
    <div>
      email: {user.email}
    </div>
  </EachUser>
)

export default User

const EachUser = styled.div`
  padding: 10px;
  border: solid black 1px;
  background: #fafafa;
  margin: 12px;
  border-radius: 5px;
  box-shadow: 3px 2px 5px 0px #00000070;
`
