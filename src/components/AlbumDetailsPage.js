import React, {useEffect, useState} from 'react';
import Axios from "axios";
import AlbumTracksList from './AlbumTracksList';
import { NavLink } from 'react-router-dom';

function AlbumDetailsPage({history, location, match}) {
    const [album, setAlbum] = useState(null);
    console.log(match.params.albumId);

    useEffect(() => {
        Axios.get(`https://api.spotify.com/v1/albums/${match.params.albumId}`)
            .then(response => {
                setAlbum(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, [match.params.albumId]);

    if( !album ){
        return <h2>Loading album info...</h2>
    }

    return (
      <div className='row mt-4'>
        <div className='col-4'>
          <img
            src={album.images[0].url}
            className='img-fluid rounded mx-auto d-block'
            alt='...'
            style={{ maxWidth: '80%' }}
          />
        </div>
        <div className='col-6'>
          <h1>{album.name}</h1>
          {album.artists.map(artist => (
            <NavLink to={/artist/ + artist.id} key={artist.id}>
              <span className='badge badge-primary'>{artist.name}</span>
            </NavLink>
          ))}

          <br />
          <br />
          <AlbumTracksList tracks={album.tracks.items} />
        </div>
      </div>
    );
}

export default AlbumDetailsPage;
