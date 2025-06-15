import styled from "styled-components";

const Wrapper = styled.div`
    display:flex;
    .welcome-line {
        display:flex;
        align-items:center;
        margin:auto;
        height:54vh;
        color: #41574c;
        font-size: 55px;
    }
    @media screen and (min-width:767px) { 
        padding: 88px 0;
        margin: 0px auto;
    }

    @media screen and (max-width:767px) {

    }

`;
export default Wrapper;
