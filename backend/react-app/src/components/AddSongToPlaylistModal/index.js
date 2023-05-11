// // added?!

// import { useDispatch } from 'react-redux';
// import { useParams } from 'react-router-dom';
// import { addSongToPlaylistThunk } from '../../store/playlists';

// function AddSongToPlaylist() {
//     const dispatch = useDispatch();
//     const { playlistId, songId } = useParams();

//     const handleAddSongToPlaylist = () => {
//         dispatch(addSongToPlaylistThunk(playlistId, songId));
//     };

//     return (
//         <div>
//             {/* Render the song details... */}
//             <button onClick={handleAddSongToPlaylist}>Add to Playlist</button>
//         </div>
//     );
// }

// export default AddSongToPlaylist;

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPlaylistsThunk, addSongToPlaylistThunk } from '../../store/playlists';

function AddSongToPlaylistModal({ songId }) {
    const dispatch = useDispatch();

    // Get all playlists from the redux state
    const playlists = useSelector(state => state.playlists.allPlaylists);

    // Local state to hold the selected playlist
    const [selectedPlaylist, setSelectedPlaylist] = useState("");

    // Fetch all playlists when the component is mounted
    useEffect(() => {
        dispatch(getAllPlaylistsThunk());
    }, [dispatch]);

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();

        // Dispatch addSongToPlaylistThunk with the selected playlist and song id
        dispatch(addSongToPlaylistThunk(selectedPlaylist, songId));
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Select Playlist:
                    <select value={selectedPlaylist} onChange={e => setSelectedPlaylist(e.target.value)}>
                        {Object.values(playlists).map(playlist => (
                            <option key={playlist.id} value={playlist.id}>{playlist.name}</option>
                        ))}
                    </select>
                </label>
                <button type="submit">Add Song</button>
            </form>
        </div>
    );
}

export default AddSongToPlaylistModal;
