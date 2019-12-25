import React, {useEffect, useState} from "react";
import Axios from "axios";
import AlbumsList from "./AlbumsList";

function AlbumsPage() {
  const [albums, setAlbums] = useState({
    items: []
  });

  const getNewReleases = () => {
    Axios.get("https://api.spotify.com/v1/browse/new-releases")
      .then(response => {
        setAlbums(response.data.albums);
      })
      .catch(error => {
        console.log(error);
      });
  };

  useEffect(() => {
    getNewReleases();
  }, []);

  return (
    <div className="mt-2">
      <AlbumsList albums={albums.items} />
    </div>
  );
}

export default AlbumsPage;
