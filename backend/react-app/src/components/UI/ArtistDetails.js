import { useEffect } from 'react'
import './ArtistDetails.css'
import { useDispatch, useSelector } from 'react-redux'
import { getUserThunk } from '../../store/users'

const ArtistDetails = ({ song }) => {
    const dispatch = useDispatch()

    // const artist = useSelector(state => state)
    // console.log("ARTIST", song)
    // useEffect(() => {
    //     console.log("ARTIST IDD ", artistId)
    //     dispatch(getUserThunk(artistId))
    // }, [dispatch, artistId])

    // if (!artistId) return null
    if (!song.artist) return null

    return (
        <div className='song-details-page-artist'>

            <div className='song-details-page-artist-image'>
                <img
                    src={song.artist.profile_pic}
                ></img>
            </div>
            <p
                className='song-details-page-artist-name'
            >
                {song.artist_name}
            </p>

        </div>

    )
}

export default ArtistDetails
