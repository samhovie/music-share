import { getAllSongLikesThunk } from '../../store/likes'
import { getAllSongsThunk } from '../../store/songs'
import SingleSongCard from '../UI/SingleSongCard'
import './FeedPage.css'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const FeedPage = () => {
    const dispatch = useDispatch()
    const allSongs = useSelector((state) => state.songs.allSongs)

    const songs = Object.values(allSongs)
    // console.log(allSongs)



    useEffect(() => {
        dispatch(getAllSongsThunk())
    }, [dispatch])



    return (
        <>
            <div className='global-outerwrapper-outer'>
                <div className='global-outerwrapper-wrapper discover-page-wrapper'>
                    <div className='feed-page-wrapper'>
                        <h3>
                            Hear the latest songs
                        </h3>
                    </div>
                    {songs.map((song) => (
                        <SingleSongCard song={song} key={song.id} />
                    ))}
                </div>
            </div>

        </>
    )
}

export default FeedPage
