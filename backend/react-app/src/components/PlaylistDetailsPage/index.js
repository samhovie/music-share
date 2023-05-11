import './PlaylistDetailsPage.css'
// import { formatDate } from '../../helperfunctions/formatDate'
// import { useState } from 'react'
// import SongDetailsCard from '../UI/SongDetailsCard'


// added?!
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addSongToPlaylistThunk, getPlaylistThunk } from "../../store/playlists";
import PlaylistCard from "../UI/PlaylistCard";
import SingleSongCard from "../UI/SingleSongCard";
import GetPlaylistUsername from "./GetPlaylistUsername.js"


function PlaylistDetailsPage() {

    const dispatch = useDispatch();
    const { playlistId } = useParams();
    const playlist = useSelector(state => state.playlists.singlePlaylist);


    // console.log(playlist)
    // console.log("user", playlist.user.username)

    // const { playlistId, songId } = useParams();
    // const handleAddSongToPlaylist = () => {
    //     dispatch(addSongToPlaylistThunk(playlistId, songId));
    // };


    useEffect(() => {
        dispatch(getPlaylistThunk(playlistId));
    }, [dispatch, playlistId]);


    return ('')
    // (
    //     <>
    //         <div className='global-outerwrapper-outer'>
    //             <div className='global-outerwrapper-wrapper discover-page-wrapper'>
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
    //                                     <button>
    //                                         Add To Playlist (owner)
    //                                     </button>
    //                                 </div>
    //                                 {/* <button onClick={() => handleAddSongToPlaylist()}>
    //                                 Add Song to Playlist (in modal)
    //                             </button> */}
    //                         </div>
    //                         <div className='song-details-page-display-likes'>
    //                             Like Count
    //                         </div>
    //                     </div>
    //                     <div>
    //                     <div className='song-details-page-profile-songs'>
    //                         <div className='song-details-page-artist'>
    //                             <div className='song-details-page-artist-image'>
    //                                 <img
    //                                     src='https://resizing.flixster.com/eU7-Qa3193jrUTIth9yZM3DdsF4=/218x280/v2/https://flxt.tmsimg.com/assets/761404_v9_aa.jpg'
    //                                 ></img>
    //                             </div>
    //                             <p
    //                                 className='song-details-page-user-name'
    //                             >
    //                                 <GetPlaylistUsername></GetPlaylistUsername>
    //                                 {`${playlist.playlist.user}`}
    //                             </p>
    //                             </div>
    //                             <div className='playlist-details-page-display-likes'>
    //                                 Like Count
    //                             </div>
    //                         </div>
    //                         <div>
    //                         <div className='playlist-details-page-profile-songs'>
    //                             <div className='song-details-page-artist'>
    //                                 <div className='song-details-page-artist-image'>
    //                                     <img
    //                                         src='https://resizing.flixster.com/eU7-Qa3193jrUTIth9yZM3DdsF4=/218x280/v2/https://flxt.tmsimg.com/assets/761404_v9_aa.jpg'
    //                                     ></img>
    //                                 </div>
    //                                 <p
    //                                     className='playlist-details-page-user-name'
    //                                 >
    //                                     <GetPlaylistUsername></GetPlaylistUsername>
    //                                     {/* {`${playlist.playlist.user}`} */}
    //                                 </p>

    //                             </div>
    //                             <div className='playlist-details-page-display-songs-each'>
    //                                 {/* for each song in playlist, render <SongInPlaylist /> passing in a song prop */}
    //                             </div>
    //                         </div>
    //                         {/* <div className='song-details-page-display-songs-each'>
    //                             {/* for each song in playlist, render <SongInPlaylist /> passing in a song prop */}
    //                         </div> */}

    //                         {/* </div> */}
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     </>
    // )
}



export default PlaylistDetailsPage
// added?!
// import { useState } from "react";
// import { useDispatch } from 'react-redux';
// import { useParams } from 'react-router-dom';
// import { addSongToPlaylistThunk } from "../../store/playlists";

// function PlaylistDetailsPage() {
//     const [playlist, setPlaylist] = useState([]);
//     const dispatch = useDispatch();
//     const { playlistId, songId } = useParams();

//     const handleAddSongToPlaylist = () => {
//         dispatch(addSongToPlaylistThunk(playlistId, songId));
//     };

//     return (
//         <div>
//             {/* playlist */}
//             {/* ... */}
//             <button onClick={() => addSongToPlaylistThunk(playlistId, songId)}>
//                 Add Song to Playlist
//             </button>
//         </div>
//     );
// }

// export default PlaylistDetailsPage
