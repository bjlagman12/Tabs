import payUser from '../components/payUser'
import { connect } from 'react-redux'
import { updateAmount, transferAmount } from '../actions/index'

const mapStateToProps = state => {
  return {
    pay: state.pay,
    amount: state.amount
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    amountInput: (num) => dispatch(updateAmount(num)),
    sendAmount: (user,num) => dispatch(transferAmount(user, num))

  }
}


let userListContainer = connect(mapStateToProps, mapDispatchToProps)(payUser)

export default userListContainer