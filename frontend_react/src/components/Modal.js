const Modal = ({ isOpen, children, onChoosingYes, onChoosingNo }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-body">
            <div className="modal-message">{children}</div>
            <div className="modal-buttons">
                <button className="table-button-update" onClick={onChoosingNo}>Keep</button>
                <button className="table-button-delete" onClick={onChoosingYes}>Delete</button>
            </div>
        </div>
    )

}

export default Modal;