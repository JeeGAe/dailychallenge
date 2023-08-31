import React from 'react';

class Book extends React.Component{
  render() {
    const { title, author, summary, genre, release, ISBN } = this.props;
    return (
      <>
        <h2>도서 정보</h2>
        <h3>제목 - {title}</h3>
        <h3>저자 - {author}</h3>
        <h3>줄거리 - {summary}</h3>
        <h3>장르 - {genre}</h3>
        <h3>출판일 - {release}</h3>
        <h3>ISBN - {ISBN}</h3>
      </>
    )
  }
}

export default Book;