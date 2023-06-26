import "./SplashPage.css";
import OpenModalButton from "../OpenModalButton";
import SignupFormModal from "../SignupFormModal";
import LoginFormModal from "../LoginFormModal";

const SplashPage = () => {
    return (
        <div className="splash-page-wrapper">
            <div className="splash-page-top">
                <h1>MusicShare</h1>
            </div>

<div className="splash-content">

            <div className="splash-page-middle">
                <h2>Join us</h2>
                <h3>
                    Save tracks and create playlists! All for free.
                </h3>
                <OpenModalButton
                    buttonText="Sign up!"
                    // onItemClick={closeMenu}
                    modalComponent={<SignupFormModal />}
                    splashSignupClass="splash-page"
                />
                <div className="splash-page-middle-login-div">
                    <h5>Already have an account? &nbsp;&nbsp;</h5>
                    <OpenModalButton
                        buttonText="Login"
                        // onItemClick={closeMenu}
                        modalComponent={<LoginFormModal />}
                        splashLoginClass="splash-page"
                    />{" "}
                </div>
            </div>
            <div className="splash-page-footer">
                <div className="splash-page-footer-inner">
                    {/* Check us out! */}
                    <div className="splash-page-about-content">
                        <a
                            href="https://github.com/elcruzada"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Efren Cruzada
                        </a>
                        <a
                            href="https://github.com/katiegeyer"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Katie Geyer
                        </a>
                        <a
                            href="https://github.com/samhovie"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Sam Hovie
                        </a>
                        <a
                            href="https://github.com/codenamejetro"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Quentin Nguyen
                        </a>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default SplashPage;
