// import { useSelector } from 'react-redux'
// import { Redirect } from 'react-router-dom'
import './SplashPage.css'
import OpenModalButton from '../OpenModalButton'
import SignupFormModal from '../SignupFormModal'
import LoginFormModal from '../LoginFormModal'



const SplashPage = () => {
    // const sessionUser = useSelector(state => state.session.user)



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
                            <OpenModalButton
                                buttonText="Sign up!"
                                // onItemClick={closeMenu}
                                modalComponent={<SignupFormModal />}
                                splashSignupClass='splash-page'
                            />
                            <div className='splash-page-middle-login-div'>
                                <h5>Already have an account? &nbsp;&nbsp;</h5>
                                <OpenModalButton
                                    buttonText="Login"
                                    // onItemClick={closeMenu}
                                    modalComponent={<LoginFormModal />}
                                    splashLoginClass='splash-page'
                                />                            </div>
                        </div>
                        <div className='splash-page-footer'>
                            <div className='splash-page-footer-inner'>
                                Find out more about us:

                                <div className='splash-page-about-content'>
                                    <a href='https://github.com/elcruzada' target="_blank" rel="noreferrer">Efren Github</a>
                                    <a href='https://github.com/katiegeyer' target="_blank" rel="noreferrer">Katie Github</a>
                                    <a href='https://github.com/samhovie' target="_blank" rel="noreferrer">Sam Github</a>
                                    <a href='https://github.com/codenamejetro' target="_blank" rel="noreferrer">Quentin Github</a>
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
