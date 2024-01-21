import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ConfirmModal = (props) => {

    return (
        <Modal
            show={props.show}
            onHide={props.handleClose}
            backdrop="static"
            centered
            size='md'
            keyboard={false}
        >
            {props.heading ?
                <Modal.Header closeButton>
                    <Modal.Title>{props.heading}</Modal.Title>
                </Modal.Header>
                : null
            }
            {props.description ?
                <Modal.Body dangerouslySetInnerHTML={{ __html: props.description }}>
                </Modal.Body>
                : null
            }
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