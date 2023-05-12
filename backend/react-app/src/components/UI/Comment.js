import './Comment.css'

const Comment = ({comment}) => {
    return (
        <div className='comment-wrapper'>
            fg
            <div className='comment-profile-pic'>
                <img></img>
            </div>
            <div className='comment-info'>
                <div className='comment-info-left'>
                    <div className='comment-info-left-user'></div>
                    <div className='comment-info-left-text'></div>
                </div>
                <div className='comment-info-right'>

                </div>
            </div>
        </div>
    )
}

export default Comment
