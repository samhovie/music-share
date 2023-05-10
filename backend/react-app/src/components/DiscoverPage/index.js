import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getAllPlaylistsThunk } from '../../store/playlists';
import PlaylistCard from '../UI/PlaylistCard';
import PlaylistWrapper from '../UI/PlaylistWrapper';
import SongInPlaylist from '../UI/SongInPlaylist';
import './DiscoverPage.css'

const DiscoverPage = () => {
    const dispatch = useDispatch()
    const allPlaylists = useSelector((state) => state.playlists.allPlaylists)
    console.log("state", allPlaylists)
    const playlists = Object.values(allPlaylists)
    // console.log("PLAYSSSSS", allPlaylists)
    // console.log(allPlaylists)

    useEffect(() => {
        dispatch(getAllPlaylistsThunk())
    }, [dispatch])

    return (
        <>
            {/* <SongInPlaylist /> */}
            <div className='global-outerwrapper-outer'>
                <div className='global-outerwrapper-wrapper discover-page-wrapper'>
                    {/* <div className='discover-page-inner-wrapper'> */}
                    <PlaylistWrapper playlists={playlists} />
                    <PlaylistWrapper playlists={playlists} />
                    {/* <PlaylistWrapper playlists={playlists} /> */}
                    {/* </div> */}
                </div>
            </div>
            {/* {playlists.map((playlist) => (
                <PlaylistCard playlist={playlist} key={playlist.id} />
            ))} */}
            {/* <PlaylistCard /> */}



        </>
    )
}

export default DiscoverPage
