import React from 'react';
import '../styles/AlbumHome.css';
const AlbumHome = ({ album }) => {
  return (
    <div className='album_home'>
      <img src={album.cover_medium} alt={album.title} />
      <div className='album_title'>{album.title.slice(0, 30)}...</div>
    </div>
  );
};

export default AlbumHome;
