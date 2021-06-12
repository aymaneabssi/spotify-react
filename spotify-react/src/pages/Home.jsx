import React from 'react';
import '../styles/Home.css';
//components
import SideBar from '../Components/SideBar';
import MainHome from '../Components/MainHome';
import Player from '../Components/Player';

const Home = () => {
  return (
    <div className='Home'>
      <SideBar />
      <MainHome />
      <Player />
    </div>
  );
};

export default Home;
