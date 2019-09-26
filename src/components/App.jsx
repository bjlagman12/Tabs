import React from 'react';
import styled from 'styled-components'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      apple: "bannana"
    }
    this.onPress = this.onPress.bind(this)
  }
  onPress() {
    console.log('works')
  }

  render() {
    return (
      <Divbody>
        <div>hello {this.state.apple}</div>
        <button onClick={() => this.onPress()}>submit</button>
      </Divbody>
    )
  }
}

export default App;


const Divbody = styled.div`
  background-color: beige;
`;