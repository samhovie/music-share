// constants
const GET_ALLCOMMENTS = "songs/GET_ALLCOMMENTS";
// const GET_COMMENT = 'songs/GET_COMMENT'
const CREATE_COMMENT = 'songs/CREATE_COMMENT'
const UPDATE_COMMENT = 'songs/UPDATE_COMMENT'
const DELETE_COMMENT = 'songs/DELETE_COMMENT'



const getAllCommentsAction = (comments) => ({
	type: GET_ALLCOMMENTS,
	comments
});

// const getSongAction = (song) => ({
// 	type: GET_COMMENT,
// 	song
// })

const createCommentAction = (comment) => ({
	type: CREATE_COMMENT,
	comment
})

const updateCommentAction = (comment) => ({
	type: UPDATE_COMMENT,
	comment
})

const deleteCommentAction = (commentId) => ({
	type: DELETE_COMMENT,
	commentId
})


export const getAllCommentsThunk = (songId) => async (dispatch) => {
    // console.log("START CREATE COMMENT THUNKKKKK")
	const response = await fetch(`/api/comments/${songId}`)
    // console.log("SECOND CREATE COMMENT THUNKKKKK", response)
	if (response.ok) {
		const data = await response.json();
		if (data.errors) {
			return;
		}
        // console.log("THIRD CREATE COMMENT THUNKKKKK")
		dispatch(getAllCommentsAction(data));
	}
};

// export const getCommentThunk = (id) => async (dispatch) => {
// 	// console.log("THE IDDDD ", id)
// 	const response = await fetch(`/api/comments/${id}`)
// 	// console.log("THE RESPONSE ", response)
// 	if (response.ok) {
// 		const data = await response.json();
// 		if (data.errors) {
// 			return
// 		}
// 		// console.log("DATAAAA ", data)
// 		dispatch(getCommentAction(data))
// 	}
// }

export const createCommentThunk = (comment, songId) => async (dispatch) => {
	const response = await fetch(`/api/comments/${songId}`, {
        method: 'POST',
		body: comment
	})
	if	(response.ok) {
        const data = await response.json();
		if (data.errors) {
            return data.errors
		}
		dispatch(createCommentAction(data))
	}
}

export const updateCommentThunk = (song, songId) => async (dispatch) => {
	// console.log("TEST 2", song)
	const response = await fetch(`/api/comments/${songId}`, {
		method: 'PUT',
		body: song
	})

	if	(response.ok) {
		// console.log("TEST 3")
		const data = await response.json();
		// console.log("TEST 5", data)
		if (data.errors) {
			// console.log("TEST 6")
			return data.errors
		}
		// console.log("TEST 4")
		dispatch(updateCommentAction(data))
	}
}

export const deleteCommentThunk = (songId) => async (dispatch) => {
	const response = await fetch(`/api/comments/${songId}`, {
		method: 'DELETE',
		body: songId
	})
	if (response.ok) {
		const data = await response.json()
		if (data.errors) {
			return data.errors
		}
		dispatch(deleteCommentAction(data))
	}
}

const initialState = { allComments: {}, singleComment: {} }

export default function commentsReducer(state = initialState, action) {
	let newState;
	switch (action.type) {
		case GET_ALLCOMMENTS:
			newState = { ...state, allComments: { ...action.allComments } }
            console.log("ACTIONNNN", action)
			action.comments.forEach(comment => newState.allComments[comment.id] = comment)
			return newState
		// case GET_COMMENT:
		// 	// console.log("ACTIONN ", action)
		// 	newState = { ...state, singleSong: { ...action.song } }
		// 	// console.log("NEW STATEEEE ", newState)
		// 	return newState
		case CREATE_COMMENT:
			// console.log("STATEEEE", state)
			// console.log("ACTIONNN", action)
			newState = { ...state, singleComment: {...action.singleComment}}
			return newState
		case UPDATE_COMMENT:
			// console.log(action)
			newState = {...state, singleComment: {...state.singleComment}}
			newState.singleComment[action.comment.id] = action.comment
			return newState
		case DELETE_COMMENT:
			newState = {...state, allComments: {...state.allComments}}
			delete newState.allComments[action.commentId]
			return newState

		default:
			return state;
	}
}
