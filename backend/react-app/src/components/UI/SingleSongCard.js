import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import './SingleSongCard.css'

const SingleSongCard = ({ song }) => {

    return (
        <>
            <div className='single-song-card-wrapper'>
                <div className='single-song-card-image'>
                    <NavLink className='single-song-card-image-nav' to={`/songs/${song.id}`}>
                        <img className='' src='https://external-preview.redd.it/MY3_HQFLzswJrX8tYEEbBuodnWH67nqf5gDYSZrFh0s.jpg?auto=webp&s=c75ba2d2994db81df63721b8da0af2316dd3df86'></img>
                    {/* <img src={`${}`}></img> */}
                    </NavLink>
                </div>
                <div className='single-song-card-info'>
                    <div className='single-song-card-info-top'>
                        <div className='single-song-card-info-top-left-column'>
                            <div className='single-song-card-play-button'>
                                Play Button
                            </div>
                            <div className='single-song-card-next-to-play'>
                                <div className='single-song-card-artist'>
                                    {`${song.artist_name}`}
                                </div>
                                <div className='single-song-card-song'>
                                    {`${song.name}`}
                                </div>
                            </div>
                        </div>
                        {/* <div > */}
                        <div className='single-song-card-info-top-right-column'>
                            {`${song.genre}`}
                        </div>
                        {/* </div> */}
                    </div>
                    <div className='single-song-card-info-soundwave'>
                        <p>
                            -------------------------------------------------------------
                        </p>
                    </div>
                    <div className='single-song-card-info-comment'>
                        <form>
                            <input
                                className='single-song-card-info-comment-input'
                                placeholder='Write a comment'></input>
                        </form>
                    </div>
                    <div className='single-song-card-info-bottom'>
                        <div className='single-song-card-info-bottom-left-column'>
                            <div className='single-song-card-info-bottom-left-column-heart'>
                                <i>heart</i>
                                Heart
                            </div>
                            {/* <div className='single-song-card-info-bottom-left-column-repost'>
                                <i>repost</i>
                                Repost
                            </div>
                            <div className='single-song-card-info-bottom-left-column-share'>
                                <i>repost</i>
                                Share Link
                            </div>
                            <div className='single-song-card-info-bottom-left-column-copy-link'>
                                <i>copy link</i>
                                Copy Link
                            </div>
                            <div className='single-song-card-info-bottom-left-column-ellipsis'>
                                <i>ellipsis</i>
                                Ellipsis
                            </div> */}
                        </div>
                        <div className='single-song-card-info-bottom-right-column'>
                            {/* <div className='single-song-card-info-bottom-right-column-plays'>Plays</div> */}
                            <div className='single-song-card-info-bottom-right-column-comments'>Comments</div>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default SingleSongCard
