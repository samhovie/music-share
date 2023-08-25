
import { getUserLikedSongsThunk } from '../../store/likes'
import { getAllPlaylistsThunk } from '../../store/playlists'
import { getAllSongsThunk, getSongThunk } from '../../store/songs'
import { getAllUsersThunk } from '../../store/users'
import FeedPageArtistCard from '../UI/FeedPageArtistCard'
import FeedPagePlaylistCard from '../UI/FeedPagePlaylistCard'
import SingleSongCard from '../UI/SingleSongCard'
import './FeedPage.css'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const FeedPage = () => {
    const dispatch = useDispatch()
    const allSongs = useSelector((state) => state.songs.allSongs)
    const sessionUser = useSelector((state) => state.session.user)
    const allUsers = useSelector(state => state.users.allUsers)
    const users = Object.values(allUsers)
    const userSongs = useSelector((state) => state.songs.singleSong)
    const songs = Object.values(allSongs)
    const allPlaylists = useSelector(state => state.playlists.allPlaylists)
    const playlists = Object.values(allPlaylists)
    // console.log('AAAAALLLL', allPlaylists)

    useEffect(() => {
        dispatch(getAllSongsThunk())
        dispatch(getSongThunk(sessionUser.id))
        dispatch(getAllUsersThunk())
        dispatch(getAllPlaylistsThunk())
    }, [dispatch, sessionUser.id])

    return (
        <>
            {/* <div className='global-outerwrapper-outer'>
                <div className='global-outerwrapper-wrapper discover-page-wrapper'> */}

            <div className='feed-page-wrapper'>
                <div className='feed-page-left'>
                <h3 className='feed-title'>
                Hear the latest songs
            </h3>

                    {songs.map((song) => (
                        <SingleSongCard
                            song={song}
                            key={song.id}
                            sessionUser={sessionUser}
                            userSongs={userSongs}
                        />
                    ))}
                </div>
                <div className='feed-page-right'>
                    <div className='feed-page-artist-card-header'>
                        <div className='feed-page-artist-card-header-left'>
                            <i className="fa-solid fa-users" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}></i>
                            <p>
                                Explore more artists
                            </p>
                        </div>
                        <div className='feed-page-artist-card-header-right'></div>
                        <p>Refresh List</p>
                    </div>
                    {
                        users && users.map(user => <FeedPageArtistCard user={user} />)
                    }
                    <div className='feed-page-artist-card-header'
                    style={{marginTop: '1rem'}}
                    >
                        <div className='feed-page-artist-card-header-left'>
                            <i className="fa-solid fa-list" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}></i>
                            <p>
                                Explore more Playlists
                            </p>
                        </div>
                        <div className='feed-page-artist-card-header-right'></div>
                        <p>Refresh List</p>
                    </div>
                    {
                        playlists && playlists.map(playlist => <FeedPagePlaylistCard playlist={playlist} />)
                    }
                </div>


            </div>
            {/* </div>
            </div> */}

        </>
    )
}

export default FeedPage
