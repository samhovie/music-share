import OpenModalButton from '../OpenModalButton'
import UpdateProfile from '../UpdateProfile'
import { NavLink } from 'react-router-dom'
import './ProfilePage.css'
import { useSelector } from 'react-redux'

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
                            <img src={`${user.profile_pic}`}
                                className='profile-page-pic'
                            ></img>
                        </div>
                        <div className='profile-page-top-right'
                        // style={{backgroundImage: `url(${user.banner_pic})`}}
                        >
                            <div className='profile-page-top-right-left'>
                                <div className='profile-page-top-display-name'>{`${user.display_name}`}</div>
                                <div className='profile-page-top-full-name'>{`${user.first_name}`} {`${user.last_name}`}</div>
                            </div>
                            <div>
                                <button onClick={() => alertClickHandler()} className='upload-header-image-button'>Upload Header Image</button>
                            </div>
                        </div>
                    </div>
                    <div className='profile-page-bottom'>
                        <div className='profile-page-bottom-selections'>
                            <div className='profile-page-bottom-selections-left'>
                                {/* <h2>
                                    All
                                </h2> */}
                                <h2>
                                    <NavLink to={"/songs/current"} className="profile-songs-link">
                                        Songs
                                    </NavLink></h2>
                                <h2> <NavLink to={"/playlists/current"} className="profile-songs-link">
                                    Playlists
                                </NavLink></h2>
                            </div>
                            <div className='profile-page-bottom-selections-right'>
                                <div className='a'>
                                    <OpenModalButton
                                        buttonText="Edit"
                                        modalComponent={<UpdateProfile />} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfilePage
