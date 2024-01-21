import { Modal, ModalBody, ModalHeader, ModalOverlay, ModalTitle } from "./styled";


const Loader = (props) => {
    return (
        <ModalOverlay>
                <ModalBody> <div className="loader"></div></ModalBody>
        </ModalOverlay>
    )


};

export default Loader;