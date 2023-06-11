import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserThunk } from '../../store/users'
// import './GetUser.css'

const GetUser = ({userId}) => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.session.user)
    // console.log("USERRRRR", user)

    useEffect(() => {
        dispatch(getUserThunk(userId))
    }, [dispatch, userId])

    if (!user || !user.username) return null

    return (user.username)
}

export default GetUser
