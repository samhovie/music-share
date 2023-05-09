import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getAllPlaylistsThunk } from '../../store/playlists';
import PlaylistCard from '../UI/PlaylistCard';
import PlaylistWrapper from '../UI/PlaylistWrapper';
import SongInPlaylist from '../UI/SongInPlaylist';

const DiscoverPage = () => {
    const dispatch = useDispatch()
    const allPlaylists = useSelector(state => console.log(state))
    // console.log("allPlaylistSSSSSSS", allPlaylists)

    useEffect(() => {
        dispatch(getAllPlaylistsThunk())
    }, [dispatch])

    return (
        <>
        <SongInPlaylist />
            <PlaylistWrapper />
            {/* <PlaylistCard /> */}



        </>
    )
}

export default DiscoverPage
