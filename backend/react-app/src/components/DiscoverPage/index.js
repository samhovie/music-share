import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPlaylistsThunk } from "../../store/playlists";
import OpenModalButton from "../OpenModalButton";
import CreatePlaylistForm from "../CreateNewPlaylist";
import PlaylistCard from "../UI/PlaylistCard";
import "./DiscoverPage.css";


const DiscoverPage = () => {
    const dispatch = useDispatch();
    const allPlaylists = useSelector((state) => state.playlists.allPlaylists);
    const playlists = Object.values(allPlaylists);

    useEffect(() => {
        dispatch(getAllPlaylistsThunk());
    }, [dispatch]);

    return (
        <>
            <div className="discover-page-wrapper">
                <OpenModalButton
                    className="buttonss"
                    modalComponent={<CreatePlaylistForm />}
                    buttonText="Create Playlist"
                />

                <div className="playlist-wrapper-wrapper">
                    <h2 className="playlist-wrapper-title">Latest</h2>
                    <div className="playlist-wrapper-inner-wrapper">
                        {playlists.map((playlist) => (
                            <PlaylistCard
                                playlist={playlist}
                                key={playlist.id}
                            />
                        ))}
                    </div>
                </div>

                <div className="playlist-wrapper-wrapper">
                    <h2 className="playlist-wrapper-title">Hip-hop</h2>
                    <div className="playlist-wrapper-inner-wrapper">
                        {playlists.map((playlist) => (
                            <PlaylistCard
                                playlist={playlist}
                                key={playlist.id}
                            />
                        ))}
                    </div>
                </div>

                <div className="playlist-wrapper-wrapper">
                    <h2 className="playlist-wrapper-title">Rock</h2>
                    <div className="playlist-wrapper-inner-wrapper">
                        {playlists.map((playlist) => (
                            <PlaylistCard
                                playlist={playlist}
                                key={playlist.id}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default DiscoverPage;
