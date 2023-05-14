import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPlaylistsThunk } from '../../store/playlists';
import PlaylistCard from '../UI/PlaylistCard';
import PlaylistWrapper from '../UI/PlaylistWrapper';
import '../DiscoverPage/DiscoverPage.css';
import OpenModalButton from '../OpenModalButton';
import CreatePlaylistForm from '../CreateNewPlaylist';
import { NavLink } from 'react-router-dom';
import UpdateProfile from '../UpdateProfile';
import './MyPlaylists.css'

const alertClickHandler = () => {
    return alert('Feature Coming Soon!')
}

const CurrentUserPlaylist = () => {
    const dispatch = useDispatch();
    const userId = useSelector((state) => state.session.user.id);
    const user = useSelector(state => state.session.user)
    // console.log('user', userId)

    const allPlaylists = useSelector((state) => Object.values(state.playlists.allPlaylists));
    // console.log('PAYLIST', allPlaylists)
    // const user_id = allPlaylists.forEach(playlist => {
    //     console.log('playlist user', playlist.user.id);
    // });
    // console.log(user_id)

    let userPlaylists = [];
    // for (let playlist in allPlaylists) {
    //     // console.log(allPlaylists[playlist])
    //     if (allPlaylists[playlist].user.id == userId) {
    //         userPlaylists.push(allPlaylists[playlist])
    //     }
    // }
    for (let playlist in allPlaylists) {
        if (allPlaylists[playlist] && allPlaylists[playlist].user && allPlaylists[playlist].user.id == userId) {
            userPlaylists.push(allPlaylists[playlist])
        }
    }



    useEffect(() => {
        dispatch(getAllPlaylistsThunk());
    }, [dispatch]);

    return (
        <>
            <div className="global-outerwrapper-outer">
                <div className="global-outerwrapper-wrapper discover-page-wrapper">
                    <OpenModalButton
                        modalComponent={<CreatePlaylistForm />}
                        buttonText="Create Playlist"
                    />
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
                            <div>
                                <button onClick={() => alertClickHandler()} className='upload-header-image-button'>Upload Header Image</button>
                            </div>
                        </div>
                    </div>
                    <div className='profile-page-bottom'>
                        <div className='profile-page-bottom-selections'>
                            <div className='profile-page-bottom-selections-left'>
                                <h2>
                                    All
                                </h2>
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
                            {userPlaylists.map((playlist) => (
                                <PlaylistCard key={playlist.id} playlist={playlist} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}



export default CurrentUserPlaylist;
