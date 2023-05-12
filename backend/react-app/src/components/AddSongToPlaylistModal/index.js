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

// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getAllPlaylistsThunk, addSongToPlaylistThunk } from '../../store/playlists';

// function AddSongToPlaylistModal({ songId }) {
//     const dispatch = useDispatch();

//     // Get all playlists from the redux state
//     const playlists = useSelector(state => state.playlists.allPlaylists);

//     // Local state to hold the selected playlist
//     const [selectedPlaylist, setSelectedPlaylist] = useState("");

//     // Fetch all playlists when the component is mounted
//     useEffect(() => {
//         dispatch(getAllPlaylistsThunk());
//     }, [dispatch]);

//     // Handle form submission
//     const handleSubmit = (event) => {
//         event.preventDefault();

//         // Dispatch addSongToPlaylistThunk with the selected playlist and song id
//         dispatch(addSongToPlaylistThunk(selectedPlaylist, songId));
//     };

//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <label>
//                     Select Playlist:
//                     <select value={selectedPlaylist} onChange={e => setSelectedPlaylist(e.target.value)}>
//                         {Object.values(playlists).map(playlist => (
//                             <option key={playlist.id} value={playlist.id}>{playlist.name}</option>
//                         ))}
//                     </select>
//                 </label>
//                 <button type="submit">Add Song</button>
//             </form>
//         </div>
//     );
// }

// export default AddSongToPlaylistModal;

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { getAllPlaylistsThunk, addSongToPlaylistThunk, createPlaylistThunk } from '../../store/playlists';

function AddSongToPlaylistModal({ songId }) {
    const dispatch = useDispatch();
    // const history = useHistory();
    const playlists = useSelector(state => state.playlists.allPlaylists);
    const [selectedPlaylist, setSelectedPlaylist] = useState("");
    const [newPlaylist, setNewPlaylist] = useState({
        name: '',
        is_public: false,
        description: '',
    });

    useEffect(() => {
        dispatch(getAllPlaylistsThunk());
    }, [dispatch]);

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(addSongToPlaylistThunk(selectedPlaylist, songId));
    };

    const handleCreatePlaylist = async (e) => {
        e.preventDefault();
        const createdPlaylist = await dispatch(createPlaylistThunk(newPlaylist));
        if (createdPlaylist && createdPlaylist.id) {
            // history.push(`/playlists/${createdPlaylist.id}/songs/songId`)
            dispatch(addSongToPlaylistThunk(createdPlaylist.id, songId));
        }
    }

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
            {/* <form onSubmit={handleCreatePlaylist}>
                <label>
                    Create New Playlist:
                    <input type="text" value={newPlaylist.name} onChange={e => setNewPlaylist({ ...newPlaylist, name: e.target.value })} placeholder="Playlist Name" />
                    <input type="checkbox" checked={newPlaylist.is_public} onChange={e => setNewPlaylist({ ...newPlaylist, is_public: e.target.checked })} />
                    <input type="text" value={newPlaylist.description} onChange={e => setNewPlaylist({ ...newPlaylist, description: e.target.value })} placeholder="Description" />
                </label>
                <button type="submit">Create Playlist and Add Song</button>
            </form> */}
        </div>
    );
}

export default AddSongToPlaylistModal;
