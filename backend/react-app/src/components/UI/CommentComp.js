import { useEffect } from 'react'
import './CommentComp.css'
import { useDispatch } from 'react-redux'
import { getSongThunk } from '../../store/songs'
import GetSong from './GetSong'
import GetUser from './GetUser'

const CommentComp = ({ comment }) => {
    // console.log("DOOM", comment)
    const dispatch = useDispatch()
    console.log(comment)
    const commentOwner = comment && comment.userId
    // const theComments = useSelector((state) => state.comments.allComments)
    // const comments = Object.values(theComments)
    // dispatch(getAllCommentsThunk(songId))

    // useEffect(() => {
    //     dispatch(getSongThunk())
    // }, [dispatch])

    if (!comment) return null
    // if (!commentOwner) return null
    return (
        <>
            <div className='comment-outer-wrapper'>
                <div className='comment-inner-wrapper'>
                    <div className='comment-profile-pic'>
                        <img src={`${comment.user_profile_pic || 'https://images.pexels.com/photos/7130560/pexels-photo-7130560.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'}`}></img>
                    </div>
                    <div className='comment-info'>
                        <div className='comment-info-left'>
                            <div className='comment-info-left-user'>
                                {comment.username}
                            </div>
                            <div className='comment-info-left-text'>
                                {`${comment.text}`}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CommentComp
