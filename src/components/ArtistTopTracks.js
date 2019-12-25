import React from 'react';

const ArtistTopTracks = ({tracks, listSize}) => {
    function msToTime(s) {
        var ms = s % 1000;
        s = (s - ms) / 1000;
        var secs = s % 60;
        s = (s - secs) / 60;
        var mins = s % 60;
        // var hrs = (s - mins) / 60;

        return mins + ':' + (secs < 10 ? '0' + secs : secs);
    }

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
