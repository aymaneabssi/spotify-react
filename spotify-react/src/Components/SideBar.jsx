import React from 'react';
import '../styles/SideBar.css';
//icons
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import CollectionsBookmarkOutlinedIcon from '@material-ui/icons/CollectionsBookmarkOutlined';

const SideBar = () => {
  return (
    <div className='SideBar'>
      <div className='first_options'>
        <img
          src='https://s3.eu-west-1.amazonaws.com/eduflow-production/activity-cover-photos/224998229343807.jpg'
          alt='logo'
        />
        <div className='option active'>
          <div className='icon'>
            <HomeIcon />
          </div>
          Home
        </div>
        <div className='option'>
          <div className='icon'>
            <SearchIcon />
          </div>
          Search
        </div>
        <div className='option'>
          <div className='icon'>
            <CollectionsBookmarkOutlinedIcon />
          </div>
          Your library
        </div>
      </div>
      <div className='second_options'>
        <button id='SignUp'>Sign up</button>
        <button id='SignIn'>Sign in</button>
        <div className='info'>
          <div>
            <div className='cookies'>Cookies</div>
            Privacy
          </div>
          <div className='policy'>Policy</div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
