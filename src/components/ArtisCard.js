import React from "react";

function ArtistCard({ artist }) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={artist.images[0] ? artist.images[0].url : "img/noimage.png"} className="card-img-top" alt="..." />
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
