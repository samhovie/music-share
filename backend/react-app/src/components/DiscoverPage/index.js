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

    const genres = ["Pop", "Hip-Hop/Rap", "Rock", "R&B/Soul"];

    // how to do latest?
    // => do actual created/updated at values
    //  => seed playlists with random created at values
    //   => order playlists by created at value from the backend

    const genrePlaylists = [];
    for (let genre of genres) {
        genrePlaylists.push(
            playlists.filter((playlist) => playlist.name.includes(genre))
        );
    }
    const latestPlaylists = playlists.slice(0, 7)

    useEffect(() => {
        dispatch(getAllPlaylistsThunk());
    }, [dispatch]);

    return (
        <>
            <div className="discover-page-wrapper">
                {/* <OpenModalButton
                    className="buttonss"
                    modalComponent={<CreatePlaylistForm />}
                    buttonText="Create Playlist"
                /> */}

<div className="playlist-wrapper-wrapper">
                        <h2 className="playlist-wrapper-title">Latest</h2>
                        <div className="playlist-wrapper-inner-wrapper">
                            {latestPlaylists.map((playlist, i) => (
                                <PlaylistCard
                                    playlist={playlist}
                                    key={i}
                                />
                            ))}
                        </div>
                    </div>

                {genrePlaylists.map((genrePlaylist, i) => (
                    <div key={i} className="playlist-wrapper-wrapper">
                        <h2 className="playlist-wrapper-title">{genres[i]}</h2>
                        <div className="playlist-wrapper-inner-wrapper">
                            {genrePlaylist.map((playlist) => (
                                <PlaylistCard
                                    playlist={playlist}
                                    key={playlist.id}
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default DiscoverPage;
