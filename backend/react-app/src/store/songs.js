// constants
const GET_ALLSONGS = "songs/GET_ALLSONGS";

const getAllSongsAction = (songs) => ({
	type: GET_ALLSONGS,
	songs
});

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

const initialState = { allSongs: {}, singleSong: {} }

export default function songsReducer(state = initialState, action) {
	let newState;
    switch (action.type) {
		case GET_ALLSONGS:
            newState = {...state, allSongs: {...action.allSongs}}
            action.songs.songs.forEach(song => newState.allSongs[song.id] = song)
            return newState
		default:
			return state;
	}
}
