// import logo from './logo.svg';
import './App.css';
// import Cart from './Cart';
import PhotoGallery from './PhotoGallery';
// import CommentFilter from './CommentFilter';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <Cart></Cart> */}
      <PhotoGallery></PhotoGallery>
      {/* <h1>필터링된 댓글</h1>
      <h2>----------------</h2>
      <CommentFilter comment='너는 진짜 못말리는 바보 똥개다'></CommentFilter>
      <CommentFilter comment='임마! 너 그렇게 살지마! 그지 새끼야 !'></CommentFilter>
      <CommentFilter comment='야 씨~ 너 죽을래? 진짜 ! 콱! 마! '></CommentFilter> */}
    </div>
  );
}

export default App;
