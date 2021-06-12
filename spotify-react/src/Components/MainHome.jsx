import React from 'react';
import '../styles/MainHome.css';
//Components
import HomeHeader from './HomeHeader';
import AlbumsHome from './AlbumsHome';
const MainHome = () => {
  return (
    <div className='MainHome'>
      <HomeHeader />
      <AlbumsHome />
    </div>
  );
};

export default MainHome;
