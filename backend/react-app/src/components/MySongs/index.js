import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPlaylistsThunk } from '../../store/playlists';
import SongDetailsCard from '../UI/SongDetailsCard';
import SingleSongCard from '../UI/SingleSongCard';
import OpenModalButton from '../OpenModalButton';
// import CreatePlaylistForm from '../CreateNewPlaylist';
import { NavLink } from 'react-router-dom';
import UpdateProfile from '../UpdateProfile';
import '../MyPlaylists/MyPlaylists.css'
import { getAllSongsThunk } from '../../store/songs';

//create new component with just songs, just playlists sans links
//add the component to the 'all in my profile' component

const alertClickHandler = () => {
    return alert('Feature Coming Soon!')
}

const CurrentUserSongs = () => {
    const dispatch = useDispatch();
    const userId = useSelector((state) => state.session.user.id);
    const user = useSelector((state) => state.session.user)

    const allSongs = useSelector((state) => Object.values(state.songs.allSongs));
    const [isProfileSongs, setIsProfileSongs] = useState(false)
    // console.log('PAYLIST', allSongs)
    const user_id = allSongs.forEach(song => {
        // console.log('song user', song.artist_id);
    });
    console.log(user_id)

    let userSongs = [];
    for (let song in allSongs) {
        // console.log(allPlaylists[playlist])
        if (allSongs[song].artist_id == userId) {
            userSongs.push(allSongs[song])
        }
    }


    useEffect(() => {
        dispatch(getAllSongsThunk());
    }, [dispatch]);

    useEffect(() => {
        setIsProfileSongs(true)
    }, [])

    return (
        <>
            <div className="global-outerwrapper-outer">
                <div className="global-outerwrapper-wrapper discover-page-wrapper">
                    {/* <OpenModalButton
                        modalComponent={<CreatePlaylistForm />}
                        buttonText="Create Playlist"
                    /> */}
                    <div className='profile-page-top'>
                        <div className='profile-page-top-left'>
                            <img src={`${user.profile_pic}`}
                                className='profile-page-pic'
                            ></img>
                        </div>
                        <div className='profile-page-top-right'
                        // style={{backgroundImage: `url(${user.banner_pic})`}}
                        >
                            <div className='profile-page-top-right-left'>
                                <div className='profile-page-top-display-name'>{`${user.display_name}`}</div>
                                <div className='profile-page-top-full-name'>{`${user.first_name}`} {`${user.last_name}`}</div>
                            </div>

                        </div>
                    </div>
                    <div className='profile-page-bottom'>
                        <div className='profile-page-bottom-selections'>
                            <div className='profile-page-bottom-selections-left'>
                                {/* <h2> */}
                                {/* <NavLink to={"/all/current"} className="profile-songs-link">
                                        All
                                    </NavLink></h2> */}
                                <h2>
                                    <NavLink to={"/songs/current"} className="profile-songs-link">
                                        Songs
                                    </NavLink></h2>
                                <h2> <NavLink to={"/playlists/current"} className="profile-songs-link">
                                    Playlists
                                </NavLink></h2>
                            </div>
                            <div className='profile-page-bottom-selections-right'>
                                <div className='a'>
                                    <OpenModalButton
                                        buttonText="Edit"
                                        modalComponent={<UpdateProfile />} />
                                </div>
                            </div>
                        </div>
                        <div className="user-playlists-container">
                            {userSongs.map((song) => (
                                <SingleSongCard
                                    key={song.id}
                                    song={song}
                                    sessionUser={user}
                                    isProfileSongs={isProfileSongs}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}



export default CurrentUserSongs;
