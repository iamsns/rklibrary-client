import React, { useEffect, useState } from "react";
import styled from "styled-components";

const CartModal = () => {
    const [isBrowser, setIsBrowser] = useState(false);

    useEffect(() => {
        setIsBrowser(true);
    }, []);

    const handleCloseClick = (e) => {
        e.preventDefault();
        // onClose();
        // console.log("closed")
    };

    const modalContent = true ? (
        <StyledModalOverlay>
            <StyledModal>
                <StyledModalHeader>
                    <a href="#" onClick={handleCloseClick}>
                        x
                    </a>
                </StyledModalHeader>
                {/* <StyledModalTitle>Cart</StyledModalTitle> */}
                <StyledModalBody><h1 style={{ color: "black" }}>This is cart</h1></StyledModalBody>
            </StyledModal>
        </StyledModalOverlay>
    ) : null;
    return modalContent

};

const StyledModalBody = styled.div`
  padding-top: 10px;
`;

const StyledModalHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 25px;
`;

const StyledModal = styled.div`
    background: gray;
    width: 300px;
    height: 100vh;
    border-radius: 0px;
    padding: 15px;
    position: fixed;
    right: 0;
`;
const StyledModalOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export default CartModal;