import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getPlaylistThunk } from '../../store/playlists';
import PlaylistCard from '../UI/PlaylistCard';
import { NavLink } from 'react-router-dom';
import SingleSongCard from '../UI/SingleSongCard';
import './PlaylistDetailsPage.css';

function PlaylistDetailsPage() {
  const dispatch = useDispatch();
  const { playlistId } = useParams();
  const playlist = useSelector((state) => state.playlists.singlePlaylist);
  const sessionUser = useSelector((state) => state.session.user);
  const owner = playlist.user && playlist.user.id;
  const current_user = sessionUser.id;
  const owner_username = playlist.user && playlist.user.username;
  const playlistSong = useSelector((state) => state.playlists.singlePlaylist.song)
  const length = playlistSong?.length
  console.log('playlistttttt', length)
  // console.log(playlistSong.length)

  useEffect(() => {
    dispatch(getPlaylistThunk(playlistId));
  }, [dispatch, playlistId]);

  return (
    <>
      {length > 0 ?
        <>
          <div className="playlist-details-page-outer">
            <div className="playlist-details-page-top">
              {/* SongDetailsCard component */}
            </div>
            <div className="playlist-details-page-bottom-wrapper">
              <div className="playlist-details-page-bottom">
                <div className="playlist-details-page-bottom-bar">
                  <div className="playlist-details-page-interactive-buttons">

                    {/* Add Song to Playlist (in modal) button */}
                  </div>
                </div>
                <div className="playlist-details-page-profile-songs">
                  <div className="playlist-details-page-user">
                    <div className="playlist-details-page-user-image">
                      <img
                        src="https://resizing.flixster.com/eU7-Qa3193jrUTIth9yZM3DdsF4=/218x280/v2/https://flxt.tmsimg.com/assets/761404_v9_aa.jpg"
                        alt="User"
                      />
                    </div>
                    <p className="playlist-details-page-user-name">
                      {owner_username}
                    </p>
                  </div>
                  <div className="playlist-details-page-song-list">
                    {playlist.song?.map((s) => (
                      <SingleSongCard key={s.id} song={s} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
        :
        <div>
          <NavLink
            className='you-no-likey-yet'
            exact to='/feed'>

            Oh wow, you haven't added any songs yet! Go find a song to add now!

          </NavLink>
        </div>
      }

    </>
  )
}

export default PlaylistDetailsPage;
