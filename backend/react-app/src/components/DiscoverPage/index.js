import React, { useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { getAllSongsThunk } from '../../store/songs';

const DiscoverPage = () => {
    const dispatch = useDispatch()
    const allSongs = useSelector(state => console.log(state))

    useEffect(() => {
        dispatch(getAllSongsThunk())
    },[dispatch])

    return (
        <>
        </>
    )
}

export default DiscoverPage
