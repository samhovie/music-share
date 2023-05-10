import { getAllSongsThunk } from '../../store/songs'
import SingleSongCard from '../UI/SingleSongCard'
import './FeedPage.css'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const FeedPage = () => {
    const dispatch = useDispatch()
    const allSongs = useSelector((state) => state.songs.allSongs)
    const songs = Object.values(allSongs)
    console.log(allSongs)



    useEffect(() => {
        dispatch(getAllSongsThunk())
    }, [dispatch])

    return (
        <>
        {songs.map((song) => (
            <SingleSongCard song={song} key={song.id}/>
        ))}
        </>
    )
}

export default FeedPage
