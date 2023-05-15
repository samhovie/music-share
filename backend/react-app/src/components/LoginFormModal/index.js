import React, { useState } from "react";
import { login } from "../../store/session";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import * as sessionActions from '../../store/session'
import { NavLink } from "react-router-dom";
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
  const { closeModal } = useModal();


  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
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
          // style={{marginTop: '2rem'}}
          >
            {errors.map((error, idx) => (
              <li key={idx}>{error}</li>
            ))}
          </ul>

          <div className="login-modal-email-div login-modal-sep-div">
            <label
              className="login-modal-labels"
            >
              Email
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
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
                required
              />
            </label>
          </div>

          <div className="login-modal-bottom">
            <div>
              <button
                className="login-modal-submit-button"
                type="submit"
                disabled={!email || !password}
              >Log In</button>

            </div>
            <div className="login-modal-demo">
              <div onClick={() => demoClick()}>Demo User</div>
            </div>
             
          </div>

          <div className="login-form-signup">
          <OpenModalButton
									buttonText="Don't have an account? Sign up!"
									// onItemClick={closeMenu}
									modalComponent={<SignupFormModal />}
									loginModalClass='login'
								/>
          </div>
        </form>
      </div>
    </>
  );
}

export default LoginFormModal;
