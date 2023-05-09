// constants
const GET_ALLPLAYLISTS = "songs/GET_ALLPLAYLISTS";
const GET_PLAYLIST = 'songs/GET_PLAYLIST'

const getAllPlaylistsAction = (playlists) => ({
    type: GET_ALLPLAYLISTS,
    playlists
});

const getPlaylistAction = (playlist) => ({
    type: GET_PLAYLIST,
    playlist
})

export const getAllPlaylistsThunk = () => async (dispatch) => {
    const response = await fetch("/api/playlists/")
    if (response.ok) {
        const data = await response.json();
        if (data.errors) {
            return;
        }

        dispatch(getAllPlaylistsAction(data));
    }
};

export const getPlaylistThunk = (id) => async (dispatch) => {
    // console.log("THE IDDDD ", id)
    const response = await fetch(`/api/playlists/${id}`)
    // console.log("THE RESPONSE ", response)
    if (response.ok) {
        const data = await response.json();
        if (data.errors) {
            return
        }
        // console.log("DATAAAA ", data)
        dispatch(getPlaylistAction(data))
    }
}

const initialState = { allPlaylists: {}, singlePlaylist: {} }

export default function songsReducer(state = initialState, action) {
    let newState;
    // console.log("ACTIONN ", action)
    // console.log("NEW STATEEEE ", newState)
    switch (action.type) {
        case GET_ALLPLAYLISTS:
            newState = { ...state, allPlaylists: { ...action.allPlaylists } }
            // action.playlists.playlists.forEach(playlist => newState.allPlaylists[playlist.id] = playlist)
            // console.log("NEW STATEEEE ", newState)
            return newState
        case GET_PLAYLIST:
            newState = { ...state, singlePlaylist: { ...action.playlist } }

            return newState
        default:
            return state;
    }
}
