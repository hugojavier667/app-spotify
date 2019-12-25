import React, {useEffect, useState} from 'react';
import Axios from "axios";

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
        <div className="row mt-4">
            <div className="col-4">
                <img src={album.images[0].url} className="img-fluid rounded mx-auto d-block" alt="..." style={{maxWidth: "80%"}}/>
            </div>
            <div className="col-6">
                <h1>{album.name}</h1>
                {album.genres.map(genre => (
                    <span className="badge badge-primary" key={genre}>
                      {genre}
                    </span>
                ))}
            </div>
        </div>
    );
}

export default AlbumDetailsPage;
