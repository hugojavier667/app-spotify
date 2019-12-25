import React from "react";
import { NavLink } from "react-router-dom";

function ArtistCard({ artist }) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <NavLink to={/artist/ + artist.id}>
        <img src={artist.images[0] ? artist.images[0].url : "img/noimage.png"} className="card-img-top" alt="..." />
      </NavLink>
      <div className="card-body">
        <h5 className="card-title">{artist.name}</h5>
        <p className="card-text">
            {artist.genres.map(genre => (
            <span className="badge badge-primary" key={genre}>
              {genre}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
}

export default ArtistCard;
