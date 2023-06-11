// constants
const GET_ALLUSERS = "users/GET_ALLUSERS";
const GET_USER = 'users/GET_USER'
// const CREATE_USER = 'users/CREATE_USER'
const UPDATE_USER = 'users/UPDATE_USER'
const DELETE_USER = 'users/DELETE_USER'



const getAllUsersAction = (users) => ({
	type: GET_ALLUSERS,
	users
});

const getUserAction = (user) => ({
	type: GET_USER,
	user
})

// const createUserAction = (user) => ({
// 	type: CREATE_USER,
// 	user
// })

const updateUserAction = (user) => ({
	type: UPDATE_USER,
	user
})

const deleteUserAction = (userId) => ({
	type: DELETE_USER,
	userId
})


export const getAllUsersThunk = () => async (dispatch) => {
	const response = await fetch("/api/users/")
	if (response.ok) {
		const data = await response.json();
		if (data.errors) {
			return;
		}

		dispatch(getAllUsersAction(data));
	}
};

export const getUserThunk = (id) => async (dispatch) => {
	const response = await fetch(`/api/users/${id}`)
	if (response.ok) {
		const data = await response.json();
		if (data.errors) {
			return
		}
		//  ("DATAAAA ", data)
		dispatch(getUserAction(data))
	}
}

// export const createUserThunk = (user) => async (dispatch) => {
// 	//  ("USER")
// 	const response = await fetch('/api/users/new', {
// 		method: 'POST',
// 		body: user
// 	})

// 	if	(response.ok) {
// 		const data = await response.json();
// 		if (data.errors) {
// 			return data.errors
// 		}
// 		dispatch(createUserAction(data))
// 	}
// }

export const updateUserThunk = (user, userId) => async (dispatch) => {

	//  ("TEST ENTRIES", user.entries())
	const formData = new FormData()
	formData.append('display_name', user.display_name)
	formData.append('first_name', user.first_name)
	formData.append('last_name', user.last_name)
	formData.append('city', user.city)
	formData.append('country', user.country)
	formData.append('bio', user.bio)
	const response = await fetch(`/api/users/${userId}`, {
		method: 'PUT',
		body: formData
	})
	 (response)
	if (response.ok) {

		const data = await response.json();

		if (data.errors) {

			return data.errors
		}

		dispatch(updateUserAction(data))
	}
}

// export const deleteUserThunk = (userId) => async (dispatch) => {
// 	const response = await fetch(`/api/users/${userId}`, {
// 		method: 'DELETE',
// 		body: userId
// 	})
// 	if (response.ok) {
// 		const data = await response.json()
// 		if (data.errors) {
// 			return data.errors
// 		}
// 		dispatch(deleteUserAction(data))
// 	}
// }
export const deleteUserThunk = (userId) => async (dispatch) => {
	const response = await fetch(`/api/users/${userId}`, {
		method: 'DELETE',
	})
	if (response.ok) {
		const data = await response.json()
		if (data.errors) {
			return data.errors
		}
		dispatch(deleteUserAction(userId))
	}
}


const initialState = { allUsers: {}, singleUser: {} }

export default function usersReducer(state = initialState, action) {
	let newState;
	switch (action.type) {
		case GET_ALLUSERS:
			newState = { ...state, allUsers: { ...action.allUsers } }
			action.users.users.forEach(user => newState.allUsers[user.id] = user)
			return newState
		case GET_USER:
			//  ("ACTIONN ", action)
			newState = { ...state, singleUser: { ...action.user } }
			//  ("NEW STATEEEE ", newState)
			return newState
		// case CREATE_USER:
		// 	//  ("STATEEEE", state)
		// 	//  ("ACTIONNN", action)
		// 	newState = { ...state, singleUser: {...action.singleUser}}
		// 	return newState
		case UPDATE_USER:
			//  (action)
			// newState = {...state, singleUser: {...state.singleUser}}
			// newState.singleUser[action.user.id] = action.user
			// return newState
			newState = { ...state, singleUser: action.user }
			return newState
		case DELETE_USER:
			newState = { ...state, allUsers: { ...state.allUsers } }
			delete newState.allUsers[action.userId]
			return newState

		default:
			return state;
	}
}
