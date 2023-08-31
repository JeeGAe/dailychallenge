// import logo from './logo.svg';
import './App.css';
// import Friend from './Friend';
// import Person from './Person';
// import Book from './Book';
import Animal from './Animal';

function App() {
  // const friends = [
  //   { name: 'victoria', age: 13, city: 'seoul' },
  //   { name: 'sun', age: 34, city: 'busan' },
  //   { name: 'johseb', age: 25, city: 'busan' },
  //   { name: 'syleemomo', age: 9, city: 'seoul' },
  //   { name: 'hannah', age: 41, city: 'daegu' },
  //   { name: 'shara', age: 37, city: 'seoul' },
  //   { name: 'martin', age: 28, city: 'daegu' },
  //   { name: 'gorgia', age: 39, city: 'seoul' },
  //   { name: 'nana', age: 24, city: 'busan' },
  //   { name: 'dannel', age: 19, city: 'seoul' },
  // ]

  // const books = [
  //   {
  //     title: '해리포터',
  //     author: '조앤K롤링',
  //     summary: '해리포터가 마법사로 성장해나가는 과정을 그린 이야기',
  //     genre: '판타지 소설',
  //     release: '2003년 9월 4일',
  //     ISBN: '1234567890'
  //   }
  // ]

  return (
    <div className="App">
      {/* <Friend name={friends[0].name} age={friends[0].age} city={friends[0].city}></Friend>
      <Friend name={friends[1].name} age={friends[1].age} city={friends[1].city}></Friend>
      <Friend name={friends[2].name} age={friends[2].age} city={friends[2].city}></Friend>
      <Friend name={friends[3].name} age={friends[3].age} city={friends[3].city}></Friend>
      <Friend name={friends[4].name} age={friends[4].age} city={friends[4].city}></Friend>
      <Friend name={friends[5].name} age={friends[5].age} city={friends[5].city}></Friend>
      <Friend name={friends[6].name} age={friends[6].age} city={friends[6].city}></Friend>
      <Friend name={friends[7].name} age={friends[7].age} city={friends[7].city}></Friend>
      <Friend name={friends[8].name} age={friends[8].age} city={friends[8].city}></Friend>
      <Friend name={friends[9].name} age={friends[9].age} city={friends[9].city}></Friend> */}
      {/* <Person></Person> */}
      {/* <Book 
        title={books[0].title} author={books[0].author} summary={books[0].summary} genre={books[0].genre} release={books[0].release} ISBN={books[0].ISBN}></Book> */}
      <Animal type="cat" name='meyow' size='small' sound='low' appearence='cute'></Animal>
    </div>
  );
}

export default App;
