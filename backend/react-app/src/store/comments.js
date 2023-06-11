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
    //  ("START CREATE COMMENT THUNKKKKK")
	const response = await fetch(`/api/comments/${songId}`)
    //  ("SECOND CREATE COMMENT THUNKKKKK", response)
	if (response.ok) {
		const data = await response.json();
		if (data.errors) {
			return;
		}
        //  ("THIRD CREATE COMMENT THUNKKKKK")
		dispatch(getAllCommentsAction(data));
	}
};

// export const getCommentThunk = (id) => async (dispatch) => {
// 	//  ("THE IDDDD ", id)
// 	const response = await fetch(`/api/comments/${id}`)
// 	//  ("THE RESPONSE ", response)
// 	if (response.ok) {
// 		const data = await response.json();
// 		if (data.errors) {
// 			return
// 		}
// 		//  ("DATAAAA ", data)
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
	//  ("TEST 2", song)
	const response = await fetch(`/api/comments/${songId}`, {
		method: 'PUT',
		body: song
	})

	if	(response.ok) {
		//  ("TEST 3")
		const data = await response.json();
		//  ("TEST 5", data)
		if (data.errors) {
			//  ("TEST 6")
			return data.errors
		}
		//  ("TEST 4")
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

			action.comments.forEach(comment => newState.allComments[comment.id] = comment)
			return newState
		// case GET_COMMENT:
		// 	//  ("ACTIONN ", action)
		// 	newState = { ...state, singleSong: { ...action.song } }
		// 	//  ("NEW STATEEEE ", newState)
		// 	return newState
		case CREATE_COMMENT:
			//  ("STATEEEE", state)
			//  ("ACTIONNN", action)
			newState = { ...state, singleComment: {...action.singleComment}}
			return newState
		case UPDATE_COMMENT:
			//  (action)
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
