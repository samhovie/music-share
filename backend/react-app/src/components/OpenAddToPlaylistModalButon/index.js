import React from 'react';
import { useModal } from '../../context/Modal';
import AddToPlaylistModal from './AddToPlaylistModal';

function OpenAddToPlaylistModalButton({ songId }) {
  const { setModalContent, setOnModalClose } = useModal();

  const onClick = () => {
    setModalContent(<AddToPlaylistModal songId={songId} />);
    setOnModalClose(null);
  };

  return (
    <button onClick={onClick}>Add to Playlist</button>
  );
}

export default OpenAddToPlaylistModalButton;
