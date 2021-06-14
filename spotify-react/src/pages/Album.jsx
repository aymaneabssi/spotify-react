import React from 'react';
import '../styles/Album.css';
//components
import SideBar from '../Components/SideBar';
import Player from '../Components/Player';
import MainAlbum from '../Components/MainAlbum';
const Album = ({ match }) => {
  const QueryId = match.params.albumId;
  const QueryName = match.params.name;
  return (
    <div className='Album'>
      <SideBar />
      <MainAlbum Id={QueryId} name={QueryName} />
      <Player />
    </div>
  );
};

export default Album;
