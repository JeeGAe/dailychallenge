import React, { Component } from 'react';

class PhotoGallery extends Component{
  state = {
    photos : []
  }

  addPhoto = () => {
    const photo = prompt("추가하려는 사진의 경로를 입력해주세요!!");
    const { photos } = this.state;
    photos.push({ photo : photo, id : photos.length });
    this.setState({ photos : photos });
  }

  render() {
    const { photos } = this.state;
    return (
      <>
        <button onClick={this.addPhoto}>사진 추가하기</button>
        <h1>포토 갤러리</h1>
        <h2>--------------</h2>
        {photos.map(p => <img key={p.id} src={p.photo} alt={p.photo}></img>)}
      </>
    )
  }
}

export default PhotoGallery;