import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ConfirmModal(props) {

    return (
        <Modal
            show={props.show}
            onHide={props.handleClose}
            backdrop="static"
            centered
            size='md'
            keyboard={false}
        >
            <Modal.Header closeButton>
                <Modal.Title>Are you sure?</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                You are requesting to issue a book named <strong>{props.bookName}</strong>.
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.handleClose}>
                    Cancel
                </Button>
                <Button variant="primary" onClick={props.handleConfirm}>Confirm</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ConfirmModal;