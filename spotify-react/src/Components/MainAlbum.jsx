import React, { useState, useEffect } from 'react';
import '../styles/MainAlbum.css';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const MainAlbum = ({ Id, name }) => {
  const [Album, setAlbum] = useState([]);
  const [tracks, SetTracks] = useState([]);
  console.log(tracks);
  useEffect(() => {
    fetch(`https://striveschool-api.herokuapp.com/api/deezer/album/${Id}`)
      .then((response) => response.json())
      .then((data) => setAlbum(data));
  }, [Id]);
  useEffect(() => {
    fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${name}`)
      .then((response) => response.json())
      .then((data) => SetTracks(data.data));
  }, [name]);
  return (
    <div className='main_album'>
      <div
        className='banner'
        style={{ backgroundImage: `url(${Album.cover_xl})` }}
      >
        <div className='listeners'>33,000,675 MONTHLY LISITENERS</div>
        <div className='title'>{name}</div>
        <div className='buttons'>
          <div className='btn' id='play'>
            PLAY
          </div>
          <div className='btn' id='follow'>
            FOLLOW
          </div>
        </div>
        <div className='navBar' id='album_page'>
          <ul>
            <li>OVERVIEW</li>
            <li>RELATED ARTISTS</li>
            <li>ABOUT</li>
          </ul>
        </div>
      </div>
      <div className='albums_page'>
        <div className='album_container'>
          <h1>Albums</h1>
          <Row>
            {tracks.map((track) => (
              <Link to={'/Artist/' + track.artist.id}>
                <Col key={track.id} lg={3} md={4} sm={6} xs={6}>
                  <div className='album_home'>
                    <img
                      src={track.album.cover_medium}
                      alt={track.album.title}
                    />
                    <div className='album_title'>{track.album.title}</div>
                  </div>
                </Col>
              </Link>
            ))}
          </Row>
        </div>
      </div>
    </div>
  );
};

export default MainAlbum;
