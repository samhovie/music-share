// added?!
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addSongToPlaylistThunk } from "../../store/playlists";

function PlaylistDetailsPage() {
    const [playlist, setPlaylist] = useState([]);
    const dispatch = useDispatch();
    const { playlistId, songId } = useParams();

    const handleAddSongToPlaylist = () => {
        dispatch(addSongToPlaylistThunk(playlistId, songId));
    };

    return (
        <div>
            {/* playlist */}
            {/* ... */}
            <button onClick={() => addSongToPlaylistThunk(playlistId, songId)}>
                Add Song to Playlist
            </button>
        </div>
    );
}

export default PlaylistDetailsPage
