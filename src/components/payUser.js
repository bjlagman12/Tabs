import React from 'react';
import styled from 'styled-components';

const payUser = ({ pay, amount, amountInput, sendAmount }) => (
  <div>
    <div>
      Pay {pay.name} ${amount}
    </div>
    <input type='number' 
      onChange={e => amountInput(e.target.value)}
    />
    <input
      type='submit'
      value='submit'
      onClick={() => sendAmount(amount)}
    />
  </div>
);

export default payUser;


// class payUser extends React.Component {
//   constructor(props){
//     super(props)
//     this.handleSubmit = this.handleSubmit.bind(this)
//   }
//   handleSubmit(){
//     console.log('test')
//   }
//   render(){
//     return(
//       <div>
//       <div>
//         Pay {this.props.pay.name} ${this.props.amount}
//       </div>
//       <input type='number' 
//         onChange={e => this.props.amountInput(e.target.value)}
//       />
//       <input
//         type='submit'
//         value='submit'
//         onClick={() => this.handleSubmit()}
//       />
//     </div>
//     )
//   }
// }

// export default payUser;