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
    width: 400px;
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

const Wrapper = styled.div`
    
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    @media screen and (min-width:767px) { 
        margin: auto;
        form {
            .input-div {
                // width: 30%;
                display: flex;
                margin:15px 0;
                .main-label {
                    margin-right:10px;
                    float:left;
                    width: 20%;
                    display: flex;
                    align-items: center;
                    justify-content: flex-end;
                }
            }
            .main-input, select {
                width:80%;
                background: #f9f9f9;
                color: black;
                padding: 5px 10px;
                font-size: 16px;
                border-radius: 5px;
                outline: none;
                border: 1px solid #c7b8b8;
            }
           
        }
    }

    @media screen and (max-width:767px) {

    }

`;

export { ModalOverlay, Modal, ModalHeader, ModalBody, ModalTitle, Wrapper }