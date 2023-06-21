
const GetLikes = ({songId, song, allLikes, sessionUser, likesHandler2, unlikeHandler2, isProfileSongs}) => {
    // const history = useHistory()

    // const dispatch = useDispatch()
    // const [isLiked, setIsLiked] = useState()
    // const nallLikes = useSelector(state => state.likes.allLikes.likes)
    // const nsessionUser = useSelector((state) => state.session.user)
    // const nsong = useSelector((state) => state.songs)

    // const likes = allLikes && allLikes.likes
    // const userIds = allLikes && allLikes.user_id


    // const likesObj = allLikes.allLikes.likes



    // const likesHandler1 = () => {
    //     dispatch(likeSongThunk(songId))
    // }

    // const unlikeHandler1 = () => {
    //     dispatch(removeLikeThunk(songId))
    // }



    // useEffect(() => {
    //     dispatch(getAllSongsThunk())
    // },[song, allLikes])

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
    // if (!allLikes) return null
    // if (!allLikes.user_id) return null
    if (!sessionUser) return null
    if (!song) return null
    // return (
    //     <>
    //     {!song.user_id.includes(sessionUser.id) ?
    //         <div className='single-song-card-info-bottom-left-column-heart'
    //             onClick={likesHandler2}
    //         >
    //             <i className="fa-solid fa-heart" style={{ color: 'yellow' }}></i>
    //             {`${song.likes}`} Like
    //         </div>
    //         :
    //         <div className='single-song-card-info-bottom-left-column-heart'
    //             onClick={unlikeHandler2}
    //         >
    //             <i className="fa-solid fa-heart" style={{ color: 'yellow' }}></i>
    //             {`${song.likes}`} UnLike
    //         </div>
    //     }
    //     </>
    // )

    return (
        <>
          {sessionUser && !isProfileSongs && (
            <div className='single-song-card-info-bottom-left-column-heart'>
              {song && song.user_id && !song.user_id.includes(sessionUser.id) ? (
                <div onClick={likesHandler2}
                    className='likes-unlikes-handler'
                >
                  <i className="fa-solid fa-heart" style={{ color: 'black' }}></i>
                  {`${song.likes}`} Like
                </div>
              ) : (
                <div onClick={unlikeHandler2}
                className='likes-unlikes-handler'
                >
                  <i className="fa-solid fa-heart" style={{ color: 'darkgreen' }}></i>
                  {`${song.likes}`} Unlike
                </div>
              )}
            </div>
          )}
        </>
      );
}

export default GetLikes
