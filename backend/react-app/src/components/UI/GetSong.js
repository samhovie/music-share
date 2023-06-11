import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getSongThunk } from '../../store/songs'
import './GetSong.css'

const GetSong = ({songId}) => {
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getSongThunk(songId))
    }, [dispatch, songId])

    return (''

    )
}

export default GetSong
