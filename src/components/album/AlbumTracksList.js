import React from 'react';
import { msToTime } from '../utils';

const AlbumTracksList = ({tracks}) => {
    return (
        <div className="mt-1">
            <h2>Tracks</h2>
            {tracks.map(track => (
                <div key={track.id} className="d-flex align-middle align-content-between">
                    <p>{track.track_number} - {track.name}</p>
                    <p className="ml-auto">{msToTime(track.duration_ms)}</p>
                </div>
            ))}
        </div>
    );
};

export default AlbumTracksList;