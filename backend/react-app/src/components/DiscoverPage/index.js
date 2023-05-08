import React, { useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { getAllSongsThunk } from '../../store/songs';
import PlaylistCard from '../UI/PlaylistCard';
import PlaylistWrapper from '../UI/PlaylistWrapper';

const DiscoverPage = () => {
    const dispatch = useDispatch()
    const allSongs = useSelector(state => console.log(state))

    useEffect(() => {
        dispatch(getAllSongsThunk())
    },[dispatch])

    return (
        <>
       <PlaylistWrapper />
        {/* <PlaylistCard /> */}



        </>
    )
}

export default DiscoverPage
