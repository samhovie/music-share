import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createPlaylistThunk } from '../../store/playlists';
import Upload from '../UploadImg';

function CreatePlaylistForm() {
    const dispatch = useDispatch();

    const [newPlaylist, setNewPlaylist] = useState({
        name: "",
        is_public: false,
        description: ""
    });

    const handleCreatePlaylist = async (e) => {
        e.preventDefault();
        const playlistData = await dispatch(createPlaylistThunk(newPlaylist));
        console.log(playlistData)
        if (playlistData.id) {
            // You can do something here if you want, like displaying a success message or redirecting the user
        }
    }

    return (
        <form onSubmit={handleCreatePlaylist}>
            <label>
                Create New Playlist:
                <input
                    type="text"
                    value={newPlaylist.name}
                    onChange={e => setNewPlaylist({ ...newPlaylist, name: e.target.value })}
                    placeholder="Playlist Name"
                />
                <input
                    type="checkbox"
                    checked={newPlaylist.is_public}
                    onChange={e => setNewPlaylist({ ...newPlaylist, is_public: e.target.checked })}
                />
                <input
                    type="text"
                    value={newPlaylist.description}
                    onChange={e => setNewPlaylist({ ...newPlaylist, description: e.target.value })}
                    placeholder="Description"
                />
            </label>
            <label>
                Playlist Image:
                <Upload onChange={e => setNewPlaylist({ ...newPlaylist, image: e.target.files[0] })} />
            </label>
            <button type="submit">Create Playlist</button>
        </form>
    )
}

export default CreatePlaylistForm;
