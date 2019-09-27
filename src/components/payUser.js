import React from 'react';
import styled from 'styled-components';

const payUser = ({ pay, amount, amountInput, sendAmount }) => (
  <PayUser>
    <div>
      Pay {pay.name.toUpperCase()} ${amount}
    </div>
    <MoneyInput 
      maxLength="7"
      type='text'
      onChange={e => amountInput(e.target.value)}
    />
    <SubmitInput
      type='submit'
      value='submit'
      onClick={() => sendAmount(pay,amount)}
    />
  </PayUser>
);

export default payUser;

const PayUser = styled.div`
  background-color: #70acba;
  padding: 20px;
  margin: 20px;
  border: solid black 2px;
  border-radius: 10px;
  font-size: 30px;
  font-weight: 600;
  color: aliceblue;
  box-shadow: 3px 3px 16px 1px #00000078;
`;

const MoneyInput = styled.input`
  padding: 15px;
  margin: 10px;
  font-size: 20px;
`;

const SubmitInput = styled.input`
padding: 10px;
  font-size: 20px;
  font-weight: 600;
`