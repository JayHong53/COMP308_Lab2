const Modal = ({ isOpen, children, student, onChoosingYes, onChoosingNo }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-body">
            <div className="modal-buttons">
                <div className="modal-message">{children}</div>
                <div className="student-box">
                    <div>
                        StudentNo: {student.studentNo}
                    </div>
                    <div>
                        {student.firstName} {student.lastName}
                    </div>
                    <div>
                        {student.program}
                    </div>
                </div>
                <button className="table-button-update" onClick={onChoosingNo}>Keep</button>
                <button className="table-button-delete" onClick={onChoosingYes}>Delete</button>
            </div>
        </div>
    )

}

export default Modal;