import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useModal } from '../../context/Modal';
import './AddSongToPlaylistModal.css';


import { getAllPlaylistsThunk, addSongToPlaylistThunk } from '../../store/playlists';

function AddSongToPlaylistModal({ songId }) {
    const dispatch = useDispatch();
    const history = useHistory();
    const playlists = useSelector(state => state.playlists.allPlaylists);
    // const playlist = useSelector(state => state.playlists.singlePlaylist);
    const [selectedPlaylist, setSelectedPlaylist] = useState("");
    // const playlistId = playlist.id
    const sessionUser = useSelector((state) => state.session.user);
    const current_user = sessionUser.id;

    const { closeModal } = useModal();

    useEffect(() => {
        dispatch(getAllPlaylistsThunk());
    }, [dispatch]);

    useEffect(() => {
        console.log('SELECTED', selectedPlaylist)
    }, [selectedPlaylist])

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(addSongToPlaylistThunk(selectedPlaylist, songId));
        closeModal();
        // if (createdPlaylist) {
        //     history.push("/playlists/current");
        // }
    };

    return (
        <div className="modal" onClick={closeModal}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <form onSubmit={handleSubmit}>
                    <select
                        className="playlist-select"
                        value={selectedPlaylist}
                        onChange={e => setSelectedPlaylist(e.target.value)}
                    >
                        <option value="" disabled>Select a playlist</option>
                        {
                            Object.values(playlists)
                                .filter(playlist => playlist.user.id === current_user)
                                .map(playlist => (
                                    <option key={playlist.id} value={playlist.id}>{playlist.name}</option>
                                ))
                        }
                    </select>
                    <button className="add-song-btn" type="submit">Add Song</button>
                </form>
            </div>
        </div>
    );
}
export default AddSongToPlaylistModal;
