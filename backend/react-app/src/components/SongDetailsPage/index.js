import SongDetailsCard from '../UI/SongDetailsCard'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import './SongDetailsPage.css'
import '../UI/GlobalOuterWrapper'
import { getSongThunk, getAllSongsThunk } from '../../store/songs'
import { createCommentThunk, getAllCommentsThunk } from '../../store/comments'
import { Redirect, useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import CommentComp from '../UI/CommentComp'
import GetLikes from '../UI/GetLikes'
import { likeSongThunk, removeLikeThunk } from '../../store/likes'



const SongDetailsPage = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const { songId } = useParams();
    const [url, setUrl] = useState("");

    const [comment, setComment] = useState('')

    const theComments = useSelector((state) => state.comments.allComments)
    const song = useSelector((state) => state.songs.singleSong)
    const selectedSong = useSelector(state => state.songs.allSongs[songId])
    const sessionUser = useSelector((state) => state.session.user)
    // console.log("THE COMMENTSSSSS", theComments)
    const comments = Object.values(theComments)
    // console.log("THE COMMENTSSSSS", comments)
    // console.log("theSONGGGGGG ", theSong)


    const submitHandler = (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('text', comment)
        dispatch(createCommentThunk(formData, songId))
        // setUrl(`/songs/${songId}`)
        // history.push(`/discover`)
        history.push(`/songs/${songId}`)
        // dispatch(createCommentThunk(formData, songId))
    }

    useEffect(() => {
        dispatch(getSongThunk(songId))
        dispatch(getAllCommentsThunk(songId))
        dispatch(getAllSongsThunk())
        dispatch(likeSongThunk(songId))
        dispatch(removeLikeThunk(songId))
        // if (url !== '') {
        //     setUrl(`/songs/${songId}`)
        // }
    }, [dispatch, songId])

    const likesHandler2 = () => {
        console.log('SOOONG3333',songId)

        dispatch(getAllSongsThunk())
        dispatch(likeSongThunk(songId))
        dispatch(getAllSongsThunk())
    }

    const unlikeHandler2 = () => {
        console.log('SOOONG4444',songId)


        dispatch(getAllSongsThunk())
        dispatch(removeLikeThunk(songId))
        dispatch(getAllSongsThunk())
    }

    return (
        <>
        {url && <Redirect to={url}/>}
        <div className='global-outerwrapper-outer'>
            <div className='global-outerwrapper-wrapper'>
                <div className='song-details-page-top'>
                    <SongDetailsCard song={song} />
                </div>
                <div className='song-details-page-bottom-wrapper'>
                    <div className='song-details-page-bottom'>
                        <div className='song-details-page-post-comment'>
                            <div className='song-details-page-profile-pic'>
                                <img src='https://pbs.twimg.com/media/FuE8jf_XsAk0AVf?format=jpg&name=medium'></img>
                            </div>
                            <div className='song-details-page-comment-outer-wrapper'>
                                <div className='song-details-page-comment-wrapper'
                                >
                                    <form
                                        action={`/api/comments/:songId`}
                                        method="POST"
                                        encType="multipart/form-data"
                                        onSubmit={(e) => submitHandler(e)}
                                    >
                                        <input
                                            className='song-details-page-comment-input'
                                            type='text'
                                            name="comment"
                                            value={comment}
                                            onChange={(e) => {
                                                setComment(e.target.value)
                                            }
                                            }
                                            placeholder='Let the artist know what you think!'></input>
                                    </form>
                                </div>

                            </div>
                        </div>
                        <div className='song-details-page-bottom-bar'>
                            <div className='song-details-page-interactive-buttons'>
                                <div className='song-details-page-interactive-buttons-like'>
                                    {/* <button>Like</button> */}
                                    <GetLikes
                                        song={selectedSong}
                                        sessionUser={sessionUser}
                                        likesHandler2={likesHandler2}
                                        unlikeHandler2={unlikeHandler2}
                                    />
                                </div>
                                <div className='song-details-page-interactive-buttons-add'>
                                    <button>
                                        Add To Playlist
                                    </button>
                                </div>
                            </div>
                            <div className='song-details-page-display-likes'>
                                {/* <GetLikes songId = {songId}/> */}
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
                            <div className='song-details-page-display-comments-each'>
                                <CommentComp />
                                {comments.map(comment => {
                                    // <CommentComp />
                                    return <CommentComp comment={comment} />
                                    // <Comment {...comment}/>
                                    // console.log("A COMMENTTTTTT", comment)
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default SongDetailsPage
