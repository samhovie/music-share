// import './PlaylistDetailsPage.css'
// // import { formatDate } from '../../helperfunctions/formatDate'
// // import { useState } from 'react'
// // import SongDetailsCard from '../UI/SongDetailsCard'
// import { useState, useEffect } from "react";
// import { useDispatch, useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom';
// import { addSongToPlaylistThunk, getPlaylistThunk } from "../../store/playlists";
// import PlaylistCard from "../UI/PlaylistCard";
// import SingleSongCard from "../UI/SingleSongCard";
// // import GetPlaylistUsername from "./GetPlaylistUsername.js"


// function PlaylistDetailsPage() {

//     const dispatch = useDispatch();
//     const { playlistId } = useParams();
//     const playlist = useSelector(state => state.playlists.singlePlaylist);
//     const sessionUser = useSelector((state) => state.session.user);
//     const owner = playlist.user && playlist.user.id;
//     const current_user = sessionUser.id;
//     const owner_username = playlist.user && playlist.user.username;
//     console.log(current_user);
//     console.log(owner)

//     const song = playlist.song;
//     console.log('song', song)
//     // console.log(array)

//     // console.log(playlist)
//     // console.log("user", playlist.user.username)

//     // const { playlistId, songId } = useParams();
//     // const handleAddSongToPlaylist = () => {
//     //     dispatch(addSongToPlaylistThunk(playlistId, songId));
//     // };


//     console.log(playlist)

//     useEffect(() => {
//         dispatch(getPlaylistThunk(playlistId));
//     }, [dispatch, playlistId]);

//     return (
//         <>
//             <div className='song-details-page-outer'>
//                 <div className='song-details-page-top'>
//                     {/* V whichever song is playing, send that song to V */}
//                     {/* <SongDetailsCard /> */}
//                 </div>
//                 <div className='song-details-page-bottom-wrapper'>
//                     <div className='song-details-page-bottom'>
//                         <div className='song-details-page-bottom-bar'>
//                             <div className='song-details-page-interactive-buttons'>
//                                 <div>
//                                     <button>Like</button>
//                                 </div>
//                                 <div>
//                                     {current_user == owner && (
//                                         <button>
//                                             Edit Playlist (owner)
//                                         </button>
//                                     )}
//                                 </div>
//                                 {/* <button onClick={() => handleAddSongToPlaylist()}>
//                                     Add Song to Playlist (in modal)
//                                 </button> */}
//                             </div>
//                             <div className='playlist-details-page-display-likes'>
//                                 Like Count
//                             </div>
//                         </div>
//                         {/* <div> */}
//                         <div className='playlist-details-page-profile-songs'>
//                             <div className='playlist-details-page-user'>
//                                 <div className='playlist-details-page-user-image'>
//                                     <img
//                                         src='https://resizing.flixster.com/eU7-Qa3193jrUTIth9yZM3DdsF4=/218x280/v2/https://flxt.tmsimg.com/assets/761404_v9_aa.jpg'
//                                     ></img>
//                                 </div>
//                                 <p
//                                     className='playlist-details-page-user-name'
//                                 >
//                                     {/* <GetPlaylistUsername></GetPlaylistUsername> */}
//                                     {`${owner_username}`}
//                                     {/* {`${playlist.playlist.user}`} */}
//                                 </p>

//                             </div>
//                             <div className='playlist-details-page-display-songs-each'>
//                                 <div className='playlist-details-page-display-songs-each'>
//                                     {song?.map(s =>
//                                         <SingleSongCard key={s.id} song={s} />
//                                     )}
//                                 </div>
//                             </div>
//                         </div>

//                         {/* </div> */}
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default PlaylistDetailsPage
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getPlaylistThunk } from '../../store/playlists';
import PlaylistCard from '../UI/PlaylistCard';
import SingleSongCard from '../UI/SingleSongCard';
import './PlaylistDetailsPage.css';

function PlaylistDetailsPage() {
  const dispatch = useDispatch();
  const { playlistId } = useParams();
  const playlist = useSelector((state) => state.playlists.singlePlaylist);
  const sessionUser = useSelector((state) => state.session.user);
  const owner = playlist.user && playlist.user.id;
  const current_user = sessionUser.id;
  const owner_username = playlist.user && playlist.user.username;

  useEffect(() => {
    dispatch(getPlaylistThunk(playlistId));
  }, [dispatch, playlistId]);

  return (
    <>
      <div className="playlist-details-page-outer">
        <div className="playlist-details-page-top">
          {/* SongDetailsCard component */}
        </div>
        <div className="playlist-details-page-bottom-wrapper">
          <div className="playlist-details-page-bottom">
            <div className="playlist-details-page-bottom-bar">
              <div className="playlist-details-page-interactive-buttons">

                {/* Add Song to Playlist (in modal) button */}
              </div>
            </div>
            <div className="playlist-details-page-profile-songs">
              <div className="playlist-details-page-user">
                <div className="playlist-details-page-user-image">
                  <img
                    src="https://resizing.flixster.com/eU7-Qa3193jrUTIth9yZM3DdsF4=/218x280/v2/https://flxt.tmsimg.com/assets/761404_v9_aa.jpg"
                    alt="User"
                  />
                </div>
                <p className="playlist-details-page-user-name">
                  {owner_username}
                </p>
              </div>
              <div className="playlist-details-page-song-list">
                {playlist.song?.map((s) => (
                  <SingleSongCard key={s.id} song={s} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PlaylistDetailsPage;
