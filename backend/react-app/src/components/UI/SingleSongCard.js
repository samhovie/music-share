import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
// import OpenModalMenuItem from './'
import './SingleSongCard.css'
import OpenModalButton from '../OpenModalButton'
import ConfirmDelete from './ConfirmDelete'
import UpdateSongForm from '../UpdateSongForm'

import AddSongToPlaylistModal from '../AddSongToPlaylistModal'
import { useDispatch } from 'react-redux'
import { createCommentThunk } from '../../store/comments'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'


const SingleSongCard = ({ song }) => {
    const dispatch = useDispatch()
    const history = useHistory()
    const [comment, setComment] = useState('')
    const [isPlaying, setIsPlaying] = useState(false)

    const isPlayingClickHandler = () => setIsPlaying(!isPlaying)
    // console.log(song)
    const songId = song.id

    const submitHandler = (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('text', comment)
        dispatch(createCommentThunk(formData, songId))
        history.push(`/songs/${songId}`)
    }

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
                        <form
                        action={`/api/comments/:songId`}
                        method="POST"
                        encType="multipart/form-data"
                        onSubmit={(e) => submitHandler(e)}
                        >
                            <input
                                className='single-song-card-info-comment-input'
                                type='text'
                                name="comment"
                                value={comment}
                                onChange={(e) => {
                                    setComment(e.target.value)}
                                }
                                placeholder='Write a comment'
                                // style={{display: 'none'}}
                                />
                        </form>
                    </div>
                    <div className='single-song-card-info-bottom'>
                        <div className='single-song-card-info-bottom-left-column'>
                            <div className='single-song-card-info-bottom-left-column-heart'>
                                <i>heart</i>
                                Like
                            </div>
                            <div className='single-song-card-info-bottom-left-column-delete'>
                                <i>delete</i>
                                <OpenModalButton
                                    buttonText="Delete"
                                    modalComponent={<ConfirmDelete songId={songId}/>} />
                                    {/* modalComponent={<ConfirmDelete />} /> */}
                            </div>
                            <div>
                                <i></i>
                                <OpenModalButton
                                    buttonText="Update"
                                    modalComponent={<UpdateSongForm songId={songId}/>} />
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
