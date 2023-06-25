// constants
export const GET_ALLSONGS = "songs/GET_ALLSONGS";
const GET_SONG = 'songs/GET_SONG'
const CREATE_SONG = 'songs/CREATE_SONG'
const UPDATE_SONG = 'songs/UPDATE_SONG'
const DELETE_SONG = 'songs/DELETE_SONG'



export const getAllSongsAction = (songs) => ({
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
	if (response.ok) {
		const data = await response.json();

		if (data.errors) {
			return;
		}


		dispatch(getAllSongsAction(data));
	}
};

export const getSongThunk = (id) => async (dispatch) => {

	const response = await fetch(`/api/songs/${id}`)

	if (response.ok) {
		const data = await response.json();
		if (data.errors) {
			return
		}

		dispatch(getSongAction(data))
		return data
	}
}

export const createSongThunk = (song) => async (dispatch) => {
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


export const updateSongThunk = (song) => async (dispatch) => {

	const response = await fetch(`/api/songs/${song.get('id')}`, {
		method: 'PUT',
		body: song,
	});

	if (response.ok) {
		const data = await response.json();

		if (data.errors) {
			return data.errors
		}
		dispatch(updateSongAction(data));

		return data;
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
			//  ("ACTIONN ", action)
			newState = { ...state, singleSong: { ...action.song } }
			//  ("NEW STATEEEE ", newState)
			return newState
		case CREATE_SONG:
			//  ("STATEEEE", state)
			//  ("ACTIONNN", action)
			newState = { ...state }
			newState.allSongs[action.song.id] = { ...action.song };
			return newState
		case UPDATE_SONG:
			newState = {
				...state,
				singleSong: {
					...state.singleSong,
				},
			};
			newState.allSongs[action.song.id] = action.song;
			return newState;
		case DELETE_SONG:
			newState = { ...state }
			delete newState.allSongs[action.songId]
			return newState

		default:
			return state;
	}
}
