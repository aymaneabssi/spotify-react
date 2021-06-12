import React from 'react';
import '../styles/HomeHeader.css';
const HomeHeader = () => {
  return (
    <div className='Home_header'>
      <ul>
        <li className='active_header'>TRENDING</li>
        <li>PODCAST</li>
        <li>MOODS AND GENRES</li>
        <li>NEW REALEASES</li>
        <li>DISCOVER</li>
      </ul>
    </div>
  );
};

export default HomeHeader;
