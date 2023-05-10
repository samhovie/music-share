// import './PlaylistDetailsPage.css'
// import { formatDate } from '../../helperfunctions/formatDate'
// import { useState } from 'react'
// import SongDetailsCard from '../UI/SongDetailsCard'


// const PlaylistDetailPage = () => {

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
//                                     <button>
//                                         Add To Playlist
//                                     </button>
//                                 </div>
//                             </div>
//                             <div className='song-details-page-display-likes'>
//                                 Like Count
//                             </div>
//                         </div>
//                         {/* <div> */}
//                             <div className='playlist-details-page-profile-songs'>
//                                 <div className='song-details-page-artist'>
//                                     <div className='song-details-page-artist-image'>
//                                         <img
//                                             src='https://resizing.flixster.com/eU7-Qa3193jrUTIth9yZM3DdsF4=/218x280/v2/https://flxt.tmsimg.com/assets/761404_v9_aa.jpg'
//                                         ></img>
//                                     </div>
//                                     <p
//                                         className='song-details-page-artist-name'
//                                     >
//                                         Nobuo Uematsu
//                                     </p>

//                                 </div>
//                                 <div className='playlist-details-page-display-songs-each'>
//                                     {/* for each song in playlist, render <SongInPlaylist /> passing in a song prop */}
//                                 </div>
//                             </div>

//                         {/* </div> */}
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default PlaylistDetailPage
// added?!
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addSongToPlaylistThunk } from "../../store/playlists";

function PlaylistDetailsPage() {
    const [playlist, setPlaylist] = useState([]);
    const dispatch = useDispatch();
    const { playlistId, songId } = useParams();

    const handleAddSongToPlaylist = () => {
        dispatch(addSongToPlaylistThunk(playlistId, songId));
    };

    return (
        <>
            <div>
                {/* playlist */}
                {/* ... */}
                <button onClick={() => addSongToPlaylistThunk(playlistId, songId)}>
                    Add Song to Playlist
                </button>
            </div>
            <div className='song-details-page-outer'>
                <div className='song-details-page-top'>
                    {/* V whichever song is playing, send that song to V */}
                    {/* <SongDetailsCard /> */}
                </div>
                <div className='song-details-page-bottom-wrapper'>
                    <div className='song-details-page-bottom'>
                        <div className='song-details-page-bottom-bar'>
                            <div className='song-details-page-interactive-buttons'>
                                <div>
                                    <button>Like</button>
                                </div>
                                <div>
                                    <button>
                                        Add To Playlist
                                    </button>
                                </div>
                            </div>
                            <div className='song-details-page-display-likes'>
                                Like Count
                            </div>
                        </div>
                        {/* <div> */}
                        <div className='playlist-details-page-profile-songs'>
                            <div className='song-details-page-artist'>
                                <div className='song-details-page-artist-image'>
                                    <img
                                        src='https://resizing.flixster.com/eU7-Qa3193jrUTIth9yZM3DdsF4=/218x280/v2/https://flxt.tmsimg.com/assets/761404_v9_aa.jpg'
                                    ></img>
                                </div>
                                <p
                                    className='song-details-page-artist-name'
                                >
                                    Nobuo Uematsu
                                </p>

                            </div>
                            <div className='playlist-details-page-display-songs-each'>
                                {/* for each song in playlist, render <SongInPlaylist /> passing in a song prop */}
                            </div>
                        </div>

                        {/* </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}



export default PlaylistDetailsPage
