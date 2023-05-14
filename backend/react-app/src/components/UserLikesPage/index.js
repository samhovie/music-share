import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SingleSongCard from "../UI/SingleSongCard"
import { getAllSongsThunk, getSongThunk } from '../../store/songs'
import './UserLikesPage.css'
import { getAllSongLikesThunk, getUserLikedSongsThunk } from '../../store/likes'


const UserLikesPage = () => {
    const dispatch = useDispatch()
    const allSongs = useSelector((state) => state.songs.allSongs)
    const sessionUser = useSelector((state) => state.session.user)
    const userSongs = useSelector((state) => state.likes.userLikes)
    const [isUserLikes, setIsUserLikes] = useState(false)
    
    const songs = Object.values(allSongs)

    // console.log(userSongs)
    useEffect(() => {
        setIsUserLikes(true)
    },[])

    useEffect(() => {
        dispatch(getAllSongsThunk())
        dispatch(getSongThunk(sessionUser.id))
        dispatch(getUserLikedSongsThunk())
    }, [dispatch])

    if (!sessionUser) return null
    if (!userSongs) return null
    if (!allSongs) return null

    return (
        <>
        <h2>Here are all the awesome vibes you've liked!</h2>
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
                        isUserLikes={isUserLikes}
                        />
                    ))}
                </div>
            </div>

        </>
    )
}

export default UserLikesPage
