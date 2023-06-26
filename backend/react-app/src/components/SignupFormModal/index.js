import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import { signUp } from "../../store/session";
import "./SignupForm.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import OpenModalButton from "../OpenModalButton";
import LoginFormModal from "../LoginFormModal";

function SignupFormModal() {
	const dispatch = useDispatch();
	const history = useHistory()
	const [email, setEmail] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [errs, setErrs] = useState([]);
	// const [hasSubmitted, setHasSubmitted] = useState(false);
	const { closeModal } = useModal();

	useEffect(() => {
		const errors = []
		if (!username) errors.push("Username is required")
		if (username.length < 4) errors.push("Username is under 4 characters")
		if (username.length > 20) errors.push("Username is over 20 characters")
		if (!email.includes('@')) errors.push("Invalid Email")
		if (!password) errors.push("Password is required")
		if (confirmPassword !== password) errors.push('Passwords must match')
		setErrs(errors)
	}, [username, email, password, confirmPassword])


	const handleSubmit = async (e) => {
		e.preventDefault()

		if (errs.length > 0) {
			// setHasSubmitted(true)
			return
		}
		else {
			const data = await dispatch(signUp(username, email, password))

			if(data) {
				// setHasSubmitted(true)
				setErrs(data.map(err => err.split(': ')[1]))
			}
			else {
				history.push('/discover')
				closeModal()
			}
		}
	}

	return (
		<>
			<div className="signup-modal-wrapper">
				<h1 className="signup-modal-h1" >Sign Up</h1>

				{
				// hasSubmitted &&
				errs.length > 0 && errs.map((err, i) =>
					<div key={i} className="errors">· {err}</div>
				)}


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
								// required
							/>
						</label>
						<label className="signup-modal-labels">
							<div>Username</div>
							<input
								className="signup-modal-inputs"
								type="text"
								value={username}
								onChange={(e) => setUsername(e.target.value)}
								// required
							/>
						</label>
						<label className="signup-modal-labels">
							<div>Password</div>
							<input
								className="signup-modal-inputs"
								type="password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								// required
							/>
						</label>
						<label className="signup-modal-labels">
							<div>Confirm Password</div>
							<input
								className="signup-modal-inputs"
								type="password"
								value={confirmPassword}
								onChange={(e) => setConfirmPassword(e.target.value)}
								// required
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
									style={{cursor: 'pointer'}}
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
