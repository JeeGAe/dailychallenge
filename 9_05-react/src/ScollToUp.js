import React, { Component } from 'react';

class ScrollToUp extends Component{
  state = {
    toggle : false
  }
  componentDidMount(){
    window.addEventListener('scroll', () => {
      if(window.pageYOffset > 10){
        this.setState({ toggle : true })
      }else{
        this.setState({ toggle : false })
      }
    })
  }

  ScrollTop = () => {
    window.scrollTo({top : 0 , behavior : 'smooth'});
  }
  render() {
    const { toggle } = this.state;
    return (
      <div className={`ScrollToUp ${toggle? 'open':''}` } onClick={this.ScrollTop}>
        ↑
      </div>
    )
  }
}

export default ScrollToUp;