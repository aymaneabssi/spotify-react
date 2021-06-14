import React, { useState, useEffect } from 'react';
import '../styles/AlbumsHome.css';
import AlbumHome from './AlbumHome';
//bootstrap theme
import { Row, Col } from 'react-bootstrap';
//router
import { Link } from 'react-router-dom';
const AlbumsHome = ({ title, Artist }) => {
  const [Albums, setALbums] = useState([]);
  useEffect(() => {
    fetch(
      `https://striveschool-api.herokuapp.com/api/deezer/search?q=${Artist}`
    )
      .then((response) => response.json())
      .then((data) => setALbums(data.data));
  }, [Artist]);
  return (
    <div className='Albums'>
      <h1 className='type_title'>{title}</h1>
      <div className='albumRow'>
        <Row>
          {Albums.map((item) => (
            <Col lg={3} md={4} sm={6} xs={6} key={item.id}>
              <Link
                to={
                  '/Album/' +
                  item.album.id +
                  '/' +
                  item.artist.name.toLowerCase()
                }
              >
                <AlbumHome album={item.album} />
              </Link>
            </Col>
          )).slice(9, 17)}
        </Row>
      </div>
    </div>
  );
};

export default AlbumsHome;
