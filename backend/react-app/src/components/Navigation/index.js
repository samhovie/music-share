import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded }) {
	const sessionUser = useSelector(state => state.session.user);

	return (
		<>
			<div className='navbar-wrapper'>
				<div className='navbar-site-button'>
					<NavLink exact to="/">Music Share</NavLink>
				</div>
				<div className='navbar-home-feed-library'>
					<div className='navbar-home-feed-library-home navbar-all-three'>
						Home
					</div>
					<div className='navbar-home-feed-library-feed navbar-all-three'>
						Feed
					</div>
					<div className='navbar-home-feed-library-library navbar-all-three'>
						Library
					</div>
				</div>
				{isLoaded && (
					<>
						<div className='navbar-upload-button'>
							Upload
						</div>
						<div className='navbar-profile-button'>
							<ProfileButton user={sessionUser} />
						</div>
						<div className='navbar-three-icons'>
							<div className='navbar-bell navbar-three-icons-all-three'>
								B{/* put bell icon here later */}
							</div>
							<div className='navbar-mail navbar-three-icons-all-three'>
								M{/* put mail icon here later */}
							</div>
							<div className='navbar-ellipsis navbar-three-icons-all-three'>
								E{/* put ellipsis icon here later */}
							</div>
						</div>
					</>
				)}
			</div>
		</>
	);
}

export default Navigation;
