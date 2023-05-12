import './PlaylistCard.css'
import { NavLink } from 'react-router-dom'
import OpenModalButton from '../OpenModalButton'
import DeletePlaylist from '../DeletePlaylist'

const PlaylistCard = ({ playlist }) => {
    console.log("PLAYLIST IN PLAYLIST CARD", playlist)
    const playlistId = playlist.id
    return (
        <div className='playlist-card-wrapper'>
            <div className='playlist-card-image'>
                {/* this is hardcoded, change later */}
                <NavLink className='single-playlist-card-image-nav' to={`/playlists/${playlist.id}`} playlist={playlist}>
                    <img className='' src='https://media.glamour.com/photos/5f980f5cc0115735c138a7a9/16:9/w_2560%2Cc_limit/drake.jpg'></img>
                    {/* <img src={`${}`}></img> */}
                </NavLink>
            </div>
            <div className='playlist-card-display-name'>
                {/* this is hardcoded, change later */}
                {`${playlist.user.username}`}

            </div>
            <div className='playlist-card-title'>
                {/* this is hardcoded, change later */}
                {`${playlist.name}`}
            </div>
            <div className='single-song-card-info-bottom-left-column-delete'>
                <i>delete</i>
                <OpenModalButton
                    buttonText="Delete"
                    modalComponent={<DeletePlaylist playlistId={playlist.id} />} />
                {/* modalComponent={<ConfirmDelete />} /> */}
            </div>
        </div>
    )
}

export default PlaylistCard
