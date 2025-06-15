import styled from "styled-components";

const Wrapper = styled.span`
    border-right: 2px solid gray;
    cursor:pointer;
    margin-right: 20px;
    padding-right: 10px;
    .logo-image {
        width: 180px;
    }
    @media screen and (min-width:767px) { 
       
    }

    @media screen and (max-width:767px) {
        .logo-image {
            width: 120px;
        }
    }

`;
export default Wrapper;
