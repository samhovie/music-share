import { useEffect } from 'react'
import './ArtistDetails.css'
import { useDispatch, useSelector } from 'react-redux'
import { getUserThunk } from '../../store/users'

const ArtistDetails = ({ song }) => {
    const dispatch = useDispatch()

    // const artist = useSelector(state => state)
    // console.log("ARTIST", artist)
    // useEffect(() => {
    //     console.log("ARTIST IDD ", artistId)
    //     dispatch(getUserThunk(artistId))
    // }, [dispatch, artistId])

    // if (!artistId) return null

    return (
        <div className='song-details-page-artist'>

            <div className='song-details-page-artist-image'>
                <img
                    src='https://resizing.flixster.com/eU7-Qa3193jrUTIth9yZM3DdsF4=/218x280/v2/https://flxt.tmsimg.com/assets/761404_v9_aa.jpg'
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
