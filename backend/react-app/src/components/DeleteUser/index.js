import { useDispatch, useSelector } from "react-redux"
import { deleteUserThunk } from "../../store/users"
import { useModal } from "../../context/Modal"
import { useHistory } from "react-router-dom"
// import './DeletePlaylist.css'

const DeleteUser = ({ userId }) => {
    const history = useHistory()
    const { closeModal } = useModal()
    const dispatch = useDispatch()

    // console.log("SONGIDDDD", songId)
    // const songId = useSelector(state => state)
    const deleteClick = (e) => {
        dispatch(deleteUserThunk(userId))
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


export default DeleteUser
