import './App.css';
import React, { useState, useEffect } from 'react';
// import Modal from './components/Modal';
import Button from './components/Button';
import animals from './animalData';
// import Movie from './components/Movie';
// import dictionary from './dictionaryData';

// function App() {
//   const [open, setOpen] = useState(false);

//   const modalStatus = () => {
//     const toggleOpen = !open;
//     setOpen(toggleOpen);
//   }

//   return (
//     <div className="App">
//       {open? <Modal open={open}>
//         <div className='header'>You want to add new todo?</div>
//         <div className='body'>
//           <label>todo name: <input type='text'/></label><br/>
//           <label>todo description<input type='text'/></label>
//         </div>
//         <div className="footer">
//           <Button size='small'>add</Button>
//           <Button size='small' handleClick={modalStatus}>Close</Button>
//         </div>
//       </Modal> : <></>}
//       <Button handleClick={modalStatus}>Add Todo</Button>
//     </div>
//   );
// }

// function App(){
//   const [count, setCount] = useState(0);

//   const showUi = (cnt) => {
//     let ui = null;
//     switch(cnt){
//       case 0:
//         ui = <h1>Home</h1>
//         break;
//       case 1:
//         ui = <h1>About</h1>
//         break;
//       case 2:
//         ui = <h1>Detail</h1>
//         break;
//       default:
//         ui = <h1>Not Found</h1>
//     }
//     return ui;
//   }

//   const increaseCount = () => {
//     setCount(count + 1);
//   }

//   return (
//     <div className='App'>
//       {showUi(count)}
//       <Button handleClick={increaseCount}>카운팅</Button>
//     </div>
//   )
// }

// function App(){
//   const [count, setCount] = useState(0);
//   const animal = animals[count % animals.length];

//   useEffect(() => {
//     const timerId = setTimeout(() => setCount(count + 1), 1500);
//     return () => {
//       clearTimeout(timerId);
//     }
//   },[count])

//   return (
//     <div className='App'>
//       <h1>Image Gallery!</h1>
//       <img src={animal.src} alt={animal.title}/>
//     </div>
//   )
// }

// function App(){
//   const [loading, setLoading] = useState(true);
//   const [movies, setMovies] = useState([]);

//   useEffect(() => {
//     fetch('https://yts.mx/api/v2/list_movies.json?limit=12')
//     .then(res => res.json())
//     .then(res => {
//       console.log(res);
//       setLoading(false);
//       setMovies(res.data.movies);
//     })
//   },[])

//   const style = {
//     display: 'flex',
//     flexWrap: 'wrap',
//     justifyContent: 'center',
//     alignItems: 'center',
//     width: '60%',
//     margin: '100px auto',
//     textAlign: 'center'
//   }
//   const loadingStyle = {
//     position: 'absolute', 
//     left: '50%', 
//     top:'50%', 
//     transform: 'translate(-50%, -50%)', 
//     fontSize: '2rem'
//   }
//   return (
//     <div className='App'>
//       {loading? <div style={loadingStyle}><h1>Loading ...</h1></div> :
//         <div style={style}>
//           {movies.map((movie)=> {
//             return (
//               <Movie
//                 key={movie.id}
//                 title={movie.title}
//                 genres={movie.genres}
//                 cover={movie.medium_cover_image}
//                 summery={movie.summary}
//               ></Movie>
//             )
//           })}
//         </div>}
//     </div>
//   )
  
// }

// function App(){
//   const [numbers, setNumbers] = useState([]);

//   useEffect(() => {
//     const pickRandomNumber = (min, max) => {
//       return Math.floor(Math.random() * (max - min + 1)) + min;
//     }
//     const getNewLotto = () => {
//       const newNumbers = []
//       for(let i = 0; i < 6; i++){
//         let randomNum = pickRandomNumber(1, 45);
//         while(newNumbers.indexOf(randomNum) !== -1){
//           randomNum = pickRandomNumber(1, 45);
//         }
//         newNumbers.push(randomNum);
//       }
//       // setNumbers(newNumbers)
//       return newNumbers
//     }
//     const timerId = setTimeout(() => setNumbers(getNewLotto), 1000);
//     return () => {
//       clearTimeout(timerId);
//     }
//   },[numbers])

//   return (
//     <div className="App">
//       <h1>로또번호 추첨</h1>
//       <h2>{numbers.sort((a,b) => a - b).join(' ')}</h2>
//     </div>
//   )
// }

// function App(){
//   const [words, setWords] = useState(dictionary);
  
//   const removeWord = (e, id) => {
//     const updateWords = words.filter((word, index) => index !== id);
//     setWords(updateWords);
//   }

//   return (
//     <div className="App">
//       {words?.length !==0 && words.map((word, id) => {
//         return (<div key={id}>
//           <h2>{word.word}</h2>
//           <Button size='small' handleClick={(e) => removeWord(e, id)}>DELETE</Button>
//         </div>
//         )
//       })}
//     </div>
//   )
// }

// function App(){
//   const [count, setCount] = useState(0);
//   const path = animals[count].src;
//   const title = animals[count].title;

//   return (
//     <div className="App">
//       <div className="img-container">
//         <img src={path} alt={title}/>
//       </div>
//       <div className='control-btn'>
//         <Button handleClick={() => {setCount((count - 1) < 0? animals.length -1 : count - 1)}}>이전</Button>
//         <Button handleClick={() => {setCount((count + 1) > (animals.length - 1)? 0: count + 1)}}>다음</Button>
//       </div>
//     </div>
//   )
// }

// function App(){
//   const [user, setUser] = useState({ id : '', password : ''});
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setUser({...user , [name] : value});
//   }

//   return (
//     <div className='App'>
//       <form>
//         <label>ID <input type='text' placeholder='아이디를 입력하시오' name="id" value={user.id}  onChange={handleChange}/></label>
//         <label>PASSWORD <input type='password' placeholder='비번을 입력하시오' name='password' value={user.password} onChange={handleChange}/></label>
//         <div><Button handleClick={(e) => {
//           e.preventDefault();
//           console.log('login', user.id, user.password);
//         }}>로그인</Button></div>
//       </form>
//     </div>
//   )
// }

function App(){
  const [file, setFile] = useState({ fileName : '', src : ''});

  const fileInput = React.createRef();

  const isValid = (type) => {
    return type === 'image'
  }
  const handleChange = (e) => {
    const file = e.target.files[0];
    const src = URL.createObjectURL(file);
    
    if(isValid(file.type.split('/')[0])){
      setFile({ fileName : file.name , src });
    }else{
      setFile({ fileName : 'File is not valid type !!', src : '' });
    }
  }

  const openFileWindow = () => {
    fileInput.current.click();
  }

  return (
    <div className='App'>
      <h1>{file.fileName}</h1>
      {file.src !== '' && <img src={file.src} alt='preview-img' width="300px" height='400px'/>}
      <input type='file' style={{display: 'none'}} onChange={handleChange} ref={fileInput} accept='image/*'/>
      <Button handleClick={openFileWindow}>Upload</Button>
    </div>
  )
}

export default App;
