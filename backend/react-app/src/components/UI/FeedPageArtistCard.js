import './FeedPageArtistCard.css'

const FeedPageArtistCard = ({ user }) => {

    return (
        <div className='feed-page-artist-card-wrapper'>

            <div className='feed-page-user'>
                <img src={user && user.profile_pic}></img>
                <p>{user && user.display_name}</p>
            </div>
        </div>
    )
}

export default FeedPageArtistCard
