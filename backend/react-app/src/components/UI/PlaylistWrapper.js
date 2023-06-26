import "./PlaylistWrapper.css";
import PlaylistCard from "./PlaylistCard";

const PlaylistWrapper = ({ playlists }) => {
    return (
        <>
            <div className="playlist-wrapper-wrapper">
                <h2 className="playlist-wrapper-title">Latest Playlists</h2>
                <div className="playlist-wrapper-inner-wrapper">
                    {playlists.map((playlist) => (
                        <PlaylistCard playlist={playlist} key={playlist.id} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default PlaylistWrapper;
