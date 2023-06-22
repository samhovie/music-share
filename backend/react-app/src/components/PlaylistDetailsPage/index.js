import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getPlaylistThunk } from '../../store/playlists';
// import PlaylistCard from '../UI/PlaylistCard';
import { NavLink } from 'react-router-dom';
import SingleSongCard from '../UI/SingleSongCard';
import './PlaylistDetailsPage.css';

function PlaylistDetailsPage() {
  const dispatch = useDispatch();
  const { playlistId } = useParams();
  const sessionUser = useSelector(state => state.session.user)
  const playlist = useSelector((state) => state.playlists.singlePlaylist);

  // const sessionUser = useSelector((state) => state.session.user);
  // const owner = playlist.user && playlist.user.id;
  // const current_user = sessionUser.id;
  const owner_username = playlist.user && playlist.user.username;
  const playlistSong = useSelector((state) => state.playlists.singlePlaylist.song)

  const length = playlistSong?.length

  useEffect(() => {
    dispatch(getPlaylistThunk(playlistId));
  }, [dispatch, playlistId]);

  return (
    <>
      {length > 0 ?
        <>
          <div className="playlist-details-page-outer">
            <div className="global-outerwrapper-wrapper ">
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
                      {owner_username}'s playlist
                    </p>
                  </div>
                <div className="playlist-details-page-profile-songs">
                  <div className="playlist-details-page-song-list">
                    {playlist.song?.map((s) => (
                      <SingleSongCard key={s.id} song={s} playlist={true} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
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

export default PlaylistDetailsPage;
