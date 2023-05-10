import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPlaylistThunk } from "../../store/playlists";
import { useParams } from "react-router-dom"

export default function GetPlaylistUsername() {
    const dispatch = useDispatch();

    const user = useSelector(state => state.playlists.singlePlaylist.user);
    const { playlistId } = useParams();
    useEffect(() => {
        dispatch(getPlaylistThunk(playlistId))
    }, [dispatch])

    if (!user) return null;
    return (user.username)
}
