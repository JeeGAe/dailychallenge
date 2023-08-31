// import { render } from '@testing-library/react';
import React, { Component } from 'react';

class Friend extends Component {
  // constructor(props){
  //   super(props);
  // }

  render() {
    const { name, age, city } = this.props;
    return (
      <>
        <h3>{name}</h3>
        <h3>{age}</h3>
        <h3>{city}</h3>
        ---------------------
      </>
    );
  }
}

export default Friend;