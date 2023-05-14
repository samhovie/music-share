// constants
const GET_ALLPLAYLISTS = "playlists/GET_ALLPLAYLISTS";
const GET_PLAYLIST = 'playlists/GET_PLAYLIST'
const ADD_SONG_TO_PLAYLIST = "playlists/ADD_SONG_TO_PLAYLIST";
const CREATE_PLAYLIST = 'playlists/CREATE_PLAYLIST'
const DELETE_PLAYLIST = 'playlists/DELETE_PLAYLIST'
const UPDATE_PLAYLIST = 'playlists/UPDATE_PLAYLIST'

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

const createPlaylistAction = (playlistId, playlist) => ({
    type: CREATE_PLAYLIST,
    playlistId,
    playlist
})

const deletePlaylistAction = (playlistId) => ({
    type: DELETE_PLAYLIST,
    playlistId
})

const updatePlaylistAction = (playlist) => ({
    type: UPDATE_PLAYLIST,
    playlist
})

export const deletePlaylistThunk = (playlistId) => async (dispatch) => {
    const response = await fetch(`/api/playlists/${playlistId}`, {
        method: 'DELETE',
        body: playlistId
    })
    if (response.ok) {
        const data = await response.json()
        if (data.errors) {
            return data.errors
        }
        dispatch(deletePlaylistAction(data))
    }
}


// const getUserPlaylistsAction = (playlists) => ({
//     type: GET_USER_PLAYLISTS,
//     playlists
// });

export const getAllPlaylistsThunk = () => async (dispatch) => {
    const response = await fetch("/api/playlists/")
    console.log("IN getAllPlaylistsThunk", response)
    if (response.ok) {
        const data = await response.json();
        console.log("data", data)
        if (data.errors) {
            return data.errors;
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

// export const createPlaylistThunk = (playlist) => async (dispatch) => {
//     const formData = new FormData();
//     formData.append('id', playlist.id);
//     formData.append('user_id', playlist.user_id)
//     formData.append('name', playlist.name);
//     formData.append('is_public', playlist.is_public);
//     formData.append('description', playlist.description);
//     // formData.append('preview_img', playlist.preview_img);
//     formData.append('file', playlist.preview_img);
//     const response = await fetch('/api/playlists/new', {
//         method: 'POST',
//         body: formData
//     })
//     console.log(response);

//     if (response.ok) {
//         const data = await response.json();
//         console.log(data)
//         if (data.errors) {
//             return data.errors
//         }
//         dispatch(createPlaylistAction(data.id, data))
//         return data
//     }
// }

export const createPlaylistThunk = (playlist) => async (dispatch) => {
    const response = await fetch('/api/playlists/new', { // Change to your appropriate endpoint
        method: 'POST',
        body: playlist,
    });

    if (response.ok) {
        const data = await response.json();
        if (data.errors) {
            return data.errors;
        }
        dispatch(createPlaylistAction(data));
        return data;
    }
}


export const updatePlaylistThunk = (playlistId, updatedPlaylist) => async (dispatch) => {
    console.log("TEST this", playlistId)
    const { name, is_public, description, preview_img } = updatedPlaylist;

    // const response = await fetch(`/api/playlists/${playlistId}`, {
    //     method: 'PUT',
    //     headers: {
    //         "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //         name: updatedPlaylist.name,
    //         is_public: updatedPlaylist.is_public,
    //         user_id: updatedPlaylist.user_id,
    //         description: updatedPlaylist.description,
    //         id: updatedPlaylist.id,
    //         preview_img: updatedPlaylist.preview_img
    //     }),
    // })
    const formData = new FormData();
    formData.append('name', updatedPlaylist.name);
    formData.append('is_public', updatedPlaylist.is_public);
    // formData.append('user_id', updatedPlaylist.user_id);
    formData.append('description', updatedPlaylist.description);
    // formData.append('id', updatedPlaylist.id);
    if (preview_img)
        formData.append('preview_img', updatedPlaylist.preview_img);

    const response = await fetch(`/api/playlists/${playlistId}`, {
        method: 'PUT',
        body: formData,
    });

    if (response.ok) {
        const data = await response.json();

        if (data.errors) {
            // console.log("TEST 6")
            return data.errors
        }
        // console.log("TEST 4")
        dispatch(updatePlaylistAction(data))
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
        case UPDATE_PLAYLIST: {
            newState = {
                ...state,
                singlePlaylist: {
                    ...state.singlePlaylist,
                },
            };
            newState[action.playlist.id] = action.playlist;
            return newState;
        }
        // console.log("STATEEEE", state)
        // console.log("ACTIONNN", action)
        // newState = { ...state, singlePlaylist: { ...action.singlePlaylist } }
        // return newState
        // newState = { ...state }
        // newState.singlePlaylist = { ...action.playlist }
        // newState.allPlaylists[action.playlist.id] = action.playlist  // Add the new playlist to allPlaylists
        // return newState
        case CREATE_PLAYLIST:
            newState = { ...state }
            newState.singlePlaylist = { ...action.playlist }
            newState.allPlaylists[action.id] = action.playlist  // Add the new playlist to allPlaylists
            return newState

        // case GET_USER_PLAYLISTS:
        //     newState = { ...state, userPlaylists: { ...action.playlists } }
        //     return newState;
        case DELETE_PLAYLIST:
            newState = { ...state, allPlaylists: { ...state.allPlaylists } }
            delete newState.allPlaylists[action.playlistId]
            return newState
        default:
            return state;
    }
}
