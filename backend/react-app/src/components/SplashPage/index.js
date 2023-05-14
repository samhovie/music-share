import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import './SplashPage.css'



const SplashPage = () => {
    const sessionUser = useSelector(state => state.session.user)

    if (sessionUser) return <Redirect to="/discover" />;

    return (
        <>
            <div className='global-outerwrapper-outer'>
                <div className='global-outerwrapper-wrapper'>
                    <div className='splash-page-wrapper'>
                        <div className='splash-page-top'>

                            <h1>
                                Welcome to Music Share!

                            </h1>
                        </div>
                        <div className='splash-page-middle'>
                            <h2>Join us</h2>
                            <h3>Save tracks and create playlists! All for free (for now)</h3>
                            <button className='splash-page-middle-signup'>Sign up!</button>
                            <div className='splash-page-middle-login-div'>
                                <h5>Already have an account? &nbsp;&nbsp;</h5>
                                <button className='splash-page-middle-login'>Log in</button>
                            </div>
                        </div>
                        <div className='splash-page-footer'>
                            <div className='splash-page-footer-inner'>
                                    Find out more about us:

                                <div className='splash-page-about-content'>
                                    <h5>Efren Github</h5>
                                    <h5>Katie Github</h5>
                                    <h5>Sam Github</h5>
                                    <h5>Quentin Github</h5>
                                </div>
                            </div>
                            {/* <div className='splash-page-top-img-div'>
                                <img src='https://styles.redditmedia.com/t5_2uc06/styles/communityIcon_0zttllkgeaa81.png?width=256&v=enabled&s=37b76e9adfe0e716c1d6ec1d43250db31bb7cf1a'></img>
                            </div> */}
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default SplashPage
