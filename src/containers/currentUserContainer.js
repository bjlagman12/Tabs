import { connect } from 'react-redux'
import currentUser from '../components/CurrentUser'

const mapStateToProps = state => {
  return {
    currentUser: state.user
  }
}

let currentUserContainer = connect(mapStateToProps)(currentUser)

export default currentUserContainer