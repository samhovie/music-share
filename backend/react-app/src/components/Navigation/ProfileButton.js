import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../store/session";
import OpenModalButton from "../OpenModalButton";
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormModal";
import { NavLink } from "react-router-dom";
import './ProfileButton.css'
import { useHistory } from "react-router-dom";

function ProfileButton({ user }) {
  const history = useHistory()
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const ulRef = useRef();

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = (e) => {
      if(ulRef && ulRef.current && !ulRef.current.contains(e.target)) {
        setShowMenu(false);
      }

    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
    history.push('/')
  };

  const ulClassName = "profile-dropdown" + (showMenu ? "" : " hidden");
  const closeMenu = () => setShowMenu(false);

  return (
    <>
      <button onClick={openMenu}>
        <i className="fas fa-user-circle" />
      </button>
      <ul className={ulClassName} ref={ulRef}>
        {user ? (
          <>
            {/* <li>{user.username}</li> */}
            {/* <li>{user.email}</li> */}
            <li>
              <NavLink exact to='/profile'
                style={{ textDecoration: 'none',
                         color: 'black',
                         border: 'black'
                      }}
              >
                Profile
              </NavLink>
            </li>
            <li>
              <NavLink exact to='/likes'
                style={{ textDecoration: 'none',
                         color: 'black',
                         border: 'black'
                        }}
              >
                My Likes
              </NavLink>
            </li>
            {/*
            <li>
              <NavLink exact to='/songs'
                style={{ textDecoration: 'none' }}
              >
                My Songs
              </NavLink>
            </li>
            <li>
              <NavLink exact to='/playlists/current'
                style={{ textDecoration: 'none' }}
              >
                My Playlists
              </NavLink>
            </li> */}
            <li>
              <button
              className='nav-bar-profile-button-log-out'
              type='submit'
              onClick={handleLogout}>Log Out</button>
            </li>
          </>
        ) : (
          <>
            <OpenModalButton
              buttonText="Log In"
              onItemClick={closeMenu}
              modalComponent={<LoginFormModal />}
            />

            <OpenModalButton
              buttonText="Sign Up"
              onItemClick={closeMenu}
              modalComponent={<SignupFormModal />}
            />
          </>
        )}
      </ul>
    </>
  );
}

export default ProfileButton;
