import React, { Component } from 'react';

class SuccessFetch extends Component{
  constructor(props){
    super(props);
    
    this.SuccessFetch = React.createRef();
  }

  componentDidMount(){
    setTimeout(() => this.SuccessFetch.current.className = 'SuccessFetch',3000);
  }

  render() {
    return (
      <div className={`SuccessFetch ${this.props.loading? '': 'open'}`} ref={this.SuccessFetch}>
        <h1>패치 성공 !!!!!</h1>
      </div>
    )
  }
}

export default SuccessFetch;