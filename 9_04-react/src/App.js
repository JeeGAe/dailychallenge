// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

// const users = [
//   {name: 'victoria', age: 13, city: 'seoul', email: 'victoria@gmail.com'},
//   {name: 'sun', age: 34, city: 'busan', email: 'sun@gmail.com'},
//   {name: 'johseb', age: 25, city: 'busan', email: 'johseb@gmail'}, // 탈락
//   {name: 'syleemomo', age: 9.23, city: 'seoul', email: 'syleemomo@nate.com'}, // 탈락
//   {name: 'hannah', age: 41, city: 'daegu', email: 'hannah0923*gmail.com'}, // 탈락
//   {name: 'shara', age: 37, city: 'seoul', email: 'shara@gmail.com'},
//   {name: 'martin', age: -34, city: 'daegu', email: 'martin@gmail.com'}, // 탈락
//   {name: 'gorgia', age: 39, city: 'seoul',  email: 'gorgia@gmail.com'},
//   {name: 'nana', age: 24, city: 'busan', email: 'nana@gmail.com'},
//   {name: 'dannel', age: 19, city: 'seoul', email: 'dannel@gmail.com'},
// ]

// function App() {
//   const regex = new RegExp(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/);

//   return (
//     <div className="App">
//       <h1>유효한 사용자 정보</h1>
//       {users.map((user, index) => {
//         return (
//           user.name && user.age > 0 && (user.age - parseInt(user.age)) === 0 && user.city && regex.test(user.email) && <div key={index}>
//           <h3>{user.name} ({user.age})</h3>
//           <h3>{user.city}</h3>
//           <h3>{user.email}</h3>
//           <h3>-----------------</h3>
//           </div>
//         );
//       })}
//     </div>
//   );
// }

// class App extends Component {
//   state = {
//     friends: [
//       {name: 'victoria', age: 13, city: 'seoul'},
//       {name: 'sun', age: 34, city: 'busan'},
//       {name: 'johseb', age: 25, city: 'busan'},
//       {name: 'syleemomo', age: 9, city: 'seoul'},
//       {name: 'hannah', age: 41, city: 'daegu'},
//       {name: 'shara', age: 37, city: 'seoul'},
//       {name: 'martin', age: 28, city: 'daegu'},
//       {name: 'gorgia', age: 39, city: 'seoul'},
//       {name: 'nana', age: 24, city: 'busan'},
//       {name: 'dannel', age: 19, city: 'seoul'},
//     ],
//     updatedFriends: null
//   }
//   // 구현하기
//   filterCity = (city) => {
//     let { friends } = this.state;
//     // updatedFriends = friends.filter(frd => frd.city === city);
//     this.setState({ updatedFriends : friends.filter(frd => frd.city === city) })
//   }

//   // 구현하기
//   render(){
//     let { friends, updatedFriends } = this.state;

//     return (
//       <>
//         <button onClick={() => this.filterCity("seoul")}>서울</button>
//         <button onClick={() => this.filterCity("busan")}>부산</button>
//         <button onClick={() => this.filterCity("daegu")}>대구</button>

//         <h1>필터링된 사용자 조회</h1>
//         {updatedFriends? updatedFriends.map((frd, index) => {
//           return(
//             <h2 key={index}>이름:{frd.name} 나이:{frd.age} 지역:{frd.city}</h2>
//           )
//         }) : friends.map((frd, index) => {
//           return(
//             <h2 key={index}>이름:{frd.name} 나이:{frd.age} 지역:{frd.city}</h2>
//           )
//         })}
//       </>
//     ) 
//   }
// }

const signs = [
  [
    [0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ],
  [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 0, 0, 1, 0],
    [0, 0, 0, 0, 1, 0, 0, 0, 1, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 1, 0],
    [0, 0, 1, 0, 1, 0, 0, 0, 1, 0],
    [0, 1, 0, 0, 0, 1, 0, 0, 1, 0],
    [0, 0, 0, 1, 1, 1, 1, 1, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 1, 1, 1, 1, 1, 0, 0],
  ],
  [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 1, 1, 1, 0, 0, 0, 1, 0],
    [0, 1, 0, 0, 0, 1, 0, 0, 1, 0],
    [0, 1, 0, 0, 0, 1, 1, 1, 1, 0],
    [0, 1, 0, 0, 0, 1, 1, 1, 1, 0],
    [0, 1, 0, 0, 0, 1, 0, 0, 1, 0],
    [0, 0, 1, 1, 1, 1, 0, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ],
  [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 1, 0],
    [0, 1, 1, 1, 0, 0, 1, 0, 1, 0],
    [0, 0, 0, 1, 1, 1, 1, 0, 1, 0],
    [0, 0, 0, 1, 1, 1, 1, 0, 1, 0],
    [0, 0, 0, 1, 0, 0, 1, 0, 1, 0],
    [0, 1, 1, 0, 0, 0, 1, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ],
  [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 1, 1, 0, 0, 1, 1, 0],
    [0, 1, 0, 0, 0, 1, 0, 1, 1, 0],
    [0, 1, 0, 0, 0, 1, 0, 1, 1, 0],
    [0, 1, 0, 0, 0, 1, 0, 1, 1, 0],
    [0, 0, 1, 1, 1, 0, 0, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 1, 1, 1, 1, 1, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 1, 1, 1, 1, 1, 1, 0],
  ]
]

class App extends Component {
  state = {
    index: 0,
  }

  // 구현하기
  redraw = () => {
    let { index } = this.state;
    this.setState({ index : index + 1 });
  }

  componentDidMount(){
    setInterval(this.redraw, 1000)
  }

  // 구현하기
  render(){
    const { index } = this.state;
    return (
      <>
        <div className='sign'>{signs[index%5].map((sign) => {
          return (
            sign.map((sign, index) => {
              return (
                <span key={index} className={sign ? 'cell' : 'cell bright'}></span>
              )
            })
          )
        })}</div>
      </>
    )
  }
}

export default App;
