import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded }) {
	const history = useHistory()
	const sessionUser = useSelector(state => state.session.user);

	const navClickHandler = () => {
		if (sessionUser) {
			history.push('/')
		}
	}

	const alertClickHandler = () => {
        return alert('Feature Coming Soon!')
    }

	return (
		<>
			<div className='navbar-wrapper'>
				<div className='navbar-wrapper-content'>
					<div className='navbar-site-button'
					// style={{height: '40px'}}
					>
						<NavLink exact to="/discover"
							style={{
								textDecoration: 'none',
								color: 'white',
								borderRadius: '5px'
							}}
						>
							Music Share
						</NavLink>
					</div>
					<div className='navbar-home-feed-library'>
						<div className='navbar-home-feed-library-home navbar-all-three'>

							<NavLink exact to='/discover'
								style={{ textDecoration: 'none', color: 'white' }}
							>
								Home
							</NavLink>
						</div>
						<div className='navbar-home-feed-library-feed navbar-all-three'
						>
							{sessionUser ?
								<NavLink exact to='/feed'
									style={{ textDecoration: 'none', color: 'white' }}
								>Feed</NavLink> :
								<NavLink exact to='/login'
									style={{ textDecoration: 'none', color: 'white' }}
								>Feed</NavLink>
							}
						</div>
						<div onClick={()=> alertClickHandler()} className='navbar-home-feed-library-library navbar-all-three'>
							Library
						</div>

						<div className='navbar-search-bar'>
							<form>
								<input
									className='navbar-search-bar-input'
									placeholder='Search feature coming soon!'
								></input>
							</form>
						</div>
					</div>
					{isLoaded && (
						<>
							<div className='navbar-upload-button'>
								<NavLink
									to='/upload'
									style={{ textDecoration: 'none', color: 'white' }}>
									Upload

								</NavLink>
							</div>
							<div className='navbar-profile-button'>
								<ProfileButton user={sessionUser} />
							</div>
							<div className='navbar-three-icons'>
								<div onClick={()=> alertClickHandler()} className='navbar-bell navbar-three-icons-all-three'>
									<i className="fa-sharp fa-solid fa-bell" style={{ color: '#f2f6fd' }}></i>
								</div>
								<div onClick={()=> alertClickHandler()} className='navbar-mail navbar-three-icons-all-three'>
									<i className="fa-solid fa-envelope" style={{ color: '#f2f6fd' }}></i>
								</div>
								<div onClick={()=> alertClickHandler()} className='navbar-ellipsis navbar-three-icons-all-three'>
									<i className="fa-solid fa-ellipsis" style={{ color: '#f2f6fd' }}></i>
								</div>
							</div>
						</>
					)}
				</div>
			</div>
		</>
	);
}

export default Navigation;
