import OpenModalButton from '../OpenModalButton'
import UpdateProfile from '../UpdateProfile'
import { NavLink } from 'react-router-dom'
import './ProfilePage.css'
import { useDispatch, useSelector } from 'react-redux'
import DeleteUser from '../DeleteUser'
import SingleSongCard from '../UI/SingleSongCard'
import { useEffect, useState } from 'react'
import { getAllSongsThunk } from '../../store/songs'
import PlaylistCard from '../UI/PlaylistCard'
import { getAllPlaylistsThunk } from '../../store/playlists'
import CreatePlaylistForm from '../CreateNewPlaylist'


const ProfilePage = () => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.session.user)
    const allSongs = useSelector((state) => Object.values(state.songs.allSongs));
    const allPlaylists = useSelector((state) => Object.values(state.playlists.allPlaylists));
    const userId = user.id

    const [isSongs, setIsSongs] = useState(true)
    const [isPlaylists, setIsPlaylists] = useState(false)

    let userSongs = [];
    for (let song in allSongs) {

        if (allSongs[song].artist_id === userId) {
            userSongs.push(allSongs[song])
        }
    }

    let userPlaylists = [];

    for (let playlist in allPlaylists) {
        if (allPlaylists[playlist] && allPlaylists[playlist].user && allPlaylists[playlist].user.id === userId) {
            userPlaylists.push(allPlaylists[playlist])
        }
    }

    useEffect(() => {
        dispatch(getAllSongsThunk());
        dispatch(getAllPlaylistsThunk());
    }, [dispatch]);

    if (!user) return null
    return (
        <>
            <div className='global-outerwrapper-outer'>
                <div className='global-outerwrapper-wrapper'>
                    <div className='profile-page-buttons'>
                        <OpenModalButton
                            buttonText="Edit"
                            modalComponent={<UpdateProfile />} />
                        {/* <OpenModalButton
                                    buttonText="Delete User Profile"
                                    modalComponent={<DeleteUser />} /> */}
                    {
                    isPlaylists &&
                    <OpenModalButton
                        modalComponent={<CreatePlaylistForm />}
                        buttonText="Create Playlist"
                    />
                    }
                    </div>
                    <div className='profile-page-top'>
                        <div className='profile-page-top-left'>
                            <img alt='' src={`${(user && user.profile_pic) || 'https://meshgradient.com/gallery/5.png'}`} className='profile-page-pic'></img>
                        </div>
                        <div className='profile-page-top-right'>
                            <div className='profile-page-user-info'>
                                <div className='profile-page-top-display-name'>{`${user.display_name}`}</div>
                                <div className='profile-page-top-full-name'>{`${user.first_name}`} {`${user.last_name}`}</div>
                            </div>
                        </div>
                    </div>
                    <div className='profile-page-bottom-new'
                    style={{display: 'flex', justifyContent: 'space-between', border: '3px solid black', backgroundColor: 'white', color: 'black', padding: '1.5rem'}}
                    >

                            <h2
                            className={'profile-songs-link' + (isSongs ? " activated-profile" : "")}
                            style={{cursor: 'pointer'}}
                            onClick={() => {
                                setIsSongs(true)
                                setIsPlaylists(false)
                            }}
                            >
                                Songs
                            </h2>
                            <h2
                                className={'profile-songs-link' + (isPlaylists ? " activated-profile" : "")}
                                style={{cursor: 'pointer'}}
                                onClick={() => {
                                    setIsSongs(false)
                                    setIsPlaylists(true)
                                }}
                            >
                                Playlists
                            </h2>
                            {/* <NavLink to={"/songs/current"} className="profile-songs-link">
                                Songs
                            </NavLink>
                            <NavLink to={"/playlists/current"} className="profile-songs-link">
                                Playlists
                            </NavLink> */}

                    </div>

                    <div className='profile-page-bottom-selections-right'>

                    </div>
                    {
                        isSongs &&

                    <div className="user-playlists-container">
                        {userSongs.map((song) => (
                            <SingleSongCard
                                key={song.id}
                                song={song}
                                sessionUser={user}
                                isProfileSongs={true}
                            />
                        ))}
                    </div>
                    }
                    {
                    isPlaylists &&
                    <div className="user-playlists-container">
                        {userPlaylists.map((playlist) => (
                            <PlaylistCard key={playlist.id} playlist={playlist} />
                        ))}
                    </div>
                    }

                </div>

            </div>
        </>
    )
}

export default ProfilePage
