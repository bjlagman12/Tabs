import User from '../components/User'
import { connect } from 'react-redux'
import { updateUser } from '../actions/index'

const mapStateToProps = state => {
  return {
    products: state.products,
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onUpdateUser: (user) => dispatch(updateUser(user))
  }
}

let userContainer = connect(mapStateToProps, mapDispatchToProps)(User)

export default userContainer