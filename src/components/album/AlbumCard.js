import React from "react";
import {NavLink} from "react-router-dom";

function AlbumCard({album}) {
    return (
        <div className="card" style={{width: "18rem"}}>
            <NavLink to={/albums/ + album.id}>
                <img src={album.images[0].url} className="card-img-top" alt="..."/>
            </NavLink>
            <div className="card-body">
                <h6 className="card-title">{album.name}</h6>
                <p className="card-text">
                    {album.artists.map(artist => (
                        <NavLink to={/artist/ + artist.id} key={artist.id}>
                            <span className="badge badge-primary">
                                {artist.name}
                            </span>
                        </NavLink>
                    ))}
                </p>
            </div>
        </div>
    );
}

export default AlbumCard;
