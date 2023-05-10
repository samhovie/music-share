// added?!

import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addSongToPlaylistThunk } from '../../store/playlists';

function AddSongToPlaylist() {
    const dispatch = useDispatch();
    const { playlistId, songId } = useParams();

    const handleAddSongToPlaylist = () => {
        dispatch(addSongToPlaylistThunk(playlistId, songId));
    };

    return (
        <div>
            {/* Render the song details... */}
            <button onClick={handleAddSongToPlaylist}>Add to Playlist</button>
        </div>
    );
}

export default AddSongToPlaylist;
