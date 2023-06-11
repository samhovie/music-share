import './ArtistDetails.css'
// import { useDispatch } from 'react-redux'

const ArtistDetails = ({ song }) => {
    // const dispatch = useDispatch()

    // const artist = useSelector(state => state)

    // useEffect(() => {

    //     dispatch(getUserThunk(artistId))
    // }, [dispatch, artistId])

    // if (!artistId) return null
    if (!song.artist) return null

    return (
        <div className='song-details-page-artist'>

            <div className='song-details-page-artist-image'>
                <img
                alt=''
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
