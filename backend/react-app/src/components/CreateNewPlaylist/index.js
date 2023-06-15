import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { createPlaylistThunk } from '../../store/playlists';
import Upload from '../UploadImg';
import './CreateNewPlaylist.css';
import { useModal } from '../../context/Modal';

function CreatePlaylistForm() {
    const dispatch = useDispatch();
    const [errors, setErrors] = useState({})
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
    useEffect(() => {
        const errors = {}
        // console.log("TYPEOFFFFF", typeof(mp3_file))
        // console.log("RIGHT UNDER", console.log(mp3_file))

        if (!newPlaylist.name) errors.name = "Name is required"
        if (!newPlaylist.is_public) errors.is_public = "Check is required"
        if (!newPlaylist.description) errors.description = "Description is required"
        if (!newPlaylist.preview_img) errors.preview_img = "Preview image is required"
        // if (!img.endsWith('.png') && !img.endsWith('.jpg') && !img.endsWith('.jpeg')) errors.img = "Image URL needs to end in jpg or png"
        setErrors(errors)
    }, [newPlaylist])

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
                    {errors.name && <p>{errors.name}</p>}
                    {errors.is_public && <p>{errors.is_public}</p>}
                    {errors.description && <p>{errors.description}</p>}
                    {errors.preview_img && <p>{errors.preview_img}</p>}
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
