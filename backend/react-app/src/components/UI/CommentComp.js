// import { useEffect } from 'react'
import './CommentComp.css'
import { useSelector } from 'react-redux'
// import { getSongThunk } from '../../store/songs'
// import GetSong from './GetSong'
// import GetUser from './GetUser'
import DeleteCommentModal from '../DeleteCommentModal'
import OpenModalButton from '../OpenModalButton'

const CommentComp = ({ comment }) => {
    const sessionUser = useSelector(state => state.session.user)

    // if (!comment) return null
    // if (!commentOwner) return null
    return (
        <>
            <div className='comment-outer-wrapper'>
                <div className='comment-inner-wrapper'>
                    <div className='comment-profile-pic'>
                        <img alt='' src={`${(comment && comment.user_profile_pic) || 'https://images.pexels.com/photos/7130560/pexels-photo-7130560.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'}`}></img>
                    </div>
                    <div className='comment-info'>
                        <div className='comment-info-left'>
                            <div className='comment-info-left-user'>
                                {comment && comment.username}
                            </div>
                            <div className='comment-info-left-text'>
                                {`${comment && comment.text}`}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                    {sessionUser && comment && comment.user_id &&
                        comment.user_id === sessionUser.id &&
                        <OpenModalButton
                            buttonText="Delete"
                            modalComponent={
                                <DeleteCommentModal
                                commentId={comment?.id}
                            />}
                        />
                    }
        </>
    )
}

export default CommentComp
