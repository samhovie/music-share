import './ProfilePage.css'

const ProfilePage = () => {


    return (
        <>
            <div className='global-outerwrapper-outer'>
                <div className='global-outerwrapper-wrapper'>
                    <div className='profile-page-top'>
                        <div className='profile-page-top-left'>
                            <img src='https://pbs.twimg.com/media/FuE8jf_XsAk0AVf?format=jpg&name=medium'
                                className='profile-page-pic'
                            ></img>
                        </div>
                        <div className='profile-page-top-right'>
                            <div className='profile-page-top-right-left'>
                                <div className='profile-page-top-display-name'>Oner</div>
                                <div className='profile-page-top-full-name'>Moon Hyeon-joon</div>
                            </div>
                            <div>
                                <button className='upload-header-image-button'>Upload Header Image</button>
                            </div>
                        </div>
                    </div>
                    <div className='profile-page-bottom'>
                        <div className='profile-page-bottom-selections'>
                            <div className='profile-page-bottom-selections-left'>
                                <h2>
                                    All
                                </h2>
                                <h2>Songs</h2>
                                <h2>Playlists</h2>
                            </div>
                            <div className='profile-page-bottom-selections-right'>
                                <div className='a'>
                                    <button>Edit</button>
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
