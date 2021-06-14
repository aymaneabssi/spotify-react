import React from 'react';
import '../styles/MainHome.css';
//Components
import HomeHeader from './HomeHeader';
import AlbumsHome from './AlbumsHome';
const MainHome = () => {
  return (
    <div className='MainHome'>
      <HomeHeader />
      <AlbumsHome title='#throwbackthursday' Artist='love' />
      <AlbumsHome title='New realeases' Artist='fear' />
      <AlbumsHome title='podcasts' Artist='peace' />
    </div>
  );
};

export default MainHome;
