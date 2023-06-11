import { useDispatch } from "react-redux"
import { deletePlaylistThunk } from "../../store/playlists"
import { useModal } from "../../context/Modal"
import './DeletePlaylist.css'

const DeletePlaylist = ({ playlistId }) => {
    const { closeModal } = useModal()
    const dispatch = useDispatch()
    const deleteClick = (e) => {
        dispatch(deletePlaylistThunk(playlistId))
        closeModal()
        window.location.reload();
    }

    const keepClick = (e) => {
        closeModal()
    }

    return (
        <div className="confirm-delete-wrapper">
            <div className="confirm-delete-inner-wrapper">
                <div className="confirm-delete-title">Confirm Delete</div>
                <div className="confirm-delete-question">Are you sure you want to remove this item? This action cannot be undone.</div>
                <div className="confirm-delete-buttons">
                    <div className="confirm-delete-delete confirm-buttons" onClick={deleteClick}>{`Delete`}</div>
                    <div className="confirm-delete-cancel confirm-buttons" onClick={keepClick}>{`Cancel`}</div>
                </div>
            </div>
        </div>
    )
}


export default DeletePlaylist
