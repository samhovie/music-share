import './SongInPlaylist.css'


const SongInPlaylist = () => {

    return (
        <div className='song-in-playlist-wrapper'>
            <div className='song-in-playlist-inner-wrapper'>
                <div className='song-in-playlist-left'>
                    <div className='song-in-playlist-image'>
                        <img></img>
                    </div>
                    <div className='song-in-playlist-song-id'>SI</div>
                    <div className='song-in-playlist-details'>D</div>
                </div>
                <div className='song-in-playlist-right'>
                    <div className='song-in-playlist-likes'>L</div>
                </div>

            </div>
        </div>
    )
}

export default SongInPlaylist
