// constants
const GET_ALLSONGS = "songs/GET_ALLSONGS";
const GET_SONG = 'songs/GET_SONG'
const CREATE_SONG = 'songs/CREATE_SONG'
const UPDATE_SONG = 'songs/UPDATE_SONG'
const DELETE_SONG = 'songs/DELETE_SONG'



const getAllSongsAction = (songs) => ({
	type: GET_ALLSONGS,
	songs
});

const getSongAction = (song) => ({
	type: GET_SONG,
	song
})

const createSongAction = (song) => ({
	type: CREATE_SONG,
	song
})

const updateSongAction = (song) => ({
	type: UPDATE_SONG,
	song
})

const deleteSongAction = (songId) => ({
	type: DELETE_SONG,
	songId
})


export const getAllSongsThunk = () => async (dispatch) => {
	const response = await fetch("/api/songs/")
	console.log("responseeeeeeeeeeeeeeee", response)
	if (response.ok) {
		const data = await response.json();
		if (data.errors) {
			return;
		}
		console.log("dataaaaaaaaaaaaaaaa", data)

		dispatch(getAllSongsAction(data));
	}
};

export const getSongThunk = (id) => async (dispatch) => {
	// console.log("THE IDDDD ", id)
	const response = await fetch(`/api/songs/${id}`)
	// console.log("THE RESPONSE ", response)
	if (response.ok) {
		const data = await response.json();
		if (data.errors) {
			return
		}
		// console.log("DATAAAA ", data)
		dispatch(getSongAction(data))
		return data
	}
}

export const createSongThunk = (song) => async (dispatch) => {
	// console.log("SONG")
	const response = await fetch('/api/songs/new', {
		method: 'POST',
		body: song
	})

	if (response.ok) {
		const data = await response.json();
		if (data.errors) {
			return data.errors
		}
		dispatch(createSongAction(data))
	}
}

export const updateSongThunk = (song, songId) => async (dispatch) => {
	// console.log("TEST 2", song)
	const response = await fetch(`/api/songs/${songId}`, {
		method: 'PUT',
		body: song
	})

	if (response.ok) {
		// console.log("TEST 3")
		const data = await response.json();
		// console.log("TEST 5", data)
		if (data.errors) {
			// console.log("TEST 6")
			return data.errors
		}
		// console.log("TEST 4")
		dispatch(updateSongAction(data))
	}
}

export const deleteSongThunk = (songId) => async (dispatch) => {
	const response = await fetch(`/api/songs/${songId}`, {
		method: 'DELETE',
		body: songId
	})
	if (response.ok) {
		const data = await response.json()
		if (data.errors) {
			return data.errors
		}
		dispatch(deleteSongAction(data))
	}
}

const initialState = { allSongs: {}, singleSong: {} }

export default function songsReducer(state = initialState, action) {
	let newState;
	switch (action.type) {
		case GET_ALLSONGS:
			newState = { ...state, allSongs: { ...action.allSongs } }
			action.songs.songs.forEach(song => newState.allSongs[song.id] = song)
			return newState
		case GET_SONG:
			// console.log("ACTIONN ", action)
			newState = { ...state, singleSong: { ...action.song } }
			// console.log("NEW STATEEEE ", newState)
			return newState
		case CREATE_SONG:
			// console.log("STATEEEE", state)
			// console.log("ACTIONNN", action)
			newState = { ...state, singleSong: { ...action.singleSong } }
			return newState
		case UPDATE_SONG:
			// console.log(action)
			newState = { ...state, singleSong: { ...state.singleSong } }
			newState.singleSong[action.song.id] = action.song
			return newState
		case DELETE_SONG:
			newState = { ...state, allSongs: { ...state.allSongs } }
			delete newState.allSongs[action.songId]
			return newState

		default:
			return state;
	}
}
