// import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
// import Nav from './components/Nav';
// import Button from './components/Button';
// import Modal from './components/Modal';
import words from './dummyData';
// import Input from './components/Input';

// function App() {
//   return (
//     <div className="App">
//       <Nav></Nav>
//     </div>
//   );
// }

// class App extends Component{
//   state = {
//     modalOpen : false,
//     toggle : false
//   }

//   openModal = () => {
//     this.setState({ modalOpen : true, toggle : false });
//   }

//   closeModal = () => {
//     this.setState({ modalOpen : false });
//   }

//   removeTodo = () => {
//     this.closeModal();
//     this.setState({ toggle : true })
//   }

//   render() {
//     const { modalOpen, toggle } = this.state;
//     return (
//       <div className='App'>
//         <Button handleClick={this.openModal}>Remove Todo</Button>
//         <h1 className={toggle? 'open':'close'}>removed successfully!!</h1>
//         <Modal modalOpen={modalOpen}>
//           <div className='Modal-header'>Do you want to remove this Todo?</div>
//           <div className="Modal-body">If you remove this todo. you can't see this gain later!!</div>
//           <div className="Modal-footer">
//             <Button size='small' handleClick={this.removeTodo}>Remove</Button>
//             <Button size='small' handleClick={this.closeModal}>Close</Button>
//           </div>
//         </Modal>
//       </div>
      
//     )
//   }
// }

class App extends Component{
  state = {
    count : 0
  }
  increseCount = () => {
    this.setState({ count : this.state.count + 1 })
  }
    
  componentDidMount(){
    this.timeId = setInterval(this.increseCount,1000)
  }

  componentWillUnmount(){
    clearInterval(this.timeId);
  }

  render() {
    const { count } = this.state;
    return (
      <div className="App">
        <h1>Flash card</h1>
        <div className='card'>
          <h2>{words[count % words.length].word}</h2>
          <h3>{words[count % words.length].meaning}</h3>
        </div>
      </div>
    )
  }
}

// function App(){
//   const handleChange = () => console.log('Typing something...');

//   return (
//     <div className='App'>
//       <Input size="small" color="blue" handleChange={handleChange} disabled={false} label="Add Todo" placeholder="Type todo to add ..."/>
//      <Input size="medium" color="tomato" label="입력창" placeholder="뭐든지 입력하세요 !"/>
//      <Input size="large" color="grey" label="Remove Todo" placeholder="Type todo to remove ..."/>
//     </div>
//   )
// }

export default App;
