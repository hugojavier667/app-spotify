import React from 'react';
import { msToTime } from '../utils';

const ArtistTopTracks = ({tracks, listSize}) => {
    return (
        <div className="mt-1">
            <h2>Top tracks</h2>
            {tracks.splice(0, listSize).map(track => (
                <div key={track.id} className="d-flex mb-2 align-middle align-content-between">
                    <img src={track.album.images[0].url} className="mr-2" alt="..." style={{maxHeight: "3rem"}}/>
                    <p className="">{track.name}</p>
                    <p className="ml-auto">{msToTime(track.duration_ms)}</p>
                </div>
            ))}
        </div>
    );
};

export default ArtistTopTracks;
