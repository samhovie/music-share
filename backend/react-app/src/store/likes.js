const GET_ALL_LIKES = 'likes/GET_ALL_LIKES'

export const getAllSongLikesAction = (likes) => ({
    type: GET_ALL_LIKES,
    likes
})

export const getAllSongLikes = async (songId) => {
    const response = await fetch(`/api/likes/${songId}`)
    if (response.ok) {
        const data = await response.json()
        dispatch(getAllSongLikesAction(data))
    }
}

export default function likesReducer (state = initialState, action) {
    let newState;
    switch(action.type) {
        case GET_ALL_LIKES:
            // newState = {...state, }
            return newState
    }
}
