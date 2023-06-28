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
    // const indexes

    // latest has latest, then genres

    const subs = [];
    for (let genre of genres) {
        subs.push(
            playlists.filter((playlist) => playlist.name.includes(genre))
        );
    }

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

                {subs.map((sub, i) => (
                    <div key={i} className="playlist-wrapper-wrapper">
                        <h2 className="playlist-wrapper-title">{genres[i]}</h2>
                        <div className="playlist-wrapper-inner-wrapper">
                            {sub.map((playlist) => (
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
