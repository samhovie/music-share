import './PlaylistCard.css'
import { NavLink } from 'react-router-dom'

const PlaylistCard = ({ playlist }) => {


    return (
        <div className='playlist-card-wrapper'>
            <div className='playlist-card-image'>
                {/* this is hardcoded, change later */}
                <NavLink className='single-playlist-card-image-nav' to={`/playlists/${playlist.id}`}>
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
        </div>
    )
}

export default PlaylistCard
