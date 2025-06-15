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
    .loader {
        background:transparent;
        border: 4px solid #c7c6c6;
        border-radius: 50%;
        border-top: 4px solid #3dc89f;
        width: 50px;
        height: 50px;
        margin: -110px auto 0;
        -webkit-animation: spin 2s linear infinite; /* Safari */
        animation: spin 2s linear infinite;
    }
    @-webkit-keyframes spin {
        0% { -webkit-transform: rotate(0deg); }
        100% { -webkit-transform: rotate(360deg); }
    }
    
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
    `
    const Modal = styled.div`
    background-color: black;
    opacity: 0.7;
    display:flex;
    width: 100%;
    height: 100%;
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
    opacity:1;
    padding-top: 10px;
    width:50%;
    margin:auto;
`;

export { ModalOverlay, Modal, ModalHeader, ModalBody, ModalTitle }