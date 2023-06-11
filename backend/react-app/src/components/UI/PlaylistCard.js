import './PlaylistCard.css'
import { NavLink } from 'react-router-dom'
import OpenModalButton from '../OpenModalButton'
import DeletePlaylist from '../DeletePlaylist'
import UpdatePlaylistForm from '../UpdatePlaylist'
import { useSelector } from 'react-redux'

const PlaylistCard = ({ playlist, playlistSong }) => {
    // const playlistId = playlist.id


    const playlists = useSelector(state => state.playlists.allPlaylists)
    // const arrayPlaylists = Object.values(playlists)
    // const thePlaylist = arrayPlaylists.filter((playlistObj) => playlistObj.id === playlistId)
    const sessionUser = useSelector((state) => state.session.user);
    const owner = playlist.user && playlist.user.id;
    const current_user = sessionUser ? sessionUser.id : undefined;
    // const owner_username = playlist.user && playlist.user.username;

    const playlistsSongs = useSelector(state => state.playlists.allPlaylists.song)
    console.log("PLAYLIST IN PLAYLIST CARD", playlistsSongs)

    if (!playlists) return null
    // if (!playlistsSongs) return null
    return (
        <div className='playlist-card-wrapper'>
            <div className='playlist-card-image'>
                {/* this is hardcoded, change later */}
                {playlist && <NavLink className='single-playlist-card-image-nav' to={`/playlists/${playlist.id}`} playlist={playlist}>
                    <img  alt='' className='' src={`${playlist.preview_img}`}></img>
                    {/* <img src={`${playlistsSongs[0].preview_img}`}></img> */}
                </NavLink>}
            </div>
            <div className='playlist-card-display-name'>
                {/* this is hardcoded, change later */}
                {`${playlist.user.username}`}

            </div>
            <div className='c'>
                {/* this is hardcoded, change later */}
                {`${playlist.name}`}
            </div>
            {current_user === owner && (
                < div>
                    <OpenModalButton
                        buttonText="Delete"
                        modalComponent={<DeletePlaylist playlistId={playlist.id} />} />
                    {/* modalComponent={<ConfirmDelete />} /> */}
                </div>
            )}
            {current_user === owner && (
                <div>
                    <OpenModalButton
                        buttonText="Update"
                        modalComponent={<UpdatePlaylistForm playlistId={playlist.id} />} />
                </div>
            )}
        </div >
    )
}

export default PlaylistCard
