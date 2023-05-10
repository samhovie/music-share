import { useEffect } from 'react'
import './SongInPlaylist.css'


const SongInPlaylist = () => {


    useEffect(() => {
        // make separate component to query for all songs in playlist
    })
    return (
        <div className='song-in-playlist-wrapper-test'>
            <div className='song-in-playlist-wrapper'>
                {/* <div className='song-in-playlist-inner-wrapper'> */}
                    <div className='song-in-playlist-left'>
                        <div className='song-in-playlist-image'>
                            <img src='https://pbs.twimg.com/media/FuE8jf_XsAk0AVf?format=jpg&name=medium'></img>
                        </div>
                        <div className='song-in-playlist-song-id'>SI</div>
                        <div className='song-in-playlist-arist'>A&nbsp;-&nbsp;
                        {/* song.artist */}
                        </div>
                        <div className='song-in-playlist-name'>D
                        {/* song.name */}
                        </div>
                    </div>
                    <div className='song-in-playlist-right'>
                        <div className='song-in-playlist-likes'>
                        <i className="fa-solid fa-heart fa-xs"></i>
                        {/* query for number of likes on song */}&nbsp;&nbsp;Likes</div>
                    </div>

                {/* </div> */}
            </div>
        </div>
    )
}

export default SongInPlaylist
