import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import SignupFormModal from '../SignupFormModal';
import OpenModalButton from '../OpenModalButton';
import './Navigation.css';

function Navigation({ isLoaded }) {
	const history = useHistory()
	const sessionUser = useSelector(state => state.session.user);

	const discoverClickHandler = () => {
		if (sessionUser) {
			history.push('/')
		}
	}

	const alertClickHandler = () => {
		return alert('Feature Coming Soon!')
	}

	return (
		<>
			{sessionUser &&
				<div className='navbar-wrapper'>
					<div className='navbar-wrapper-content'>
						<div className='navbar-site-button'
							style={{ borderRadius: '10px' }}
						// style={{height: '40px'}}
						>
							<img
								alt=''
								className='navbar-icon'
								onClick={discoverClickHandler}
								src='https://styles.redditmedia.com/t5_2uc06/styles/communityIcon_0zttllkgeaa81.png?width=256&v=enabled&s=37b76e9adfe0e716c1d6ec1d43250db31bb7cf1a'></img>
							{/* <NavLink exact to="/discover"
							className='navbar-icon'
							style={{
								textDecoration: 'none',
								color: 'white',
								borderRadius: '5px'
							}}
						>

						</NavLink> */}
						</div>
						<div className='navbar-home-feed-library'>
							<div className='navbar-home-feed-library-home navbar-all-three'>

								<NavLink exact to='/discover'
								className='navlink'

								>
									Home
								</NavLink>
							</div>
							<div className='navbar-home-feed-library-feed navbar-all-three'
							>
								{sessionUser ?
									<NavLink exact to='/feed'
									className='navlink'
									>Feed</NavLink> :
									<OpenModalButton
										buttonText="Feed"
										// onItemClick={closeMenu}
										modalComponent={<SignupFormModal />}
										conditionalClass='something'
									/>
								}
							</div>
							<div onClick={() => alertClickHandler()} className='navbar-home-feed-library-library navbar-all-three'>
								<div style={{ display: 'flex', alignItems: 'center', color: 'white' }}>
									Library

								</div>
							</div>

							<div className='navbar-search-bar'>
								<form>
									<input
										className='navbar-search-bar-input'
										placeholder='Search coming soon!'
									>

									</input>
									<button
										style={{ height: '2.53rem', border: 'none', padding: '.6rem', borderRadius: '5px' }}
									>

										<i className="fas fa-search"
										>

										</i>
									</button>
								</form>
							</div>
						</div>
						{isLoaded && (
							<>
								<div className='navbar-upload-button'>
									{sessionUser ?
										<NavLink
											to='/upload'
											className='navlink'>
											Upload
										</NavLink> :
										<OpenModalButton
											buttonText="Upload"
											// onItemClick={closeMenu}
											modalComponent={<SignupFormModal />}
											conditionalClass='something'
										/>
									}
								</div>
								<div className='navbar-profile-button'>
									<ProfileButton user={sessionUser} />
								</div>
								{/* <div className='navbar-three-icons'>
									<div onClick={() => alertClickHandler()} className='navbar-bell navbar-three-icons-all-three'>
										<i className="fa-sharp fa-solid fa-bell" style={{ color: '#f2f6fd' }}></i>
									</div>
									<div onClick={() => alertClickHandler()} className='navbar-mail navbar-three-icons-all-three'>
										<i className="fa-solid fa-envelope" style={{ color: '#f2f6fd' }}></i>
									</div>
									<div onClick={() => alertClickHandler()} className='navbar-ellipsis navbar-three-icons-all-three'>
										<i className="fa-solid fa-ellipsis" style={{ color: '#f2f6fd' }}></i>
									</div>
								</div> */}
							</>
						)}
					</div>
				</div>
			}
		</>
	);
}

export default Navigation;
