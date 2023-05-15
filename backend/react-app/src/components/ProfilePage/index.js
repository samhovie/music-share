import OpenModalButton from '../OpenModalButton'
import UpdateProfile from '../UpdateProfile'
import { NavLink } from 'react-router-dom'
import './ProfilePage.css'
import { useSelector } from 'react-redux'
import DeleteUser from '../DeleteUser'

const ProfilePage = () => {
    const user = useSelector(state => state.session.user)
    // console.log("PROFILE PAGE USERRRR", user)

    const alertClickHandler = () => {
        return alert('Feature Coming Soon!')
    }

    if (!user) return null
    return (
        <>
            <div className='global-outerwrapper-outer'>
                <div className='global-outerwrapper-wrapper'>
                    <div className='profile-page-top'>
                        <div className='profile-page-top-left'>
                            <img src={`${user.profile_pic}`} className='profile-page-pic'></img>
                        </div>
                        <div className='profile-page-top-right'>
                            <div className='profile-page-user-info'>
                                <div className='profile-page-top-display-name'>{`${user.display_name}`}</div>
                                <div className='profile-page-top-full-name'>{`${user.first_name}`} {`${user.last_name}`}</div>
                            </div>
                            <div className='profile-page-buttons'>
                                <OpenModalButton
                                    buttonText="Edit"
                                    modalComponent={<UpdateProfile />} />
                                <OpenModalButton
                                    buttonText="Delete User Profile"
                                    modalComponent={<DeleteUser />} />
                            </div>
                        </div>
                    </div>
                    <div className='profile-page-bottom'>
                        <div className='profile-page-bottom-selections'>
                            <NavLink to={"/songs/current"} className="profile-songs-link">
                                Songs
                            </NavLink>
                            <NavLink to={"/playlists/current"} className="profile-songs-link">
                                Playlists
                            </NavLink>
                        </div>
                    </div>

                    <div className='profile-page-bottom-selections-right'>
                        <div className='a'>
                            <OpenModalButton
                                buttonText="Edit"
                                modalComponent={<UpdateProfile />} />
                        </div>
                    </div>
                    <div className='profile-page-bottom-selections-right'>
                        <div className='a'>
                            <OpenModalButton
                                buttonText="Delete User Profile"
                                modalComponent={<DeleteUser />} />
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default ProfilePage
