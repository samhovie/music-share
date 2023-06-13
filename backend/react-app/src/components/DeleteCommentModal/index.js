import { useModal } from "../../context/Modal"
import { deleteCommentThunk } from "../../store/comments"

const DeleteCommentModal = () => {
    const { closeModal } = useModal()

    const deleteCommentHandler = () => {
        deleteCommentThunk(commentId)
    }

    return (
        <div>
            <h3>Are you sure that you want to delete this?</h3>
            <button>Confirm</button>
            <button>Cancel</button>
        </div>
    )
}

export default DeleteCommentModal
