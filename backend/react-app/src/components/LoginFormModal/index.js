import React, { useState } from "react";
import { login } from "../../store/session";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import * as sessionActions from '../../store/session'
import "./LoginForm.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import OpenModalButton from "../OpenModalButton";
import SignupFormModal from "../SignupFormModal";

function LoginFormModal() {
  const history = useHistory()
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  // const [emptyErrors, setEmptyErrors] = useState({})
  const [hasSubmited, setHasSubmitted] = useState(false)
  const { closeModal } = useModal();



  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = []

    if (email.length === 0) errors.push("Email field cannot be empty")
    if (!email.includes("@") || !email.includes(".")) errors.push("Please submit valid email")
    if (password.length === 0) errors.push("Password field cannot be empty")
    // if (Object.values(emptyErrors).length > 0) {
    //     setEmptyErrors(errors)
    //     return
    // }

    if (errors.length > 0) {
      setErrors(errors)
      setHasSubmitted(true)
      return
    }

    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data.map(err => err.split(' :')[0] + err.split(': This field')[1]));
    } else {
      closeModal()
    }
  };

  const demoClick = () => {
    dispatch(sessionActions.login('demo@aa.io', 'password'))
    history.push('/discover')
    closeModal()
  }

  return (
    <>
      <div className="login-modal-wrapper">

        <h1>Log In</h1>
        <form onSubmit={handleSubmit}
          className="login-modal-form"
        >

          <ul
          >
            {hasSubmited && errors.length> 0 && errors.map((error, idx) => (
              <li key={idx} style={{color: 'red'}}>{error}</li>
            ))}
          </ul>
{/*
          {emptyErrors && !errors && <div></div>}
          {emptyErrors && !errors && <div></div>} */}

          <div className="login-modal-email-div login-modal-sep-div">
            <label
              className="login-modal-labels"
            >
              Email
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                // required
              />
            </label>
          </div>

          <div className="login-modal-password-div login-modal-sep-div">
            <label
              className="login-modal-labels"
            >
              Password
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                // required
              />
            </label>
          </div>

          <div className="login-modal-bottom">
            <div>
              <button
                style={{cursor: 'pointer'}}
                className="login-modal-submit-button"
                type="submit"
                // disabled={!email || !password}
              >Log In</button>

            </div>
            <div className="login-modal-demo">
              <div onClick={() => demoClick()}>Demo User</div>
            </div>

          </div>

        </form>
          <div className="login-form-signup">
            <p>Don't have an account? </p>
          <OpenModalButton
									buttonText="Sign up!"
									// onItemClick={closeMenu}
									modalComponent={<SignupFormModal />}
									loginModalClass='login'
								/>
          </div>
      </div>
    </>
  );
}

export default LoginFormModal;
