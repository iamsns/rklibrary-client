import styled from "styled-components";

const ModalOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
`
const Modal = styled.div`
    background: white;
    width: 300px;
    height: 100vh;
    border-radius: 0px;
    padding: 15px;
    position: fixed;
    right: 0;
    top: 0;
`

const ModalTitle = styled.h1`
    color:black;
`

const ModalHeader = styled.div`
    display: flex;
    justify-content: flex-end;
    font-size: 25px;`

const ModalBody = styled.div`
    color : black;
    padding-top: 10px;
`;

export { ModalOverlay, Modal, ModalHeader, ModalBody, ModalTitle }