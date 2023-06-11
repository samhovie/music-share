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

// export const updateSongThunk = (song, updatedSong) => async (dispatch) => {



// 	const response = await fetch(`/api/songs/${song}`, {
// 		method: 'PUT',
// 		headers: {
// 			"Content-Type": "application/json",
// 		},
// 		body: updatedSong
// body: JSON.stringify({
// 	id: updatedSong.id,
// 	name: updatedSong.name,
// 	artist_name: updatedSong.artist_name,
// 	artist_id: updatedSong.artist_id,
// 	genre: updatedSong.genre,
// 	preview_img: updatedSong.preview_img
// }),
// 	})

// 	if (response.ok) {
// 		 ('response222', response)
// 		const data = await response.json();
// 		 ('DAAATA22222', data)
// 		if (data.errors) {
// 			//  ("TEST 6")
// 			return data.errors
// 		}
// 		//  ("TEST 4")
// 		dispatch(updateSongAction(data))
// 		return data
// 	}
// }
// export const updateSongThunk = (songId, updatedSong) => async (dispatch) => {
// 	const formData = new FormData();
// for (const key in updatedSong) {
// 	// 	formData.append(key, updatedSong[key]);
// 	// }

// 	const response = await fetch(`/api/songs/${songId}`, {
// 		method: 'PUT',
// 		body: updatedSong,
// 	});
// 	 ('response', response)

// 	if (response.ok) {
// 		const data = await response.json();
// 		 ('datadata', data)
// 		if (data.errors) {
// 			return data.errors
// 		}
// 		dispatch(updateSongAction(data));
// 		 ('datadata', data)

// 		return data;
// 	}
// }
export const updateSongThunk = (songId, updatedSong) => async (dispatch) => {
	const formData = new FormData();
	for (const key in updatedSong) {
		formData.append(key, updatedSong[key]);
	}
	try {
		const response = await fetch(`/api/songs/${songId}`, {
			method: 'PUT',
			body: updatedSong,
		});


		if (response.ok) {
			const data = await response.json();

			if (data.errors) {
				return data.errors
			}
			dispatch(updateSongAction(data));


			return data;
		}
	} catch (error) {
		console.error('Error:', error);
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
			newState = { ...state, singleSong: { ...action.singleSong } }
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
		// newState = { ...state, allSongs: { ...state.allSongs, [action.song.id]: {
		// 		...state.allSongs[action.song.id],
		// 		...action.song,
		// 	  },
		// 	},
		//   };
		//   newState = { ...state, single}
		//   return newState
		case DELETE_SONG:
			newState = { ...state, allSongs: { ...state.allSongs } }
			delete newState.allSongs[action.songId]
			return newState

		default:
			return state;
	}
}
