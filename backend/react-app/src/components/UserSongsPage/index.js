import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getPlaylistThunk } from '../../store/playlists';
// import PlaylistCard from '../UI/PlaylistCard';
import { NavLink } from 'react-router-dom';
import SingleSongCard from '../UI/SingleSongCard';
import './UserSongsPage.css'
import { getAllSongsThunk } from '../../store/songs';

const UserSongsPage = () => {
  const dispatch = useDispatch();
  const { artistId } = useParams()
  const sessionUser = useSelector(state => state.session.user)
  const allSongs = useSelector((state) => Object.values(state.songs.allSongs));
//   console.log('AAALL', allSongs)

//   const length = playlistSong?.length
 const userSongs = allSongs.filter(song => {
    if (allSongs && song && song.artist_id) {
        return song.artist_id === Number(artistId)
    }
 })

//  userSongs[0]?.artist_id
 console.log('USERSONGS', userSongs)

  useEffect(() => {
    dispatch(getAllSongsThunk());
  }, [dispatch]);

  return (
    <>
      {allSongs?.length > 0 ?
        <>
          {/* <div className="playlist-details-page-outer">
            <div className="global-outerwrapper-wrapper "> */}
              {/* SongDetailsCard component */}

            <div className="playlist-details-page-bottom-wrapper">
              <div className="playlist-details-page-bottom">
                <div className="playlist-details-page-bottom-bar">
                  <div className="playlist-details-page-interactive-buttons">

                    {/* Add Song to Playlist (in modal) button */}
                  </div>
                </div>
                  <div className="playlist-details-page-user">
                    <div className="playlist-details-page-user-image">
                      <img
                        src="https://resizing.flixster.com/eU7-Qa3193jrUTIth9yZM3DdsF4=/218x280/v2/https://flxt.tmsimg.com/assets/761404_v9_aa.jpg"
                        alt="User"
                      />
                    </div>
                    <p className="playlist-details-page-user-name" style={{color: 'black', fontSize: '30px', fontWeight: 'bold'}}>
                      {/* {userSongs[0]?.art}'s songs */}
                    </p>
                  </div>
                <div className="playlist-details-page-profile-songs">
                  <div className="playlist-details-page-song-list">
                    {userSongs?.map((s) => (
                      <SingleSongCard key={s.id} song={s} playlist={false} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/* </div>
          </div> */}
        </>
        :
        <div >
        <NavLink
            className='you-no-likey-yet'
            exact to='/feed'
            >
          <h3
            style={{marginTop: '5rem'}}
          >
          Oh wow, there aren't any songs here yet! Go find a song!
          </h3>


        </NavLink>
      </div>
      }


      {
        // length === 0 && playlist && playlist.user && playlist.user.id && sessionUser && playlist.user.id !== sessionUser.id &&
        // <NavLink
        // >
        //   style={{marginTop: '5rem', color: 'black'}}

        // <h3 className='you-no-likey-yet'


        // >
        //   This owner's playlist is empty. Check out other playlists!
        // </h3>
        // </NavLink>
      }


    </>
  )
}

export default UserSongsPage
