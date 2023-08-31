import React from 'react';

class Person extends React.Component{
  state = {
    name : 'sunrise',
    age : 23,
    friends : [
      'victoria',
      'daniel',
      'hanna'
    ],
  }

  displayInfo = () => {
    alert(`*신상정보*
    -------------------------
    이름 : ${this.state.name}
    나이 : ${this.state.age}
    친구 : ${this.state.friends}
    `)
  }

  render(){
    return (
      <>
        <button onClick={this.displayInfo}>신상정보 확인하기</button>
      </>
    )
  }
}

export default Person;