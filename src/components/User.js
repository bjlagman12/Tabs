import React from 'react'

const User = ({ onUpdateUser }) => (
  <div>
    <div onClick={() => onUpdateUser('zach')}>hi</div>
  </div>
)

export default User