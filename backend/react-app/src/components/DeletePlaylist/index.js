import { useDispatch } from "react-redux"
import { deletePlaylistThunk, getAllPlaylistsThunk } from "../../store/playlists"
import { useModal } from "../../context/Modal"
import './DeletePlaylist.css'
import { useHistory } from "react-router-dom"

const DeletePlaylist = ({ playlistId }) => {
    const { closeModal } = useModal()
    const history = useHistory()
    const dispatch = useDispatch()
    const deleteClick = (e) => {
        dispatch(deletePlaylistThunk(playlistId))
        history.push('/discover')
        dispatch(getAllPlaylistsThunk)
        history.push('/playlists/current')
        closeModal()
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
