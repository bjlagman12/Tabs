// import React from 'react';
// import styled from 'styled-components'

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       apple: "bannana"
//     }
//     this.onPress = this.onPress.bind(this)
//   }
//   onPress() {
//     console.log('works')
//   }

//   render() {
//     return (
//       <Divbody>
//         <div>hello {this.state.apple}</div>
//         <button onClick={() => this.onPress()}>submit</button>
//       </Divbody>
//     )
//   }
// }

// export default App;


// const Divbody = styled.div`
//   background-color: beige;
// `;



import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App