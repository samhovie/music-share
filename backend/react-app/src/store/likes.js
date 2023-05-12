const GET_ALL_LIKES = 'likes/GET_ALL_LIKES'
const POST_LIKE = 'likes/POST_LIKE'
const DELETE_LIKE = 'likes/DELETE_LIKE'

export const getAllSongLikesAction = (likes) => ({
    type: GET_ALL_LIKES,
    likes
})

export const postLikeAction = (songId) => ({
    type: POST_LIKE,
    songId
})

export const deletelikeAction = (songId) => ({
    type: DELETE_LIKE,
    songId
})

export const getAllSongLikesThunk = (songId) => async (dispatch) => {
    const response = await fetch(`/api/likes/${songId}`)
    if (response.ok) {
        const data = await response.json()
        console.log('resDATA', data)
        dispatch(getAllSongLikesAction(data))
    }
}

export const likeSongThunk = (songId) => async (dispatch) => {
    const response = await fetch(`/api/likes/${songId}`, {
        method: 'POST'
    })
    if (response.ok) {
        dispatch(getAllSongLikesThunk(songId))
    }
}

export const removeLikeThunk = (songId) => async (dispatch) => {
    const response = await fetch(`/api/likes/${songId}`, {
        method: 'DELETE'
    })
    if (response.ok) {
        dispatch(getAllSongLikesThunk(songId))
    }
}


const initialState = { allLikes: {} };

export default function likesReducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case GET_ALL_LIKES:
    //  console.log('action', action.likes)
      newState = {...state, allLikes: { 'likes': action.likes}}
      return newState
    default:
      return state;
  }
}
