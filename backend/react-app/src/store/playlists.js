// constants
const GET_ALLPLAYLISTS = "playlists/GET_ALLPLAYLISTS";
const GET_PLAYLIST = 'playlists/GET_PLAYLIST'
const ADD_SONG_TO_PLAYLIST = "playlists/ADD_SONG_TO_PLAYLIST";
const CREATE_PLAYLIST = 'songs/CREATE_PLAYLIST'

// const GET_USER_PLAYLISTS = "playlists/GET_USER_PLAYLISTS";


const getAllPlaylistsAction = (playlists) => ({
    type: GET_ALLPLAYLISTS,
    playlists
});

const getPlaylistAction = (playlist) => ({
    type: GET_PLAYLIST,
    playlist
})

// addedd??

const addSongToPlaylistAction = (playlist) => ({
    type: ADD_SONG_TO_PLAYLIST,
    playlist
})

const createPlaylistAction = (playlist) => ({
    type: CREATE_PLAYLIST,
    playlist
})

// const getUserPlaylistsAction = (playlists) => ({
//     type: GET_USER_PLAYLISTS,
//     playlists
// });

export const getAllPlaylistsThunk = () => async (dispatch) => {
    const response = await fetch("/api/playlists/")
    if (response.ok) {
        const data = await response.json();
        console.log("data", data)
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

export const createPlaylistThunk = (playlist) => async (dispatch) => {
    const formData = new FormData();
    formData.append('name', playlist.name);
    formData.append('is_public', playlist.is_public);
    formData.append('description', playlist.description);
    const response = await fetch('/api/playlists/new', {
        method: 'POST',
        body: formData
    })
    console.log(response);

    if (response.ok) {
        const data = await response.json();
        console.log(data)
        if (data.errors) {
            return data.errors
        }
        dispatch(createPlaylistAction(data.id))
        return data
    }
}

// added??
export const addSongToPlaylistThunk = (playlistId, songId) => async (dispatch) => {
    const response = await fetch(`/api/playlists/${playlistId}/songs/${songId}`, {
        method: "POST",
    });

    if (response.ok) {
        const updatedPlaylist = await response.json();
        if (updatedPlaylist.errors) {
            return
        }

        dispatch(addSongToPlaylistAction(updatedPlaylist));
    }
};


// export const getUserPlaylistsThunk = () => async (dispatch) => {
//     const response = await fetch("/api/playlists/current")
//     if (response.ok) {
//         const data = await response.json();
//         if (data.errors) {
//             return;
//         }
//         dispatch(getUserPlaylistsAction(data));
//     }
// };

const initialState = { allPlaylists: {}, singlePlaylist: {}, userPlaylists: {} }

export default function playlistsReducer(state = initialState, action) {
    let newState;
    // console.log("ACTIONN ", action)
    // console.log("NEW STATEEEE ", newState)
    switch (action.type) {
        case GET_ALLPLAYLISTS:
            newState = { ...state, allPlaylists: { ...action.allPlaylists } }
            action.playlists.playlists.forEach(playlist => newState.allPlaylists[playlist.id] = playlist)
            // console.log("NEW STATEEEE ", newState)
            // console.log("newState", newState)
            return newState
        case GET_PLAYLIST:
            newState = { ...state, singlePlaylist: { ...action.playlist } }
            // console.log("stateeeeee", newState)
            return newState
        // addedd???
        case ADD_SONG_TO_PLAYLIST:
            newState = { ...state }
            newState.singlePlaylist = { ...action.playlist }
            return newState
        case CREATE_PLAYLIST:
            // console.log("STATEEEE", state)
            // console.log("ACTIONNN", action)
            // newState = { ...state, singlePlaylist: { ...action.singlePlaylist } }
            // return newState
            newState = { ...state }
            newState.singlePlaylist = { ...action.playlist }
            newState.allPlaylists[action.playlist.id] = action.playlist  // Add the new playlist to allPlaylists
            return newState

        // case GET_USER_PLAYLISTS:
        //     newState = { ...state, userPlaylists: { ...action.playlists } }
        //     return newState;
        default:
            return state;
    }
}
