import SongDetailsCard from '../UI/SongDetailsCard'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import './SongDetailsPage.css'
import { getSongThunk } from '../../store/songs'

const SongDetailsPage = () => {
    const dispatch = useDispatch()
    const { songId } = useParams();
    const theSong = useSelector((state) => state.songs.singleSong)
    // console.log("theSONGGGGGG ", theSong)


    useEffect(() => {
        dispatch(getSongThunk(songId))
    }, [dispatch, songId])

    return (
        <div className='song-details-page-outer'>
            <div className='song-details-page-top'>
                <SongDetailsCard song={theSong} />
            </div>
            <div className='song-details-page-bottom-wrapper'>
                <div className='song-details-page-bottom'>
                    <div className='song-details-page-post-comment'>
                        <div className='song-details-page-profile-pic'>
                            <img src='https://pbs.twimg.com/media/FuE8jf_XsAk0AVf?format=jpg&name=medium'

                            ></img>
                        </div>
                        <div className='song-details-page-comment-input'
                        >
                            <form>
                                <input placeholder='Let the artist know what you think!'></input>
                            </form>
                        </div>
                    </div>
                    <div className='song-details-page-bottom-bar'>
                        <div className='song-details-page-interactive-buttons'>
                            <div>
                                <button>Like</button>
                            </div>
                            <div>
                                <button>
                                    Add To Playlist
                                </button>
                            </div>
                        </div>
                        <div className='song-details-page-display-likes'>
                            Like Count
                        </div>
                    </div>
                    <div className='song-details-page-profile-comments'>
                        <div className='song-details-page-artist'>
                            <div className='song-details-page-artist-image'>
                                <img
                                    src='https://resizing.flixster.com/eU7-Qa3193jrUTIth9yZM3DdsF4=/218x280/v2/https://flxt.tmsimg.com/assets/761404_v9_aa.jpg'
                                ></img>
                            </div>
                            <p
                                className='song-details-page-artist-name'
                            >
                                Nobuo Uematsu
                            </p>

                        </div>
                        <div className='song-details-page-display-comments'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SongDetailsPage
