import React from 'react';
import '../styles/AlbumsHome.css';
import AlbumHome from './AlbumHome';
const AlbumsHome = () => {
  return (
    <div className='Albums'>
      <h1 className='type_title'>#throwbackthursday</h1>
      <div className='albumRow'>
        <AlbumHome />
        <AlbumHome />
        <AlbumHome />
        <AlbumHome />
        <AlbumHome />
      </div>
    </div>
  );
};

export default AlbumsHome;
