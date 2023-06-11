import { useEffect, useContext } from 'react'
import { NavLink } from 'react-router-dom'
// import OpenModalMenuItem from './'
import './SingleSongCard.css'
import OpenModalButton from '../OpenModalButton'
import ConfirmDelete from './ConfirmDelete'
import UpdateSongForm from '../UpdateSongForm'
import { useDispatch, useSelector } from 'react-redux'
import AddSongToPlaylistModal from '../AddSongToPlaylistModal'
import { getAllSongLikesThunk } from '../../store/likes'
import { likeSongThunk } from '../../store/likes'
import { removeLikeThunk } from '../../store/likes'
import { getAllSongsThunk } from '../../store/songs'
// import { useHistory } from 'react-router-dom'
// import createCommentThunk from '../../store/songs'
// import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { PlayerContext } from '../../App'
import GetLikes from './GetLikes'

const SingleSongCard = ({ song, sessionUser, userSongs, isUserLikesPage, isProfileSongs }) => {
    // const history = useHistory()
    const dispatch = useDispatch()
    // const [comment, setComment] = useState('')
    // const comment = ''
    // const [isLiked, setIsLiked] = useState()
    const allLikes = useSelector(state => state.likes.allLikes.likes)
    // const sessionUser = useSelector((state) => state.session.user)
    // const userSongs = useSelector((state) => state.songs.singleSong)
    // const [,setLikes] = useState()


    // const allLikes = useSelector(state => state.likes)
    // const likesObj = allLikes.allLikes.likes
    const songId = song.id
    const likesHandler2 = () => {

        // history.push('/')
        // setLikes()
        dispatch(getAllSongsThunk())
        dispatch(likeSongThunk(songId))
        dispatch(getAllSongsThunk())
        // history.push('/feed')
        // window.location.reload()
    }

    const unlikeHandler2 = () => {

        // history.push('/')
        // setLikes()
        dispatch(getAllSongsThunk())
        dispatch(removeLikeThunk(songId))
        dispatch(getAllSongsThunk())
        // history.push('/feed')
        // window.location.reload()
    }
    // const [isPlaying, setIsPlaying] = useState(false)
    // const [isPlaying, setIsPlaying] = useState(false)

    // const isPlayingClickHandler = () => setIsPlaying(!isPlaying)

    // const submitHandler = (e) => {
    //     e.preventDefault()
    //     const formData = new FormData()
    //     formData.append('text', comment)
    //     dispatch(createCommentThunk(formData, songId))
    //     history.push(`/songs/${songId}`)
    // }

    const {url, setUrl, isPlaying} = useContext(PlayerContext)
    useEffect(() => {
        dispatch(getAllSongsThunk())
        dispatch(getAllSongLikesThunk(songId))

        // dispatch(getUserLikedSongs())
    },[dispatch, songId])

    // const likesHandler = () => {
    //     dispatch(likeSongThunk(songId))
    // }

    // const likesHandler = () => {

    // }


    // const likesHandler = () => {

    // }



    function isPlayingClickHandler() {

        // show player (on first play?)
        const mainCollection = document.getElementsByClassName("rhap_container");
        const mainPlayer = [...mainCollection][0]
        mainPlayer.style.visibility = 'visible'
        mainPlayer.style.opacity = '1'

        // I know we need to do the get func that just grabs the first one but I'm too lazy to look it up
        const buttonCollection = document.getElementsByClassName("rhap_play-pause-button");
        const button = [...buttonCollection][0]

        // if we're on a song card we can always set it without checking if there's a url
        if (!isPlaying && url !== song.mp3_file) {
            // song will autoplay on change
            setUrl(song.mp3_file)
        } else if(!isPlaying && url === song.mp3_file) {
            // we need to unpause
            button.click()
        }
        else {
            // it's playing our song
            // we want to click the main button to that pauses it
            button.click()
        }
    }


    return (
        <>
        {/* <Player url={song.mp3_file}></Player> */}
            <div className='single-song-card-wrapper'>
                <div className='single-song-card-image'
                    style={{ marginRight: '1rem' }}
                >
                    <NavLink className='single-song-card-image-nav' to={`/songs/${song.id}`}>
                        {/* <img className='' src='https://external-preview.redd.it/MY3_HQFLzswJrX8tYEEbBuodnWH67nqf5gDYSZrFh0s.jpg?auto=webp&s=c75ba2d2994db81df63721b8da0af2316dd3df86'></img> */}
                        <img alt ='' src={`${song.preview_img}`}></img>
                    </NavLink>
                </div>
                <div className='single-song-card-info'>
                    <div className='single-song-card-info-top'>
                        <div
                            className='single-song-card-info-top-left-column'
                            style={{}}
                        >
                            <div className='single-song-details-card-play-button'
                                style={{ marginRight: '1rem' }}
                                onClick={isPlayingClickHandler}
                            >

                                {isPlaying && url === song.mp3_file ?
                                    <i className="fa-solid fa-pause "
                                        style={{ color: '#932db9', fontSize: '40px',  cursor: 'pointer' }}
                                    ></i>
                                    :
                                    <i className="fa-solid fa-circle-play"
                                        style={{ color: '#932db9', fontSize: '40px',  cursor: 'pointer' }} />
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
                    <div className='single-song-card-info-soundwave'

                    >
                        {/* <p>
                            -------------------------------------------------------------
                        </p> */}
                        <img
                        alt=''
                        style={{width: '52rem'}}
                        src='https://media.istockphoto.com/id/1176100626/vector/sound-waves-motion-sound-wave-abstract-background.jpg?s=612x612&w=0&k=20&c=EypnQvOtttmj_5JCKkcWy_ul0mS1g3j6md9zamNpmRA='>

                        </img>
                    </div>
                    <div className='single-song-card-info-comment'>
                        {/* <form
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
                                    setComment(e.target.value)
                                }
                                }
                                placeholder='(Comments feature incomplete). Press enter to leave a comment!'
                            // style={{display: 'none'}}
                            />
                        </form> */}
                    </div>
                    <div className='single-song-card-info-bottom'>
                        <div className='single-song-card-info-bottom-left-column'
                            >
                        {!isUserLikesPage &&

                            <GetLikes songId={songId}
                                      song={song}
                                      allLikes={allLikes}
                                      sessionUser={sessionUser}
                                      likesHandler2={likesHandler2}
                                      unlikeHandler2={unlikeHandler2}
                                      isProfileSongs={isProfileSongs}
                                      />
                        }
                            {sessionUser &&
                             sessionUser.id === song.artist_id &&

                            <>
                            {/* <div> */}
                                <OpenModalButton
                                    buttonText="Update"
                                    modalComponent={<UpdateSongForm songId={songId}/>} />
                            {/* </div> */}
                            {/* <div > */}
                                {/* <button>Delete</button>
                                className='single-song-card-info-bottom-left-column-delete'
                                */}
                                <OpenModalButton
                                    buttonText="Delete"
                                    modalComponent={<ConfirmDelete songId={songId}/>} />
                                    {/* modalComponent={<ConfirmDelete />} /> */}
                            {/* </div> */}
                            </>

                            }

                        </div>
                        <OpenModalButton
                            modalComponent={<AddSongToPlaylistModal songId={song.id} />}
                            buttonText="Add to playlist"
                        />
                        <div className='single-song-card-info-bottom-right-column'>
                            {/* <div className='single-song-card-info-bottom-right-column-plays'>Plays</div> */}
                            {/* <div className='single-song-card-info-bottom-right-column-comments'>Comments</div> */}
                        </div>
                    </div>

                </div>
            </div>

        </>
    )

}

export default SingleSongCard
