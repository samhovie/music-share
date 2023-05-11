import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPlaylistsThunk } from '../../store/playlists';
import PlaylistCard from '../UI/PlaylistCard';
import PlaylistWrapper from '../UI/PlaylistWrapper';
import '../DiscoverPage/DiscoverPage.css';
import OpenModalButton from '../OpenModalButton';
import CreatePlaylistForm from '../CreateNewPlaylist';

const CurrentUserPlaylist = () => {
    const dispatch = useDispatch();
    const userId = useSelector((state) => state.session.user.id);

    const allPlaylists = useSelector((state) => Object.values(state.playlists.allPlaylists));
    console.log('PAYLIST', allPlaylists)
    
    // Filter the playlists belonging to the current user
    console.log('userId', userId)
    console.log('playlist', userId)
    const userPlaylists = allPlaylists.filter((playlist) => playlist.user_id !== userId);
    console.log("users!!", userPlaylists)

    useEffect(() => {
        dispatch(getAllPlaylistsThunk());
    }, [dispatch]);

    return (
        <>
            <div className="global-outerwrapper-outer">
                <div className="global-outerwrapper-wrapper discover-page-wrapper">
                    <OpenModalButton
                        modalComponent={<CreatePlaylistForm />}
                        buttonText="Create Playlist"
                    />

                    <div className="user-playlists-container">
                        {userPlaylists.map((playlist) => (
                            <PlaylistCard key={playlist.id} playlist={playlist} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default CurrentUserPlaylist;
