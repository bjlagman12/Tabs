import React from 'react'
import styled from 'styled-components'


const User = ({ user, payUser }) => (
  <EachUser onClick={() => payUser(user)}>
    <div>
      Name: {user.name}
    </div>
    <div>
      Money: {user.money}
    </div>
  </EachUser>
)

export default User

const EachUser = styled.div`
  padding: 10px
`
