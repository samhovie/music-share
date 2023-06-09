import React from 'react';
import { useModal } from '../../context/Modal';
import './OpenModalButton.css'

function OpenModalButton({
  modalComponent, // component to render inside the modal
  buttonText, // text of the button that opens the modal
  onButtonClick, // optional: callback function that will be called once the button that opens the modal is clicked
  onModalClose, // optional: callback function that will be called once the modal is closed
  conditionalClass,
  splashSignupClass,
  splashLoginClass,
  loginModalClass,
  signupModalClass
}) {
  const { setModalContent, setOnModalClose } = useModal();

  const onClick = () => {
    if (onModalClose) setOnModalClose(onModalClose);
    setModalContent(modalComponent);
    if (onButtonClick) onButtonClick();
  };


  let buttonClass
  if (conditionalClass) buttonClass = 'open-modal-button-something'
  else if (splashSignupClass) buttonClass = 'open-modal-button-signup'
  else if (splashLoginClass) buttonClass = 'open-modal-button-login'
  else if (loginModalClass) buttonClass = 'open-modal-button-from-login'
  else if (signupModalClass) buttonClass = 'open-modal-button-from-signup'

  else buttonClass = 'open-modal-button'




  return (
    <button onClick={onClick}
      className={buttonClass}
    >{buttonText}</button>
  );
}

export default OpenModalButton;
