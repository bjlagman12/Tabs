import React from 'react'

import { connect } from 'react-redux'

import { updateUser } from '../actions/index'

const App = ( {onUpdateUser} ) => (
  <div>
    <div onClick={() => onUpdateUser('zach')}>hi</div>
  </div>
)

const mapStateToProps = state => ({
  products: state.products,
  user: state.user
});

const mapDispatchToProps = (dispatch) => {
  return {
    onUpdateUser: (user) => dispatch(updateUser(user))
  }
}


let appContainer = connect(mapStateToProps, mapDispatchToProps)(App)

export default appContainer