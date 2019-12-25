import React, {Fragment, useState} from 'react';
import Axios from "axios";
import ArtistCard from "./artist/ArtisCard";

function SearchPage(props) {
    const [searchResult, setSearchResult] = useState([]);
    var timeout =  0;

    function searchArtistApi(searchText) {
        Axios.get(`https://api.spotify.com/v1/search?q=${searchText}&type=artist&market=US`)
            .then(response => {
                setSearchResult(response.data.artists.items);
            })
            .catch(error => {
                console.log(error);
            });
    }

    function searchTerm(evt) {
        var searchText = evt.target.value; // this is the search text
        if(timeout) clearTimeout(timeout);
        timeout = setTimeout(() => {
            searchArtistApi(searchText);
        }, 300);
    }

    return (
        <Fragment>
            <div className="mt-4 d-flex justify-content-center">
                <div className="input-group input-group-sm mb-3" style={{maxWidth: '60%'}}>
                    <input
                        type="text"
                        className="form-control"
                        aria-label="Small"
                        aria-describedby="inputGroup-sizing-sm"
                        placeholder="Search here..."
                        onChange={searchTerm}
                    />
                </div>
            </div>
            <div className="d-flex justify-content-center flex-wrap">
                {searchResult.map(artist => (
                    <div className="m-2" key={artist.id}>
                        <ArtistCard artist={artist} />
                    </div>
                ))}
            </div>
        </Fragment>
    );
}

export default SearchPage;
