// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
// import flashCards from './dummyDate';
import Nav from './Nav';
import ProductList from './ProductList';

// class App extends Component{
//   state = {
//     numbers : []
//   }

//   pickRandomNumber = (min, max) => {
//     return Math.floor( Math.random() * (max-min+1) ) + min
//   }

//   sixRandomNumbers = () => {
//     console.log('six');
//     let sixNumbers = [];
//     for(let i = 0; i < 6; i++){
//       let randomNum = this.pickRandomNumber(1, 45);
//       while(sixNumbers.indexOf(randomNum) !== -1){
//         randomNum = this.pickRandomNumber(1, 45);
//       }
//       sixNumbers.push(randomNum);
//     }
//     this.setState({ numbers : sixNumbers })
//   }

//   componentDidMount(){
//     this.timeId = setInterval(() => {
//       this.sixRandomNumbers()} ,1000);
//   }

//   componentWillUnmount(){
//     clearInterval(this.timeId);
//   }

//   render(){
//     const { numbers } = this.state;
//     if(!numbers){
//       this.sixRandomNumbers();
//     }
//     console.log(numbers);
//     return (
//       <div className="App">
//         <h1>로또번호 자동 생성기2</h1>
//         <h2>{numbers.sort((a,b) => a-b).join(' ')}</h2>
//       </div>
//     );
//   }  
// }

// class App extends Component {
//   state = {
//     count : 0
//   }

//   increaseCount = () => {
//     this.setState({ count : this.state.count + 1 });
//   }

//   componentDidMount(){
//     this.timeId = setInterval(this.increaseCount, 1000);
//   }

//   componentWillUnmount(){
//     clearInterval(this.timeId);
//   }

//   render() {
//     const { count } = this.state;
//     const card = flashCards[count % flashCards.length]
//     return (
//       <div className='App'>
//         <h1>{card.word}</h1>
//         <h2>{card.meaning}</h2>
//       </div>
//     )
//   }

// }

class App extends Component{
  state = {
    priceToggle : false
  }

  priceToggleState = () => {
    this.setState({ priceToggle : !this.state.priceToggle });
  }

  render() {
    const { priceToggle } = this.state;
    return (
      <>
        <Nav priceToggle={priceToggle} priceToggleState={this.priceToggleState}></Nav>
        <ProductList priceToggle={priceToggle}></ProductList>
        
      </>
    )
  }
}

// class App extends Component{
//   constructor(props){
//     super(props);
//     this.fileInput = React.createRef()
//   }

//   visibiilityInput = () => {
//     this.fileInput.current.style.visibility = 'visible';
//   }

//   render(){
//     return (
//       <div className="App">
//         <h1>File Upload</h1>
//         <button type="button" onClick={this.visibiilityInput}>Upload</button>
//         <input type="file" style={{visibility:'hidden'}} ref={this.fileInput}></input>
//       </div>
//     );
//   }
// }

export default App;
