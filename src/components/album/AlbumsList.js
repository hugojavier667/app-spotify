import React from "react";
import AlbumCard from "./AlbumCard";

function AlbumsList({ albums }) {
  return (
    <div className="d-flex justify-content-center flex-wrap">
      {albums.map(album => (
        <div className="m-2" key={album.id}>
          <AlbumCard album={album} />
        </div>
      ))}
    </div>
  );
}

export default AlbumsList;
