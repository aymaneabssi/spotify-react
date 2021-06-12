import React from 'react';
import '../styles/Player.css';
//icons
import FavoriteBorderRoundedIcon from '@material-ui/icons/FavoriteBorderRounded';
import LibraryBooksRoundedIcon from '@material-ui/icons/LibraryBooksRounded';
import ShuffleOutlinedIcon from '@material-ui/icons/ShuffleOutlined';
import SkipPreviousOutlinedIcon from '@material-ui/icons/SkipPreviousOutlined';
import PlayCircleOutlineOutlinedIcon from '@material-ui/icons/PlayCircleOutlineOutlined';
import SkipNextOutlinedIcon from '@material-ui/icons/SkipNextOutlined';
import LoopOutlinedIcon from '@material-ui/icons/LoopOutlined';
import ViewListOutlinedIcon from '@material-ui/icons/ViewListOutlined';
import ImportantDevicesOutlinedIcon from '@material-ui/icons/ImportantDevicesOutlined';
import VolumeUpOutlinedIcon from '@material-ui/icons/VolumeUpOutlined';

const Player = () => {
  return (
    <div className='Player'>
      <div className='songInfo'>
        <img
          src='https://dvfnvgxhycwzf.cloudfront.net/media/SharedImage/imageFull/.f3noMS6U/SharedImage-53612.jpg?t=1a8ff15292f3d96da274'
          alt=''
        />
        <div className='song_nameInfo'>
          <div className='song_title'>Song For My Father</div>
          <div className='artist_name'>Horance Silver</div>
        </div>
        <div className='icons'>
          <FavoriteBorderRoundedIcon />
          <LibraryBooksRoundedIcon />
        </div>
      </div>
      <div className='player_options'>
        <div className='player_options_top'>
          <div className='options_top_icon'>
            <ShuffleOutlinedIcon />
          </div>
          <div className='options_top_icon'>
            <SkipPreviousOutlinedIcon fontSize='large' />
          </div>
          <div className='options_top_icon'>
            <PlayCircleOutlineOutlinedIcon fontSize='large' />
          </div>
          <div className='options_top_icon'>
            <SkipNextOutlinedIcon fontSize='large' />
          </div>
          <div className='options_top_icon'>
            <LoopOutlinedIcon />
          </div>
        </div>
        <div className='player_options_bottom'>
          <div className='startNum'>0.00</div> <div className='play_bar'></div>
          <div className='endNum'>4.00</div>
        </div>
      </div>
      <div className='song_volume'>
        <ViewListOutlinedIcon />
        <ImportantDevicesOutlinedIcon />
        <VolumeUpOutlinedIcon />
        <div className='volume_bar'></div>
      </div>
    </div>
  );
};

export default Player;
