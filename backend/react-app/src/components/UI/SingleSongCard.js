import './SingleSongCard.css'

const SingleSongCard = () => {

    return (
        <>
            <div className='single-song-card-wrapper'>
                <div className='single-song-card-image'>

                </div>
                <div className='single-song-card-info'>
                    <div className='single-song-card-info-top'>
                        <div className='single-song-card-play-button'>

                        </div>
                        <div className='single-song-card-artist'>

                        </div>
                        <div className='single-song-card-song'>

                        </div>
                    </div>
                    <div className='single-song-card-play-button'>
                    </div>
                    <div className='single-song-card-info-soundwave'>

                    </div>
                    <div className='single-song-card-info-comment'>

                    </div>
                    <div className='single-song-card-info-bottom'>
                        <div className='single-song-card-info-bottom-left-column'>
                            <div className='single-song-card-info-bottom-left-column-heart'>H</div>
                            <div className='single-song-card-info-bottom-left-column-repost'>R</div>
                            <div className='single-song-card-info-bottom-left-column-share'>S</div>
                            <div className='single-song-card-info-bottom-left-column-copy-link'>L</div>
                            <div className='single-song-card-info-bottom-left-column-ellipsis'>E</div>
                        </div>
                        <div className='single-song-card-info-bottom-right-column'>
                            <div className='single-song-card-info-bottom-right-column-plays'>P</div>
                            <div className='single-song-card-info-bottom-right-column-comments'>C</div>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default SingleSongCard
