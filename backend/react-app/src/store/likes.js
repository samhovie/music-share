import { GET_ALLSONGS, getAllSongsThunk } from './songs'
import {getAllSongsAction} from './songs'

const GET_ALL_LIKES = 'likes/GET_ALL_LIKES'
const GET_USER_LIKES = 'likes/GET_USER_LIKES'
const POST_LIKE = 'likes/POST_LIKE'
const DELETE_LIKE = 'likes/DELETE_LIKE'


export const getAllSongLikesAction = (likes) => ({
    type: GET_ALL_LIKES,
    likes
})

export const getUserLikesAction = (likes) => ({
    type: GET_USER_LIKES,
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
//{songId: }
//get all songs likes thunk, just


export const getAllSongLikesThunk = (songId) => async (dispatch) => {
    const response = await fetch(`/api/likes/${songId}`)
    if (response.ok) {
        const data = await response.json()
        // console.log('resDATA', data)
        dispatch(getAllSongLikesAction(data))
    }
}
export const getUserLikedSongsThunk = () => async (dispatch) => {
        const response = await fetch('/api/likes/user');
        if (response.ok) {
            const data = await response.json();
            console.log('USERLIKESDATA', data)
          dispatch(getUserLikesAction(data));
        }
  };

export const likeSongThunk = (songId) => async (dispatch) => {
    const response = await fetch(`/api/likes/${songId}`, {
        method: 'POST'
    })
    console.log('REEESPOST',response)
    if (response.ok) {
        dispatch(getAllSongLikesThunk(songId))
    }
}

export const removeLikeThunk = (songId) => async (dispatch) => {
    const response = await fetch(`/api/likes/${songId}`, {
        method: 'DELETE'
    })
    console.log('REEESSDEL',response)
    if (response.ok) {
        dispatch(getAllSongLikesThunk(songId))
    }
}


const initialState = { allLikes: {}, userLikes: {}, songs: {} };

export default function likesReducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case GET_ALL_LIKES:
    //  console.log('action', action.likes)
      newState = {...state, allLikes: { 'likes': action.likes}}

//   newState = { ...state, allLikes: action.likes };
  return newState;
    case GET_USER_LIKES:
        console.log('AAACTION_USER', action)
        newState = {...state, userLikes: {...action.likes}}
        // action.likes.userLikes.userSongs.forEach(song => newState.likes.userLikes.userSongs[song.id] = song)
        return newState
    case GET_ALLSONGS:
        // console.log('AAAACTION', action.songs)
        if (action.songs && action.songs.songs) {
            newState = { ...state, allSongs: { ...action.allSongs } };
            action.songs.songs.forEach(song => (newState.allSongs[song.id] = song));
            return newState;
          }
          return state;
    default:
      return state;

  }
}
