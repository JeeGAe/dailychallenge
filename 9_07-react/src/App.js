// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
// import youtubeVideos from './youtubeVideos';
// import loginData from './loginData';
import Button from './components/Button';
// import Modal from './components/Modal';
import Sidebar from './components/Sidebar';
import menus from './menus';

// class App extends Component {
//   state = {
//     index : 0
//   }

//   prevVideo = () => {
//     const prevIndex = this.state.index - 1;
//     this.setState({ index : (prevIndex < 0)? youtubeVideos.length - 1 : prevIndex })
//   }

//   nextVideo = () => {
//     const nextIndex = this.state.index + 1;
//     this.setState({ index : (nextIndex > youtubeVideos.length - 1)? 0 : nextIndex })
//   }

//   render() {
//     const { index } = this.state;

//     return (
//       <div className="App">
//         <div>
//         <iframe width="560" height="315" src={youtubeVideos[index].src} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
//         </div>
//         <h2>{youtubeVideos[index].title}</h2>
//         <Button handleClick={this.prevVideo}>이전</Button>
//         <Button handleClick={this.nextVideo}>다음</Button>
//       </div>
//     );
//   }
// }

// class App extends Component{
//   state = {
//     id : '',
//     password : '',
//     toggle : false,
//     openModal : false,
//   }

//   getInput = (event) => {
//     const { name, value } = event.target;
//     this.setState({ [name] : value });
//   }

//   login = (event) => {
//     event.preventDefault();
//     const { id, password, toggle } = this.state;
//     const { USER_ID, USER_PASSWORD } = loginData;
//     if(id === USER_ID && password === USER_PASSWORD){
//       this.setState({ toggle : !toggle, openModal : false });
//     }else{
//       console.log('fail')
//       this.setState({ openModal : true });
//     }
//   }

//   closeModal = () => {
//     this.setState({ openModal : false });
//   }


//   render() {
//     const { id, password, toggle, openModal } = this.state;
//     console.log(id, password, openModal);
//     return (
//       <div className="App">
//         <form className={toggle? 'hidden':''}>
//           <label>ID<input type='text' name='id' onChange={this.getInput}/></label>
//           <label>PASSWORD<input type='password' name='password' onChange={this.getInput}/></label>
//           <Button handleClick={this.login}>로그인</Button>
//         </form>
//         <h1 className={toggle? '':'hidden'}>HOME PAGE</h1>
//         <Modal open={openModal}>
//           <h2>you failed to login</h2>
//           <Button handleClick={this.closeModal}>close</Button>
//         </Modal>
//       </div>
//     )
//   }
// }

// class App extends Component{
//   constructor(props){
//     super(props)
//     this.fileInput = React.createRef();
//     this.state = {
//       files : []
//     }
//   }
  

//   handleChange = (event) => {
//     let filesList = [];
//     for(let i = 0; i < event.target.files.length; i++){
//       filesList.push({ 
//         src : URL.createObjectURL(event.target.files[i]),
//         name : event.target.files[i].name
//       })
//     }
//     this.setState({ files : filesList });
//   }

//   openInput = () => {
//    this.fileInput.current.click()
//   }

//   render(){
//     const { files } = this.state;
//     const imgStyle = {
//       width : '300px',
//     }
//     return (
//       <div className='App'>
//         <div>
//           {files.length !== 0 && files.map((f, id) => {
//             return (
//               <div key={id}>
//                 <img src={f.src} alt={f.name} style={imgStyle}/>
//               </div>
//             )
//           })}
//         </div>
//         <label>
//           <input className='Upload' type='file' accept='image/*' ref={this.fileInput} onChange={this.handleChange} multiple/>
//           <Button handleClick={this.openInput}>Upload</Button>
//         </label>
//       </div>
//     )
//   }
// }

class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      toggle : false
    }

    this.nothingBtn = React.createRef();
  }

  

  controlSidebar = (e) => {
    console.log(e.target, this.nothingBtn.current)
    e.stopPropagation();
    if(e.target === this.nothingBtn.current) return;
    const { toggle } = this.state;
    this.setState({ toggle : !toggle})
  }

  componentDidUpdate(){
    const { toggle } = this.state;
    if(toggle){
      window.addEventListener('click', this.controlSidebar);
    }else{
      window.removeEventListener('click', this.controlSidebar);
    }
  }

  componentDidMount(){
    console.log(this.nothingBtn)
  }
  // componentWillUnmount(){
  //   window.removeEventListener('click', this.controlSidebar);
  // }

  render() {
    const { toggle } = this.state;
    return (
      <div className="App" >
        <Button handleClick={this.controlSidebar}>{toggle? '사이드바 닫기': '사이드바 열기'}</Button>
        <Sidebar open={toggle} rf={this.nothingBtn}>{menus.map((menu, id) => {
          return (
            <div className='menu' key={id} onClick={this.controlSidebar}>{menu.icon} {menu.title}</div>
          )
        })}</Sidebar>
        <Button rf handleClick={() => alert('!!')}>아무것도 없는 버튼</Button>
      </div>
    )
  }
}

export default App;
