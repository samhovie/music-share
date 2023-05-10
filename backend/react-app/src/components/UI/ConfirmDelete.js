

const ConfirmDelete = () => {

    return (
    <div className="confirm-delete-wrapper">
            <h1 className="confirm-title">Confirm Delete</h1>
            <div className="confirm-question">Are you sure you want to remove this event</div>
            <div className="confirm-delete confirm-buttons" onClick={deleteClick}>{`Yes (delete event)`}</div>
            <div className="confirm-keep confirm-buttons" onClick={keepClick}>{`No (keep event)`}</div>
        </div>
    )
}
