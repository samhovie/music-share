import { useDispatch } from "react-redux"
import { useModal } from "../../context/Modal"
import { deleteCommentThunk, getAllCommentsThunk } from "../../store/comments"
import { useHistory } from "react-router-dom"

const DeleteCommentModal = ({commentId}) => {
    const { closeModal } = useModal()
    const dispatch = useDispatch()
    const history = useHistory()

    const deleteCommentHandler = async (commentId) => {
        await dispatch(deleteCommentThunk(commentId))
        await dispatch(getAllCommentsThunk(commentId))
        history.push(`/songs/${commentId}`)
    }

    return (
        <div>
            <h3>Are you sure that you want to delete this?</h3>
            <button
            onClick={() => deleteCommentHandler(commentId)}
            >Confirm</button>
            <button
            onClick={() => closeModal()}
            >Cancel</button>
        </div>
    )
}

export default DeleteCommentModal
