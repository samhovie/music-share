import './SongPlaylistCard.css'

const SongPlaylistCard = () => {


    return (
        <div className='song-playlist-card-image-wrapper'>
            <div>
                {/* this is hardcoded, change later */}
                <img src='https://media.glamour.com/photos/5f980f5cc0115735c138a7a9/16:9/w_2560%2Cc_limit/drake.jpg'
                     alt='song image'
                >
                </img>
            </div>
            <div></div>
            <div>
                {/* this is hardcoded, change later */}
                Newest songs
            </div>
        </div>
    )
}

export default SongPlaylistCard
