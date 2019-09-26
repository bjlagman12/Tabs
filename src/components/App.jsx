import React from 'react';
import styled from 'styled-components'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      apple: "bannana"
    }
  }

  render() {
    return (
      <Divbody>
        <div>hello {this.state.apple}</div>
      </Divbody>
    )
  }
}

export default App;


const Divbody = styled.div`
  background-color: beige;
`;