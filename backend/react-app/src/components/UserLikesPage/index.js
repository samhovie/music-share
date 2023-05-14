import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SingleSongCard from "../UI/SingleSongCard"
import { getAllSongsThunk, getSongThunk } from '../../store/songs'
import './UserLikesPage.css'
import { getAllSongLikesThunk, getUserLikedSongsThunk } from '../../store/likes'
import { NavLink } from 'react-router-dom'


const UserLikesPage = () => {
    const dispatch = useDispatch()
    const allSongs = useSelector((state) => state.songs.allSongs)
    const sessionUser = useSelector((state) => state.session.user)
    const userSongs = useSelector((state) => state.likes.userLikes.userSongs)
    const [isUserLikesPage, setIsUserLikesPage] = useState(false)

    const songs = Object.values(userSongs)

    // console.log(userSongs)
    useEffect(() => {
        setIsUserLikesPage(true)
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
        {userSongs.length > 0 ?
        <>
        <h3>Here are all the awesome vibes you've liked!</h3>
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
                        isUserLikesPage={isUserLikesPage}
                        />
                    ))}
                </div>
            </div>
        </>
        :
        <div>
            <NavLink exact to='/feed'>

                Oh wow, you haven't liked anything yet! Go like something now!

            </NavLink>
        </div>
        }

        </>
    )
}

export default UserLikesPage
