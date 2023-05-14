import SongDetailsCard from '../UI/SongDetailsCard'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import './SongDetailsPage.css'
import '../UI/GlobalOuterWrapper'
import { getSongThunk } from '../../store/songs'
import { createCommentThunk, getAllCommentsThunk } from '../../store/comments'
import { Redirect, useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import CommentComp from '../UI/CommentComp'
import GetLikes from '../UI/GetLikes'
import { getUserThunk } from '../../store/users'
import ArtistDetails from '../UI/ArtistDetails'

const SongDetailsPage = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const { songId } = useParams();
    const [url, setUrl] = useState("");

    const [comment, setComment] = useState('')

    const theComments = useSelector((state) => state.comments.allComments)
    const theSong = useSelector((state) => state.songs.singleSong)
    const artistId = useSelector(state => state.songs.singleSong.artist_id)
    const sessionUser = useSelector(state => state.session.user)
    const comments = Object.values(theComments)
    console.log("theSONGSSSS", theSong)
    // dispatch(getUserThunk(theSong.artist_id))



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
        // if (url !== '') {
        //     setUrl(`/songs/${songId}`)
        // }
    }, [dispatch, songId])

    return (
        <>
        {url && <Redirect to={url}/>}
        <div className='global-outerwrapper-outer'>
            <div className='global-outerwrapper-wrapper'>
                <div className='song-details-page-top'>
                    <SongDetailsCard song={theSong} />
                </div>
                <div className='song-details-page-bottom-wrapper'>
                    <div className='song-details-page-bottom'>
                        <div className='song-details-page-post-comment'>
                            <div className='song-details-page-profile-pic'>
                                <img src={sessionUser.profile_pic}></img>
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
                                            }}
                                            placeholder='Let the artist know what you think!'></input>
                                    </form>
                                </div>

                            </div>
                        </div>
                        <div className='song-details-page-bottom-bar'>
                            <div className='song-details-page-interactive-buttons'>
                                <div className='song-details-page-interactive-buttons-like'>
                                    <button>Like</button>
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
                            < ArtistDetails artistId = {artistId} song={theSong}/>
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
