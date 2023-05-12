import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
// import OpenModalMenuItem from './'
import './SingleSongCard.css'
import OpenModalButton from '../OpenModalButton'
import ConfirmDelete from './ConfirmDelete'
import UpdateSongForm from '../UpdateSongForm'
import { useDispatch, useSelector } from 'react-redux'
import AddSongToPlaylistModal from '../AddSongToPlaylistModal'
import { getAllSongLikesThunk, getUserLikedSongs } from '../../store/likes'
import { likeSongThunk } from '../../store/likes'
import { removeLikeThunk } from '../../store/likes'
import { getAllSongsThunk } from '../../store/songs'
import GetLikes from './GetLikes'

const SingleSongCard = ({ song }) => {
    const dispatch = useDispatch()
    // const [isLiked, setIsLiked] = useState()
    // const allLikes = useSelector(state => state.likes)
    // const userLikes = useSelector(state => console.log('STATE', state))
    // console.log('allLikes', allLikes.allLikes.likes)
    // const likesObj = allLikes.allLikes.likes
    // console.log('likes', likesObj)
    const [isPlaying, setIsPlaying] = useState(false)

    const isPlayingClickHandler = () => setIsPlaying(!isPlaying)
    // console.log(song)
    const songId = song.id

    // useEffect(() => {
    //     // dispatch(getAllSongsThunk())
    //     dispatch(getAllSongLikesThunk(songId))
    //     // dispatch(getUserLikedSongs())
    // },[dispatch])

    // const likesHandler = () => {
    //     dispatch(likeSongThunk(songId))
    // }

    // const unlikeHandler = () => {

    //     dispatch(removeLikeThunk(songId))
    // }

    // if (!likesObj || !likesObj.likes) return null

    return (
        <>
            <div className='single-song-card-wrapper'>
                <div className='single-song-card-image'
                style={{marginRight: '1rem'}}
                >
                    <NavLink className='single-song-card-image-nav' to={`/songs/${song.id}`}>
                        <img className='' src='https://external-preview.redd.it/MY3_HQFLzswJrX8tYEEbBuodnWH67nqf5gDYSZrFh0s.jpg?auto=webp&s=c75ba2d2994db81df63721b8da0af2316dd3df86'></img>
                        {/* <img src={`${}`}></img> */}
                    </NavLink>
                </div>
                <div className='single-song-card-info'>
                    <div className='single-song-card-info-top'>
                        <div
                        className='single-song-card-info-top-left-column'
                        style={{}}
                        >
                        <div className='single-song-details-card-play-button'
                        style={{marginRight: '1rem'}}
                                onClick={isPlayingClickHandler}
                            >
                                {!isPlaying ?
                                    <i className="fa-solid fa-circle-play"
                                        style={{ color: '#932db9', fontSize: '40px' }}
                                    ></i>
                                    :
                                    <i className="fa-solid fa-pause"
                                        style={{ color: '#932db9', fontSize: '40px' }}
                                    ></i>
                                }
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
                            <GetLikes songId={songId}/>
                            <div>
                                <OpenModalButton
                                    buttonText="Update"
                                    modalComponent={<UpdateSongForm songId={songId}/>} />
                            </div>
                            <div >
                                {/* <button>Delete</button>
                                className='single-song-card-info-bottom-left-column-delete'
                                */}
                                <OpenModalButton
                                    buttonText="Delete"
                                    modalComponent={<ConfirmDelete songId={songId}/>} />
                                    {/* modalComponent={<ConfirmDelete />} /> */}
                            </div>

                        </div>
                        <OpenModalButton
                            modalComponent={<AddSongToPlaylistModal songId={song.id} />}
                            buttonText="Add to playlist"
                        />
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
