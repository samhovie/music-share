// constants
const GET_ALLSONGS = "songs/GET_ALLSONGS";
const GET_SONG = 'songs/GET_SONG'

const getAllSongsAction = (songs) => ({
	type: GET_ALLSONGS,
	songs
});

const getSongAction = (song) => ({
	type: GET_SONG,
	song
})

export const getAllSongsThunk = () => async (dispatch) => {
	const response = await fetch("/api/songs/")
	if (response.ok) {
		const data = await response.json();
		if (data.errors) {
			return;
		}

		dispatch(getAllSongsAction(data));
	}
};

export const getSongThunk = (id) => async (dispatch) => {
	// console.log("THE IDDDD ", id)
	const response = await fetch (`/api/songs/${id}`)
	// console.log("THE RESPONSE ", response)
	if (response.ok) {
		const data = await response.json();
		if (data.errors) {
			return
		}
		// console.log("DATAAAA ", data)
		dispatch(getSongAction(data))
	}
}

const initialState = { allSongs: {}, singleSong: {} }

export default function songsReducer(state = initialState, action) {
	let newState;
    switch (action.type) {
		case GET_ALLSONGS:
            newState = {...state, allSongs: {...action.allSongs}}
            action.songs.songs.forEach(song => newState.allSongs[song.id] = song)
            return newState
		case GET_SONG:
			// console.log("ACTIONN ", action)
			newState = {...state, singleSong: {...action.song}}
			// console.log("NEW STATEEEE ", newState)
			return newState
		default:
			return state;
	}
}
