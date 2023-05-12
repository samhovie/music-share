import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import { signUp } from "../../store/session";
import "./SignupForm.css";

function SignupFormModal() {
	const dispatch = useDispatch();
	const [email, setEmail] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [errors, setErrors] = useState([]);
	const { closeModal } = useModal();

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (password === confirmPassword) {
			const data = await dispatch(signUp(username, email, password));
			if (data) {
				setErrors(data);
			} else {
				closeModal();
			}
		} else {
			setErrors([
				"Confirm Password field must be the same as the Password field",
			]);
		}
	};

	return (
		<>
			<div className="signup-modal-wrapper">



				<h1>Sign Up</h1>
				<div className="signup-modal-content">
					<form
					onSubmit={handleSubmit}
					className="signup-modal-form"
					>

						<ul>
							{errors.map((error, idx) => (
								<li key={idx}>{error}</li>
							))}
						</ul>
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
							<button type="submit">Sign Up</button>

						</div>
					</form>
				</div>
			</div>
		</>
	);
}

export default SignupFormModal;
