import React, { useState, useEffect } from "react";
// import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
// import { signUp } from "../../store/session";
import "./SignupForm.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import OpenModalButton from "../OpenModalButton";
import LoginFormModal from "../LoginFormModal";

function SignupFormModal() {
	// const dispatch = useDispatch();
	const history = useHistory()
	const [email, setEmail] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [errs, setErrs] = useState([]);
	const [displayErr, setDisplayErr] = useState(false)
	const { closeModal } = useModal();

	useEffect(() => {
		const errors = {}
		if (!username) errors.username = "Username is required"
		if (username.length < 4) errors.usernameLengthSmall = "Username is under 4 characters"
		if (username.length > 20) errors.usernameLengthLarge = "Username is over 20 characters"
		if (!email.includes('@')) errors.email = "Invalid Email"
		if (!password) errors.password = "Password is required"
		if (confirmPassword !== password) errors.confirmPassword = 'Passwords must match'
		setErrs(errors)
	}, [username, email, password, confirmPassword])


	const handleSubmit = async (e) => {
		e.preventDefault()
		if (Object.keys(errs).length > 0) {
			setDisplayErr(true)
			// console.log(displayErr)
			// console.log('handlesubmit', errs)
			return
		}
		else {
			// const newUser = await dispatch(signUp(username, email, password))
			history.push('/profile')
			// setUrl(`/groups/${newGroup.id}`)
			closeModal()
		}
	}

	return (
		<>
			<div className="signup-modal-wrapper">
				<h1 className="signup-modal-h1" >Sign Up</h1>
				{displayErr === true && errs.email && (<div className="errors">· {errs.email}</div>)}
				{displayErr === true && errs.username && (<div className="errors">· {errs.username}</div>)}
				{displayErr === true && errs.usernameLengthSmall && (<div className="errors">· {errs.usernameLengthSmall}</div>)}
				{displayErr === true && errs.usernameLengthLarge && (<div className="errors">· {errs.usernameLengthLarge}</div>)}
				{displayErr === true && errs.password && (<div className="errors">· {errs.password}</div>)}
				{displayErr === true && errs.confirmPassword && (<div className="errors">· {errs.confirmPassword}</div>)}
				<div className="signup-modal-content">
					<form
						onSubmit={handleSubmit}
						className="signup-modal-form"
					>

						<label className="signup-modal-labels">
							<div>Email</div>
							<input
								className="signup-modal-inputs"
								type="text"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								required
							/>
						</label>
						<label className="signup-modal-labels">
							<div>Username</div>
							<input
								className="signup-modal-inputs"
								type="text"
								value={username}
								onChange={(e) => setUsername(e.target.value)}
								required
							/>
						</label>
						<label className="signup-modal-labels">
							<div>Password</div>
							<input
								className="signup-modal-inputs"
								type="password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								required
							/>
						</label>
						<label className="signup-modal-labels">
							<div>Confirm Password</div>
							<input
								className="signup-modal-inputs"
								type="password"
								value={confirmPassword}
								onChange={(e) => setConfirmPassword(e.target.value)}
								required
							/>
						</label>

						<div className="signup-modal-submit-div">
								<OpenModalButton
									buttonText="Already have an account? Log in"
									// onItemClick={closeMenu}
									modalComponent={<LoginFormModal />}
									signupModalClass='signup'
								/>
								<button
								className="signup-modal-submit-signup"
									type="submit"
									disabled={!email || !username || !password || !confirmPassword}
								>Sign Up</button>

							</div>
					</form>
				</div>
			</div>
		</>
	);

}

export default SignupFormModal;
