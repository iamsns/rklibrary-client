import styled from "styled-components";

const Wrapper = styled.div`
    padding: 30px 0;
    text-align:center;
    color:#4d4c4c;

    @media (min-width: 769px) and (max-width: 1024px) {
        .main-div {
            width:70%;
        }

    }
    @media screen and (max-width:767px) { 
        .main-div {
            width:90%;
        }
    }
    @media screen and (min-width:1024px) { 
        .main-div {
            width:900px;
        }
    }
    .main-heading {
        font-size:30px;
        text-align:center;
        padding-top:20px;
    }
    .sub-heading {
        font-size:25px;
        font-weight:600;
    }
    .main-div {
        text-align:left;
        box-shadow:0 0 8px #a99595;
        margin:auto;
        border-radius:10px;
        padding-bottom:20px;
    }
    .sub-div {
        margin-top:20px;
        padding:0 25px;
    }
        
`
export default Wrapper