import UserList from '../components/UserList'
import { connect } from 'react-redux'
import { updateUser } from '../actions/index'

const mapStateToProps = state => {
  return {
    userList: state.userList,
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    payUser: (user) => {
      console.log('test')
      dispatch(updateUser(user))
    }
  }
}


let userListContainer = connect(mapStateToProps, mapDispatchToProps)(UserList)

export default userListContainer