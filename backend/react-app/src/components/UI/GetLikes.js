import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllSongLikesThunk } from '../../store/likes'
// import './GetUser.css'

const GetLikes = ({songId}) => {
    const dispatch = useDispatch()
    const likes = useSelector(state => state.likes.allLikes)
    // console.log("USERRRRR", likesNum)

    useEffect(() => {
        dispatch(getAllSongLikesThunk(songId))
    }, [dispatch])

    if (!likes || !likes.likes) return null
    // return (likes.likes)
    return ("likes.likes")
}

export default GetLikes
