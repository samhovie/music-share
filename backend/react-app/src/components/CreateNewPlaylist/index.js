import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { createPlaylistThunk } from '../../store/playlists';
import Upload from '../UploadImg';
import './CreateNewPlaylist.css';
import { useModal } from '../../context/Modal';

function CreatePlaylistForm() {
    const dispatch = useDispatch();
    const history = useHistory();
    const { closeModal } = useModal();

    const [newPlaylist, setNewPlaylist] = useState({
        name: "",
        is_public: false,
        description: "",
        preview_img: ""
    });

    // const handleCreatePlaylist = async (e) => {
    //     e.preventDefault();
    //     const playlistData = await dispatch(createPlaylistThunk(newPlaylist));

    // }
    const handleCreatePlaylist = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('name', newPlaylist.name);
        formData.append('is_public', newPlaylist.is_public);
        formData.append('description', newPlaylist.description);
        formData.append('preview_img', newPlaylist.preview_img);

        const playlistData = await dispatch(createPlaylistThunk(formData));
        if (playlistData && playlistData.id) {
            closeModal();
            history.push(`/playlists/${playlistData.id}`)
        }
    }

    return (
        <form className="create-playlist-form" onSubmit={handleCreatePlaylist}>
            <div className="create-playlist-header">
                <h2>Create New Playlist</h2>
            </div>
            <div className="create-playlist-inputs">
                <label>
                    <span>Playlist Name:</span>
                    <input
                        type="text"
                        value={newPlaylist.name}
                        onChange={e => setNewPlaylist({ ...newPlaylist, name: e.target.value })}
                        placeholder="Playlist Name"
                    />
                </label>
                <label>
                    <span>Public:</span>
                    <input
                        type="checkbox"
                        checked={newPlaylist.is_public}
                        onChange={e => setNewPlaylist({ ...newPlaylist, is_public: e.target.checked })}
                    />
                </label>
                <label>
                    <span>Description:</span>
                    <input
                        type="text"
                        value={newPlaylist.description}
                        onChange={e => setNewPlaylist({ ...newPlaylist, description: e.target.value })}
                        placeholder="Description"
                    />
                </label>
                <label>
                    <span>Playlist Image:</span>
                    <Upload onChange={e => setNewPlaylist({ ...newPlaylist, preview_img: e.target.files[0] })} />
                </label>
            </div>
            <div className="create-playlist-button">
                <button type="submit">Create Playlist</button>
            </div>
        </form>
    );
}


export default CreatePlaylistForm;
