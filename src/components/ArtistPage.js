import React, {useEffect, useState} from "react";
import Axios from "axios";
import ArtistTopTracks from "./ArtistTopTracks";
import { NavLink } from "react-router-dom";

function ArtistsPage({history, location, match}) {
  const [artist, setArtist] = useState(null);
  const [artistAlbums, setArtistAlbums] = useState([]);
  const [topTracks, setTopTracks] = useState([]);

  useEffect(() => {
    Axios.get(`https://api.spotify.com/v1/artists/${match.params.artistId}`)
        .then(response => {
          setArtist(response.data);
        })
        .catch(error => {
          console.log(error);
        });
  }, [match.params.artistId]);

  useEffect(() => {
    Axios.get(`https://api.spotify.com/v1/artists/${match.params.artistId}/albums`)
        .then(response => {
          setArtistAlbums(response.data.items);
        })
        .catch(error => {
          console.log(error);
        });
  }, [match.params.artistId]);

  useEffect(() => {
    Axios.get(`https://api.spotify.com/v1/artists/${match.params.artistId}/top-tracks?country=US`)
        .then(response => {
          setTopTracks(response.data.tracks);
        })
        .catch(error => {
          console.log(error);
        });
  }, [match.params.artistId]);


  if( !artist ){
    return <h2>Loading artist info...</h2>
  }

  return (
    <div className='row mt-4'>
      <div className='col-4'>
        <img
          src={artist.images[0].url}
          className='img-fluid rounded mx-auto d-block'
          alt='...'
          style={{ maxWidth: '80%' }}
        />
      </div>
      <div className='col-6'>
        <h1>{artist.name}</h1>
        {artist.genres.map(genre => (
          <span className='badge badge-primary' key={genre}>
            {genre}
          </span>
        ))}
        <br />
        <br />
        <ArtistTopTracks tracks={topTracks} listSize={5} />
        <br />
        <br />
        <h3>Albums</h3>
        <ul>
          {artistAlbums.map(album => (
            <NavLink to={/albums/ + album.id}>
              <li key={album.id}>{album.name}</li>
            </NavLink>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ArtistsPage;
