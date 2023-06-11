
import { getAllSongsThunk, getSongThunk } from '../../store/songs'
import SingleSongCard from '../UI/SingleSongCard'
import './FeedPage.css'
import {  useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const FeedPage = () => {
    const dispatch = useDispatch()
    const allSongs = useSelector((state) => state.songs.allSongs)
    const sessionUser = useSelector((state) => state.session.user)
    const userSongs = useSelector((state) => state.songs.singleSong)
    const songs = Object.values(allSongs)



    useEffect(() => {
        dispatch(getAllSongsThunk())
        dispatch(getSongThunk(sessionUser.id))
    }, [dispatch, sessionUser.id])

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
                        <SingleSongCard
                        song={song}
                        key={song.id}
                        sessionUser={sessionUser}
                        userSongs={userSongs}
                        />
                    ))}
                </div>
            </div>

        </>
    )
}

export default FeedPage
