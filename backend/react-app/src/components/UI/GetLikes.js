// import { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { getAllSongLikesThunk } from '../../store/likes'
// // import './GetUser.css'

// const GetLikes = ({songId}) => {
//     const dispatch = useDispatch()
//     const likes = useSelector(state => state.likes.allLikes)
//     // console.log("USERRRRR", likesNum)

//     useEffect(() => {
//         dispatch(getAllSongLikesThunk(songId))
//     }, [dispatch])

//     if (!likes || !likes.likes) return null
//     // return (likes.likes)
//     return ("likes.likes")
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllSongLikesThunk, getUserLikedSongs } from '../../store/likes'
import { likeSongThunk } from '../../store/likes'
import { removeLikeThunk } from '../../store/likes'
import { getAllSongsThunk } from '../../store/songs'

const GetLikes = ({songId}) => {
    // console.log('SSOOOOONNG', songId)
    const dispatch = useDispatch()
    const [isLiked, setIsLiked] = useState()
    const allLikes = useSelector(state => state.likes.allLikes.likes)
    const sessionUser = useSelector((state) => state.session.user)
    const likes = allLikes && allLikes.likes
    const userIds = allLikes && allLikes.user_id
    console.log('ALLLLIIIKES', userIds)

    // const userLikes = useSelector(state => console.log('STATE', state))
    // console.log('allLikes', allLikes.allLikes.likes)
    // const likesObj = allLikes.allLikes.likes
    // console.log('LIIIKESSOOOBBBJJJ',likesObj)

    useEffect(() => {
        // dispatch(getAllSongsThunk())
        dispatch(getAllSongLikesThunk(songId))

        // dispatch(getUserLikedSongs())
    },[dispatch])

    // const likesHandler1 = () => {
    //     console.log('SOOONG111',songId)
    //     dispatch(likeSongThunk(songId))
    // }

    // const unlikeHandler1 = () => {
    //     console.log('SOOONG2222',songId)
    //     dispatch(removeLikeThunk(songId))
    // }

    const likesHandler2 = () => {
        console.log('SOOONG3333',songId)
        dispatch(likeSongThunk(songId))
    }

    const unlikeHandler2 = () => {
        console.log('SOOONG4444',songId)
        dispatch(removeLikeThunk(songId))
    }

    // if (!allLikes || !allLikes.likes)
    // {
    // return (
    // <>
    // <div className='single-song-card-info-bottom-left-column-heart'
    //             onClick={likesHandler1}
    //         >
    //             <i className="fa-solid fa-heart" style={{ color: 'yellow' }}></i>
    //             0 Like
    //         </div>
    //         <div className='single-song-card-info-bottom-left-column-heart'
    //             onClick={unlikeHandler1}
    //         >
    //             <i className="fa-solid fa-heart" style={{ color: 'black' }}></i>
    //             UnLike
    //         </div>
    // </>
    // )
    // } else {
    if (!allLikes) return null
    if (!allLikes.user_id) return null

    return (
        <>
        {!allLikes.user_id.includes(sessionUser.id) ?
            <div className='single-song-card-info-bottom-left-column-heart'
                onClick={likesHandler2}
            >
                <i className="fa-solid fa-heart" style={{ color: 'yellow' }}></i>
                {`${likes}`} Likes
            </div>
            :
            <div className='single-song-card-info-bottom-left-column-heart'
                onClick={unlikeHandler2}
            >
                <i className="fa-solid fa-heart" style={{ color: 'yellow' }}></i>
                {`${likes}`} UnLike
            </div>
        }
        </>
    )

}

export default GetLikes
