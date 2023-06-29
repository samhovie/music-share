import './FeedPagePlaylistCard.css'

const FeedPagePlaylistCard = ({playlist}) => {

    return (
        <div className='feed-page-playlist-card-wrapper'>

            <div className='feed-page-user'>
                <img src={playlist && playlist.preview_img}></img>
                <p>{playlist && playlist.name}</p>
            </div>

        </div>
    )
}

export default FeedPagePlaylistCard
