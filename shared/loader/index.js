import { Modal, ModalBody, ModalHeader, ModalOverlay, ModalTitle } from "./styled";


const Loader = (props) => {
    return (
        <ModalOverlay>
            {/* <Modal> */}
                <ModalBody> <div className="loader"></div></ModalBody>
            {/* </Modal> */}
        </ModalOverlay>
    )


};

export default Loader;